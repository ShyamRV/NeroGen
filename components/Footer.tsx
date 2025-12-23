
import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, ExternalLink, ShieldCheck, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-primary pt-40 pb-16 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-blue/[0.02] blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20 mb-40">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-12 h-12 bg-white text-bg-primary rounded-xl flex items-center justify-center shadow-2xl">
                <span className="font-black text-3xl tracking-tighter">B</span>
              </div>
              <div className="flex flex-col">
                 <span className="font-black text-2xl tracking-tightest text-white uppercase leading-none">BHARAT<span className="text-white/30">AI</span></span>
                 <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest font-black mt-1">Sovereign_Infrastructure</span>
              </div>
            </div>
            <p className="text-text-secondary text-xl leading-relaxed mb-14 max-w-sm font-medium opacity-60">
              Architecting the foundational stacks for sovereign intelligence. Open-source, research-native deep tech for the next decade.
            </p>
            <div className="flex items-center gap-5">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl text-white/20 hover:text-white hover:border-accent-blue hover:bg-white/[0.05] transition-all flex items-center justify-center shadow-lg">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-black uppercase tracking-widest mb-12 text-white/20">Infrastructure</h4>
            <ul className="space-y-6">
              {['Home', 'Open Source', 'Datasets', 'API Stacks', 'Cloud Nodes'].map((link) => (
                <li key={link}>
                  <a href={`#/${link.toLowerCase().replace(' ', '-')}`} className="text-text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center justify-between group">
                    {link} <ExternalLink size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-black uppercase tracking-widest mb-12 text-white/20">Frontier</h4>
            <ul className="space-y-6">
              {['Research Hub', 'Technical Papers', 'Linguistic Logic', 'Sovereign V1', 'Roadmap'].map((link) => (
                <li key={link}>
                  <a href={`#/${link.toLowerCase().replace(' ', '-')}`} className="text-text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center justify-between group">
                    {link} <ExternalLink size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-widest mb-12 text-white/20">Connect_Core</h4>
            <ul className="space-y-10">
              <li className="flex items-start gap-5 text-sm text-text-secondary leading-relaxed font-medium opacity-60 max-w-xs">
                <MapPin size={18} className="text-accent-blue mt-1 shrink-0" />
                <span>Bharat AI Research Hub, Electronic City, Bengaluru, KA 560100, India</span>
              </li>
              <li className="pt-6">
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl relative group overflow-hidden">
                   <div className="absolute inset-0 bg-accent-emerald/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="flex items-center gap-4 text-accent-emerald mb-4 relative z-10">
                      <ShieldCheck size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Safe_Deployment</span>
                   </div>
                   <p className="text-[10px] text-text-tertiary font-black leading-relaxed relative z-10 uppercase tracking-widest">
                      All platform nodes adhere to sovereign ISO-AI-27001 data governance and security standards.
                   </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-[10px] font-mono tracking-widest uppercase text-text-tertiary font-black">
          <div className="flex items-center gap-5">
            <Globe size={14} className="text-accent-blue" />
            <span className="text-white/40">© 2024 BHARAT AI FOUNDATION // BHA-SEC-01</span>
          </div>
          <div className="flex flex-wrap gap-10">
            <a href="#" className="hover:text-white transition-colors">Legal_Notice</a>
            <a href="#" className="hover:text-white transition-colors">Privacy_Architecture</a>
            <a href="#" className="hover:text-white transition-colors">CC BY 4.0</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
