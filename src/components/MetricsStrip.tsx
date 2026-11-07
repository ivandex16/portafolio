import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { metricsData } from '../data/content';

export const MetricsStrip: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="border-y border-zinc-200/80 bg-zinc-50/50 py-8 transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {metricsData.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-mono text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </span>
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                {item.label[language]}
              </span>
              <span className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
                {item.description[language]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
