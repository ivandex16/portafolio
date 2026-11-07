import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';
import { X, ShieldAlert, Cpu, GitCommit, CheckCircle2, Lock } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.architectureDetails) return null;

  const { overview, keyDecisions, diagramSummary } = project.architectureDetails;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl transition-all sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg border border-zinc-200 p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* NDA Header Notice */}
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:border-amber-500/30 dark:text-amber-400">
          <ShieldAlert className="h-4 w-4 shrink-0" />
          <span>
            {language === 'en'
              ? 'Confidential Case Study • Presented under NDA guidelines (Architectural concepts only)'
              : 'Caso de Estudio Confidencial • Presentado bajo lineamientos de NDA (Solo conceptos arquitectónicos)'}
          </span>
        </div>

        {/* Title */}
        <h3 id="modal-title" className="mt-4 text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-cyan-600 dark:text-cyan-400">
          {project.role[language]}
        </p>

        {/* Overview */}
        <div className="mt-5 space-y-3">
          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Cpu className="h-4 w-4 text-indigo-500" />
            {language === 'en' ? 'Architectural Overview' : 'Visión General de la Arquitectura'}
          </h4>
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {overview[language]}
          </p>
        </div>

        {/* Key Decisions */}
        <div className="mt-6 space-y-3">
          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <GitCommit className="h-4 w-4 text-cyan-500" />
            {language === 'en' ? 'Core Engineering Decisions' : 'Decisiones Clave de Ingeniería'}
          </h4>
          <ul className="space-y-2.5">
            {keyDecisions[language].map((decision, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 sm:text-sm dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Execution Flow Diagram */}
        <div className="mt-6 space-y-3">
          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Lock className="h-4 w-4 text-cyan-500" />
            {language === 'en' ? 'Transactional Flow' : 'Flujo Transaccional'}
          </h4>
          <div className="rounded-lg border border-zinc-200 bg-zinc-100 p-3.5 font-mono text-[11px] leading-relaxed text-zinc-800 sm:text-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
            {diagramSummary[language]}
          </div>
        </div>

        {/* Modal Close Action */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {language === 'en' ? 'Close Case Study' : 'Cerrar Caso de Estudio'}
          </button>
        </div>
      </div>
    </div>
  );
};
