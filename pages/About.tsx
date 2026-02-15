
import React from 'react';
import { Award, Target, Heart, Shield, CheckCircle2, Zap, Trophy, Users, Globe } from 'lucide-react';
import { LEADERSHIP } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pt-32">
      {/* Narrative Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[12px] font-black text-[#2A9D8F] uppercase tracking-[0.4em] mb-10 shadow-xl">
              Our Engineering DNA
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">Built for <br /><span className="text-[#2A9D8F]">Excellence.</span></h1>
            <p className="text-2xl text-neutral-400 leading-relaxed mb-10 font-bold tracking-tight">
              GyanMatrix was founded on a simple premise: Indian engineering talent is world-class, but it requires enterprise-level discipline to deliver global outcomes.
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed mb-14 font-medium">
              Since 2014, we have been the quiet force behind some of the world's most successful AI products. We don't just hire; we architect, mentor, and lead teams to deliver high-impact results for global brands like Financial Times and NewsCorp.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="p-10 bg-neutral-900 rounded-[3rem] border border-white/10 group hover:border-[#E9C46A]/50 transition-all shadow-2xl">
                <Trophy className="text-[#E9C46A] w-14 h-14 mb-8 transition-transform group-hover:scale-125" />
                <h4 className="font-black text-white text-2xl mb-3 tracking-tighter">22+ Years</h4>
                <p className="text-base text-neutral-500 font-bold leading-tight">Collective leadership legacy in global delivery centers.</p>
              </div>
              <div className="p-10 bg-neutral-900 rounded-[3rem] border border-white/10 group hover:border-[#2A9D8F]/50 transition-all shadow-2xl">
                <Target className="text-[#2A9D8F] w-14 h-14 mb-8 transition-transform group-hover:scale-125" />
                <h4 className="font-black text-white text-2xl mb-3 tracking-tighter">Elite Talent</h4>
                <p className="text-base text-neutral-500 font-bold leading-tight">Proprietary hiring engine filtering for the top 1%.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2A9D8F]/20 to-[#F4A261]/20 rounded-[4rem] blur-[100px] opacity-40"></div>
            <div className="relative z-10 bg-neutral-900 p-3 rounded-[4.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                 className="rounded-[4rem] w-full h-[700px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                 alt="Our Team Collaboration" 
               />
               <div className="absolute bottom-12 left-12 p-10 bg-black/80 backdrop-blur-3xl border border-[#2A9D8F]/40 rounded-[3rem] max-w-sm shadow-2xl">
                 <p className="text-white font-black text-2xl mb-4 border-b-4 border-[#2A9D8F] pb-4 inline-block tracking-tighter">Hiring Strategy</p>
                 <p className="text-neutral-300 text-lg font-bold leading-snug tracking-tight">Active hackathons and elite networking form the heart of our talent acquisition strategy.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">Enterprise <br />Leadership Board</h2>
            <p className="text-neutral-500 text-2xl leading-relaxed font-bold tracking-tight">
              Meet the specialists driving the vision. Our leaders bring decades of enterprise experience to ensure every engagement exceeds global standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {LEADERSHIP.map((member, i) => (
              <div key={i} className={`group text-center ${i >= 3 ? 'lg:col-span-1 lg:mx-auto lg:max-w-md' : ''}`}>
                <div className="aspect-square rounded-[3.5rem] overflow-hidden mb-10 border-4 border-white/10 shadow-2xl transition-all duration-1000 group-hover:shadow-[#2A9D8F]/20 group-hover:scale-105 bg-neutral-900 group-hover:border-[#2A9D8F]/50">
                  <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={member.name} />
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tighter">{member.name}</h4>
                <p className="text-[#2A9D8F] font-black text-[12px] uppercase tracking-[0.4em] mb-6">{member.role}</p>
                <p className="text-neutral-600 text-sm font-black italic tracking-wider leading-relaxed px-8 border-t border-white/5 pt-6">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
