
import React from 'react';
import DatasetPlatform from '../components/DatasetPlatform';

const OpenSourcePage: React.FC = () => {
  return (
    <div className="bg-bg-primary">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <header className="py-24 max-w-4xl">
          <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-6">Institutional Repositories</span>
          <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-10">Public <br /> <span className="text-white/10">Architecture.</span></h1>
          <p className="text-2xl text-text-secondary leading-tight font-medium opacity-60">
            High-fidelity data serves as foundational infrastructure. We provide the research-grade 
            stacks required for the global community to build verified systems.
          </p>
        </header>
      </div>
      
      <DatasetPlatform />

      <div className="container mx-auto px-6 lg:px-12 pb-40">
        <div className="mt-20 p-12 bg-bg-secondary border border-white/5 rounded-3xl text-center max-w-4xl mx-auto">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-6">Inquire for institutional access or dedicated transit nodes.</p>
          <a href="#/contact" className="px-10 py-4 bg-white text-bg-primary font-black uppercase text-[10px] tracking-[0.3em] inline-block hover:bg-accent-blue hover:text-white transition-all rounded shadow-2xl">
            Request Partnership
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSourcePage;
