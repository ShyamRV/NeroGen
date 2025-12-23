
import React from 'react';
import { motion } from 'framer-motion';
import Manifesto from '../components/Manifesto';

const ManifestoPage: React.FC = () => {
  return (
    <div className="bg-bg-primary overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <header className="py-40 max-w-6xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-12"
          >
            Institutional Charter // Est. 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl lg:text-[13rem] font-black text-white tracking-tightest leading-[0.8] uppercase mb-32 drop-shadow-3xl"
          >
            Sovereign <br /> Autonomy.
          </motion.h1>
        </header>
      </div>

      <div className="relative border-y border-white/5">
        <Manifesto />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pb-60 pt-40">
        <div className="max-w-5xl mx-auto space-y-48">
          <Section num="01" title="Sovereign Intelligence">
            Intelligence systems are critical national resources. Every civilization must maintain control over its 
            foundational models to ensure cultural alignment and mitigate long-term strategic dependencies.
          </Section>

          <Section num="02" title="Infrastructure as Public Access">
            Sovereign data and compute foundations are civilizational essentials. We are committed 
            to architecting institutional-grade tools that empower global research without 
            compromising independence.
          </Section>

          <Section num="03" title="Provenanced Privacy">
            Utility must never compromise individual identity. We prioritize advanced synthetic 
            protocols that provide high-fidelity training signals while ensuring the 
            absolute protection of personal information.
          </Section>

          <Section num="04" title="Operational Grounding">
            The next generation of intelligence systems must be embodied. We bridge the gap between 
            high-level reasoning and physical actuation to solve civilization-scale challenges 
            within manufacturing, healthcare, and infrastructure.
          </Section>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-60 pt-24 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-white/40">Sovereign Foundation // 2024</span>
            <span className="text-[10px] font-mono text-white/10 uppercase italic tracking-widest">Architecting Strategic Autonomy</span>
          </div>
          <div className="flex gap-10">
            <a href="#/contact" className="text-[10px] font-black uppercase tracking-widest text-accent-blue hover:text-white transition-colors">Inquire for Strategic Partnership</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section: React.FC<{ num: string, title: string, children: React.ReactNode }> = ({ num, title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col gap-12 group"
  >
    <div className="flex items-center gap-8">
      <span className="text-4xl lg:text-5xl font-mono font-black text-white/5 group-hover:text-accent-blue/20 transition-colors duration-700">{num}</span>
      <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tightest leading-none">{title}</h2>
    </div>
    <p className="text-2xl lg:text-5xl text-text-secondary leading-[1.1] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-700 tracking-tight">
      {children}
    </p>
  </motion.div>
);

export default ManifestoPage;
