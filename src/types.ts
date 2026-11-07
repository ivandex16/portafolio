export type Language = 'en' | 'es';

export type Localized<T = string> = Record<Language, T>;

export interface Pipeline {
  caption: Localized;
  steps: Localized<string[]>;
  /** Bracket drawn over a run of steps, e.g. a database transaction (inclusive indexes). */
  span?: { from: number; to: number; label: Localized };
  /** Side exit from one step, e.g. what happens to rejected input. */
  branch?: { at: number; label: Localized };
}

export interface Project {
  id: string;
  title: string;
  /** Short context line: domain · company · constraints */
  context: Localized;
  role: Localized;
  problem: Localized;
  solution: Localized;
  /** Architectural decisions worth defending in an interview */
  decisions?: Localized<string[]>;
  /** The single headline result for this case. Each metric appears only once on the site. */
  result: {
    metric?: string;
    label: Localized;
  };
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
    isNDA?: boolean;
  };
  /**
   * Optional screenshot (put files in /public/projects/, ideally .webp ≤ 200 KB, 1600px wide).
   * When present it is shown above the architecture diagram.
   */
  media?: {
    src: string;
    width: number;
    height: number;
    alt: Localized;
  };
  pipeline: Pipeline;
  /** 'wide' = full-width horizontal diagram; 'split' = text and vertical diagram side by side */
  layout: 'wide' | 'split';
}

export interface ExperienceItem {
  company: string;
  role: Localized;
  location: Localized;
  period: Localized;
  summary: Localized;
  highlights: { value: string; label: Localized }[];
  achievements: Localized<string[]>;
  tech: string[];
}

export interface TechCategory {
  title: Localized;
  note: Localized;
  skills: string[];
}
