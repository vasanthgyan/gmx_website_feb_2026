
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, ArrowRight, Clock, Tag, Search, Filter, Share2, Calendar, User, MessageSquare } from 'lucide-react';
import { BlogPost } from '../types';

const BlogPostDetail: React.FC<{ post: BlogPost; onBack: () => void; onContact: () => void; onPostSelect: (post: BlogPost) => void }> = ({ post, onBack, onContact, onPostSelect }) => {
  // Related posts logic
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  return (
    <div className="animate-in fade-in zoom-in duration-500 max-w-5xl mx-auto py-20 px-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors mb-12 font-black uppercase tracking-widest text-xs"
      >
        <ArrowLeft size={16} /> Back to Intelligence Hub
      </button>

      <div className="space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[10px] font-black text-[#2A9D8F] uppercase tracking-[0.3em]">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">{post.title}</h1>
          <div className="flex flex-wrap gap-8 py-6 border-y border-white/5 text-[11px] font-black text-neutral-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-[#2A9D8F]" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-[#2A9D8F]" /> {post.readTime}</span>
            <span className="flex items-center gap-2"><User size={14} className="text-[#2A9D8F]" /> Engineering Research</span>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
          <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            <p className="text-2xl text-neutral-300 font-bold leading-relaxed tracking-tight">
              {post.excerpt}
            </p>
            <div className="text-lg text-neutral-400 leading-relaxed font-medium space-y-8">
              <p>In the rapidly evolving landscape of 2026, Global Capability Centers (GCCs) have transitioned from simple delivery units to high-performance innovation hubs. This analysis delves into the strategic frameworks required for global enterprises to build an AI-first engineering DNA in India.</p>
              
              <h2 className="text-3xl font-black text-white pt-4 tracking-tight">The Imperative of IP Sovereignty</h2>
              <p>For market leaders in the US, UK, and MENA regions, the core differentiator is no longer just cost reduction—it is the creation and protection of proprietary AI models. Owning a GCC means owning the infrastructure that trains your custom LLMs and manages your agentic workflows.</p>
              
              <div className="p-10 bg-neutral-900 border border-white/10 rounded-[2.5rem] italic text-white font-bold tracking-tight text-xl leading-relaxed">
                "Traditional outsourcing is a legacy model. It cannot support the level of deep architectural integration required for modern AgentOps and Decision Intelligence. The GCC is the only model that aligns engineering with strategic roadmap."
              </div>

              <h2 className="text-3xl font-black text-white pt-4 tracking-tight">Scaling Elite Talent</h2>
              <p>Our proprietary hiring methodology ensures that every pod is seeded with engineers who understand the context of your specific market—be it the regulatory requirements of the US AI Act or the ambitious Vision 2030 goals of the Middle East.</p>
            </div>

            {/* Final CTA - Professional & High Trust */}
            <div className="mt-24 p-12 bg-gradient-to-br from-neutral-900 to-[#0a0a0a] border border-[#2A9D8F]/30 rounded-[4rem] shadow-2xl text-center space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#2A9D8F]/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
              <MessageSquare className="w-20 h-20 text-[#2A9D8F] mx-auto mb-4" />
              <div className="space-y-4">
                <h3 className="text-4xl font-black tracking-tighter">Accelerate Your Engineering Roadmap.</h3>
                <p className="text-neutral-400 font-bold max-w-xl mx-auto text-lg leading-relaxed">Discuss your regional requirements and AI engineering goals with a principal architect today.</p>
              </div>
              <button 
                onClick={onContact}
                className="px-16 py-7 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-[#2A9D8F] hover:text-white transition-all transform active:scale-95 shadow-2xl relative z-10 text-xl"
              >
                Schedule Strategy Call
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-neutral-900 border border-white/5 rounded-[3rem] space-y-8">
              <h4 className="text-[11px] font-black text-neutral-500 uppercase tracking-[0.4em]">Related Insights</h4>
              <div className="space-y-8">
                {relatedPosts.length > 0 ? relatedPosts.map(relPost => (
                  <div key={relPost.id} className="group cursor-pointer space-y-2" onClick={() => onPostSelect(relPost)}>
                    <p className="text-[10px] font-black text-[#2A9D8F] uppercase tracking-[0.2em]">{relPost.category}</p>
                    <h5 className="text-lg font-bold text-neutral-300 group-hover:text-white transition-colors leading-snug tracking-tight">{relPost.title}</h5>
                  </div>
                )) : (
                  <p className="text-xs text-neutral-600 italic">More insights coming soon to this category.</p>
                )}
              </div>
            </div>
            <div className="p-10 bg-[#2A9D8F]/5 border border-[#2A9D8F]/20 rounded-[3rem] space-y-8 shadow-inner">
              <h4 className="text-[11px] font-black text-[#2A9D8F] uppercase tracking-[0.4em]">Executive Playbook</h4>
              <p className="text-sm font-bold text-neutral-400 leading-relaxed">Download our comprehensive 2026 AI GCC Strategy Report for Global Leaders.</p>
              <button onClick={onContact} className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[#2A9D8F] hover:text-white transition-all shadow-xl">Download Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Insights: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'GCC Strategy', 'AI Engineering', 'Executive Insights', 'MENA Strategy', 'UK Insights', 'US Market'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return <BlogPostDetail 
              post={selectedPost} 
              onBack={() => setSelectedPost(null)} 
              onContact={() => onNavigate('contact')} 
              onPostSelect={(post) => setSelectedPost(post)}
            />;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pt-32">
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="max-w-4xl mb-24 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[11px] font-black text-[#2A9D8F] uppercase tracking-[0.4em] mb-4 shadow-xl backdrop-blur-md">
              Intelligence Hub
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter mb-8 leading-[0.9]">Insights for the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] via-[#E9C46A] to-[#F4A261]">Global AI Frontier.</span></h1>
            <p className="text-2xl text-neutral-400 leading-relaxed font-bold tracking-tight">
              Strategic analysis for US, UK, and MENA leaders on the evolution of dedicated Engineering Capability Centers.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 border-b border-white/10 pb-16">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                    activeCategory === cat 
                      ? 'bg-[#2A9D8F] text-white shadow-[#2A9D8F]/30' 
                      : 'bg-neutral-900 text-neutral-500 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-600" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Analysis..." 
                className="w-full bg-neutral-900 border border-white/10 rounded-full pl-16 pr-8 py-5 focus:outline-none focus:border-[#2A9D8F] font-bold text-sm tracking-tight text-white shadow-inner"
              />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.map((post, i) => (
              <div 
                key={i} 
                className="group cursor-pointer animate-in fade-in duration-1000 slide-in-from-bottom-10"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 border border-white/10 relative shadow-2xl">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10"></div>
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                  <div className="absolute top-6 right-6 z-20">
                    <button className="p-4 bg-black/50 backdrop-blur-xl rounded-full text-white/70 hover:text-white transition-colors border border-white/10" aria-label="Share">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6 px-2">
                  <div className="flex items-center gap-6 text-[11px] font-black text-neutral-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Clock size={14} className="text-[#2A9D8F]" /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-black group-hover:text-[#2A9D8F] transition-colors leading-snug tracking-tighter">{post.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-base font-bold line-clamp-2 tracking-tight">{post.excerpt}</p>
                  <div className="pt-4 flex items-center gap-4 text-white font-black text-[13px] uppercase tracking-widest group-hover:text-[#2A9D8F] transition-all">
                    Read Intelligence <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-40 bg-neutral-900/30 rounded-[4rem] border border-dashed border-white/10">
              <p className="text-neutral-500 font-black text-2xl uppercase tracking-[0.2em] mb-4">No insights found.</p>
              <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="text-[#2A9D8F] font-black uppercase text-sm tracking-widest hover:underline transition-all">Reset Intelligence Hub</button>
            </div>
          )}
        </div>
      </section>

      {/* Institutional Newsletter CTA */}
      <section className="py-40 bg-[#050505] border-y border-white/5 px-6 mt-32 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#2A9D8F]/10 rounded-full blur-[150px]"></div>
        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <h2 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-none">The GCC Brief.</h2>
          <p className="text-neutral-400 text-2xl font-bold tracking-tight max-w-3xl mx-auto leading-relaxed">High-intent intelligence for executives scaling India-based engineering units in the AI era.</p>
          <div className="flex flex-col sm:flex-row gap-8 max-w-xl mx-auto">
            <input type="email" className="flex-grow bg-neutral-900 border border-white/10 rounded-full px-10 py-6 focus:outline-none focus:border-[#2A9D8F] font-black text-white text-lg shadow-inner" placeholder="Work Email" />
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-[#2A9D8F] hover:text-white transition-all shadow-2xl active:scale-95 text-lg">Subscribe</button>
          </div>
          <p className="text-[11px] text-neutral-600 uppercase font-black tracking-[0.5em] mt-10">Propelling Global Intelligence. Engineering Excellence.</p>
        </div>
      </section>
    </div>
  );
};

export default Insights;
