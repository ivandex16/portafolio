# Ivan Cabeza — portfolio

Personal site: case studies, experience and contact details. Bilingual (EN/ES), light and dark themes.

Live: https://ivancbgz.vercel.app

## Stack

React 18, TypeScript, Vite, Tailwind CSS. Type set in IBM Plex Sans and Plex Mono, self-hosted through `@fontsource`.

## Editing content

All copy lives in `src/data/content.ts`. Each case study can take an optional `media` screenshot
(place a `.webp` in `public/projects/`, ~1600px wide, under 200 KB) shown above its architecture diagram.

## Commands

```bash
npm install
npm run dev      # local server
npm run build    # type-check and production build
npm run preview  # serve the build
```
