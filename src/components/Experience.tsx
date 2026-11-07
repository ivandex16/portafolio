import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData } from '../data/content';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section id="experience" index="02" label={en ? 'Experience' : 'Experiencia'} title={en ? 'Where I’ve been shipping' : 'Dónde he estado trabajando'}>
      {experienceData.map(item => (
        <article key={item.company} aria-labelledby={`${item.company}-title`}>
          <Reveal className="page-grid gap-y-3">
            <div className="col-span-4 md:col-span-8">
              <h3 id={`${item.company}-title`} className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.025em]">
                {item.company}
              </h3>
              <p className="mt-2 text-lead">{item.role[language]}</p>
            </div>
            <p className="label col-span-4 md:col-span-4 md:pt-3 md:text-right">
              <span className="block text-ink">{item.period[language]}</span>
              <span className="block">{item.location[language]}</span>
            </p>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 max-w-[44rem] text-lead text-muted">
            {item.summary[language]}
          </Reveal>

          {/* The three numbers that matter, each with what produced it */}
          <ul className="page-grid mt-14 gap-y-8 border-y border-rule py-8">
            {item.highlights.map((h, i) => {
              const value = typeof h.value === 'string' ? h.value : h.value[language];
              return (
              <Reveal as="li" key={i} delay={i * 90} className="col-span-4 md:col-span-4">
                <p className="font-mono text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[-0.03em] text-accent tabular-nums">
                  <CountUp value={value} />
                </p>
                <p className="mt-3 max-w-[20rem] text-body text-muted">{h.label[language]}</p>
              </Reveal>
              );
            })}
          </ul>

          <Reveal className="page-grid mt-12 gap-y-10">
            <div className="col-span-4 md:col-span-3">
              <h4 className="label text-ink">{en ? 'Also' : 'Además'}</h4>
            </div>
            <ul className="col-span-4 space-y-4 md:col-span-9 lg:col-span-7">
              {item.achievements[language].map(a => (
                <li key={a} className="grid grid-cols-[1.25rem_1fr] text-body">
                  <span aria-hidden="true" className="text-muted">–</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="col-span-4 md:col-span-3">
              <h4 className="label text-ink">Stack</h4>
            </div>
            <p className="col-span-4 text-body text-muted md:col-span-9 lg:col-span-7">{item.tech.join(', ')}</p>
          </Reveal>
        </article>
      ))}
    </Section>
  );
};
