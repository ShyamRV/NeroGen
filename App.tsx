
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import OpenSourcePage from './pages/OpenSourcePage';
import ServicesPage from './pages/ServicesPage';
import ResearchPage from './pages/ResearchPage';
import ManifestoPage from './pages/ManifestoPage';
import DocsPage from './pages/DocsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      // Normalize hash to ensure strict matching
      const hash = window.location.hash;
      setCurrentPath(hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  const renderPage = () => {
    // Exact matching for routes
    if (currentPath === '#/open-source') return <OpenSourcePage />;
    if (currentPath === '#/services') return <ServicesPage />;
    if (currentPath === '#/research') return <ResearchPage />;
    if (currentPath === '#/manifesto') return <ManifestoPage />;
    if (currentPath === '#/docs') return <DocsPage />;
    if (currentPath === '#/contact') return <ContactPage />;
    
    // Default to home for #/, #, or any unrecognized path
    return <HomePage />;
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent-blue selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-bg-primary flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-accent-blue/20 border-t-accent-blue rounded-full"
              />
              <span className="text-[10px] font-mono text-accent-blue tracking-[0.5em] uppercase font-bold">Initializing Node</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <div className="flex flex-col min-h-screen">
          <Navbar currentPath={currentPath} />
          <main className="flex-grow pt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPath}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
          
          {/* Global Infrastructure Glows */}
          <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-blue/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/[0.01] rounded-full blur-[120px] pointer-events-none z-0" />
        </div>
      )}
    </div>
  );
};

export default App;
