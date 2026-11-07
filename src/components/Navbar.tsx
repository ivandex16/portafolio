import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/content';
import { Sun, Moon, FileText, Menu, X, Globe } from './Icons';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#experience', label: language === 'en' ? 'Experience' : 'Experiencia' },
    { href: '#projects', label: language === 'en' ? 'Projects' : 'Proyectos' },
    { href: '#stack', label: language === 'en' ? 'Tech Stack' : 'Tecnologías' },
    { href: '#education', label: language === 'en' ? 'Education' : 'Educación' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-zinc-900 transition-colors dark:text-zinc-100"
          aria-label="Ivan Cabeza Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 font-mono text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            IC
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight">ivan.dev</span>
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {language === 'en' ? 'Open to roles' : 'Disponible'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-100/80 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5 text-cyan-500" />
            <span className="font-mono uppercase">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-zinc-200 bg-zinc-100/80 p-1.5 text-zinc-700 transition hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Cambiar a Modo Oscuro'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          {/* Resume CTA */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 sm:inline-flex dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{language === 'en' ? 'Resume' : 'Ver CV'}</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-zinc-200 p-1.5 text-zinc-700 md:hidden dark:border-zinc-800 dark:text-zinc-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 transition hover:text-cyan-500 dark:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-2 text-center text-xs font-semibold text-white shadow-sm"
              >
                <FileText className="h-4 w-4" />
                {language === 'en' ? 'Download CV (PDF)' : 'Descargar CV (PDF)'}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
