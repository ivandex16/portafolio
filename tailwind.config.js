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
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          ink: 'var(--accent-ink)',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Type scale (1.25 minor third, body 17px). Display sizes use clamp() in components.
        meta: ['0.875rem', { lineHeight: '1.4' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        lead: ['1.25rem', { lineHeight: '1.55' }],
      },
      maxWidth: {
        page: '76rem',
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
        rise: 'rise 800ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
        blink: 'blink 1.1s steps(1, end) 1.4s 3',
        'fade-up': 'fade-up 600ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
