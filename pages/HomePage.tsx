
import React from 'react';
import { ArrowRight, Database, Cpu, Microscope, CornerDownRight } from 'lucide-react';
import Hero from '../components/Hero';
import HubSection from '../components/HubSection';
import ProjectAnnouncement from '../components/ProjectAnnouncement';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col bg-bg-primary overflow-x-hidden">
      <Hero />
      <HubSection />
      <div className="relative">
        <ProjectAnnouncement />
      </div>

      <section className="py-60 bg-bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <div className="max-w-4xl">
               <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-10">System_Verticals</span>
               <h2 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tightest leading-none">Intelligence <br /> <span className="text-white/20">Infrastructure.</span></h2>
            </div>
            <div className="flex items-center gap-4 text-text-tertiary font-mono text-[10px] uppercase font-black tracking-widest">
               <CornerDownRight size={14} /> 
               <span>Verified_Institutional_Node</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Database}
              title="Public Stacks"
              desc="Research-grade corpora and regional datasets designed for high-fidelity model alignment."
              href="#/open-source"
              label="Access Repository"
              accent="accent-cyan"
            />
            <FeatureCard 
              icon={Cpu}
              title="Platforms"
              desc="Private compute pipelines and secure infrastructure layers for strategic institutional use."
              href="#/services"
              label="Request Access"
              accent="accent-violet"
            />
            <FeatureCard 
              icon={Microscope}
              title="Foundational Research"
              desc="Long-horizon investigation into linguistic logic, semantic grounding, and reasoning systems."
              href="#/research"
              label="View Publications"
              accent="accent-emerald"
            />
          </div>
        </div>
        <div className="absolute inset-0 tech-grid opacity-[0.05] pointer-events-none" />
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: any, title: string, desc: string, href: string, label: string, accent: string }> = ({ icon: Icon, title, desc, href, label, accent }) => (
  <a href={href} className="group p-12 glass rounded-[3rem] hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-[480px] border-white/5 hover:border-white/20 shadow-2xl overflow-hidden relative">
    <div className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${accent === 'accent-cyan' ? 'bg-accent-cyan' : accent === 'accent-violet' ? 'bg-accent-violet' : 'bg-accent-emerald'}`} />
    
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-white group-hover:text-bg-primary transition-all duration-500 shadow-xl`}>
        <Icon size={32} />
      </div>
      <h3 className="text-4xl font-black text-white uppercase tracking-tightest mb-8 leading-none">{title}</h3>
      <p className="text-xl text-text-secondary leading-relaxed mb-12 opacity-60 group-hover:opacity-100 transition-opacity font-medium tracking-tight">{desc}</p>
    </div>
    
    <div className="mt-auto relative z-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-accent-blue group-hover:gap-6 transition-all duration-500">
      {label} <ArrowRight size={16} />
    </div>
  </a>
);

export default HomePage;
