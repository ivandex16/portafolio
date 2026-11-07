import React, { useEffect, useState } from 'react';
import { useInView, useReducedMotion } from '../hooks/motion';

const DURATION = 1100;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Splits "100K+" into ["", 100, "K+"]; returns null when there is nothing to count. */
const splitNumber = (s: string) => {
  const m = s.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
  return m ? { prefix: m[1], value: parseFloat(m[2]), suffix: m[3] } : null;
};

/** "~1200 ms → <300 ms": the right-hand number counts down from the left-hand one. */
export const parseBeforeAfter = (s: string) => {
  const [left, right] = s.split('→').map(x => x.trim());
  if (!right) return null;
  const a = splitNumber(left);
  const b = splitNumber(right);
  return a && b ? { left, from: a.value, to: b, ratio: b.value / a.value } : null;
};

const useTween = (from: number, to: number, start: boolean) => {
  const reduced = useReducedMotion();
  const [v, setV] = useState(reduced ? to : from);
  useEffect(() => {
    if (reduced) return setV(to);
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION);
      setV(from + (to - from) * easeOut(p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [from, to, start, reduced]);
  return v;
};

/**
 * Renders a metric string and counts its number up (or down, for "a → b") once it is in view.
 * Screen readers get the final text via aria-label; the moving digits are hidden from them.
 */
export const CountUp: React.FC<{ value: string; className?: string }> = ({
  value,
  className = '',
}) => {
  const [ref, inView] = useInView<HTMLSpanElement>(0.6);
  const ba = parseBeforeAfter(value);
  const single = ba ? null : splitNumber(value);
  const from = ba ? ba.from : 0;
  const to = ba ? ba.to.value : single?.value ?? 0;
  const v = useTween(from, to, inView);
  const shown = Math.round(v);

  let text = value;
  if (ba) text = `${ba.left} → ${ba.to.prefix}${shown}${ba.to.suffix}`;
  else if (single && single.value > 0) text = `${single.prefix}${shown}${single.suffix}`;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
};

/** Bar that shrinks from the "before" to the "after" length, drawn under a before → after metric. */
export const ShrinkBar: React.FC<{ ratio: number; label: string }> = ({ ratio, label }) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);
  const reduced = useReducedMotion();
  const done = reduced || inView;
  return (
    <div ref={ref} className="mt-4" aria-hidden="true" title={label}>
      <div className="relative h-1.5 bg-rule">
        <div
          className={`absolute inset-y-0 left-0 transition-[width,background-color] duration-[1100ms] ease-out ${
            done ? 'bg-accent' : 'bg-ink'
          }`}
          style={{ width: done ? `${Math.max(4, ratio * 100)}%` : '100%' }}
        />
      </div>
    </div>
  );
};
