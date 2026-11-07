import React, { useEffect, useState } from 'react';
import { Pipeline } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useInView, useReducedMotion } from '../hooks/motion';

const pad = (n: number) => String(n + 1).padStart(2, '0');

type StopState = 'idle' | 'current' | 'done' | 'staged' | 'committed' | 'failed';

/** Pause after each step (ms). The failing step and the commit get a beat longer so they read. */
const STEP_MS = 420;
const FAIL_MS = 900;
const COMMIT_MS = 650;

const stopClass: Record<Exclude<StopState, 'failed'>, string> = {
  idle: 'border-ink bg-paper',
  current: 'border-accent bg-accent scale-[1.35]',
  done: 'border-ink bg-ink',
  staged: 'border-accent bg-paper',
  committed: 'border-accent bg-accent animate-commit',
};

const Stop: React.FC<{ state: StopState }> = ({ state }) =>
  state === 'failed' ? (
    <span aria-hidden="true" className="relative block h-2.5 w-2.5 animate-shake text-center font-mono text-[13px] font-medium leading-[10px] text-accent">
      ✕
    </span>
  ) : (
    <span
      aria-hidden="true"
      className={`relative block h-2.5 w-2.5 border transition-[background-color,border-color,transform] duration-300 ease-out ${stopClass[state]}`}
    />
  );

/**
 * Request / data flow drawn as a numbered pipeline that "runs" once when it scrolls into view:
 * a packet walks the steps, transaction steps stage and then commit together, and a failing
 * step shows its fallback branch. Text never moves or hides, only the stop markers change,
 * so the diagram reads the same with reduced motion (it jumps to the end state).
 */
export const FlowDiagram: React.FC<{ pipeline: Pipeline; label: string; wide?: boolean }> = ({
  pipeline,
  label,
  wide = false,
}) => {
  const { language } = useLanguage();
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>(0.45);
  const steps = pipeline.steps[language];
  const n = steps.length;
  const { span, branch } = pipeline;
  const inSpan = (i: number) => !!span && i >= span.from && i <= span.to;

  // -1 = not started, 0..n-1 = packet at step, n = finished
  const [tick, setTick] = useState(-1);
  const finished = reduced || tick >= n;

  useEffect(() => {
    if (inView && tick === -1 && !reduced) setTick(0);
  }, [inView, tick, reduced]);

  useEffect(() => {
    if (reduced || tick < 0 || tick >= n) return;
    const delay = branch?.at === tick ? FAIL_MS : span?.to === tick ? COMMIT_MS : STEP_MS;
    const t = window.setTimeout(() => setTick(x => x + 1), delay);
    return () => window.clearTimeout(t);
  }, [tick, n, reduced, branch, span]);

  const stateOf = (i: number): StopState => {
    if (finished) return inSpan(i) ? 'committed' : 'done';
    if (tick < 0 || i > tick) return 'idle';
    if (branch?.at === i) return 'failed';
    if (inSpan(i)) return tick > span!.to ? 'committed' : 'staged';
    return i === tick ? 'current' : 'done';
  };

  const spanOpen = finished || (!!span && tick >= span.from);
  const spanCommitted = finished || (!!span && tick > span.to);
  const branchTaken = finished || (!!branch && tick >= branch.at);
  const replay = () => setTick(0);

  const branchLabel = (i: number, extra = '') =>
    branch && branch.at === i ? (
      <span
        className={`label block transition-colors duration-300 ${branchTaken ? 'text-accent' : ''} ${extra}`}
      >
        ↳ {branch.label[language]}
      </span>
    ) : null;

  const vertical = (
    <ol aria-label={label} className={wide ? 'lg:hidden' : ''}>
      {steps.map((step, i) => {
        const lit = finished || tick > i;
        return (
          <li key={step} className="relative">
            {span && i === span.from && (
              <p
                className={`label ml-7 pb-2 pt-1 transition-colors duration-300 ${
                  spanCommitted ? 'font-medium text-accent' : spanOpen ? 'text-accent' : ''
                }`}
              >
                {span.label[language]}
              </p>
            )}
            <div className="flex gap-4">
              <div className="relative flex w-3 shrink-0 justify-center" aria-hidden="true">
                <span
                  className={`absolute inset-y-0 w-px transition-colors duration-300 ${
                    inSpan(i) && spanOpen ? 'bg-accent' : lit ? 'bg-ink' : 'bg-rule'
                  } ${i === 0 ? 'top-1/2' : ''} ${i === n - 1 ? 'bottom-1/2' : ''}`}
                />
                <span className="relative mt-[0.8rem]">
                  <Stop state={stateOf(i)} />
                </span>
              </div>
              <div className={`flex-1 py-1.5 ${span && i === span.to ? 'pb-3' : ''}`}>
                <span className="label mr-3">{pad(i)}</span>
                <span className="text-body text-ink">{step}</span>
                {branchLabel(i, 'mt-1')}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );

  // Horizontal layout: each column's left edge is i × (100% + gap) / n.
  const colLeft = (i: number) => `calc(${i} * (100% + 1rem) / ${n})`;
  const cols = { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };
  const packetVisible = !finished && tick >= 0 && tick < n;

  return (
    <div ref={ref}>
      {vertical}
      {wide && (
        <div className="hidden lg:block">
          {span && (
            <div className="grid gap-x-4" style={cols} aria-hidden="true">
              <div
                className={`label origin-left border-x border-t border-accent px-3 pb-3 pt-2 text-accent transition-[transform,opacity] duration-500 ease-out ${
                  spanOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                } ${spanCommitted ? 'font-medium' : ''}`}
                style={{ gridColumn: `${span.from + 1} / ${span.to + 2}` }}
              >
                {span.label[language]}
              </div>
            </div>
          )}
          <ol aria-label={label} className="relative mt-4 grid gap-x-4" style={cols}>
            {/* track, plus the part already travelled */}
            <span aria-hidden="true" className="absolute left-0 right-0 top-[5px] h-px bg-rule" />
            <span
              aria-hidden="true"
              className="absolute left-0 top-[5px] h-px bg-ink transition-[width] duration-[420ms] ease-linear"
              style={{ width: finished ? '100%' : tick <= 0 ? '0%' : colLeft(Math.min(tick, n - 1)) }}
            />
            {/* the packet */}
            <span
              aria-hidden="true"
              className={`absolute top-0 z-10 h-2.5 w-2.5 bg-accent shadow-[0_0_0_4px_var(--surface)] transition-[left,opacity] duration-[380ms] ease-out ${
                packetVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ left: colLeft(Math.max(0, Math.min(tick, n - 1))) }}
            />
            {steps.map((step, i) => (
              <li key={step} className="relative">
                <Stop state={stateOf(i)} />
                <span className="label mt-4 block">{pad(i)}</span>
                <span className="mt-1 block pr-2 text-body leading-snug text-ink">{step}</span>
                {branchLabel(i, 'mt-2')}
              </li>
            ))}
          </ol>
        </div>
      )}
      {!reduced && (
        <button
          type="button"
          onClick={replay}
          disabled={tick >= 0 && tick < n}
          className="label mt-6 inline-flex min-h-9 items-center gap-2 hover:text-ink disabled:opacity-40"
        >
          <span aria-hidden="true">↻</span>
          {language === 'en' ? 'Run the flow again' : 'Ejecutar el flujo otra vez'}
        </button>
      )}
    </div>
  );
};
