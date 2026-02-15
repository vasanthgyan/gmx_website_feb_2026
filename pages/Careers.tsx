
import React from 'react';
import { ArrowRight, BrainCircuit, Rocket, Code2, Users, Terminal, Heart, Sparkles } from 'lucide-react';
import { JOB_OPENINGS, INTERNSHIPS } from '../constants';

const Careers: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 pt-32">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#F4A261]/10 border border-[#F4A261]/20 text-[12px] font-black text-[#F4A261] uppercase tracking-[0.4em] mb-10 shadow-xl">
            Talent Network
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">The Engineering <br /><span className="text-[#F4A261]">Excellence Hub.</span></h1>
          <p className="text-2xl md:text-3xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-16 font-bold tracking-tight">
            We are not a vendor. We are an AI engineering partner building the future of global enterprise. Join our team of outliers and elite talent.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-6 bg-white text-black text-lg font-black uppercase tracking-widest rounded-full hover:shadow-2xl transition-all shadow-xl active:scale-95">Open Roles</button>
            <button className="px-12 py-6 bg-neutral-900 border border-white/10 text-lg font-black uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all active:scale-95">Internship Program</button>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-32 px-6 bg-neutral-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { icon: <BrainCircuit />, title: "AI Innovation Lab", desc: "Work on cutting-edge agentic workflows and high-performance LLM pipelines." },
            { icon: <Rocket />, title: "Exponential Growth", desc: "A clearly defined roadmap from Junior Engineer to Principal Architect." },
            { icon: <Heart />, title: "Modern Culture", desc: "Comprehensive benefits and a culture focused on radical transparency." },
            { icon: <Sparkles />, title: "Global Mission", desc: "Your code serves millions for global top-tier brands every single day." }
          ].map((item, i) => (
            <div key={i} className="space-y-6 group">
              <div className="w-14 h-14 bg-[#F4A261]/10 rounded-2xl flex items-center justify-center text-[#F4A261] group-hover:bg-[#F4A261] group-hover:text-white transition-all shadow-lg">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
              <p className="text-neutral-500 text-base font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-[#F4A261] mb-10 border-l-4 border-[#F4A261] pl-6">Join Us</h2>
              <h3 className="text-6xl font-black tracking-tight leading-none">Engineering Outliers.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {JOB_OPENINGS.map((job) => (
              <div key={job.id} className="group p-10 bg-neutral-900 border border-white/5 rounded-[3.5rem] hover:border-[#F4A261]/50 transition-all flex flex-col md:flex-row justify-between items-center gap-10 cursor-pointer shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <h4 className="text-3xl font-black group-hover:text-[#F4A261] transition-colors tracking-tighter">{job.title}</h4>
                    <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black text-neutral-500 uppercase tracking-widest">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-6 text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Terminal size={14} className="text-[#F4A261]" /> {job.department}</span>
                    <span className="flex items-center gap-2"><Users size={14} className="text-[#F4A261]" /> India Hub</span>
                  </div>
                </div>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-full group-hover:bg-[#F4A261] group-hover:text-white group-hover:border-transparent transition-all flex items-center gap-3 shadow-xl">
                  Apply Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-32 px-6 bg-[#F4A261] rounded-[5rem] mx-6 text-white overflow-hidden relative shadow-[0_0_80px_rgba(244,162,97,0.3)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-[100px] animate-pulse"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">Engineering <br />Academy.</h2>
            <p className="text-2xl text-white font-black leading-relaxed mb-14 tracking-tight drop-shadow-sm">
              Our 6-month immersive internship is designed to turn top-tier graduates into elite AI Engineers. You don't just study—you ship production systems.
            </p>
            <div className="space-y-8">
              {INTERNSHIPS.map((prog) => (
                <div key={prog.id} className="p-10 bg-black/30 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-2xl group hover:bg-black/40 transition-all">
                  <h4 className="text-3xl font-black mb-4 tracking-tighter">{prog.title}</h4>
                  <div className="flex gap-6 mb-6">
                    <span className="text-[11px] font-black text-white/80 uppercase tracking-widest border-r border-white/30 pr-6">Focus: {prog.focus}</span>
                    <span className="text-[11px] font-black text-white/80 uppercase tracking-widest">6 Months</span>
                  </div>
                  <p className="text-white/80 text-base font-bold italic tracking-tight">{prog.perks}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-[4rem] blur-[60px]"></div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
              className="rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] grayscale brightness-110 relative z-10" 
              alt="Academy Collaboration" 
            />
            <div className="absolute -bottom-12 -left-12 p-10 bg-white text-black rounded-[3rem] shadow-2xl max-w-xs animate-bounce relative z-20 border-4 border-[#F4A261]">
              <p className="font-black text-2xl tracking-tighter">Cohort: July 2026</p>
              <p className="text-base text-neutral-500 font-bold mt-2">Only 15 exclusive seats available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-14 tracking-tighter leading-none">The Outlier Network.</h2>
        <p className="text-2xl text-neutral-400 max-w-3xl mx-auto mb-16 font-bold tracking-tight px-6">
          We are always looking for the outlier. Send your technical profile directly to our leadership today.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-16 py-7 bg-white text-black text-2xl font-black rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase tracking-widest"
        >
          General Application
        </button>
      </section>
    </div>
  );
};

export default Careers;
