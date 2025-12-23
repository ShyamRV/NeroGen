
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Binary, Activity, ArrowRight, CornerDownRight } from 'lucide-react';

const ProjectAnnouncement: React.FC = () => {
  const specs = [
    { label: 'Layer Domain', value: 'Linguistic Logic' },
    { label: 'Stack Integrity', value: 'Synthetic Corpus' },
    { label: 'Compute Density', value: '1.2B_PARAMS_OPS' },
    { label: 'Security Class', value: 'Root_Air_Gapped' },
    { label: 'Release Phase', value: 'Active_Deployment' },
    { label: 'Governance', value: 'DPDP Native' },
  ];

  return (
    <section id="project-01" className="py-32 relative bg-bg-primary border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Concise Context */}
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent-cyan font-mono text-[10px] tracking-widest uppercase mb-10 font-black"
            >
              <Activity size={14} className="animate-pulse" /> Infrastructure_Release: 0x01
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-8xl font-black mb-10 tracking-tightest text-white uppercase leading-[0.9]"
            >
              Indic <span className="text-white/20">Linguistics.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-text-secondary leading-tight opacity-90 font-medium max-w-2xl"
            >
              Architecting high-fidelity synthetic Hindi corpora for the next wave of sovereign LLMs. Validated, clean, and research-native deployment.
            </motion.p>
          </div>
          <div className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 glass border border-white/10 rounded-3xl group hover:border-accent-blue/40 transition-all duration-500"
            >
              <Shield size={28} className="text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-black mb-3 uppercase text-xs tracking-widest">Secure_V</h4>
              <p className="text-xs text-text-secondary leading-relaxed opacity-60">Verified pipelines ensuring zero data-leakage of institutional assets.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 glass border border-white/10 rounded-3xl group hover:border-accent-emerald/40 transition-all duration-500"
            >
              <Globe size={28} className="text-accent-emerald mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-black mb-3 uppercase text-xs tracking-widest">Regional_O</h4>
              <p className="text-xs text-text-secondary leading-relaxed opacity-60">Capturing semantic linguistic nuances at civilization scale.</p>
            </motion.div>
          </div>
        </div>

        {/* Structured Technical Specs */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/10 rounded-[3rem] overflow-hidden shadow-3xl">
            <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-4">
                <Binary size={20} className="text-accent-cyan" />
                <span className="text-xs font-mono font-black text-white uppercase tracking-widest">Technical_System_Audit</span>
              </div>
              <span className="text-[10px] font-mono text-white/10 font-bold">RELEASE_BH_0X22F</span>
            </div>
            <div className="grid md:grid-cols-2">
              {specs.map((spec, i) => (
                <div key={i} className="p-10 border-b md:border-b-0 border-white/5 md:border-r last:border-r-0 hover:bg-white/[0.03] transition-colors duration-500">
                  <span className="text-[10px] font-mono text-text-tertiary uppercase font-black tracking-widest block mb-3">{spec.label}</span>
                  <span className="text-2xl text-white font-bold font-mono tracking-tighter">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="p-12 bg-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/5">
              <div className="flex items-start gap-4">
                 <CornerDownRight className="text-accent-blue shrink-0" />
                 <p className="text-xs text-text-secondary font-medium leading-relaxed max-w-sm">Request institutional weights and deployment manifests for public research initiatives.</p>
              </div>
              <a href="#/open-source" className="px-10 py-5 bg-white text-bg-primary font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-2xl shrink-0">
                Access Stacks <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Visual Validation - Fixed Height */}
          <div className="lg:col-span-4 relative rounded-[3rem] overflow-hidden border border-white/10 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1BP_TdkAX2GIvRMPwK2YQiXkEVKs0c6Rd" 
              alt="HRI Validation Lab" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[8s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <span className="text-[10px] font-mono text-accent-cyan uppercase font-black tracking-widest block mb-4">Laboratory_Verification</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tightest leading-none">Embodied AI <br /> Validation Node</h3>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest font-black">
                <span>Phase_01</span>
                <span>Active_Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAnnouncement;
