
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Cinematic Lab Visual */}
      <div className="absolute inset-0 z-0 opacity-[0.02] grayscale pointer-events-none">
         <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent-violet font-mono text-[11px] tracking-[0.4em] uppercase mb-4 block font-bold"
          >
            Specialized Infrastructure
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.95] text-white">
            AI Solutions for <br /> Complex Challenges.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed font-medium">
            From protein folding to tactical robotics, we provide the architectural foundation for sovereign intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative glass rounded-[2.5rem] p-10 flex flex-col h-full hover:bg-white/[0.02] transition-all duration-500 border-white/5 hover:border-accent-cyan/20 overflow-hidden"
            >
              {/* Card Internal Visual */}
              <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                <img src={service.bgImage} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
              </div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-white/5 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-bg-primary transition-all duration-500 relative z-10 shadow-xl`}>
                <service.icon size={32} />
              </div>
              
              <div className="mb-8 relative z-10">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 font-bold block mb-3">{service.tagline}</span>
                <h3 className="text-3xl font-black tracking-tight mb-6 text-white group-hover:text-accent-cyan transition-colors">{service.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-10 flex items-center justify-between group/link relative z-10">
                <button className="text-sm font-black uppercase tracking-[0.2em] text-white/40 group-hover/link:text-white transition-colors">
                  Technical Spec
                </button>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-accent-cyan group-hover/link:bg-accent-cyan group-hover/link:text-bg-primary transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
