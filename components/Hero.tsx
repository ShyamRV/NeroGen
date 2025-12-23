
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
    const timer = setInterval(() => rotate(1), 12000);
    return () => clearInterval(timer);
  }, [rotate]);

  const active = BANNERS[index];

  return (
    <section className="relative h-[60vh] min-h-[600px] bg-bg-primary flex flex-col overflow-hidden border-b border-white/10">
      {/* Background System: High Fidelity & Professional Visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={active.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={active.bgImage} 
            alt="" 
            className="w-full h-full object-cover object-center brightness-[0.6] grayscale-[0.3]"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,5,7,0.4)_0%,rgba(5,5,7,0.8)_100%)] z-10" />
        <div className="absolute inset-0 tech-grid z-20 opacity-[0.4]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-bg-primary/10 backdrop-blur-[1px] z-15 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-[10px] font-mono font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded border border-accent-blue/20 tracking-[0.2em] uppercase">
                {active.id} // SYSTEM_CORE
              </span>
              <div className="h-px w-8 bg-white/10" />
              <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase font-bold">Protocol v.24.1</span>
            </motion.div>
            
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
                {active.title} <br />
                <span className="text-white/30">Research Lab.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-text-secondary text-lg lg:text-xl max-w-xl mb-12 leading-relaxed font-medium drop-shadow-sm"
            >
              {active.description} Architecting high-performance, open-source 
              foundational environments for the sovereign digital stack.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center gap-6"
            >
              <a href="#/open-source" className="px-10 py-4 bg-white text-bg-primary font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:bg-accent-blue hover:text-white transition-all rounded-sm shadow-xl">
                Access Repository <ArrowRight size={14} />
              </a>
              <a href="#/docs" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all rounded-sm backdrop-blur-md">
                Documentation
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="bg-bg-primary/40 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-accent-blue/30 group-hover:bg-accent-blue transition-colors duration-500" />
              
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-white/40 uppercase font-bold tracking-[0.3em]">Core_Metrics</span>
                <Server size={14} className="text-white/20" />
              </div>
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                {[
                  { label: 'Network Uptime', val: '99.99%', sub: 'STABLE' },
                  { label: 'Active Nodes', val: '1,024', sub: 'SYNCED' },
                  { label: 'Avg Latency', val: '4.2ms', sub: 'OPTIMAL' },
                  { label: 'Security Level', val: 'ROOT_O_9', sub: 'SECURE' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono text-white/20 uppercase font-black tracking-widest">{stat.label}</span>
                    <span className="text-lg font-mono text-white font-bold leading-none">{stat.val}</span>
                    <span className="text-[8px] font-mono text-accent-blue/40 uppercase font-bold tracking-tighter">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-40 w-full bg-bg-primary/60 border-t border-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-5 gap-6">
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar w-full md:w-auto">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-2 h-2 rounded-full bg-accent-emerald shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[10px] font-mono text-white/50 font-bold uppercase tracking-widest">Nodes: Active_Sync</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Globe size={14} className="text-white/20" />
              <span className="text-[10px] font-mono text-white/20 uppercase font-bold tracking-[0.2em]">Region: BHARAT-SOUTH-01</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck size={14} className="text-white/20" />
              <span className="text-[10px] font-mono text-white/20 uppercase font-bold tracking-[0.2em]">L-Security: Root</span>
            </div>
          </div>

          <div className="flex items-center gap-8 shrink-0">
             <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                <button onClick={() => rotate(-1)} className="text-white/20 hover:text-white transition-colors p-1 hover:bg-white/5 rounded"><ChevronLeft size={18} /></button>
                <div className="flex gap-2">
                  {BANNERS.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-accent-blue' : 'w-2 bg-white/10'}`} />
                  ))}
                </div>
                <button onClick={() => rotate(1)} className="text-white/20 hover:text-white transition-colors p-1 hover:bg-white/5 rounded"><ChevronRight size={18} /></button>
             </div>
             <div className="flex items-center gap-3">
                <Activity size={16} className="text-accent-blue animate-pulse" />
                <span className="text-[10px] font-mono text-accent-blue font-black tracking-widest uppercase">Live_Operational</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
