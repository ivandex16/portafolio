import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/content';
import { Mail, Copy, Check, Linkedin, Github, FileDown, Send } from './Icons';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm text-center dark:border-zinc-800 dark:bg-zinc-900/90 sm:p-12">
          {/* Tag */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-600 dark:border-cyan-500/30 dark:text-cyan-400">
            <Send className="h-3 w-3" />
            {language === 'en' ? 'Get in Touch' : 'Hablemos'}
          </span>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {language === 'en' ? 'Ready to Scale Your Systems?' : '¿Listo para Escalar tus Sistemas?'}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
            {language === 'en'
              ? 'I am actively open to full-time remote engineering roles (B2B / Contractor in USD or local direct contracts). Let’s connect.'
              : 'Estoy activamente disponible para roles de ingeniería remotos a tiempo completo (B2B / Contractor en USD o contratos locales directos). Conectemos.'}
          </p>

          {/* Email Copy Box */}
          <div className="mx-auto mt-8 flex max-w-md items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-2 pl-3">
              <Mail className="h-4 w-4 text-cyan-500" />
              <span className="font-mono text-xs font-medium text-zinc-800 sm:text-sm dark:text-zinc-200">
                {personalInfo.email}
              </span>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{language === 'en' ? 'Copied!' : '¡Copiado!'}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{language === 'en' ? 'Copy' : 'Copiar'}</span>
                </>
              )}
            </button>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-cyan-500 sm:text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>{language === 'en' ? 'Send Email' : 'Enviar Correo'}</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
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
          </div>

          <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
            <span>{personalInfo.location} • UTC-5 Timezone</span>
          </div>
        </div>
      </div>
    </section>
  );
};
