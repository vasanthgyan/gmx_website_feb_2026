
import React from 'react';
import { ArrowRight, CheckCircle2, Star, Globe, Award, Trophy, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import { METRICS, TRUSTED_BRANDS, ENGAGEMENT_PROCESS } from '../constants';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-48 pb-48 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Futuristic Data Grid"
          />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2A9D8F]/15 -z-10 blur-[150px] rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-[6.5rem] font-black tracking-tighter mb-10 leading-[0.95] animate-in slide-in-from-bottom-6 duration-700">
              AI-First Engineering <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] via-[#E9C46A] to-[#F4A261]">
                Partner. Proven at Scale.
              </span>
            </h1>
            
            <p className="text-2xl text-neutral-400 mb-14 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 duration-900 font-medium tracking-tight">
              We help companies build and scale AI engineering teams in India—from 3 engineers to 200+. With 10 years of operational excellence, we bring deep AI expertise and proven scaling capability together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-28 animate-in slide-in-from-bottom-10 duration-1000">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-12 py-6 bg-[#2A9D8F] text-white text-xl font-black rounded-full hover:shadow-[0_0_60px_rgba(42,157,143,0.3)] transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-2xl"
              >
                Talk to Our Team
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('cases')}
                className="px-12 py-6 bg-white text-black text-xl font-black rounded-full border border-white/10 hover:bg-neutral-100 transition-all active:scale-95 shadow-2xl"
              >
                See Our Track Record
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-white/10">
              {METRICS.map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-5xl md:text-6xl font-black text-[#2A9D8F] tracking-tighter">{metric.value}</div>
                  <div className="text-[12px] font-black text-neutral-500 uppercase tracking-[0.3em]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Section */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-neutral-900">
              Why Companies Choose <br /> GyanMatrix for AI Engineering
            </h2>
            <p className="text-xl text-neutral-500 font-bold max-w-3xl mx-auto">
              Building AI capabilities requires more than just hiring a few engineers. It requires a partner who understands both cutting-edge AI technology and operational discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="p-12 bg-neutral-50 rounded-[3rem] border-l-[10px] border-[#2A9D8F] shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-3xl font-black mb-6 tracking-tight">1. AI Expertise + Operational Excellence</h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                Most AI specialists can't scale beyond 10-15 people. Most traditional IT firms claim AI capabilities but lack depth. <span className="text-neutral-900 font-black">We combine both:</span> deep AI/ML expertise with proven ability to scale from 3 to 200+ successfully.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                Our teams have delivered AI solutions across multiple industries—from predictive analytics to AI agents to ML-powered platforms. We don't just talk about AI; we've built it, deployed it, and scaled it.
              </p>
            </div>
            <div className="p-12 bg-neutral-50 rounded-[3rem] border-l-[10px] border-[#F4A261] shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-3xl font-black mb-6 tracking-tight">2. Senior AI Talent at India Economics</h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                We maintain a team of AI/ML engineers, data scientists, and MLOps specialists who've worked on production AI systems. Not junior developers learning on your project—experienced professionals who've solved real AI challenges at scale.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <p className="text-xl font-black tracking-tight"><span className="text-[#F4A261]">The Advantage:</span> You get senior AI expertise at 60% less cost than US/Europe equivalents, without compromising on quality or experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process Section */}
      <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Our Engagement Process</h2>
            <p className="text-xl text-neutral-400 font-bold max-w-2xl mx-auto">From discovery to delivery in just 5 weeks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ENGAGEMENT_PROCESS.map((step, idx) => (
              <div key={idx} className="relative p-10 bg-neutral-900 border border-white/5 rounded-[3rem] shadow-2xl group hover:border-[#2A9D8F]/50 transition-all">
                <div className="w-16 h-16 bg-[#2A9D8F] rounded-full flex items-center justify-center text-white font-black text-2xl mb-8 shadow-xl shadow-[#2A9D8F]/20">
                  {idx + 1}
                </div>
                <h4 className="text-[12px] font-black text-[#2A9D8F] uppercase tracking-[0.4em] mb-3">{step.week}</h4>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">{step.title}</h3>
                <p className="text-neutral-500 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Risk Mitigation Component */}
          <div className="mt-20 p-12 bg-gradient-to-br from-[#E9C46A]/10 to-transparent border border-[#E9C46A]/30 rounded-[4rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[#E9C46A]/20"><Shield size={120} /></div>
            <h3 className="text-3xl font-black text-[#E9C46A] mb-8 tracking-tighter uppercase tracking-[0.1em]">What Happens If It Doesn't Work?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h4 className="text-xl font-black mb-4 flex items-center gap-3">
                  <TrendingUp className="text-[#E9C46A]" /> 30-Day Trial Period
                </h4>
                <p className="text-neutral-400 font-bold leading-relaxed">
                  First month = trial (both sides assess fit). Not working out? End with 15-day notice, no hard feelings.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-black mb-4 flex items-center gap-3">
                  <Zap className="text-[#E9C46A]" /> No IP Lock-In
                </h4>
                <p className="text-neutral-400 font-bold leading-relaxed">
                  After Trial: 30-90 day termination notice. Full knowledge transfer. All code belongs to you. We'd rather part ways early than have an unhappy relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 text-center">The Journey: Building on <br /> Proven Excellence</h2>
          
          <div className="space-y-32 relative">
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-neutral-100 -translate-x-1/2"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right space-y-4">
                <div className="text-[12px] font-black text-[#2A9D8F] uppercase tracking-[0.4em]">2014-2015: The Foundation</div>
                <h3 className="text-4xl font-black tracking-tight">Building Proven Excellence</h3>
                <p className="text-lg text-neutral-500 font-bold leading-relaxed">
                  We started GyanMatrix with a clear conviction: Indian engineering talent could compete with anyone in the world if given the right partnership.
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#2A9D8F] shadow-xl"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:block"></div>
              <div className="space-y-4">
                <div className="text-[12px] font-black text-[#F4A261] uppercase tracking-[0.4em]">2024-2026: AI Scaling</div>
                <h3 className="text-4xl font-black tracking-tight">Leading with AI Expertise</h3>
                <p className="text-lg text-neutral-500 font-bold leading-relaxed">
                  As AI transforms software engineering, we recognized an opportunity: take our years of AI/ML experience and make it our primary focus.
                </p>
              </div>
              <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#F4A261] shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <section className="py-32 border-y border-white/5 bg-neutral-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.6em] mb-20">The Preferred Partner for Global Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-20 items-center transition-all duration-1000">
            {TRUSTED_BRANDS.map(brand => (
              <div key={brand} className="text-center font-black text-2xl tracking-tighter text-neutral-500 hover:text-white transition-all cursor-default grayscale hover:grayscale-0 transform hover:scale-110">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 relative px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="bg-gradient-to-br from-[#2A9D8F] via-[#E9C46A]/90 to-[#F4A261] rounded-[5rem] p-20 md:p-40 text-center overflow-hidden relative shadow-[0_0_100px_rgba(42,157,143,0.3)] border border-white/20">
            <h2 className="text-6xl md:text-[6rem] font-black mb-12 text-white tracking-tighter drop-shadow-2xl leading-none">Ready to Build Your AI Engineering Team?</h2>
            <p className="text-2xl md:text-3xl text-white mb-16 max-w-4xl mx-auto font-black tracking-tight drop-shadow-lg">
              Whether you need 3 engineers or a 200-person GCC, let's discuss how we can help you scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-16 py-7 bg-white text-black text-2xl font-black rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase tracking-widest"
              >
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
