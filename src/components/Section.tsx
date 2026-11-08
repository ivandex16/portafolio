import React from 'react';
import { useInView } from '../hooks/motion';

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
 * Every section shares the same skeleton: a 3-column rail with the index and a short label,
 * the heading in the remaining 9 columns, then content on the full 12-column grid.
 */
export const Section: React.FC<SectionProps> = ({ id, index, label, title, intro, children, className = '' }) => {
  const [ref, inView] = useInView<HTMLElement>(0.1);
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto max-w-page px-5 py-16 md:px-8 md:py-24 ${className}`}>
      <header ref={ref} className="page-grid relative pt-5">
        {/* top rule draws from the left the first time the section enters the screen */}
        <span
          aria-hidden="true"
          className={`rule-draw absolute inset-x-0 top-0 h-px bg-ink ${inView ? 'is-drawn' : ''}`}
        />
        <p
          className={`reveal label col-span-4 md:col-span-3 ${inView ? 'is-in' : ''}`}
          style={{ transitionDelay: '150ms' }}
          aria-hidden="true"
        >
          <span className="text-accent">{index}</span>
          <span className="mx-2">/</span>
          {label}
        </p>
        <div
          className={`reveal col-span-4 mt-6 md:col-span-9 md:mt-0 ${inView ? 'is-in' : ''}`}
          style={{ transitionDelay: '250ms' }}
        >
          <h2
            id={`${id}-title`}
            className="max-w-[22ch] text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.025em]"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-prose text-lead text-muted">{intro}</p>}
        </div>
      </header>
      <div className="mt-14 md:mt-20">{children}</div>
    </section>
  );
};
