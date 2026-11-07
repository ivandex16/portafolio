import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educationData, languagesData } from '../data/content';
import { GraduationCap, Award, Globe2, CheckCircle2 } from './Icons';

export const Education: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="education" className="border-t border-zinc-200/80 bg-zinc-50/50 py-16 md:py-24 transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-500">
            {language === 'en' ? 'Credentials' : 'Credenciales'}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {language === 'en' ? 'Education, Certifications & Languages' : 'Educación, Certificaciones e Idiomas'}
          </h2>
        </div>

        {/* Education & Certs Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-500">
                  {idx === 0 ? <GraduationCap className="h-4 w-4" /> : <Award className="h-4 w-4 text-indigo-500" />}
                  <span className="font-mono text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title[language]}
                </h3>
                <p className="mt-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {item.institution}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.details[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Banner */}
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
            <Globe2 className="h-4 w-4 text-cyan-500" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {language === 'en' ? 'Language Proficiencies' : 'Dominio de Idiomas'}
            </h3>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {languagesData.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3 dark:border-zinc-800/80 dark:bg-zinc-950/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {lang.name[language]}:
                  </span>
                  <span className="ml-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {lang.level[language]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
