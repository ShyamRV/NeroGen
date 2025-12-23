
import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Open Source', path: '#/open-source' },
    { name: 'Services', path: '#/services' },
    { name: 'Research', path: '#/research' },
    { name: 'Manifesto', path: '#/manifesto' },
  ];

  // Close menu on path change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5" role="navigation">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <a href="#/" className="flex items-center gap-4 group" aria-label="Bharat AI Home">
            <div className="w-10 h-10 bg-white text-bg-primary rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <span className="font-black text-2xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-white uppercase leading-none">BHARAT<span className="text-white/30">AI</span></span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Infrastructure</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-md ${
                  currentPath === link.path ? 'bg-white/10 text-white' : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex items-center gap-3 pr-8 border-r border-white/5">
              <Activity size={12} className="text-accent-emerald animate-pulse" />
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">Nodes: 1,024 Active</span>
            </div>
            <a href="#/contact" className="hidden sm:block bg-white text-bg-primary px-6 py-2.5 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all shadow-xl">
              Get Access
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-bg-primary pt-32 px-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.name}
                  href={link.path}
                  className="flex items-center justify-between group"
                >
                  <span className={`text-4xl font-black uppercase tracking-tighter ${currentPath === link.path ? 'text-accent-blue' : 'text-white'}`}>
                    {link.name}
                  </span>
                  <ChevronRight size={24} className="text-white/20 group-hover:text-accent-blue transition-colors" />
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#/contact"
                className="mt-8 py-6 bg-white text-bg-primary text-center font-black uppercase tracking-[0.3em] text-xs rounded-xl"
              >
                Get Strategic Access
              </motion.a>
            </div>
            
            <div className="absolute bottom-12 left-12 right-12">
              <div className="h-px w-full bg-white/5 mb-8" />
              <div className="flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
                <span>Phase_01</span>
                <span>Bengaluru, IN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
