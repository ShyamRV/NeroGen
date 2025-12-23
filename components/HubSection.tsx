
import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutGrid, Microscope, ArrowRight, CornerDownRight } from 'lucide-react';

const HUB_ITEMS = [
  {
    title: 'Open Source',
    subtitle: 'Foundation Stacks',
    description: 'Access research-grade synthetic corpora and foundational language-vision models built for civilization-scale logic.',
    icon: Database,
    link: '#/open-source',
    accent: 'from-accent-cyan/10 to-transparent'
  },
  {
    title: 'Services',
    subtitle: 'Enterprise Solutions',
    description: 'Custom-architected AI infrastructure for Strategic Defence, Advanced Robotics, and Sovereign Medical systems.',
    icon: LayoutGrid,
    link: '#/services',
    accent: 'from-accent-violet/10 to-transparent'
  },
  {
    title: 'Frontier Lab',
    subtitle: 'Theoretical Research',
    description: 'Investigating the mathematical boundaries of neural reasoning, multi-modal grounding, and autonomous alignment.',
    icon: Microscope,
    link: '#/research',
    accent: 'from-accent-emerald/10 to-transparent'
  }
];

const HubSection: React.FC = () => {
  return (
    <section className="py-48 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-blue font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block font-black"
            >
              Operational Domains
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tightest text-white uppercase leading-[0.9]"
            >
              The Core <br /> <span className="text-white/20">Ecosystem.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-sm leading-relaxed opacity-60 font-medium"
          >
            A unified, vertically integrated framework from raw data to frontier reasoning systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {HUB_ITEMS.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-[3rem] p-12 flex flex-col h-[520px] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background Accent - Soft and high-end */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-all duration-500 shadow-2xl">
                  <item.icon size={32} />
                </div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-30 font-black block mb-4">{item.subtitle}</span>
                <h3 className="text-4xl lg:text-5xl font-black mb-8 tracking-tightest text-white leading-none uppercase">{item.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-accent-blue transition-all">
                  Access Hub <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
                </div>
                <CornerDownRight size={20} className="text-white/5 group-hover:text-white/10" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSection;
