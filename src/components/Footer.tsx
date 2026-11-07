import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <footer className="inverse bg-paper text-muted">
      <div className="mx-auto flex max-w-page flex-col gap-3 border-t border-rule px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="label">
          © {new Date().getFullYear()} {personalInfo.name}.{' '}
          {en ? 'Set in IBM Plex. Built with React and Tailwind CSS.' : 'Compuesto en IBM Plex. Hecho con React y Tailwind CSS.'}
        </p>
        <a href="#top" className="label whitespace-nowrap hover:text-ink">
          {en ? 'Back to top ↑' : 'Volver arriba ↑'}
        </a>
      </div>
    </footer>
  );
};
