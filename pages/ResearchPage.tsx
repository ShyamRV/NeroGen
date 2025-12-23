
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';
import ResearchSection from '../components/ResearchSection';
import VisionArchitecture from '../components/VisionArchitecture';

const ResearchPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-bg-primary">
      <section className="relative h-[65vh] min-h-[600px] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.RESEARCH} 
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]" 
            alt="Laboratory Environment" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,5,7,0.4)_0%,rgba(5,5,7,0.7)_100%)] z-10" />
          <div className="absolute inset-0 tech-grid z-20 opacity-20" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-30">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-3 py-1 bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-[10px] font-mono font-bold tracking-widest uppercase rounded">
                Core Laboratory // 01
              </span>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-white/30 text-[10px] font-mono uppercase font-bold tracking-widest">Linguistic Reasoning Stacks</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12 drop-shadow-2xl"
            >
              Foundational <br /> <span className="text-white/20">Research.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-text-secondary max-w-2xl mb-12 leading-tight font-medium drop-shadow-sm"
            >
              Investigating the semantic logic of regional languages to develop 
              intelligence systems that reason with cultural and contextual precision.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <button className="px-10 py-4 bg-white text-bg-primary font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:bg-accent-emerald hover:text-white transition-all rounded shadow-2xl">
                Publications <BookOpen size={14} />
              </button>
              <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all rounded backdrop-blur-xl">
                Research Roadmap
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <VisionArchitecture />
      <ResearchSection />

      <section className="py-40 container mx-auto px-6 lg:px-12">
        <div className="border-t border-white/5 pt-32">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-10 leading-none">Scientific <br /> Impact.</h3>
              <p className="text-xl text-text-secondary opacity-60 mb-12 font-medium">Peer-reviewed experimental systems and benchmarks released for verification by the research community.</p>
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                    <span className="text-5xl font-black text-white">22</span>
                    <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest mt-2">Active Papers</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-5xl font-black text-white">412</span>
                    <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest mt-2">Citations</span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              {[
                'BH-PAPER-01: Semantic Alignment for Hindi Reasoning',
                'BH-PAPER-04: Secure Synthetic Corpus Development Stacks',
                'BH-PAPER-07: Resource-Efficient Vernacular Logic Architectures',
                'BH-PAPER-12: Zero-Knowledge Privacy Protocols in Public Systems'
              ].map((p, i) => (
                <div key={i} className="p-10 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/[0.03] hover:border-accent-emerald/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-8">
                    <BookOpen size={24} className="text-white/20 group-hover:text-accent-emerald transition-colors" />
                    <span className="text-xl font-bold text-white group-hover:text-white transition-colors">{p}</span>
                  </div>
                  <ArrowRight size={20} className="text-white/10 group-hover:text-white transition-all group-hover:translate-x-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
