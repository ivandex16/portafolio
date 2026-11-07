import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData } from '../data/content';
import { Briefcase, Calendar, MapPin, CheckCircle } from './Icons';

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="border-t border-zinc-200/80 bg-zinc-50/50 py-16 md:py-24 transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-500">
            {language === 'en' ? 'Track Record' : 'Trayectoria'}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {language === 'en' ? 'Professional Engineering Experience' : 'Experiencia Profesional en Ingeniería'}
          </h2>
          <p className="max-w-2xl text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
            {language === 'en'
              ? 'Delivering stable, scalable, and high-performance software in production environments.'
              : 'Entrega de software estable, escalable y de alto rendimiento en entornos de producción.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-10 space-y-8">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Top Meta */}
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-cyan-500" />
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {item.company}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-zinc-700 sm:text-sm dark:text-zinc-300">
                    {item.role[language]}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period[language]}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location[language]}
                  </span>
                </div>
              </div>

              {/* Achievements with metrics */}
              <div className="mt-5 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {language === 'en' ? 'Core Achievements & Production Impact' : 'Logros Principales e Impacto en Producción'}
                </span>
                <ul className="space-y-2.5">
                  {item.achievements[language].map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-700 sm:text-sm dark:text-zinc-300">
                      <CheckCircle className="h-4 w-4 shrink-0 text-cyan-500 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Used */}
              <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {language === 'en' ? 'Applied Stack' : 'Tecnologías Aplicadas'}
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
