import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData, personalInfo, techStackData } from '../data/content';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const lines = personalInfo.headline[language];
  const highlights = experienceData[0].highlights;
  const core = techStackData[0].skills;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* engineering grid + one accent light */}
      <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
      <div aria-hidden="true" className="glow -right-32 -top-56 h-[40rem] w-[40rem]" />

      <div className="page relative pb-16 pt-16 md:pb-20 md:pt-24 lg:pt-32">
        <div className="flex flex-wrap items-end gap-12 lg:flex-nowrap">
          <div className="min-w-0 flex-[999_1_34rem]">
            <p className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-rule bg-surface px-3.5 py-1.5 font-mono text-xs text-ink">
              <span aria-hidden="true" className="status-dot relative h-2 w-2 rounded-full bg-[#3ddc84]" />
              {en ? 'Available · remote · USD or COP' : 'Disponible · remoto · USD o COP'}
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-[clamp(2.75rem,7.4vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            >
              {/* each line rises out of its own mask */}
              {lines.map((line, i) => (
                <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
                  <span className="hero-gradient block animate-rise" style={{ animationDelay: `${i * 120}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[38rem] animate-fade-up text-lg text-muted [animation-delay:260ms]">
              <span className="font-medium text-ink">{personalInfo.role[language]}</span> {personalInfo.intro[language]}
            </p>

            <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:340ms]">
              <a href="#work" className="btn-primary group">
                {en ? 'See the case studies' : 'Ver casos de estudio'}
                <span aria-hidden="true" className="nudge nudge-down">↓</span>
              </a>
              <a href={personalInfo.resumePath} download="Ivan-Cabeza-CV.pdf" className="btn-secondary group">
                {en ? 'Download CV' : 'Descargar CV'}
                <span className="font-mono text-xs text-muted">PDF</span>
              </a>
            </div>
            <p className="mt-6 animate-fade-up font-mono text-xs text-muted [animation-delay:400ms]">
              {en ? 'English' : 'Inglés'} {personalInfo.english[language]}
            </p>
          </div>

          {/* Portrait: B&W with an accent tint, caption floats over it */}
          <figure className="relative w-full max-w-[18rem] flex-[1_1_15rem] animate-fade-up [animation-delay:300ms] sm:max-w-[20rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-rule bg-surface">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/ivan-cabeza-480.webp 480w, /images/ivan-cabeza-800.webp 800w"
                  sizes="(min-width: 640px) 320px, 288px"
                />
                <img
                  src="/images/ivan-cabeza-480.jpg"
                  srcSet="/images/ivan-cabeza-480.jpg 480w, /images/ivan-cabeza-800.jpg 800w"
                  sizes="(min-width: 640px) 320px, 288px"
                  width={480}
                  height={600}
                  alt={en ? 'Portrait of Ivan Cabeza' : 'Retrato de Iván Cabeza'}
                  {...{ fetchpriority: 'high' } /* React 18 only accepts the lowercase DOM attribute */}
                  decoding="async"
                  className="block h-full w-full object-cover grayscale"
                />
              </picture>
              <div aria-hidden="true" className="absolute inset-0 bg-accent opacity-25 mix-blend-multiply" />
            </div>
            <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-white/80 backdrop-blur-md">
              <span className="truncate">{personalInfo.location}</span>
              <span className="whitespace-nowrap text-white">{personalInfo.timezone}</span>
            </figcaption>
          </figure>
        </div>

        {/* The numbers from the CV, each with what produced it */}
        <Reveal
          as="ul"
          aria-label={en ? 'In numbers' : 'En cifras'}
          className="mt-16 grid overflow-hidden rounded-3xl border border-rule bg-surface sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ...highlights.map(h => ({
              value: typeof h.value === 'string' ? h.value : h.value[language],
              label: h.label[language],
            })),
            {
              value: `${personalInfo.yearsExperience} ${en ? 'years' : 'años'}`,
              label: en ? 'building software that runs in production' : 'construyendo software que está en producción',
            },
          ].map((m, i) => (
            <li
              key={i}
              className="border-rule p-6 md:p-8 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
            >
              <p
                className={`text-4xl font-semibold leading-none tracking-[-0.04em] tabular-nums md:text-5xl ${
                  i === 0 ? 'text-accent' : 'text-ink'
                }`}
              >
                <CountUp value={m.value} />
              </p>
              <p className="mt-3 text-sm text-muted">{m.label}</p>
            </li>
          ))}
        </Reveal>

        {/* Core stack as a quick strip; the full list lives in the Stack section */}
        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-2">
          <span className="label mr-2">{en ? 'Core stack' : 'Stack base'}</span>
          {core.map(s => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
