
import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-primary pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-32">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-white text-bg-primary rounded-xl flex items-center justify-center">
                <span className="font-black text-3xl">B</span>
              </div>
              <div className="flex flex-col">
                 <span className="font-black text-2xl tracking-tighter text-white uppercase leading-none">BHARAT<span className="text-white/30">AI</span></span>
                 <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Deep Infrastructure</span>
              </div>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-sm font-medium opacity-60">
              Defining the sovereign stack. India's foundational platform for open-source deep-tech and AI infrastructure.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-white/20 hover:text-white hover:border-accent-blue transition-all flex items-center justify-center">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] mb-10 text-white/20">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'Open Source', 'Services', 'Docs', 'Status'].map((link) => (
                <li key={link}>
                  <a href={`#/${link.toLowerCase().replace(' ', '-')}`} className="text-text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center justify-between group">
                    {link} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] mb-10 text-white/20">Research</h4>
            <ul className="space-y-4">
              {['Research Hub', 'Papers', 'Collaborations', 'Manifesto', 'Roadmap'].map((link) => (
                <li key={link}>
                  <a href={`#/${link.toLowerCase().replace(' ', '-')}`} className="text-text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center justify-between group">
                    {link} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] mb-10 text-white/20">Connect</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 text-xs text-text-secondary leading-relaxed font-medium opacity-60">
                <MapPin size={16} className="text-accent-blue mt-1 shrink-0" />
                <span>Bharat AI Research Hub, Bengaluru, KA 560001</span>
              </li>
              <li className="pt-6">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                   <div className="flex items-center gap-3 text-accent-emerald mb-3">
                      <ShieldCheck size={16} />
                      <span className="text-[9px] font-black uppercase tracking-widest">Safe Deployment</span>
                   </div>
                   <p className="text-[9px] text-text-tertiary font-medium">All systems adhere to sovereign ISO-AI-27001 standards.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] font-mono tracking-[0.4em] uppercase text-text-tertiary font-black">
          <span className="text-white/40">&copy; 2024 BHARAT AI FOUNDATION</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Legal_Notice</a>
            <a href="#" className="hover:text-white">Privacy_Stack</a>
            <a href="#" className="hover:text-white">CC BY 4.0</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
