
import React from 'react';
import { Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-12 pb-40">
      <header className="py-24 max-w-4xl">
        <span className="text-[10px] font-mono text-accent-blue uppercase font-black tracking-widest block mb-6">Institutional Inquiry</span>
        <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-10">Strategic <br /> <span className="text-white/10">Partnership.</span></h1>
        <p className="text-2xl text-text-secondary leading-tight font-medium opacity-60">
          Inquire regarding institutional collaborations, strategic onboarding, or 
          dedicated system infrastructure.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="p-10 bg-white/[0.01] border border-white/5 rounded-2xl flex items-start gap-8">
            <Mail className="text-accent-blue mt-1" />
            <div>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black block mb-2">General Inquiry</span>
              <p className="text-xl font-bold text-white">lab@bharatai.foundation</p>
            </div>
          </div>

          <div className="p-10 bg-white/[0.01] border border-white/5 rounded-2xl flex items-start gap-8">
            <MapPin className="text-accent-blue mt-1" />
            <div>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black block mb-2">Regional Hub</span>
              <p className="text-xl font-bold text-white">Bharat AI Research Hub, <br /> Bengaluru, KA 560001, India</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white/[0.02] rounded-xl border border-white/5">
              <ShieldCheck className="text-accent-emerald mb-4" />
              <p className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">Verified Nodes</p>
              <p className="text-xs text-text-secondary mt-2">All partnership nodes undergo rigorous security assessment.</p>
            </div>
            <div className="p-8 bg-white/[0.02] rounded-xl border border-white/5">
              <Globe className="text-accent-blue mb-4" />
              <p className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">Regional Mirrors</p>
              <p className="text-xs text-text-secondary mt-2">Institutional data mirrors are maintained across 12 strategic regions.</p>
            </div>
          </div>
        </div>

        <div className="p-12 bg-bg-secondary border border-white/5 rounded-3xl">
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-10">Request Briefing</h3>
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/20 uppercase font-black tracking-widest">Organization</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-accent-blue outline-none transition-colors" placeholder="Institution / Laboratory / Entity" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/20 uppercase font-black tracking-widest">Strategic Domain</label>
              <select className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-accent-blue outline-none transition-colors">
                <option>Linguistic Reasoning</option>
                <option>Strategic Infrastructure</option>
                <option>Biosystems Research</option>
                <option>Physical Systems</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/20 uppercase font-black tracking-widest">Project Intent</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white focus:border-accent-blue outline-none h-32 transition-colors" placeholder="Summary of intended system utility..." />
            </div>
            <button className="w-full py-5 bg-white text-bg-primary font-black uppercase text-[10px] tracking-[0.4em] hover:bg-accent-blue hover:text-white transition-all rounded shadow-2xl">
              Initiate Assessment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
