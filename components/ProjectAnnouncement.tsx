
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Binary, Activity, ArrowRight } from 'lucide-react';

const ProjectAnnouncement: React.FC = () => {
  const specs = [
    { label: 'Layer Domain', value: 'Linguistics (Hindi)' },
    { label: 'System Type', value: 'Synthetic Corpus' },
    { label: 'Token Density', value: '1.2B_STREAM_OPS' },
    { label: 'Security Model', value: 'Air-Gapped Private' },
    { label: 'Precision', value: 'Research_v9' },
    { label: 'Compliance', value: 'DPDP Act Native' },
  ];

  return (
    <section id="project-01" className="py-24 relative bg-bg-primary border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Concise Context */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 text-accent-cyan font-mono text-[10px] tracking-widest uppercase mb-6 font-bold">
              <Activity size={14} /> Infrastructure_Project: V-01
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-white uppercase leading-none">
              Indic <span className="text-white/20">Linguistics.</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed opacity-80 font-medium">
              Phase 01 Deployment: Industry-grade synthetic Hindi data architected 
              for the next wave of sovereign LLMs. Validated, clean, and research-native.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <Shield size={24} className="text-accent-blue mb-4" />
              <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Sovereign_V</h4>
              <p className="text-xs text-text-secondary leading-relaxed">Secure pipelines ensuring zero leak of personal identifiers.</p>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <Globe size={24} className="text-accent-blue mb-4" />
              <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Vernacular_O</h4>
              <p className="text-xs text-text-secondary leading-relaxed">Capturing regional linguistic nuances at civilization scale.</p>
            </div>
          </div>
        </div>

        {/* Structured Technical Specs */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 bg-bg-secondary border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-4">
                <Binary size={24} className="text-accent-cyan" />
                <span className="text-sm font-mono font-bold text-white uppercase tracking-widest">Technical_Core_Specifications</span>
              </div>
              <span className="text-[10px] font-mono text-white/20">SPEC_BH_0X22F</span>
            </div>
            <div className="grid md:grid-cols-2">
              {specs.map((spec, i) => (
                <div key={i} className="p-10 border-b md:border-b-0 border-white/5 odd:border-r border-white/5 hover:bg-white/[0.02] transition-colors">
                  <span className="text-[10px] font-mono text-text-tertiary uppercase font-bold tracking-widest block mb-2">{spec.label}</span>
                  <span className="text-xl text-white font-bold font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="p-10 bg-white/[0.02] flex items-center justify-between">
              <p className="text-xs text-text-secondary font-medium">Request full institutional access for raw data weights.</p>
              <a href="#/open-source" className="px-6 py-3 bg-white text-bg-primary font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 rounded-sm hover:bg-accent-blue hover:text-white transition-all">
                Access Repository <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Visual Validation - Fixed Height */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-white/5">
            <img 
              src="https://lh3.googleusercontent.com/d/1BP_TdkAX2GIvRMPwK2YQiXkEVKs0c6Rd" 
              alt="HRI Validation Lab" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] font-mono text-accent-cyan uppercase font-bold tracking-widest block mb-2">VALIDATION_L_01</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Embodied AI Lab</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAnnouncement;
