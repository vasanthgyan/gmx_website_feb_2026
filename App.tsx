
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import GccModel from './pages/GccModel';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Gatekeeper from './components/Gatekeeper';
import { CASE_STUDIES } from './constants';

const CaseStudiesPage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="pt-32 pb-24 animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-24">
        <h1 className="text-6xl font-black mb-8 tracking-tighter">Measured <span className="text-[#0066FF]">Impact.</span></h1>
        <p className="text-2xl text-neutral-400 leading-relaxed font-bold tracking-tight">
          Delivering elite engineering outcomes for the world's most ambitious brands. From 300-member GCCs to high-performance AI startups.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-48">
        {CASE_STUDIES.map((study, i) => (
          <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="text-[12px] font-black text-teal-500 uppercase tracking-[0.4em] mb-6 border-l-4 border-teal-500 pl-6">Case Study 0{i+1}: {study.client}</div>
              <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">{study.title}</h3>
              <div className="space-y-8 mb-12">
                <div className="pb-8 border-b border-white/5">
                  <p className="text-neutral-500 text-[10px] uppercase font-black tracking-[0.3em] mb-3">The Challenge</p>
                  <p className="text-lg text-neutral-300 font-bold leading-relaxed">{study.challenge}</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <p className="text-neutral-500 text-[10px] uppercase font-black tracking-[0.3em] mb-3">Key Outcome</p>
                  <p className="text-2xl text-teal-400 font-black tracking-tight">{study.results[0]}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {study.results.slice(1).map((res, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-neutral-400 font-bold">
                      <div className="w-2 h-2 bg-[#F4A261] rounded-full"></div> {res}
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-teal-500 hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Full Architecture Review
              </button>
            </div>
            <div className={`aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img src={study.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={study.client} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      setActivePage(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = `#/${page}`;
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'services': return <Services onNavigate={navigate} />;
      case 'gcc': return <GccModel onNavigate={navigate} />;
      case 'cases': return <CaseStudiesPage onNavigate={navigate} />;
      case 'insights': return <Insights onNavigate={navigate} />;
      case 'careers': return <Careers onNavigate={navigate} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  if (!isAuthorized) {
    return <Gatekeeper onAuthorize={() => setIsAuthorized(true)} />;
  }

  return (
    <Layout activePage={activePage} onNavigate={navigate}>
      {renderContent()}
    </Layout>
  );
};

export default App;
