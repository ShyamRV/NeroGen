
import React from 'react';
import { motion } from 'framer-motion';
import { MANIFESTO_POINTS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-mono text-accent-blue uppercase font-bold tracking-widest block mb-4">Foundation Charter</span>
          <h2 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">
            Sovereign <br /> <span className="text-white/20">Commitment.</span>
          </h2>
          <p className="text-2xl text-text-secondary leading-tight font-medium opacity-60">
            Our mission is to build the digital self-reliance that modern civilizations 
            require. We treat data as public utility and intelligence as a national resource.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {MANIFESTO_POINTS.map((point, i) => (
            <div
              key={i}
              className="p-12 lg:p-16 bg-bg-secondary hover:bg-bg-tertiary transition-colors group"
            >
              <span className="text-4xl font-mono text-white/5 font-black block mb-10 group-hover:text-accent-blue/10 transition-colors">0{i + 1}</span>
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-6">
                {point.title}
              </h3>
              <p className="text-lg text-text-secondary opacity-70 leading-relaxed font-medium">
                {point.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="px-8 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/30 text-[9px] font-mono tracking-[0.5em] uppercase font-bold">
            Established 2024 // Bharat AI Foundation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
