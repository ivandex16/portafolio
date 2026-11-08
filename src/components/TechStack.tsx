import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techStackData } from '../data/content';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      title={en ? 'Tools, ordered by how often I use them.' : 'Herramientas, por frecuencia de uso.'}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techStackData.map((cat, i) => (
          <Reveal
            key={cat.title.en}
            delay={(i % 3) * 80}
            className={`rounded-3xl border border-rule bg-surface p-6 md:p-8 ${i === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className={`text-xl font-semibold tracking-[-0.02em] ${i === 0 ? 'text-accent' : ''}`}>
                {cat.title[language]}
              </h3>
              <p className="label">{cat.note[language]}</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map(s => (
                <li key={s} className={i === 0 ? 'chip text-sm' : 'rounded-full bg-raised px-3 py-1.5 text-sm'}>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
