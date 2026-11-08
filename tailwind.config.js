/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
        'rule-strong': 'var(--rule-strong)',
        raised: 'var(--raised)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          ink: 'var(--accent-ink)',
        },
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Type scale (1.25 minor third, body 17px). Display sizes use clamp() in components.
        meta: ['0.75rem', { lineHeight: '1rem' }],
        body: ['1rem', { lineHeight: '1.6' }],
        lead: ['1.125rem', { lineHeight: '1.75rem' }],
      },
      maxWidth: {
        page: '84rem',
        prose: '38rem',
      },
      keyframes: {
        commit: {
          '0%': { boxShadow: '0 0 0 0 var(--accent)' },
          '100%': { boxShadow: '0 0 0 9px transparent' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '75%': { transform: 'translateX(3px)' },
        },
        rise: {
          from: { transform: 'translateY(105%)' },
          to: { transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        commit: 'commit 700ms ease-out 1',
        shake: 'shake 280ms ease-in-out 2',
        rise: 'rise 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1.1s steps(1, end) 1.4s 3',
        'fade-up': 'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
