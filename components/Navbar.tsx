
import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Open Source', path: '#/open-source' },
    { name: 'Services', path: '#/services' },
    { name: 'Research', path: '#/research' },
    { name: 'Manifesto', path: '#/manifesto' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] py-5 transition-all duration-500 ${
          scrolled ? 'bg-bg-primary/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
        }`} 
        role="navigation"
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <a href="#/" className="flex items-center gap-5 group" aria-label="Bharat AI Home">
            <div className="w-10 h-10 bg-white text-bg-primary rounded-xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-accent-blue group-hover:text-white">
              <span className="font-black text-2xl tracking-tighter">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tightest text-white uppercase leading-none">BHARAT<span className="text-white/30">AI</span></span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest font-black mt-1">Sovereign_Infrastructure</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-lg group ${
                  currentPath === link.path ? 'bg-white/5 text-white' : 'text-text-secondary hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.name}
                {currentPath === link.path && (
                  <motion.div layoutId="nav-pill" className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-blue rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 lg:gap-10">
            <div className="hidden lg:flex items-center gap-4 pr-10 border-r border-white/5">
              <Globe size={14} className="text-white/20" />
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest font-black">Region</span>
                <span className="text-[10px] font-mono text-accent-emerald font-black uppercase tracking-wider">Bharat_S1_Active</span>
              </div>
            </div>
            
            <a href="#/contact" className="hidden sm:flex bg-white text-bg-primary px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-2xl">
              Get Strategic Access
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - High Polish */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-bg-primary flex flex-col pt-32 px-10 md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 tech-grid opacity-[0.1] z-0" />
            <div className="relative z-10 flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.name}
                  href={link.path}
                  className="flex items-center justify-between group py-2"
                >
                  <span className={`text-4xl font-black uppercase tracking-tightest ${currentPath === link.path ? 'text-accent-blue' : 'text-white'}`}>
                    {link.name}
                  </span>
                  <ChevronRight size={28} className="text-white/10 group-hover:text-accent-blue transition-colors" />
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#/contact"
                className="mt-12 py-7 bg-white text-bg-primary text-center font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-2xl"
              >
                Request Strategic Onboarding
              </motion.a>
            </div>
            
            <div className="mt-auto pb-12 relative z-10">
              <div className="h-px w-full bg-white/5 mb-10" />
              <div className="flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest font-black">
                <div className="flex items-center gap-3">
                  <Activity size={12} className="text-accent-emerald" />
                  <span>Nodes_Active_1024</span>
                </div>
                <span>Bengaluru_HQ</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
