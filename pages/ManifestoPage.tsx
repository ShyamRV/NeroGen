
import React from 'react';
import Manifesto from '../components/Manifesto';

const ManifestoPage: React.FC = () => {
  return (
    <div className="bg-bg-primary">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <header className="py-24 max-w-4xl">
          <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-10">Sovereign Declaration</span>
          <h1 className="text-7xl lg:text-[11rem] font-black text-white tracking-[1.05] leading-[0.8] uppercase mb-24 drop-shadow-2xl">
            Digital <br /> Self <br /> Reliance.
          </h1>
        </header>
      </div>

      <Manifesto />

      <div className="container mx-auto px-6 lg:px-12 pb-40 pt-20">
        <div className="max-w-4xl mx-auto space-y-32">
          <Section num="01" title="Sovereign Intelligence">
            We believe that intelligence is the ultimate national resource. Every nation must own its 
            foundation models, trained on its own cultural logic and linguistic diversity. 
            Dependence on foreign infrastructure is a strategic vulnerability.
          </Section>

          <Section num="02" title="Infrastructure as Public Utility">
            Data and compute foundations should be treated as essential utilities. We are committed 
            to building open-source datasets and research-native tools that empower the global community 
            to innovate without gatekeepers.
          </Section>

          <Section num="03" title="Radical Data Provenance">
            Utility must never come at the cost of individual identity. We prioritize synthetic techniques 
            that provide high-fidelity training signals without ever exposing PII, establishing a 
            new standard for research-grade privacy.
          </Section>

          <Section num="04" title="Physical Convergence">
            The future of AI is embodied. We are bridge-building between digital reasoning and 
            robotic actuation to solve physical-world challenges—from manufacturing to medicine—at 
            civilization scale.
          </Section>
        </div>

        <div className="mt-48 pt-24 border-t border-white/5 flex items-center justify-between opacity-30">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em]">Established 2024 // Bharat AI Foundation</span>
          <span className="text-[10px] font-mono uppercase italic tracking-widest">A Vision for Sovereignty</span>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ num: string, title: string, children: React.ReactNode }> = ({ num, title, children }) => (
  <div className="flex flex-col gap-10">
    <div className="flex items-center gap-6">
      <span className="text-4xl font-mono font-black text-white/10">{num}</span>
      <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">{title}</h2>
    </div>
    <p className="text-2xl lg:text-4xl text-text-secondary leading-tight font-medium opacity-60">
      {children}
    </p>
  </div>
);

export default ManifestoPage;
