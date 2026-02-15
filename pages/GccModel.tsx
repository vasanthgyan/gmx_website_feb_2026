
import React from 'react';
import { CheckCircle2, Globe, Rocket, ShieldCheck, Users, Zap, ArrowRight, Code2, LineChart, TrendingUp, XCircle } from 'lucide-react';
import { GCC_PHASES, CASE_STUDIES } from '../constants';

const GccModel: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const newscorp = CASE_STUDIES.find(c => c.id === 'newscorp');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 border-b border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-8">
            Strategic Infrastructure
          </div>
          <h1 className="text-6xl md:text-[6rem] font-black mb-8 tracking-tighter leading-none">
            Building AI Engineering <br /> <span className="text-teal-400">Centers at Scale.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Dedicated Global Capability Centers (GCC) with 100% IP sovereignty, 70% cost optimization, and proven Fortune 500 execution.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-12 py-6 bg-[#0066FF] text-white text-lg font-black rounded-full hover:shadow-xl transition-all active:scale-95 uppercase tracking-widest shadow-2xl"
            >
              Schedule GCC Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Outcomes & Results - QA Verified Layout: Robust responsive scaling */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-20 uppercase tracking-[0.1em]">Outcomes & Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Cost Savings vs US', value: '60-70%' },
              { label: 'Time to Operational', value: '6 Months' },
              { label: 'Success Rate', value: '100%' },
              { label: 'Reference Available', value: 'NewsCorp' }
            ].map((stat, i) => (
              <div key={i} className="p-6 md:p-10 bg-neutral-900 border border-teal-500/20 rounded-[3rem] text-center shadow-2xl hover:border-teal-500/50 transition-all min-h-[240px] flex flex-col justify-center items-center overflow-hidden">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-teal-500 mb-4 tracking-tighter leading-none w-full break-normal whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed max-w-[160px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOST Model Phases */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tight mb-6">Build–Operate–Transfer</h2>
            <p className="text-xl text-neutral-500 font-bold max-w-2xl mx-auto">A proven phased roadmap to operational autonomy.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {GCC_PHASES.map((phase, i) => (
              <div key={i} className="p-10 bg-neutral-50 border border-neutral-200 rounded-[3rem] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-teal-500/10 transition-all"></div>
                <div className="text-[12px] font-black text-teal-600 uppercase tracking-[0.4em] mb-4">Phase 0{i+1}</div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{phase.title}</h3>
                <div className="text-lg font-black text-neutral-400 mb-8 uppercase tracking-widest">{phase.duration}</div>
                <p className="text-neutral-500 font-bold leading-relaxed mb-8">{phase.description}</p>
                <div className="space-y-4">
                  {phase.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-neutral-700">
                      <CheckCircle2 size={16} className="text-teal-600" /> {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Is GCC Right for You?</h2>
            <p className="text-xl text-neutral-400 font-bold max-w-2xl mx-auto">We filter for strategic alignment to ensure 100% project success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-neutral-900 border border-teal-500/20 rounded-[4rem] shadow-2xl">
              <h3 className="text-3xl font-black text-teal-500 mb-10 flex items-center gap-4">
                <CheckCircle2 size={32} /> You're a Good Fit If:
              </h3>
              <ul className="space-y-6">
                {[
                  "50+ engineers in US/Europe currently",
                  "$50M+ annual revenue",
                  "Board/CFO pressure to reduce costs",
                  "Strategic about India expansion",
                  "6-12 month decision timeline acceptable"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-neutral-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-neutral-900 border border-red-500/20 rounded-[4rem] shadow-2xl">
              <h3 className="text-3xl font-black text-red-500 mb-10 flex items-center gap-4">
                <XCircle size={32} /> Not Ready Yet If:
              </h3>
              <ul className="space-y-6">
                {[
                  "<20 engineers total",
                  "Short-term cost-cutting only",
                  "Need immediate results (GCC = 6-month setup)",
                  "Cannot commit to 2-3 year engagement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-neutral-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-50"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row justify-center gap-8">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-12 py-6 bg-white text-black text-xl font-black rounded-full shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              Download GCC Setup Guide
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-12 py-6 bg-[#0066FF] text-white text-xl font-black rounded-full shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              Schedule GCC Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GccModel;
