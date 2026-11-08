import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData } from '../data/content';
import { Section } from './Section';
import { Reveal } from './Reveal';

/* The CV numbers (records, appointments, form fields) are shown once, in the hero band. */
export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section
      id="experience"
      index="02"
      label={en ? 'Experience' : 'Experiencia'}
      title={en ? 'Where I’ve been shipping.' : 'Dónde he estado trabajando.'}
    >
      {experienceData.map(item => (
        <article
          key={item.company}
          aria-labelledby={`${item.company}-title`}
          className="flex flex-wrap gap-x-16 gap-y-10"
        >
          <Reveal className="min-w-0 flex-[1_1_18rem]">
            <h3
              id={`${item.company}-title`}
              className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-none tracking-[-0.04em]"
            >
              {item.company}
            </h3>
            <p className="mt-4 text-lg">{item.role[language]}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {item.period[language]} · {item.location[language]}
            </p>
            <p className="mt-6 text-base text-muted">{item.summary[language]}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
              {item.tech.map(t => (
                <li key={t} className="rounded-full bg-raised px-3 py-1.5 font-mono text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <ol className="min-w-0 flex-[999_1_32rem] border-t border-rule">
            {item.achievements[language].map((a, i) => {
              const text = typeof a === 'string' ? a : a.text;
              return (
                <Reveal
                  as="li"
                  key={text}
                  delay={i * 70}
                  className="grid grid-cols-[2.5rem_1fr] border-b border-rule py-6"
                >
                  <span className="pt-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-base">
                    {text}
                    {typeof a !== 'string' && (
                      <>
                        {' '}
                        <a href={`#${a.caseId}-title`} className="group whitespace-nowrap font-medium text-accent hover:text-accent-hover">
                          {en ? 'Read the case' : 'Ver el caso'}
                          <span aria-hidden="true" className="nudge nudge-up ml-1">↑</span>
                        </a>
                      </>
                    )}
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </article>
      ))}
    </Section>
  );
};
