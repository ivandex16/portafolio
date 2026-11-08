import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/content';
import { Sun, Moon, Menu, X } from './Icons';

const SECTIONS = ['work', 'experience', 'stack', 'contact'] as const;

/** Marks the section currently under the header so the nav doubles as a progress indicator. */
const useActiveSection = () => {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = SECTIONS.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
};

/** Reading progress, written straight to the element's transform (no re-render per scroll event). */
const useScrollProgress = () => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
};

/** Floating pill navigation. The active link sits on a highlight that slides between links. */
export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const progressRef = useScrollProgress();
  const en = language === 'en';

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);
  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null;
      setIndicator(el ? { x: el.offsetLeft, w: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active, language]);

  const labels: Record<(typeof SECTIONS)[number], string> = {
    work: en ? 'Work' : 'Proyectos',
    experience: en ? 'Experience' : 'Experiencia',
    stack: 'Stack',
    contact: en ? 'Contact' : 'Contacto',
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const iconBtn =
    'inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2 font-mono text-[0.75rem] text-muted transition-[color,background-color] duration-300 hover:bg-raised hover:text-ink';

  return (
    <>
      {/* reading progress along the very top of the window */}
      <span
        ref={progressRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />
      <header className="sticky top-0 z-40 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="flex w-full max-w-[56rem] items-center justify-between gap-2 rounded-full border border-rule bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] py-1.5 pl-5 pr-1.5 backdrop-blur-xl md:w-auto md:gap-6">
          <a href="#top" className="whitespace-nowrap font-semibold tracking-[-0.01em] text-ink">
            {personalInfo.shortName}
          </a>

          <nav className="hidden md:block" aria-label={en ? 'Main' : 'Principal'}>
            <ul className="relative flex items-center">
              <li
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 left-0 rounded-full bg-raised transition-[transform,width,opacity] duration-500 ease-out-expo ${
                  indicator ? 'opacity-100' : 'opacity-0'
                }`}
                style={indicator ? { width: indicator.w, transform: `translateX(${indicator.x}px)` } : { width: 0 }}
              />
              {SECTIONS.map(id => (
                <li key={id} className="relative">
                  <a
                    ref={el => (linkRefs.current[id] = el)}
                    href={`#${id}`}
                    aria-current={active === id ? 'true' : undefined}
                    className={`block rounded-full px-3.5 py-2 text-sm transition-colors duration-300 hover:text-ink ${
                      active === id ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {labels[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleLanguage}
              className={iconBtn}
              aria-label={en ? 'Ver en español' : 'View in English'}
              lang={en ? 'es' : 'en'}
            >
              {en ? 'ES' : 'EN'}
            </button>
            <button
              type="button"
              onClick={e => {
                const r = e.currentTarget.getBoundingClientRect();
                toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
              }}
              className={iconBtn}
              aria-label={
                theme === 'dark'
                  ? en ? 'Switch to light theme' : 'Cambiar a tema claro'
                  : en ? 'Switch to dark theme' : 'Cambiar a tema oscuro'
              }
            >
              {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>
            <a
              href="#contact"
              className="ml-1 hidden min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-ink transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-hover active:scale-[0.98] sm:inline-flex"
            >
              {en ? 'Let’s talk' : 'Hablemos'}
            </a>
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              className={`${iconBtn} text-ink md:hidden`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? (en ? 'Close menu' : 'Cerrar menú') : en ? 'Open menu' : 'Abrir menú'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile: full-height panel; links arrive one after another */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label={en ? 'Main' : 'Principal'}
          className="fixed inset-0 z-30 bg-[color-mix(in_srgb,var(--paper)_95%,transparent)] px-5 pt-28 backdrop-blur-2xl md:hidden"
        >
          <ul>
            {[...SECTIONS, 'cv' as const].map((id, i) => (
              <li
                key={id}
                className="animate-fade-up border-b border-rule"
                style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}
              >
                {id === 'cv' ? (
                  <a
                    href={personalInfo.resumePath}
                    download="Ivan-Cabeza-CV.pdf"
                    className="flex items-baseline gap-4 py-5 text-3xl font-semibold tracking-[-0.03em] text-ink"
                  >
                    <span className="label">PDF</span>
                    {en ? 'Download CV' : 'Descargar CV'}
                  </a>
                ) : (
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5 text-3xl font-semibold tracking-[-0.03em] text-ink"
                  >
                    <span className="label">{String(i + 1).padStart(2, '0')}</span>
                    {labels[id]}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
