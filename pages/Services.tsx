
import React from 'react';
import { ArrowRight, Bot, Cpu, LineChart, Database, Workflow, ShieldCheck, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* Redesigned Hero Header */}
      <section className="relative pt-60 pb-40 px-6 overflow-hidden border-b border-white/5">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110" 
            alt="Data Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[11px] font-black text-[#2A9D8F] uppercase tracking-[0.4em] mb-10 shadow-xl backdrop-blur-md">
              Core Capabilities
            </div>
            <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-10 leading-[0.9] text-white">
              AI & Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] to-[#E9C46A]">
                Infrastructure.
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-400 max-w-3xl leading-relaxed font-bold tracking-tight">
              We build autonomous engines and high-performance pipelines that power global enterprise intelligence. This is not outsourcing—it is high-end capability engineering.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#2A9D8F]/10 rounded-full blur-[150px] -z-10 translate-x-1/2"></div>
      </section>

      {/* Services List */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-64">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-20 h-20 rounded-3xl bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 flex items-center justify-center text-[#2A9D8F] mb-10 shadow-2xl backdrop-blur-md">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-none">{service.title}</h2>
                <p className="text-2xl text-neutral-400 mb-14 leading-relaxed font-bold tracking-tight">
                  {service.description}
                </p>

                <div className="space-y-10 mb-16">
                  <div className="p-10 rounded-[3rem] bg-neutral-900/50 border border-white/5 hover:border-[#F4A261]/30 transition-all shadow-xl">
                    <div className="text-[12px] font-black text-[#F4A261] uppercase tracking-[0.4em] mb-5">The Challenge</div>
                    <p className="text-lg text-neutral-300 font-bold leading-relaxed">{service.problem}</p>
                  </div>
                  <div className="p-10 rounded-[3rem] bg-[#2A9D8F]/5 border border-[#2A9D8F]/20 shadow-xl">
                    <div className="text-[12px] font-black text-[#2A9D8F] uppercase tracking-[0.4em] mb-5">Our Solution</div>
                    <p className="text-lg text-neutral-300 font-bold leading-relaxed">{service.solution}</p>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-14 py-6 bg-white text-black text-xl font-black rounded-full flex items-center gap-4 hover:bg-[#2A9D8F] hover:text-white transition-all shadow-2xl uppercase tracking-widest active:scale-95"
                >
                  Consult an Expert
                  <ArrowRight className="w-7 h-7" />
                </button>
              </div>

              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square bg-neutral-950 rounded-[5rem] border border-white/5 overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
                  <img 
                    src={service.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2A9D8F]/30 via-transparent to-black/80"></div>
                  
                  {/* Floating Tech Specs Overlay */}
                  <div className="absolute inset-0 p-16 flex flex-col justify-end z-10">
                    <div className="p-10 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] space-y-4 transform group-hover:-translate-y-4 transition-transform duration-700 shadow-2xl">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[11px] font-black text-[#2A9D8F] uppercase tracking-[0.5em]">Enterprise Spec</span>
                        <Zap size={20} className="text-[#E9C46A]" />
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2A9D8F] w-3/4 animate-pulse"></div>
                      </div>
                      <p className="text-sm font-black text-neutral-400 uppercase tracking-widest leading-relaxed">
                        Production-grade architectural blueprint deployed at global scale.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 p-10 bg-neutral-900 border border-white/10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl animate-float hidden md:block">
                  <Cpu className="text-[#E9C46A] w-12 h-12" />
                </div>
                <div className="absolute -bottom-12 -left-12 p-10 bg-neutral-900 border border-white/10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl animate-float-delayed hidden md:block">
                  <ShieldCheck className="text-[#2A9D8F] w-12 h-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Capability CTA */}
      <section className="py-40 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-br from-neutral-900 to-black p-20 md:p-32 rounded-[5rem] border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2A9D8F]/10 via-transparent to-transparent"></div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none relative z-10">
              Need a Custom <br /><span className="text-[#2A9D8F]">AI Architecture?</span>
            </h2>
            <p className="text-2xl text-neutral-400 mb-16 max-w-2xl mx-auto font-bold tracking-tight relative z-10">
              Our architects are ready to map out your infrastructure and team scaling strategy.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-16 py-7 bg-[#2A9D8F] text-white text-2xl font-black rounded-full hover:scale-105 transition-all shadow-[0_0_60px_rgba(42,157,143,0.3)] active:scale-95 relative z-10 uppercase tracking-widest"
            >
              Start Architecture Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
