export type Language = 'en' | 'es';

export interface Project {
  id: string;
  title: string;
  badge: {
    en: string;
    es: string;
  };
  role: {
    en: string;
    es: string;
  };
  problem: {
    en: string;
    es: string;
  };
  solution: {
    en: string;
    es: string;
  };
  impact: {
    metric: string;
    label: {
      en: string;
      es: string;
    };
  };
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
    isNDA?: boolean;
  };
  architectureDetails?: {
    overview: {
      en: string;
      es: string;
    };
    keyDecisions: {
      en: string[];
      es: string[];
    };
    diagramSummary: {
      en: string;
      es: string;
    };
  };
}

export interface ExperienceItem {
  company: string;
  role: {
    en: string;
    es: string;
  };
  location: {
    en: string;
    es: string;
  };
  period: {
    en: string;
    es: string;
  };
  achievements: {
    en: string[];
    es: string[];
  };
  tech: string[];
}

export interface MetricItem {
  value: string;
  label: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

export interface TechCategory {
  title: {
    en: string;
    es: string;
  };
  skills: {
    name: string;
    level: 'Core' | 'Architecture' | 'Cloud';
    iconName?: string;
  }[];
}
