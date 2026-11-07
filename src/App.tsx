import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col justify-between">
          <div>
            <Navbar />
            <main>
              <Hero />
              <MetricsStrip />
              <Experience />
              <Projects />
              <TechStack />
              <Education />
              <Contact />
            </main>
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
