
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Layers, Cpu, Radio, Microscope, Activity } from 'lucide-react';

const VisionArchitecture: React.FC = () => {
  return (
    <section id="vision" className="py-48 relative overflow-hidden bg-bg-primary border-t border-white/5 vision-section">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center mb-32">
          {/* Split Layout: Text Content - with glass backdrop */}
          <div className="lg:w-1/2 text-content glass-card p-10 lg:p-16 rounded-[3rem]">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-violet font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block font-black"
            >
              Sovereign Deployment Roadmap
            </motion.span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter text-white uppercase leading-none">THE ECOSYSTEM STACK</h2>
            <p className="text-text-secondary text-xl lg:text-2xl leading-relaxed opacity-80 font-medium tracking-tight mb-12">
              Architecting India's AI future from raw data to frontier reasoning. A unified, vertically integrated intelligence infrastructure.
            </p>
            <div className="flex flex-wrap gap-10 text-[10px] font-mono tracking-[0.3em] uppercase font-black text-text-tertiary">
              <div className="flex items-center gap-4 group">
                 <span className="w-3 h-3 rounded-full bg-accent-emerald shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                 <span className="text-white">Active Operational</span>
              </div>
              <div className="flex items-center gap-4 group">
                 <span className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                 <span className="text-white">Deep Development</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group w-full"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-accent-violet/10 to-accent-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass rounded-[3rem] overflow-hidden border-white/10 aspect-video shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]">
              <img 
                src="https://lh3.googleusercontent.com/d/1jSOzb1zmfg3KPJoDHfrhO-8DV2OX3w8G" 
                alt="AI Boardroom" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                 <span className="text-[10px] font-mono text-white uppercase tracking-[0.4em] font-black">Strategic Command_0x2</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
              <TierCard 
                icon={Layers} 
                title="Sovereign Data" 
                status="active" 
                items={['Multi-modal Synthetic', 'Indian Contextual Visuals', 'Regional Dialect Stacks']} 
              />
              <TierCard 
                icon={Cpu} 
                title="Model Foundation" 
                status="development" 
                items={['Bilingual Transformer Kernels', 'Diffusion Alignment', 'Safety Tuned Weights']} 
              />
              <TierCard 
                icon={Radio} 
                title="Inference Edge" 
                status="planned" 
                items={['Quantization Pipelines', 'Bharat-Cloud Integration', 'Real-time Edge APIs']} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 tech-grid" />
    </section>
  );
};

const TierCard: React.FC<{ 
  icon: any, 
  title: string, 
  status: 'active' | 'development' | 'planned' | 'vision', 
  items: string[] 
}> = ({ icon: Icon, title, status, items }) => {
  const isOperational = status === 'active';
  const isDev = status === 'development';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass p-12 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:bg-white/[0.08] group ${isOperational ? 'border-accent-emerald/30 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]' : isDev ? 'border-accent-blue/30 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]' : 'border-white/5 opacity-50'}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 ${isOperational ? 'bg-accent-emerald/10 text-accent-emerald group-hover:bg-accent-emerald group-hover:text-bg-primary shadow-lg shadow-accent-emerald/10' : isDev ? 'bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-bg-primary shadow-lg shadow-accent-blue/10' : 'bg-white/5 text-text-tertiary'}`}>
        <Icon size={32} />
      </div>
      <h3 className="text-3xl font-black mb-8 text-white tracking-tighter uppercase">{title}</h3>
      <ul className="space-y-6">
        {items.map((item, idx) => (
          <li key={idx} className="text-base text-text-secondary flex items-start gap-4 leading-relaxed font-medium">
            <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${isOperational ? 'bg-accent-emerald/40' : isDev ? 'bg-accent-blue/40' : 'bg-white/10'}`} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default VisionArchitecture;
