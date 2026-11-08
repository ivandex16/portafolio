import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/content';
import { Project } from '../types';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { FlowDiagram } from './FlowDiagram';
import { ScreenStack } from './ScreenStack';
import { CountUp } from './CountUp';
import { ArrowUpRight, GithubLogo } from './PhosphorIcons';

/** A GitHub URL with only one path segment is a profile, not a repository. Label it honestly. */
const isProfileUrl = (url: string) => new URL(url).pathname.split('/').filter(Boolean).length < 2;

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h4 className="label mb-3">{title}</h4>
    <div className="text-base text-ink">{children}</div>
  </div>
);

const Links: React.FC<{ project: Project }> = ({ project }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const { links } = project;

  if (links?.isNDA) {
    return (
      <p className="max-w-[28rem] text-sm text-muted">
        {en
          ? 'Code under NDA. Happy to walk through the design in an interview.'
          : 'Código bajo NDA. Puedo explicar el diseño en una entrevista.'}
      </p>
    );
  }
  if (!links?.demo && !links?.github) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-ink px-4 text-sm font-semibold text-paper transition-transform duration-300 ease-out-expo active:scale-[0.98]"
        >
          {en ? 'Live demo' : 'Ver demo en vivo'}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-rule-strong px-4 text-sm font-semibold text-ink transition-[transform,border-color] duration-300 ease-out-expo hover:border-ink active:scale-[0.98]"
        >
          <GithubLogo aria-hidden="true" className="h-4 w-4" />
          {isProfileUrl(links.github)
            ? en ? 'GitHub profile' : 'Perfil de GitHub'
            : en ? 'Source on GitHub' : 'Código en GitHub'}
        </a>
      )}
    </div>
  );
};

const CaseStudy: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const number = String(index + 1).padStart(2, '0');
  const flipped = index % 2 === 1;
  const diagramLabel = en ? `Architecture flow: ${project.title}` : `Flujo de arquitectura: ${project.title}`;
  const { metric, label } = project.result;

  return (
    <Reveal as="article" aria-labelledby={`${project.id}-title`} className="card overflow-hidden">
      {/* Summary and architecture side by side */}
      <div className={`flex flex-wrap ${flipped ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex min-w-0 flex-[999_1_28rem] flex-col gap-6 p-7 md:p-12 lg:p-14">
          <p className="label flex flex-wrap gap-x-2 gap-y-1">
            <span className="text-ink">{en ? `Case ${number}` : `Caso ${number}`}</span>
            <span aria-hidden="true">·</span>
            <span>{project.context[language]}</span>
          </p>
          <h3
            id={`${project.id}-title`}
            className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
          >
            {project.title}
          </h3>
          {metric && (
            <p className="text-4xl font-semibold tracking-[-0.03em] text-accent tabular-nums">
              <CountUp value={metric} />
            </p>
          )}
          <p className="max-w-[34rem] text-lg text-ink">{label[language]}</p>
          <div className="mt-auto rounded-2xl border border-rule bg-paper p-5">
            <p className="label mb-2">{en ? 'My role' : 'Mi rol'}</p>
            <p className="text-sm text-ink">{project.role[language]}</p>
          </div>
        </div>

        <figure
          className={`grid-bg min-w-0 flex-[1_1_22rem] border-rule bg-paper p-7 md:p-12 lg:p-14 ${
            flipped ? 'border-b lg:border-b-0 lg:border-r' : 'border-t lg:border-l lg:border-t-0'
          }`}
        >
          <figcaption className="label mb-6">{project.pipeline.caption[language]}</figcaption>
          <FlowDiagram pipeline={project.pipeline} label={diagramLabel} />
        </figure>
      </div>

      {/* Problem, approach and decisions */}
      <div className="grid gap-10 border-t border-rule p-7 md:grid-cols-2 md:p-12 lg:grid-cols-3 lg:p-14">
        <Block title={en ? 'Problem' : 'Problema'}>{project.problem[language]}</Block>
        <Block title={en ? 'Approach' : 'Solución'}>{project.solution[language]}</Block>
        {project.decisions && (
          <Block title={en ? 'Key decisions' : 'Decisiones clave'}>
            <ol className="space-y-4">
              {project.decisions[language].map((d, i) => (
                <li key={d} className="grid grid-cols-[1.75rem_1fr]">
                  <span className="font-mono text-xs text-accent pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}
      </div>

      {project.screens && project.screens.length > 0 && (
        <div className="relative overflow-hidden border-t border-rule bg-paper p-7 md:p-12 lg:p-14">
          <div aria-hidden="true" className="glow -bottom-56 -right-32 h-[26rem] w-[40rem] !opacity-[0.08]" />
          <div className="relative">
            <ScreenStack
              screens={project.screens}
              label={en ? `Screenshots: ${project.title}` : `Capturas: ${project.title}`}
            />
          </div>
        </div>
      )}

      {/* Stack and links */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-rule p-7 md:px-12 lg:px-14">
        <ul className="flex flex-wrap gap-2" aria-label="Stack">
          {project.tech.map(t => (
            <li key={t} className="rounded-full bg-raised px-3 py-1.5 font-mono text-xs text-ink">
              {t}
            </li>
          ))}
        </ul>
        <Links project={project} />
      </div>
    </Reveal>
  );
};

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <Section
      id="work"
      index="01"
      label={en ? 'Selected work' : 'Trabajo seleccionado'}
      title={en ? 'Real systems, written up as case studies.' : 'Sistemas reales, contados como casos de estudio.'}
      intro={
        en
          ? 'Problem, decisions and result, the way I’d explain them in a technical interview. No made-up metrics.'
          : 'Problema, decisiones y resultado, como los explicaría en una entrevista técnica. Sin métricas inventadas.'
      }
    >
      <div className="space-y-8 md:space-y-10">
        {projectsData.map((p, i) => (
          <CaseStudy key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
};
