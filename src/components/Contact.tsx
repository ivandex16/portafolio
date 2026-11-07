import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';
import { Copy, Check } from './Icons';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const channels = [
    { label: 'LinkedIn', href: personalInfo.linkedin, text: 'in/ivancbgz', external: true },
    { label: 'GitHub', href: personalInfo.github, text: 'github.com/ivandex16', external: true },
    { label: 'CV', href: personalInfo.resumePath, text: en ? 'Download PDF' : 'Descargar PDF', download: 'Ivan-Cabeza-CV.pdf' },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="inverse bg-paper text-ink">
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-32">
        <p className="label" aria-hidden="true">
          <span className="text-accent">05</span>
          <span className="mx-2">/</span>
          {en ? 'Contact' : 'Contacto'}
        </p>

        <div className="page-grid mt-8 gap-y-12">
          <Reveal className="col-span-4 md:col-span-12 lg:col-span-7">
            <h2 id="contact-title" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em]">
              {en ? 'Hiring for a remote TypeScript role?' : '¿Buscas un ingeniero TypeScript remoto?'}
            </h2>
            <p className="mt-6 max-w-prose text-lead text-muted">
              {en
                ? 'I work as a contractor (B2B, invoiced in USD) with full-time remote teams. My working hours overlap US Eastern time.'
                : 'Trabajo como contractor (B2B, facturando en USD) con equipos remotos a tiempo completo. Mi horario coincide con el Este de EE. UU.'}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="break-all text-[clamp(1.375rem,3vw,2.25rem)] font-medium tracking-[-0.02em] underline decoration-muted decoration-1 underline-offset-[8px] transition-[text-decoration-color] hover:decoration-accent"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center gap-2 border border-rule px-3 font-mono text-meta text-ink transition-colors hover:border-ink"
              >
                {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                <span aria-live="polite">{copied ? (en ? 'Copied' : 'Copiado') : en ? 'Copy' : 'Copiar'}</span>
              </button>
            </div>
          </Reveal>

          <Reveal as="dl" delay={150} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            {channels.map(c => (
              <div key={c.label} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-rule py-4 last:border-b">
                <dt className="label">{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(c.download ? { download: c.download } : {})}
                    className="group inline-flex items-center gap-2 underline decoration-transparent underline-offset-[5px] transition-[text-decoration-color] hover:decoration-accent"
                  >
                    {c.text}
                    <span aria-hidden="true" className="nudge nudge-right text-muted">
                      {c.download ? '↓' : '↗'}
                    </span>
                  </a>
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
