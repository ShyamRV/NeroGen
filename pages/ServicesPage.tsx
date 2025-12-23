
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CornerDownRight, ShieldAlert, Bot, Dna } from 'lucide-react';
import { ASSETS } from '../constants';
import ServicesSection from '../components/ServicesSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-bg-primary">
      {/* Intro Header */}
      <header className="container mx-auto px-6 lg:px-12 py-32 max-w-5xl">
        <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-8">Infrastructure Matrix</span>
        <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-12 leading-[0.85]">Institutional <br /> <span className="text-white/10">Architecture.</span></h1>
        <p className="text-3xl text-text-secondary leading-tight font-medium opacity-60">
          Providing the secure foundation for organizations building 
          civilization-scale intelligence systems.
        </p>
      </header>

      {/* Specialized Service Deep-Dives */}
      <div className="flex flex-col">
        {/* DEFENCE AI */}
        <ServiceSectionItem 
          title="Defence AI"
          tagline="National Strategic Intelligence"
          desc="Secure, air-gapped intelligence systems for situational awareness, tactical analysis, and sovereign defence infrastructure."
          img={ASSETS.DEFENCE}
          icon={ShieldAlert}
          accent="accent-violet"
          meta={['CLASSIFIED_CORE', 'ROOT_ACCESS_9', 'SECURE_NODE']}
        />

        {/* ROBOTICS */}
        <ServiceSectionItem 
          title="Robotics & AI"
          tagline="Physical Automation Stack"
          desc="Turnkey industrial AI stacks for high-precision manufacturing, autonomous logistics, and sim-to-real robotic actuation."
          img={ASSETS.ROBOTICS}
          icon={Bot}
          accent="accent-cyan"
          meta={['LOW_LATENCY_4MS', 'ACTUATION_LINK', 'PROXIMITY_V2']}
        />

        {/* BIO-AI */}
        <ServiceSectionItem 
          title="Bio-AI Systems"
          tagline="Civilization-Scale Health"
          desc="Next-generation genomic modeling and protein folding infrastructure optimized for sovereign medical and biological research."
          img={ASSETS.BIO_AI}
          icon={Dna}
          accent="accent-emerald"
          meta={['FOLD_OPS: 1.2B', 'PROTEOMICS_V4', 'BIO_ISOLATED']}
        />
      </div>

      {/* The Generic Services Summary */}
      <ServicesSection />

      <div className="container mx-auto px-6 lg:px-12 py-48">
        <div className="p-24 bg-bg-secondary border border-white/5 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="max-w-xl relative z-10">
            <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Custom <br /> Partnering.</h2>
            <p className="text-xl text-text-secondary opacity-60 mb-12 leading-relaxed">Requirement analysis for strategic initiatives in national security, deep-tech research, and industrial automation.</p>
            <div className="flex items-center gap-4">
              <CornerDownRight className="text-accent-blue" />
              <span className="text-[11px] font-mono font-black text-white/40 uppercase tracking-widest">Inquire for Strategic Onboarding</span>
            </div>
          </div>
          <a href="#/contact" className="relative z-10 px-16 py-8 bg-white text-bg-primary font-black uppercase text-[12px] tracking-[0.5em] hover:bg-accent-blue hover:text-white transition-all rounded shadow-2xl">
            Request Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceSectionItem: React.FC<{
  title: string;
  tagline: string;
  desc: string;
  img: string;
  icon: any;
  accent: string;
  meta: string[];
}> = ({ title, tagline, desc, img, icon: Icon, accent, meta }) => (
  <section className="relative h-[80vh] min-h-[700px] border-b border-white/5 flex items-center group overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={img} className="w-full h-full object-cover brightness-[0.7] transition-transform duration-[10000ms] group-hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(5,5,7,0.4)_0%,rgba(5,5,7,0.7)_100%)] z-10" />
      <div className="absolute inset-0 tech-grid z-20 opacity-10" />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-30">
      <div className="max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12"
        >
          <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-xl group-hover:bg-white group-hover:text-bg-primary transition-all duration-700`}>
            <Icon size={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-mono text-white/40 uppercase tracking-[0.4em] font-black">{tagline}</span>
            <div className="flex gap-4 mt-2">
              {meta.map(m => (
                <span key={m} className="text-[9px] font-mono text-white/10 border border-white/5 px-2 py-0.5 rounded">{m}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl lg:text-[10rem] font-black text-white tracking-tighter uppercase mb-12 leading-none drop-shadow-2xl"
        >
          {title.split(' ')[0]} <br />
          <span className="text-white/20">{title.split(' ').slice(1).join(' ')}</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl text-text-secondary max-w-xl mb-16 leading-relaxed font-medium drop-shadow-lg"
        >
          {desc}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-8"
        >
          <button className="px-12 py-5 bg-white text-bg-primary font-black uppercase text-[11px] tracking-[0.4em] hover:bg-accent-blue hover:text-white transition-all rounded shadow-2xl">
            Technical Specs
          </button>
          <a href="#/contact" className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white flex items-center gap-3 transition-colors">
            Request Demo <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesPage;
