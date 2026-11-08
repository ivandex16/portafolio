import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Every section shares the same header: an accent mono index ("01 — WORK"), a large heading,
 * and an optional short intro that sits to the right of the heading on wide screens.
 */
export const Section: React.FC<SectionProps> = ({ id, index, label, title, intro, children, className = '' }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`page py-20 md:py-32 ${className}`}>
    <header className="flex flex-wrap items-end justify-between gap-6">
      <Reveal className="min-w-0 max-w-[48rem]">
        <p className="label text-accent" aria-hidden="true">
          {index} — {label}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.04em]"
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal as="p" delay={120} className="max-w-[24rem] text-base text-muted">
          {intro}
        </Reveal>
      )}
    </header>
    <div className="mt-12 md:mt-16">{children}</div>
  </section>
);
