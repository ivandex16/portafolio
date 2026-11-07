import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educationData, languagesData } from '../data/content';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Education: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section id="education" index="04" label={en ? 'Background' : 'Formación'} title={en ? 'Education and languages' : 'Formación e idiomas'}>
      <div className="page-grid gap-y-14">
        <ol className="col-span-4 md:col-span-12 lg:col-span-8">
          {educationData.map((item, i) => (
            <Reveal as="li" key={item.title.en} delay={i * 80} className="grid gap-x-8 gap-y-1 border-t border-rule py-6 sm:grid-cols-[10.5rem_1fr]">
              <p className="label whitespace-nowrap pt-1">{item.period[language]}</p>
              <div>
                <h3 className="text-lead font-medium">{item.title[language]}</h3>
                <p className="text-body text-muted">{item.institution[language]}</p>
                <p className="mt-3 max-w-prose text-body">{item.details[language]}</p>
                {item.verify && (
                  <a href={item.verify} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block text-body">
                    {en ? 'Verify certificate' : 'Verificar certificado'} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160} className="col-span-4 md:col-span-6 lg:col-span-3 lg:col-start-10">
          <h3 className="label border-t border-ink pt-6 text-ink">{en ? 'Languages' : 'Idiomas'}</h3>
          <dl className="mt-4 space-y-4">
            {languagesData.map(l => (
              <div key={l.name.en}>
                <dt className="text-lead font-medium">{l.name[language]}</dt>
                <dd className="text-body text-muted">{l.level[language]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
};
