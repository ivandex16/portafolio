import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from './PhosphorIcons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';
import { Reveal } from './Reveal';

/*
  Contact, built on the landing-page-design skill rules:
  Phosphor icons, Tailwind type scale, full borders on cards,
  base curve cubic-bezier(0.22,1,0.36,1) on transform/opacity only,
  hover + active + focus states on every control.
*/
const EASE = 'ease-out-expo';

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

  const waText = encodeURIComponent(
    en
      ? 'Hi Ivan, I saw your portfolio and would like to talk about a role.'
      : 'Hola Iván, vi tu portafolio y me gustaría hablar sobre una oportunidad.'
  );
  const whatsappHref = `${personalInfo.whatsapp}?text=${waText}`;

  const tile = `group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-rule bg-paper p-4 transition-[transform,border-color] duration-300 sm:p-5 ${EASE} active:scale-[0.98]`;
  const sweep = `pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ${EASE} group-hover:scale-x-100`;
  const arrow = `relative h-5 w-5 shrink-0 text-muted transition-transform duration-500 ${EASE} group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink`;

  const secondary = [
    { label: 'LinkedIn', href: personalInfo.linkedin, Icon: LinkedinLogo, external: true },
    { label: 'GitHub', href: personalInfo.github, Icon: GithubLogo, external: true },
    { label: en ? 'Download CV' : 'Descargar CV', href: personalInfo.resumePath, Icon: DownloadSimple, download: 'Ivan-Cabeza-CV.pdf' },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="page py-20 md:py-32">
      <div className="card relative overflow-hidden p-7 md:p-14 lg:p-20">
        <div aria-hidden="true" className="glow -bottom-64 -left-40 h-[36rem] w-[36rem] !opacity-[0.16]" />

        <div className="relative flex flex-wrap items-end gap-12">
          <Reveal className="min-w-0 flex-[999_1_28rem]">
            <p className="label text-accent" aria-hidden="true">
              05 — {en ? 'Contact' : 'Contacto'}
            </p>
            <h2
              id="contact-title"
              className="mt-4 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.05em]"
            >
              {en ? 'Let’s talk.' : 'Hablemos.'}
            </h2>
            <p className="mt-6 max-w-[30rem] text-lg text-muted">
              {en
                ? 'Remote contractor (B2B, USD or COP), and open to roles at Colombian companies. My hours overlap US Eastern time.'
                : 'Contractor remoto (B2B, USD o COP) y abierto a empresas colombianas. Mi horario coincide con el Este de EE. UU.'}
            </p>
          </Reveal>

          <div className="flex min-w-0 flex-[1_1_22rem] flex-col gap-3">
            {/* WhatsApp: the fastest way to reach me, so it leads */}
            <Reveal delay={100}>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`${tile} hover:border-[#25D366]`}>
                <span aria-hidden="true" className={`${sweep} bg-[#25D366]/10`} />
                <span aria-hidden="true" className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
                  <span className="wa-ring" />
                  <span className="wa-ring [animation-delay:600ms]" />
                  <WhatsappLogo className={`relative h-6 w-6 transition-transform duration-500 ${EASE} group-hover:scale-110`} />
                </span>
                <span className="relative min-w-0 flex-1">
                  <span className="block text-sm text-muted">WhatsApp</span>
                  <span className="block text-lg font-semibold">{personalInfo.phone}</span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {en ? 'Opens a chat with a message ready to send' : 'Abre un chat con el mensaje listo para enviar'}
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className={arrow} />
              </a>
            </Reveal>

            {/* Email: whole tile is the mailto link; the copy button sits above it */}
            <Reveal delay={200}>
              <div className={`${tile} hover:border-ink`}>
                <span aria-hidden="true" className={`${sweep} bg-raised`} />
                <span aria-hidden="true" className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-rule-strong text-ink">
                  <EnvelopeSimple className={`h-6 w-6 transition-transform duration-500 ${EASE} group-hover:-rotate-6`} />
                </span>
                <span className="relative min-w-0 flex-1">
                  <span className="block text-sm text-muted">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block text-base font-semibold after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent sm:text-lg"
                  >
                    {/* if it ever has to wrap, wrap after the @ rather than mid-word */}
                    {personalInfo.email.split('@')[0]}@<wbr />
                    {personalInfo.email.split('@')[1]}
                  </a>
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`relative z-10 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-rule-strong px-3 py-2 font-mono text-xs transition-[transform,border-color] duration-300 ${EASE} hover:border-ink active:scale-[0.98]`}
                >
                  {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  <span aria-live="polite" className="sr-only sm:not-sr-only">
                    {copied ? (en ? 'Copied' : 'Copiado') : en ? 'Copy' : 'Copiar'}
                  </span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={300} as="ul" className="flex flex-wrap gap-x-6 gap-y-2 px-1 pt-2">
              {secondary.map(({ label, href, Icon, external, download }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(download ? { download } : {})}
                    className={`group inline-flex min-h-11 items-center gap-2 text-base font-medium transition-transform duration-300 ${EASE} active:translate-y-px`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-muted transition-colors duration-300 group-hover:text-ink" />
                    <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-accent">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
