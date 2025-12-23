
import React from 'react';
import { motion } from 'framer-motion';
import { DATASETS } from '../constants';
import { DatasetStatus } from '../types';
import { Languages, Eye, Bot, ArrowUpRight, Lock, Database, Binary } from 'lucide-react';

const iconMap: Record<string, any> = {
  'languages': Languages,
  'eye': Eye,
  'bot': Bot,
};

const DatasetCard: React.FC<{ dataset: any, index: number }> = ({ dataset, index }) => {
  const IconComp = iconMap[dataset.icon] || Database;
  const isLive = dataset.status === DatasetStatus.LIVE;

  return (
    <div
      className={`group bg-bg-secondary border border-white/5 p-8 rounded-2xl flex flex-col h-full transition-all duration-200 ${isLive ? 'hover:bg-white/[0.04] hover:border-white/10' : 'opacity-40 cursor-not-allowed'}`}
    >
      <div className="flex items-start justify-between mb-10">
        <div className={`p-4 rounded-xl ${isLive ? 'bg-accent-blue/10 text-accent-blue' : 'bg-white/5 text-text-tertiary'}`}>
          <IconComp size={28} />
        </div>
        {isLive ? (
          <span className="px-2 py-1 rounded text-[9px] font-bold bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 uppercase tracking-widest">
            Ready
          </span>
        ) : (
          <Lock size={16} className="text-text-tertiary" />
        )}
      </div>

      <div className="mb-8">
        <span className="text-text-tertiary text-[10px] font-mono mb-2 block font-bold uppercase tracking-widest">{dataset.subtitle}</span>
        <h3 className="text-2xl font-black tracking-tight mb-4 text-white uppercase group-hover:text-accent-blue transition-colors">{dataset.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed opacity-70 line-clamp-3">
          {dataset.description}
        </p>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[8px] text-text-tertiary uppercase font-bold tracking-widest mb-1">Index_Code</span>
          <span className="text-[11px] font-mono text-white/40">BH-OS_0{index + 1}</span>
        </div>
        {isLive && (
          <a href="#/docs" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-blue hover:text-white transition-colors">
            View Dataset <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

const DatasetPlatform: React.FC = () => {
  return (
    <section id="datasets" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-accent-blue font-mono text-[10px] tracking-widest uppercase mb-6 font-bold">
              <Database size={14} /> Repository Index 0x01
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-white uppercase leading-none">Open Datasets.</h2>
            <p className="text-xl text-text-secondary leading-relaxed opacity-60 font-medium">
              Sovereign data built for research-grade fine-tuning. Distributed via institutional mirrors and peer-to-peer protocols.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-bg-secondary p-1.5 rounded-xl border border-white/5">
            {['All', 'Language', 'Vision', 'Robotics'].map((tab) => (
              <button 
                key={tab}
                className={`px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all ${tab === 'All' ? 'bg-white text-bg-primary' : 'text-text-tertiary hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATASETS.map((dataset, i) => (
            <DatasetCard key={dataset.id} dataset={dataset} index={i} />
          ))}
          <div className="bg-bg-secondary border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-12">
            <Binary size={32} className="text-white/10 mb-6" />
            <h4 className="text-white/20 font-bold uppercase text-xs tracking-[0.3em]">More Stacks Pending</h4>
            <span className="text-[9px] font-mono text-white/5 mt-2">DECRYPTING_O_STREAM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetPlatform;
