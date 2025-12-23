
import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutGrid, Microscope, ArrowRight } from 'lucide-react';

const HUB_ITEMS = [
  {
    title: 'Open Source',
    description: 'Access cutting-edge datasets and foundational models built specifically for the global AI research community.',
    icon: Database,
    link: '#/open-source',
    accent: 'from-accent-cyan/20 to-transparent'
  },
  {
    title: 'Services',
    description: 'Custom-built enterprise AI infrastructure for Strategic Defence, Robotics, and Bio-Medical systems.',
    icon: LayoutGrid,
    link: '#/services',
    accent: 'from-accent-violet/20 to-transparent'
  },
  {
    title: 'Frontier Research',
    description: 'Investigating the mathematical limits of neural architectures and cross-modal reasoning capabilities.',
    icon: Microscope,
    link: '#/research',
    accent: 'from-accent-emerald/20 to-transparent'
  }
];

const HubSection: React.FC = () => {
  return (
    <section className="py-32 relative bg-bg-primary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HUB_ITEMS.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-[2.5rem] p-10 flex flex-col justify-between h-[480px] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  <item.icon size={32} className="text-accent-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tighter text-white">{item.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white/40 group-hover:text-accent-cyan transition-colors">
                Explore Hub <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSection;
