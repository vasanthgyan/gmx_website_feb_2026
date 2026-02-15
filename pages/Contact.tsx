
import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 animate-in zoom-in duration-500">
        <div className="max-w-md w-full text-center space-y-8 p-12 bg-neutral-900 border border-neutral-800 rounded-[3rem] shadow-2xl">
          <div className="w-20 h-20 bg-[#2A9D8F] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#2A9D8F]/40">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-black tracking-tighter">Inquiry Received</h2>
          <p className="text-neutral-400 text-lg leading-relaxed font-bold">
            Our architects have been notified. Expect a strategic response from our team within 12 business hours.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest rounded-full"
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">Launch Your <br /><span className="text-[#2A9D8F]">Capability</span> Center.</h1>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
              Skip the sales pitch. Connect directly with an engineering leader to discuss AI roadmap, team composition, and India GCC operations.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-neutral-900 border border-white/5 rounded-xl flex items-center justify-center text-[#2A9D8F] shrink-0 group-hover:bg-[#2A9D8F] group-hover:text-white transition-all">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Architecture Consultation</h4>
                  <p className="text-neutral-500 font-bold">30-minute strategic mapping session.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-neutral-900 border border-white/5 rounded-xl flex items-center justify-center text-[#E9C46A] shrink-0 group-hover:bg-[#E9C46A] group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Direct Line</h4>
                  <p className="text-neutral-500 font-bold">+91 96000 92979</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-neutral-900 border border-white/5 rounded-xl flex items-center justify-center text-[#F4A261] shrink-0 group-hover:bg-[#F4A261] group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 tracking-tight">Email Support</h4>
                  <p className="text-neutral-500 font-bold">we@gyanmatrix.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 rounded-3xl shadow-xl">
              <h4 className="font-black text-[#2A9D8F] mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                <CheckCircle2 className="w-5 h-5" /> Data Sovereignty
              </h4>
              <p className="text-neutral-400 text-sm font-bold leading-relaxed">
                We ensure your project data is protected by enterprise encryption. Our firm strictly adheres to global standards, GDPR, and SOC2 requirements.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A9D8F]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-3xl font-black mb-10 tracking-tighter">Strategic Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">Full Name</label>
                  <input required type="text" className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">Work Email</label>
                  <input required type="email" className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold" placeholder="email@enterprise.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">Company Name</label>
                  <input required type="text" className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold" placeholder="Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">Team Size Goal</label>
                  <select required className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold appearance-none">
                    <option>5-20 Members</option>
                    <option>20-100 Members</option>
                    <option>100+ Members</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">Primary Objective</label>
                <select required className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold appearance-none">
                  <option>Build New GCC</option>
                  <option>Scale Existing AI Team</option>
                  <option>Custom AI Product Engineering</option>
                  <option>Infrastructure Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.2em]">About Your Project</label>
                <textarea rows={4} className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-4 focus:border-[#2A9D8F] focus:outline-none transition-all font-bold" placeholder="Project details, technical stack, timeline..."></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-[#2A9D8F] text-white font-black text-lg rounded-xl hover:bg-[#2A9D8F]/90 transition-all flex items-center justify-center gap-4 shadow-2xl uppercase tracking-widest"
              >
                Send Inquiry
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-[10px] text-neutral-600 font-black uppercase tracking-widest">
                We strictly respect your privacy and NDA requirements.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
