
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Server, ShieldCheck, Globe, Activity } from 'lucide-react';
import { BANNERS } from '../constants';

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  const rotate = useCallback((newDir: number) => {
    setIndex((prev) => (prev + newDir + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => rotate(1), 14000);
    return () => clearInterval(timer);
  }, [rotate]);

  const active = BANNERS[index];

  return (
    <section className="relative h-[85vh] min-h-[650px] lg:min-h-[700px] bg-bg-primary flex flex-col overflow-hidden">
      {/* Background System: High Fidelity treatments */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={active.bgImage} 
              alt="" 
              className="w-full h-full object-cover object-center grayscale-[0.25] brightness-[0.7]"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Modern institutional gradients - clearer center, darker edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-70" />
        <div className="absolute inset-0 tech-grid z-20 opacity-[0.2]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-4 mb-4 lg:mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-white/60 tracking-widest uppercase">
                  {active.tag}
                </span>
              </div>
              <div className="h-px w-6 bg-white/10" />
              <span className="text-white/30 font-mono text-[9px] tracking-widest uppercase font-bold">{active.id}</span>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tightest leading-[0.95] mb-6 drop-shadow-2xl max-w-4xl">
                  {active.title} <br />
                  <span className="text-white/20">{active.visualType}.</span>
                </h1>
                
                <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mb-8 lg:mb-10 leading-snug font-medium opacity-90 drop-shadow-sm">
                  {active.subtitle}. {active.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mt-4"
            >
              <a 
                href="#/open-source" 
                className="group relative px-14 lg:px-18 py-6 bg-white text-bg-primary font-bold uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-300 rounded-lg shadow-2xl hover:bg-white/95 hover:-translate-y-1 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Access Stacks 
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a 
                href="#/docs" 
                className="px-14 lg:px-18 py-6 bg-transparent border border-white/20 text-white font-bold uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-300 rounded-lg backdrop-blur-md hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/10"
              >
                Technical Papers
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue/40 group-hover:bg-accent-blue transition-colors duration-500" />
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Server size={14} className="text-accent-blue" />
                  <span className="text-[10px] font-mono text-white/50 uppercase font-black tracking-widest">Global_Status</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-[8px] font-mono uppercase font-black">Sync_Active</div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                {active.metadata.map((meta, i) => {
                  const [label, val] = meta.split(': ');
                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono text-white/20 uppercase font-black tracking-widest">{label}</span>
                      <span className="text-lg lg:text-xl font-mono text-white font-bold leading-none tracking-tighter">{val}</span>
                    </div>
                  );
                })}
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-white/20 uppercase font-black tracking-widest">L_Security</span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-accent-blue" />
                    <span className="text-lg lg:text-xl font-mono text-white font-bold leading-none tracking-tighter">Root_V9</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                 <div className="flex items-center gap-3 text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    <Activity size={12} className="animate-pulse text-accent-emerald" />
                    <span>Real-time Stream Operational</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 bg-bg-primary/40 border-t border-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between py-4">
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar pr-10">
            <div className="flex items-center gap-4 shrink-0">
              <Globe size={14} className="text-accent-blue" />
              <span className="text-[10px] font-mono text-white/40 uppercase font-bold tracking-[0.2em]">Bharat_South_01</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald shadow-[0_0_15px_rgba(5,150,105,0.4)]" />
              <span className="text-[10px] font-mono text-white/40 uppercase font-bold tracking-[0.2em]">Core_Sync: Stable</span>
            </div>
          </div>

          <div className="flex items-center gap-10 shrink-0">
             <div className="flex items-center gap-6 border-r border-white/10 pr-10">
                <button 
                  onClick={() => rotate(-1)} 
                  className="text-white/20 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full outline-none focus:ring-2 focus:ring-white/10"
                  aria-label="Previous Project"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {BANNERS.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-700 outline-none focus:ring-2 focus:ring-accent-blue/30 ${i === index ? 'w-10 bg-accent-blue' : 'w-2 bg-white/10 hover:bg-white/20'}`} 
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => rotate(1)} 
                  className="text-white/20 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full outline-none focus:ring-2 focus:ring-white/10"
                  aria-label="Next Project"
                >
                  <ChevronRight size={20} />
                </button>
             </div>
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-accent-blue font-black tracking-widest uppercase">System_Live</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
