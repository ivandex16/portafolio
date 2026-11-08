import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SkipLink: React.FC = () => {
  const { language } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
    >
      {language === 'en' ? 'Skip to content' : 'Saltar al contenido'}
    </a>
  );
};

export const App: React.FC = () => (
  <ThemeProvider>
    <LanguageProvider>
      <div className="flex min-h-screen flex-col overflow-x-clip bg-paper text-ink">
        <SkipLink />
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          <Hero />
          <Projects />
          <Experience />
          <TechStack />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
