
import React from 'react';
import { Terminal, Book, Code, Box, Info } from 'lucide-react';

const DocsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-12 pb-40">
      <header className="py-24 max-w-4xl">
        <span className="text-[10px] font-mono text-white/30 uppercase font-black tracking-widest block mb-6">Technical Specifications</span>
        <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-10">System <br /> <span className="text-white/10">Architecture.</span></h1>
        <p className="text-2xl text-text-secondary leading-tight font-medium opacity-60">
          Technical specifications, dataset schema definitions, and implementation guides 
          for institutional infrastructure.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {[
          { icon: Info, title: 'Integration Guide', desc: 'Protocol for accessing and integrating public dataset mirrors.' },
          { icon: Terminal, title: 'Core Tooling', desc: 'Institutional tools for dataset validation and stream processing.' },
          { icon: Code, title: 'API Specification', desc: 'Secure endpoints for inference, training logs, and node monitoring.' },
          { icon: Box, title: 'Schema Definitions', desc: 'Detailed field definitions for Linguistic-Synth and Vision stacks.' }
        ].map((doc, i) => (
          <div key={i} className="p-12 bg-white/[0.01] border border-white/5 rounded-2xl flex items-start gap-10 group hover:border-white/20 transition-all">
            <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center text-white/20 group-hover:text-accent-blue transition-colors">
              <doc.icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{doc.title}</h3>
              <p className="text-lg text-text-secondary opacity-60 leading-relaxed mb-6">{doc.desc}</p>
              <button className="text-[10px] font-black uppercase tracking-widest text-accent-blue">View Specification</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsPage;
