
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Twitter, Facebook, Globe, Instagram, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Logo = () => (
  <div className="flex items-center group">
    <div className="bg-white p-2 md:p-2.5 rounded-lg shadow-xl group-hover:shadow-[0_0_30px_rgba(42,157,143,0.4)] transition-all duration-500 border border-white/20 overflow-hidden">
      <img 
        src="https://gyanmatrix.com/wp-content/uploads/2023/12/Link-GyanMatrix-Logo-%E2%86%92-gyanmatrix_logo-1-400x78.png.png" 
        alt="GyanMatrix Logo" 
        className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = '<span class="font-bold text-lg tracking-tighter text-black px-2">GYANMATRIX</span>';
          }
        }}
      />
    </div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'AI Services', id: 'services' },
    { label: 'GCC Model', id: 'gcc' },
    { label: 'Insights', id: 'insights' },
    { label: 'Careers', id: 'careers' },
    { label: 'About Us', id: 'about' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-geist">
      <header>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/95 backdrop-blur-3xl border-b border-white/10 py-4' : 'bg-transparent py-8'
        }`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <Logo />
            </div>

            <div className="hidden xl:flex items-center gap-10">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-[12px] font-black uppercase tracking-widest transition-all relative hover:text-white ${
                    activePage === link.id ? 'text-[#2A9D8F]' : 'text-neutral-400'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#2A9D8F] transition-all duration-300 ${activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#0066FF] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl"
              >
                Schedule Strategy Call
              </button>
            </div>

            <button className="xl:hidden" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} className="text-[#2A9D8F]" />}
            </button>
          </div>

          <div className={`fixed inset-0 bg-black/98 z-40 transition-transform duration-500 xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full justify-center items-center gap-10 p-10 text-center">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setIsMobileMenuOpen(false); }}
                  className={`text-3xl font-black uppercase tracking-tighter transition-colors ${activePage === link.id ? 'text-[#2A9D8F]' : 'text-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
                className="w-full py-6 bg-[#0066FF] text-white font-black uppercase tracking-widest rounded-2xl text-xl mt-6 shadow-2xl"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div key={activePage} className="page-transition">
          {children}
        </div>
      </main>

      <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center mb-10">
              <Logo />
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-10 font-medium tracking-tight">
              Architecting the intelligence layer of the global enterprise. Specialized in scaling elite AI Global Capability Centers in India with a 10-year legacy of excellence.
            </p>
            <div className="flex gap-6">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-full text-neutral-400 hover:text-[#2A9D8F] hover:bg-neutral-800 transition-all border border-white/5 shadow-2xl"><Linkedin size={22} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-full text-neutral-400 hover:text-[#E9C46A] hover:bg-neutral-800 transition-all border border-white/5 shadow-2xl"><Twitter size={22} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-4 bg-neutral-900 rounded-full text-neutral-400 hover:text-[#F4A261] hover:bg-neutral-800 transition-all border border-white/5 shadow-2xl"><Facebook size={22} /></a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-neutral-300 mb-10 border-b border-[#2A9D8F]/30 pb-3">HQ Locations</h4>
            <div className="space-y-8 text-neutral-400 text-sm font-bold tracking-tight">
              <div>
                <p className="text-white font-black mb-1 flex items-center gap-2 tracking-tighter">Coimbatore, India</p>
                <p className="text-xs">Digital Transformation Hub</p>
              </div>
              <div>
                <p className="text-white font-black mb-1 flex items-center gap-2 tracking-tighter">Bengaluru, India</p>
                <p className="text-xs">AI Engineering Hub - HSR Layout</p>
              </div>
              <div>
                <p className="text-white font-black mb-1 flex items-center gap-2 tracking-tighter">El Segundo, USA</p>
                <p className="text-xs">Strategic Planning & Sales</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-neutral-300 mb-10 border-b border-[#E9C46A]/30 pb-3">Get in Touch</h4>
            <div className="space-y-8 text-neutral-400 text-sm font-bold tracking-tight">
              <div className="pt-2">
                <p className="text-[#2A9D8F] font-black text-2xl hover:text-[#2A9D8F]/80 transition-colors cursor-pointer">we@gyanmatrix.com</p>
                <p className="text-neutral-500 font-black text-lg tracking-tighter mt-1">(+91) 91393 93333</p>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all"
              >
                Inquire for Scale
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-neutral-600 text-xs font-bold tracking-widest uppercase">© 2026 GyanMatrix Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-12 text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
