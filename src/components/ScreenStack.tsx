import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReducedMotion } from '../hooks/motion';
import { Project } from '../types';

type Screens = NonNullable<Project['screens']>;

const AUTOPLAY_MS = 5000;

/** "16 / 10" -> 1.6 */
const ratio = (aspect: string) => {
  const [w, h] = aspect.split('/').map(Number);
  return h ? w / h : 1.6;
};

/** depth 0 = front, 1 = just behind, 2+ = at the back */
const layer = (depth: number) => {
  const d = Math.min(depth, 2);
  return {
    transform: `translateY(${[0, -32, -60][d]}px) scale(${[1, 0.92, 0.84][d]})`,
    opacity: [1, 0.85, 0.6][d],
    filter: `brightness(${[1, 0.55, 0.35][d]})`,
    zIndex: 10 - depth,
  };
};

/**
 * Product screenshots stacked one behind the other. On each step the screen behind moves
 * forward (grows, drops into place, brightens) and the front one goes to the back.
 * Advances every 5 s while in view; pauses on hover or keyboard focus; no autoplay and no
 * movement with reduced motion.
 */
export const ScreenStack: React.FC<{ screens: Screens; label: string; aspect?: string; note?: string }> = ({
  screens,
  label,
  aspect = '16 / 10',
  note,
}) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const reduced = useReducedMotion();
  const count = screens.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0); // restarts the timer after a manual change

  const go = useCallback(
    (i: number) => {
      setActive(((i % count) + count) % count);
      setTick(t => t + 1);
    },
    [count]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || !visible || count < 2) return;
    const t = window.setTimeout(() => setActive(a => (a + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, tick, reduced, paused, visible, count]);

  const current = screens[active];
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="label flex flex-wrap gap-x-2">
          <span>{en ? 'Inside the app' : 'La app por dentro'}</span>
          {note && <span className="normal-case tracking-normal">· {note}</span>}
        </p>
        <div className="flex gap-2">
          {[
            { dir: -1, label: en ? 'Previous screen' : 'Pantalla anterior', d: 'M15 18l-6-6 6-6' },
            { dir: 1, label: en ? 'Next screen' : 'Pantalla siguiente', d: 'M9 18l6-6-6-6' },
          ].map(b => (
            <button
              key={b.dir}
              type="button"
              onClick={() => go(active + b.dir)}
              aria-label={b.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-rule-strong bg-surface text-ink transition-[transform,border-color] duration-300 ease-out-expo hover:border-ink active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={b.d} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        role="region"
        aria-roledescription={en ? 'carousel' : 'carrusel'}
        aria-label={label}
        className="relative mx-auto mt-8 max-w-[60rem] pt-10 sm:pt-16"
      >
        <div className="relative" style={{ aspectRatio: aspect }}>
          {screens.map((s, i) => {
            const depth = (i - active + count) % count;
            const l = layer(depth);
            return (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={(en ? 'Show ' : 'Ver ') + s.title[language]}
                aria-current={depth === 0 ? 'true' : undefined}
                tabIndex={depth === 0 ? -1 : 0}
                className="absolute inset-0 origin-top rounded-[18px] border border-rule-strong bg-raised p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[20px] sm:p-2"
                style={{
                  ...l,
                  transition: reduced
                    ? 'none'
                    : `transform 800ms ${ease}, opacity 600ms ${ease}, filter 600ms ${ease}`,
                }}
              >
                <img
                  src={`${s.src}-1280.webp`}
                  srcSet={`${s.src}-640.webp 640w, ${s.src}-1280.webp 1280w`}
                  sizes="(min-width: 1024px) 960px, 92vw"
                  width={1280}
                  height={Math.round(1280 / ratio(aspect))}
                  alt={s.alt[language]}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-xl bg-paper object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0 max-w-[36rem]" aria-live="polite">
          <p className="font-mono text-xs text-accent">
            {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </p>
          <p className="mt-2 text-xl font-semibold">{current.title[language]}</p>
          <p className="mt-1 text-sm text-muted">{current.desc[language]}</p>
        </div>
        <div className="flex items-center">
          {screens.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={(en ? 'Show ' : 'Ver ') + s.title[language]}
              aria-pressed={i === active}
              className="grid h-11 w-11 place-items-center"
            >
              <span className="block h-1 w-8 overflow-hidden rounded-full bg-rule-strong">
                <span
                  className="block h-full w-full origin-left rounded-full bg-accent transition-transform duration-500 ease-out-expo"
                  style={{ transform: `scaleX(${i === active ? 1 : 0})` }}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
