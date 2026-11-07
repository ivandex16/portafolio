import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';
import { ArrowDown, Mail, Github, Linkedin, FileDown, ShieldCheck, Terminal } from './Icons';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/30 dark:text-emerald-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span>{personalInfo.availability[language]}</span>
        </div>

        {/* Candidate Identity & Role */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              {personalInfo.shortName}
            </h1>
            <span className="hidden items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 sm:inline-flex dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              <Terminal className="h-3 w-3 text-cyan-500" />
              TypeScript Engineer
            </span>
          </div>

          <h2 className="max-w-3xl text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl lg:text-3xl dark:text-zinc-200">
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              {personalInfo.title[language]}
            </span>
            <span className="block text-base font-medium text-zinc-600 sm:text-lg dark:text-zinc-400 mt-1">
              (Node.js • NestJS • React • Next.js • AWS)
            </span>
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            {personalInfo.bio[language]}
          </p>
        </div>

        {/* Action Buttons (CTAs) */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-cyan-500 hover:shadow-cyan-500/25 sm:text-sm"
          >
            <span>{language === 'en' ? 'Explore Projects' : 'Explorar Proyectos'}</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <Mail className="h-4 w-4 text-cyan-500" />
            <span>{language === 'en' ? 'Get in Touch' : 'Contactar'}</span>
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <FileDown className="h-4 w-4 text-indigo-500" />
            <span>{language === 'en' ? 'Download CV' : 'Descargar CV'}</span>
          </a>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 border-l border-zinc-200 pl-3 dark:border-zinc-800">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-600 transition hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-600 transition hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>{language === 'en' ? 'Verified Work Authorization' : 'Autorización Laboral Verificada'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-semibold text-cyan-600 dark:text-cyan-400">B2+ English</span>
            <span>{language === 'en' ? 'Professional Working Proficiency' : 'Nivel de Trabajo Profesional'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>Cartagena, Colombia (UTC-5 / EST Timezone Compatible)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
