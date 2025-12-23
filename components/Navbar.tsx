
import React from 'react';
import { Menu, X, Github, Activity } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const navLinks = [
    { name: 'Open Source', path: '#/open-source' },
    { name: 'Services', path: '#/services' },
    { name: 'Research', path: '#/research' },
    { name: 'Manifesto', path: '#/manifesto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-6 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <a href="#/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-white text-bg-primary rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <span className="font-black text-2xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-white uppercase leading-none">BHARAT<span className="text-white/30">AI</span></span>
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Infrastructure</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-md ${
                currentPath === link.path ? 'bg-white/5 text-white' : 'text-text-secondary hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-3 pr-8 border-r border-white/5">
            <Activity size={12} className="text-accent-emerald animate-pulse" />
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">Nodes: 1,024 Active</span>
          </div>
          <a href="#/contact" className="bg-white text-bg-primary px-6 py-2.5 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all shadow-xl">
            Get Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
