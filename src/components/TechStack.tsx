import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techStackData } from '../data/content';
import { Code2, Database, Shield, Cloud } from './Icons';

export const TechStack: React.FC = () => {
  const { language } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="h-4 w-4 text-cyan-500" />;
      case 1: return <Database className="h-4 w-4 text-emerald-500" />;
      case 2: return <Shield className="h-4 w-4 text-indigo-500" />;
      case 3: return <Cloud className="h-4 w-4 text-amber-500" />;
      default: return <Code2 className="h-4 w-4 text-cyan-500" />;
    }
  };

  return (
    <section id="stack" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-500">
            {language === 'en' ? 'Technical Arsenal' : 'Arsenal Técnico'}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {language === 'en' ? 'Technologies & Architectural Capabilities' : 'Tecnologías y Capacidades Arquitectónicas'}
          </h2>
          <p className="max-w-2xl text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
            {language === 'en'
              ? 'Organized by practical production application rather than arbitrary percentage bars.'
              : 'Organizado por aplicación práctica en producción en lugar de barras porcentuales arbitrarias.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {techStackData.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 border-b border-zinc-100 pb-3 dark:border-zinc-800">
                {getCategoryIcon(idx)}
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {category.title[language]}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800 transition hover:border-cyan-500/50 hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-cyan-500/50"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
