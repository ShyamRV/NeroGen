
import React from 'react';
import { ArrowRight, Database, Cpu, Microscope, BookOpen, ShieldCheck, Activity, Globe, Server } from 'lucide-react';
import { BANNERS } from '../constants';
import ProjectAnnouncement from '../components/ProjectAnnouncement';

const HomePage: React.FC = () => {
  const activeHero = BANNERS[0];

  return (
    <div className="flex flex-col">
      {/* Infrastructure Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={activeHero.bgImage} className="w-full h-full object-cover brightness-[0.6] grayscale-[0.2]" alt="Background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,5,7,0.4)_0%,rgba(5,5,7,0.8)_100%)] z-10" />
          <div className="absolute inset-0 tech-grid z-20 opacity-30" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-30">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-mono font-bold tracking-widest uppercase rounded">
                Infrastructure Phase 01
              </span>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-white/30 text-[10px] font-mono uppercase font-bold tracking-widest">Sovereign Data Stack</span>
            </div>
            
            <h1 className="text-6xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12 drop-shadow-2xl">
              Open <br /> Datasets <br /> <span className="text-white/20">Infrastructure.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-text-secondary max-w-2xl mb-12 leading-relaxed font-medium">
              Architecting high-fidelity foundations for sovereign AI. Building the infrastructure 
              required for civilization-scale digital self-reliance.
            </p>

            <div className="flex items-center gap-6">
              <a href="#/open-source" className="px-10 py-4 bg-white text-bg-primary font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:bg-accent-blue hover:text-white transition-all rounded shadow-2xl">
                Explore Repository <ArrowRight size={14} />
              </a>
              <a href="#/docs" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all rounded backdrop-blur-xl">
                Technical Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* System Status Panel */}
      <section className="bg-bg-secondary border-b border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-10 flex flex-wrap items-center justify-between gap-12">
          {[
            { label: 'Network Uptime', val: '99.99%', icon: Activity },
            { label: 'Avg Latency', val: '4.2ms', icon: Globe },
            { label: 'Region', val: 'Bharat-South', icon: Server },
            { label: 'Active Nodes', val: '1,024', icon: ShieldCheck }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="p-3 bg-white/5 rounded-lg text-white/20">
                <stat.icon size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">{stat.label}</span>
                <span className="text-xl font-mono text-white font-bold">{stat.val}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Teaser (Project Announcement) */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
        <ProjectAnnouncement />
      </div>

      {/* Feature Navigation Grid */}
      <section className="py-40 bg-bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20">
             <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-6">Orientation Layer</span>
             <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Platform Verticals</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Database}
              title="Open Source"
              desc="High-fidelity synthetic corpora and regional datasets for sovereign alignment."
              href="#/open-source"
              label="Explore Repository"
            />
            <FeatureCard 
              icon={Cpu}
              title="Services"
              desc="Institutional AI infrastructure, compute pipelines, and secure data access layers."
              href="#/services"
              label="Request Access"
            />
            <FeatureCard 
              icon={Microscope}
              title="Research"
              desc="Investigating Indic linguistic logic, semantic grounding, and frontier reasoning."
              href="#/research"
              label="Read Papers"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: any, title: string, desc: string, href: string, label: string }> = ({ icon: Icon, title, desc, href, label }) => (
  <a href={href} className="group p-12 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex flex-col h-full">
    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-white transition-all">
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform">{title}</h3>
    <p className="text-text-secondary text-lg leading-relaxed mb-12 opacity-60 group-hover:opacity-100 transition-opacity">{desc}</p>
    <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent-blue group-hover:gap-5 transition-all">
      {label} <ArrowRight size={14} />
    </div>
  </a>
);

export default HomePage;
