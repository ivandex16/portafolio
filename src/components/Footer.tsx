import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from './Icons';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-8 transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
            Ivan Cabeza © {new Date().getFullYear()}
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            {language === 'en'
              ? 'Built with React, TypeScript & Tailwind CSS. Hosted on Vercel.'
              : 'Construido con React, TypeScript y Tailwind CSS. Alojado en Vercel.'}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          aria-label="Back to top"
        >
          <span>{language === 'en' ? 'Back to top' : 'Volver arriba'}</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
