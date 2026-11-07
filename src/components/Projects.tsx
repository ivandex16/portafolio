import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/content';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Eye, Layers, TrendingUp } from './Icons';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-500">
            {language === 'en' ? 'Engineered Systems' : 'Sistemas de Ingeniería'}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {language === 'en' ? 'Featured Production & Architectural Projects' : 'Proyectos Destacados en Producción y Arquitectura'}
          </h2>
          <p className="max-w-2xl text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
            {language === 'en'
              ? 'Real-world solutions highlighting distributed systems, strict type contracts, and database optimization.'
              : 'Soluciones reales enfocadas en sistemas distribuidos, contratos de tipos estrictos y optimización de bases de datos.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(project => (
            <article
              key={project.id}
              className="glow-card flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/90"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300">
                    {project.badge[language]}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  {project.role[language]}
                </p>

                {/* Problem Statement */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {language === 'en' ? 'The Challenge' : 'El Desafío'}
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.problem[language]}
                  </p>
                </div>

                {/* Solution */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {language === 'en' ? 'Engineering Solution' : 'Solución de Ingeniería'}
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {project.solution[language]}
                  </p>
                </div>

                {/* Impact Highlight */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                  <TrendingUp className="h-4 w-4 shrink-0 text-emerald-500" />
                  <div className="text-[11px] leading-tight text-emerald-700 dark:text-emerald-400">
                    <span className="font-bold">{project.impact.metric}:</span> {project.impact.label[language]}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-zinc-200/80 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                {project.links?.isNDA ? (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-zinc-900 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    <Layers className="h-3.5 w-3.5 text-cyan-500" />
                    <span>{language === 'en' ? 'Architecture Breakdown' : 'Ver Arquitectura'}</span>
                  </button>
                ) : (
                  <>
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-cyan-600 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-cyan-500"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>{language === 'en' ? 'Live Demo' : 'Ver Demo'}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>{language === 'en' ? 'Source' : 'Código'}</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
