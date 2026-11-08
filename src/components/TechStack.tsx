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
      title={en ? 'Tools, ordered by how often I use them' : 'Herramientas, por frecuencia de uso'}
    >
      <dl className="border-t border-rule">
        {techStackData.map((cat, i) => (
          <Reveal key={cat.title.en} delay={i * 70} className="page-grid gap-y-2 border-b border-rule py-6 md:py-7">
            <dt className="col-span-4 md:col-span-3">
              <span className={`block text-lead font-medium ${i === 0 ? 'text-accent' : ''}`}>{cat.title[language]}</span>
              <span className="label mt-1 block">{cat.note[language]}</span>
            </dt>
            <dd className="col-span-4 md:col-span-9">
              <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${i === 0 ? 'text-lead text-ink' : 'text-body text-ink'} md:pt-[2px]`}>
                {cat.skills.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
};
