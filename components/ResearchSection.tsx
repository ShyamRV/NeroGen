
import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_AREAS } from '../constants';
import { Binary, ArrowRight, Microscope, Terminal } from 'lucide-react';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-32 relative bg-bg-secondary border-t border-white/5 overflow-hidden">
      {/* Background Lab Visual */}
      <div className="absolute inset-0 z-0 opacity-[0.01] pointer-events-none">
         <img src="https://images.unsplash.com/photo-1532187863486-abf9d3976618?q=80&w=2070" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-accent-emerald font-mono text-[10px] tracking-[0.5em] uppercase mb-8 font-black"
              >
                <Microscope size={16} /> Frontier Lab 0x01
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white uppercase mb-12">
                Frontier <br /> Research.
              </h2>
              <p className="text-text-secondary text-xl leading-relaxed font-medium mb-12 opacity-60">
                Peer-reviewed experimental systems focusing on autonomous alignment, low-compute reasoning, and secure multi-agent systems.
              </p>
              
              <div className="space-y-4">
                 {[
                   { label: 'Active Papers', val: '22' },
                   { label: 'Collaborations', val: '14' },
                   { label: 'Citations', val: '412' }
                 ].map(stat => (
                   <div key={stat.label} className="flex justify-between items-center py-4 border-b border-white/5 group">
                     <span className="text-[10px] font-mono text-white/30 uppercase font-black">{stat.label}</span>
                     <span className="text-2xl font-black text-white group-hover:text-accent-emerald transition-colors">{stat.val}</span>
                   </div>
                 ))}
              </div>

              <button className="mt-12 w-full py-5 glass border-white/5 text-white font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all group">
                Access Lab Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((area: any, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="p-12 rounded-[2.5rem] glass border-white/5 flex flex-col hover:border-accent-emerald/20 transition-all group relative overflow-hidden"
              >
                {/* Internal Card Visual */}
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                  <img src={area.bgImage} className="w-full h-full object-cover grayscale" alt="" />
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-white/5 relative z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-accent-emerald"
                  />
                </div>

                <div className="flex items-center justify-between mb-12 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent-emerald/5 border border-accent-emerald/20 text-accent-emerald flex items-center justify-center group-hover:bg-accent-emerald group-hover:text-bg-primary transition-all duration-500 shadow-xl">
                    <area.icon size={32} />
                  </div>
                  <div className="text-[10px] font-mono tracking-widest uppercase opacity-20 font-black">ST_CODE: BHA_0{idx + 1}</div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-accent-emerald/60 mb-4 font-black">{area.title}</h3>
                  <h4 className="text-3xl font-black text-white mb-6 tracking-tight uppercase leading-[1.1] group-hover:text-accent-emerald transition-colors">{area.problem}</h4>
                  <p className="text-text-secondary text-lg leading-relaxed mb-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    {area.description}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-white/20">
                    <Binary size={14} /> ACTIVE INVESTIGATION
                  </div>
                  <div className="text-white/20">
                    <Terminal size={16} />
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="p-12 rounded-[2.5rem] bg-accent-emerald/5 border border-dashed border-accent-emerald/20 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-accent-emerald/10 transition-all relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.02]">
                   <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-accent-emerald/10 text-accent-emerald flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                    <Microscope size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">New Proposal</h3>
                  <p className="text-sm text-text-tertiary font-mono tracking-widest uppercase mb-8">Open Collaboration Hub</p>
                  <div className="flex items-center gap-3 text-accent-emerald font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                    Submit Interest <ArrowRight size={14} />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
