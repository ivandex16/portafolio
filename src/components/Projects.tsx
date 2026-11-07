import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/content';
import { Project } from '../types';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { FlowDiagram } from './FlowDiagram';
import { CountUp, ShrinkBar, parseBeforeAfter } from './CountUp';

/** A GitHub URL with only one path segment is a profile, not a repository. Label it honestly. */
const isProfileUrl = (url: string) => new URL(url).pathname.split('/').filter(Boolean).length < 2;

const Block: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({
  title,
  children,
  className = '',
}) => (
  <div className={className}>
    <h4 className="label mb-3 text-ink">{title}</h4>
    <div className="text-body">{children}</div>
  </div>
);

const Decisions: React.FC<{ items: string[] }> = ({ items }) => (
  <ol className="space-y-4">
    {items.map((d, i) => (
      <li key={d} className="grid grid-cols-[1.75rem_1fr]">
        <span className="label pt-[3px]">{String.fromCharCode(97 + i)}.</span>
        <span>{d}</span>
      </li>
    ))}
  </ol>
);

const Result: React.FC<{ project: Project }> = ({ project }) => {
  const { language } = useLanguage();
  const { metric, label } = project.result;
  return (
    <div className="border-l-2 border-accent pl-5">
      {metric && (
        <p className="font-mono text-[clamp(1.5rem,2.4vw,2rem)] leading-tight tracking-[-0.02em] text-ink tabular-nums">
          <CountUp value={metric} />
        </p>
      )}
      {metric && parseBeforeAfter(metric) && (
        <ShrinkBar ratio={parseBeforeAfter(metric)!.ratio} label={label[language]} />
      )}
      <p className={metric ? 'mt-2 text-body text-muted' : 'text-lead text-ink'}>{label[language]}</p>
    </div>
  );
};

const Links: React.FC<{ project: Project }> = ({ project }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const { links } = project;

  if (links?.isNDA) {
    return (
      <p className="text-muted">
        {en ? 'Code under NDA. Happy to walk through the design in an interview.' : 'Código bajo NDA. Puedo explicar el diseño en una entrevista.'}
      </p>
    );
  }
  if (!links?.demo && !links?.github) return null;

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {links.demo && (
        <li>
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="link">
            {en ? 'Live demo' : 'Demo en vivo'} <span aria-hidden="true">↗</span>
          </a>
        </li>
      )}
      {links.github && (
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="link">
            {isProfileUrl(links.github)
              ? en ? 'GitHub profile' : 'Perfil de GitHub'
              : en ? 'Source on GitHub' : 'Código en GitHub'}{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      )}
    </ul>
  );
};

const CaseStudy: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const number = String(index + 1).padStart(2, '0');
  const flipped = project.layout === 'split' && index % 2 === 0;
  const diagramLabel = en ? `Architecture flow: ${project.title}` : `Flujo de arquitectura: ${project.title}`;

  const figure = (
    <figure className="bg-surface p-5 md:p-8">
      {project.media && (
        <img
          src={project.media.src}
          width={project.media.width}
          height={project.media.height}
          alt={project.media.alt[language]}
          loading="lazy"
          decoding="async"
          className="mb-8 h-auto w-full border border-rule"
        />
      )}
      <FlowDiagram pipeline={project.pipeline} label={diagramLabel} wide={project.layout === 'wide'} />
      <figcaption className="label mt-6 border-t border-rule pt-4">{project.pipeline.caption[language]}</figcaption>
    </figure>
  );

  const footer = (
    <Reveal as="dl" className="page-grid mt-12 gap-y-6 border-t border-rule pt-6 text-body">
      <div className="col-span-4 md:col-span-4">
        <dt className="label mb-1">{en ? 'My role' : 'Mi rol'}</dt>
        <dd>{project.role[language]}</dd>
      </div>
      <div className="col-span-4 md:col-span-4">
        <dt className="label mb-1">Stack</dt>
        <dd>{project.tech.join(', ')}</dd>
      </div>
      <div className="col-span-4 md:col-span-4">
        <dt className="label mb-1">{en ? 'Links' : 'Enlaces'}</dt>
        <dd>
          <Links project={project} />
        </dd>
      </div>
    </Reveal>
  );

  return (
    <article aria-labelledby={`${project.id}-title`} className="border-t border-rule pt-8 first:border-t-0 first:pt-0">
      <Reveal>
      <p className="label">
        <span className="text-ink">{en ? `Case ${number}` : `Caso ${number}`}</span>
        <span aria-hidden="true" className="mx-2">·</span>
        {project.context[language]}
      </p>

      <div className="page-grid mt-5 gap-y-8">
        <h3
          id={`${project.id}-title`}
          className="col-span-4 text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.025em] md:col-span-7"
        >
          {project.title}
        </h3>
        <div className="col-span-4 md:col-span-5 md:col-start-8 md:pt-2">
          <Result project={project} />
        </div>
      </div>
      </Reveal>

      {project.layout === 'wide' ? (
        <>
          <Reveal className="mt-12" delay={80}>{figure}</Reveal>
          <Reveal className="page-grid mt-12 gap-y-10">
            <Block title={en ? 'Problem' : 'Problema'} className="col-span-4 md:col-span-6 lg:col-span-4">
              {project.problem[language]}
            </Block>
            <Block title={en ? 'Approach' : 'Solución'} className="col-span-4 md:col-span-6 lg:col-span-4">
              {project.solution[language]}
            </Block>
            {project.decisions && (
              <Block title={en ? 'Key decisions' : 'Decisiones clave'} className="col-span-4 md:col-span-12 lg:col-span-4">
                <Decisions items={project.decisions[language]} />
              </Block>
            )}
          </Reveal>
        </>
      ) : (
        <div className="page-grid mt-12 gap-y-10">
          <Reveal
            className={`col-span-4 space-y-10 md:col-span-6 lg:col-span-6 ${
              flipped ? 'md:order-2 md:col-start-7 lg:col-start-7' : ''
            }`}
          >
            <Block title={en ? 'Problem' : 'Problema'}>{project.problem[language]}</Block>
            <Block title={en ? 'Approach' : 'Solución'}>{project.solution[language]}</Block>
            {project.decisions && (
              <Block title={en ? 'Key decisions' : 'Decisiones clave'}>
                <Decisions items={project.decisions[language]} />
              </Block>
            )}
          </Reveal>
          <Reveal
            delay={120}
            className={`col-span-4 md:col-span-6 lg:col-span-5 ${flipped ? 'md:order-1 lg:col-start-1' : 'lg:col-start-8'}`}
          >
            {figure}
          </Reveal>
        </div>
      )}

      {footer}
    </article>
  );
};

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section
      id="work"
      index="01"
      label={en ? 'Work' : 'Proyectos'}
      title={en ? 'Three systems, written up as case studies' : 'Tres sistemas, contados como casos de estudio'}
      intro={
        en
          ? 'Roughly how I’d explain them in a technical interview: what was going wrong, what I chose and why, and what changed.'
          : 'Más o menos como los explicaría en una entrevista técnica: qué fallaba, qué decidí y por qué, y qué cambió.'
      }
    >
      <div className="space-y-24 md:space-y-36">
        {projectsData.map((p, i) => (
          <CaseStudy key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
};
