import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  // Answers the questions a recruiter screens for, in the order they ask them.
  const facts: [string, React.ReactNode][] = [
    [en ? 'Based in' : 'Ubicación', `${personalInfo.location} · ${personalInfo.timezone}`],
    [en ? 'Experience' : 'Experiencia', en ? `${personalInfo.yearsExperience} years in production TypeScript` : `${personalInfo.yearsExperience} años con TypeScript en producción`],
    [en ? 'Currently' : 'Actualmente', personalInfo.currentRole[language]],
    [en ? 'Looking for' : 'Busco', personalInfo.availability[language]],
    [en ? 'English' : 'Inglés', personalInfo.english[language]],
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-page px-5 pb-8 pt-14 md:px-8 md:pb-12 md:pt-24">
      <div className="page-grid gap-y-14">
        <div className="col-span-4 md:col-span-12 lg:col-span-7">
          <h1
            id="hero-title"
            className="text-[clamp(3.25rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          >
            {/* the name rises out of a mask: one line, not letter by letter */}
            <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="block animate-rise">{personalInfo.shortName}</span>
            </span>
          </h1>
          <p className="mt-6 animate-fade-up text-[clamp(1.5rem,2.6vw,2.125rem)] font-medium [animation-delay:180ms] leading-tight tracking-[-0.02em]">
            {personalInfo.role[language]}
          </p>
          <p className="mt-6 max-w-[36rem] animate-fade-up text-body text-muted [animation-delay:260ms] md:text-lead">{personalInfo.intro[language]}</p>

          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:340ms] sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#work" className="btn-primary group justify-between sm:justify-start">
              {en ? 'Read the case studies' : 'Ver los casos de estudio'}
              <span aria-hidden="true" className="nudge nudge-down">↓</span>
            </a>
            <a
              href={personalInfo.resumePath}
              download="Ivan-Cabeza-CV.pdf"
              className="btn-secondary group justify-between sm:justify-start"
            >
              {en ? 'Download CV' : 'Descargar CV'}
              <span className="font-mono text-meta opacity-70">PDF</span>
            </a>
          </div>
          <p className="mt-6 animate-fade-up text-body text-muted [animation-delay:400ms]">
            {en ? 'Or write to ' : 'O escríbeme a '}
            <a href={`mailto:${personalInfo.email}`} className="link">
              {personalInfo.email}
            </a>
          </p>
        </div>

        {/* Spec sheet: the screening answers, readable in five seconds */}
        <aside
          aria-label={en ? 'At a glance' : 'En resumen'}
          className="col-span-4 self-end md:col-span-8 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9"
        >
          {/* Portrait: B&W so it sits with the palette; 4:5, ~8–15 KB WebP with JPEG fallback */}
          <figure className="mb-8 w-48 animate-fade-up overflow-hidden bg-surface [animation-delay:300ms] sm:w-56">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/ivan-cabeza-480.webp 480w, /images/ivan-cabeza-800.webp 800w"
                sizes="(min-width: 640px) 224px, 192px"
              />
              <img
                src="/images/ivan-cabeza-480.jpg"
                srcSet="/images/ivan-cabeza-480.jpg 480w, /images/ivan-cabeza-800.jpg 800w"
                sizes="(min-width: 640px) 224px, 192px"
                width={480}
                height={600}
                alt={en ? 'Portrait of Ivan Cabeza' : 'Retrato de Iván Cabeza'}
                {...{ fetchpriority: 'high' } /* React 18 only accepts the lowercase DOM attribute */}
                decoding="async"
                className="block h-auto w-full"
              />
            </picture>
          </figure>
          <p className="label flex animate-fade-up items-center gap-2 border-b border-ink pb-3 text-ink [animation-delay:420ms]">
            <span aria-hidden="true" className="h-2 w-2 animate-blink bg-accent" />
            {en ? 'Available for new work' : 'Disponible para nuevos proyectos'}
          </p>
          <dl>
            {/* rows print in like a log */}
            {facts.map(([k, v], i) => (
              <div
                key={k}
                className="grid animate-fade-up grid-cols-[6.75rem_1fr] gap-4 border-b border-rule py-3"
                style={{ animationDelay: `${500 + i * 70}ms` }}
              >
                <dt className="label pt-[3px]">{k}</dt>
                <dd className="text-body leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
};
