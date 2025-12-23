
import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
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

// Fix: Define explicit interfaces for ErrorBoundary to ensure state and props properties are recognized by TypeScript and make children optional to resolve missing children errors.
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Error Boundary for Production
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Production Error Captured:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center p-12 text-center">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">System Anomaly</h2>
            <p className="text-text-secondary mb-8">A critical error occurred in the infrastructure stack.</p>
            <button 
              onClick={() => window.location.href = '#/'}
              className="px-8 py-4 bg-white text-bg-primary font-black uppercase text-[10px] tracking-widest rounded"
            >
              Reinitialize Session
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Ensure routes scroll to top on change
const ScrollToTop = ({ path }: { path: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);
  return null;
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  const renderPage = () => {
    if (currentPath === '#/open-source') return <OpenSourcePage />;
    if (currentPath === '#/services') return <ServicesPage />;
    if (currentPath === '#/research') return <ResearchPage />;
    if (currentPath === '#/manifesto') return <ManifestoPage />;
    if (currentPath === '#/docs') return <DocsPage />;
    if (currentPath === '#/contact') return <ContactPage />;
    return <HomePage />;
  };

  return (
    <ErrorBoundary>
      <ScrollToTop path={currentPath} />
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
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[10px] font-mono text-accent-blue tracking-[0.5em] uppercase font-bold"
                >
                  Initializing Sovereign Node
                </motion.span>
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
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>
            <Footer />
            
            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-blue/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/[0.01] rounded-full blur-[120px] pointer-events-none z-0" />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
