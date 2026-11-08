import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <footer className="page flex flex-col gap-3 pb-10 pt-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}.{' '}
        {en ? 'Set in Geist. Built with React, TypeScript and Tailwind CSS.' : 'Compuesto en Geist. Hecho con React, TypeScript y Tailwind CSS.'}
      </p>
      <a href="#top" className="group inline-flex min-h-11 items-center gap-1 whitespace-nowrap hover:text-ink">
        {en ? 'Back to top' : 'Volver arriba'} <span aria-hidden="true" className="nudge nudge-up">↑</span>
      </a>
    </footer>
  );
};
