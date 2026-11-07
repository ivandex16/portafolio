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

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const progressRef = useScrollProgress();
  const en = language === 'en';

  // One indicator that slides to the active link instead of one per link fading in and out.
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);
  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null;
      setIndicator(el ? { x: el.offsetLeft + 12, w: el.offsetWidth - 24 } : null);
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
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const control =
    'inline-flex h-11 min-w-11 items-center justify-center px-2 font-mono text-meta text-ink transition-colors hover:bg-surface';

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      {/* reading progress: the header's bottom border fills in ink as you scroll */}
      <span
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-ink"
        style={{ transform: 'scaleX(0)' }}
      />
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-5 md:px-8">
        <a href="#top" className="group flex items-baseline gap-3 text-ink">
          <span className="font-semibold tracking-[-0.01em]">{personalInfo.shortName}</span>
          <span className="label hidden lg:inline">{en ? 'Full-stack · backend first' : 'Full stack · foco en backend'}</span>
        </a>

        <nav className="hidden md:block" aria-label={en ? 'Main' : 'Principal'}>
          <ul className="relative flex items-center gap-1">
            {SECTIONS.map(id => (
              <li key={id}>
                <a
                  ref={el => (linkRefs.current[id] = el)}
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block px-3 py-2 text-body transition-colors hover:text-ink ${
                    active === id ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {labels[id]}
                </a>
              </li>
            ))}
            <li
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-[10px] left-0 h-0.5 bg-accent transition-[transform,width,opacity] duration-300 ease-out ${
                indicator ? 'opacity-100' : 'opacity-0'
              }`}
              style={indicator ? { width: indicator.w, transform: `translateX(${indicator.x}px)` } : { width: 0 }}
            />
          </ul>
        </nav>

        <div className="flex items-center">
          <a
            href={personalInfo.resumePath}
            download="Ivan-Cabeza-CV.pdf"
            className="mr-2 hidden h-9 items-center border border-ink px-3 font-mono text-meta transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
          >
            {en ? 'CV ↓' : 'CV ↓'}
          </a>
          <button
            type="button"
            onClick={toggleLanguage}
            className={control}
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
            className={control}
            aria-label={
              theme === 'dark'
                ? en ? 'Switch to light theme' : 'Cambiar a tema claro'
                : en ? 'Switch to dark theme' : 'Cambiar a tema oscuro'
            }
          >
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className={`${control} md:hidden`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? (en ? 'Close menu' : 'Cerrar menú') : en ? 'Open menu' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-rule bg-paper md:hidden" aria-label={en ? 'Main' : 'Principal'}>
          <ul className="mx-auto max-w-page px-5 py-2">
            {SECTIONS.map((id, i) => (
              <li key={id} className="border-b border-rule last:border-b-0">
                <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 text-lead text-ink">
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                  {labels[id]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumePath}
                download="Ivan-Cabeza-CV.pdf"
                className="flex items-baseline gap-4 py-4 text-lead text-ink"
              >
                <span className="label">PDF</span>
                {en ? 'Download CV' : 'Descargar CV'}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
