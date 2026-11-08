import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educationData, languagesData } from '../data/content';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRight } from './PhosphorIcons';

export const Education: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section
      id="education"
      index="04"
      label={en ? 'Background' : 'Formación'}
      title={en ? 'Education and languages.' : 'Formación e idiomas.'}
    >
      <div className="flex flex-wrap gap-4">
        <ol className="grid min-w-0 flex-[999_1_36rem] gap-4">
          {educationData.map((item, i) => (
            <Reveal
              as="li"
              key={item.title.en}
              delay={i * 80}
              className="grid gap-x-8 gap-y-2 rounded-3xl border border-rule bg-surface p-6 sm:grid-cols-[10rem_1fr] md:p-8"
            >
              <p className="whitespace-nowrap pt-1 font-mono text-xs text-muted">{item.period[language]}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em]">{item.title[language]}</h3>
                <p className="text-sm text-muted">{item.institution[language]}</p>
                <p className="mt-3 max-w-[40rem] text-base">{item.details[language]}</p>
                {item.verify && (
                  <a
                    href={item.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    {en ? 'Verify certificate' : 'Verificar certificado'}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160} className="min-w-0 flex-[1_1_16rem] self-start rounded-3xl border border-rule bg-surface p-6 md:p-8">
          <h3 className="label">{en ? 'Languages' : 'Idiomas'}</h3>
          <dl className="mt-5 space-y-5">
            {languagesData.map(l => (
              <div key={l.name.en}>
                <dt className="text-lg font-semibold">{l.name[language]}</dt>
                <dd className="text-sm text-muted">{l.level[language]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
};
