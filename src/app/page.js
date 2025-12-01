'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { formatMessage } from '../utils/i18n';
import styles from './page.module.css';

// Dynamically import components with no SSR and loading fallbacks
const Header = dynamic(() => import('../components/Header/Header'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '80px' }} />
});

const Hero = dynamic(() => import('../components/Hero/Hero'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '100vh' }} />
});

const About = dynamic(() => import('../components/About/About'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '600px' }} />
});

const Skills = dynamic(() => import('../components/Skills/Skills'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '600px' }} />
});

const Projects = dynamic(() => import('../components/Projects/Projects'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '800px' }} />
});

const Experience = dynamic(() => import('../components/Experience/Experience'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '700px' }} />
});

const Contact = dynamic(() => import('../components/Contact/Contact'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '600px' }} />
});

const Footer = dynamic(() => import('../components/Footer/Footer'), { 
  ssr: false,
  loading: () => <div className={styles.loadingPlaceholder} style={{ height: '100px' }} />
});

// Error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Error caught by error boundary:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className={styles.errorContainer}>
        <h2>Something went wrong</h2>
        <p>Please refresh the page or try again later.</p>
        <button 
          onClick={() => window.location.reload()} 
          className={styles.errorButton}
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return children;
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  // Toggle between Next.js default page and our portfolio
  const togglePortfolioView = () => {
    setShowPortfolio(!showPortfolio);
  };

  // If not showing portfolio, show the default Next.js page
  if (!showPortfolio) {
    return (
      <div className={styles.toggleContainer}>
        <button 
          onClick={togglePortfolioView} 
          className={styles.toggleButton}
          aria-label="Show Portfolio"
        >
          Show My Portfolio
        </button>
      </div>
    );
  }

  // Show the actual portfolio
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <p>Loading Portfolio...</p>
        </div>
      }>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        
        <button 
          onClick={togglePortfolioView} 
          className={styles.togglePortfolioButton}
          aria-label="Back to Default View"
        >
          Back to Default
        </button>
      </Suspense>
    </ErrorBoundary>
  );
}
