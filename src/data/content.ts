import { Project, ExperienceItem, TechCategory } from '../types';

/*
  Metric placement rule: every number appears in exactly ONE place.
  - Hero:        4+ years
  - Experience:  >25% latency cut, >80% test coverage, 100K+ records
  - Procurement: ~1200ms → <300ms
*/

export const personalInfo = {
  name: 'Ivan Javier Cabeza Garces',
  shortName: 'Ivan Cabeza',
  role: {
    en: 'Full-stack engineer, backend first.',
    es: 'Ingeniero full stack, con foco en backend.',
  },
  intro: {
    en: 'I build APIs, transactional data layers and the Next.js interfaces that sit on top of them, in TypeScript with NestJS, PostgreSQL and SQL Server. Most recently: hospital procurement and inventory software at SYSNET.',
    es: 'Construyo APIs, capas de datos transaccionales y las interfaces en Next.js que las usan, en TypeScript con NestJS, PostgreSQL y SQL Server. Lo más reciente: software de compras e inventario hospitalario en SYSNET.',
  },
  location: 'Cartagena, Colombia',
  timezone: 'UTC−5',
  yearsExperience: '4+',
  currentRole: {
    en: 'Full Stack Engineer at SYSNET',
    es: 'Ingeniero Full Stack en SYSNET',
  },
  availability: {
    en: 'Remote contract roles · B2B · USD',
    es: 'Contratos remotos · B2B · USD',
  },
  english: {
    en: 'B2+ · overlaps US Eastern hours',
    es: 'B2+ · coincide con el horario del Este de EE. UU.',
  },
  email: 'ivandex16@gmail.com',
  linkedin: 'https://linkedin.com/in/ivancbgz',
  github: 'https://github.com/ivandex16',
  resumePath: '/resume.pdf',
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'SYSNET Ltda',
    role: {
      en: 'Full Stack Software Engineer',
      es: 'Ingeniero de Software Full Stack',
    },
    location: {
      en: 'Cartagena, Colombia · Remote / hybrid',
      es: 'Cartagena, Colombia · Remoto / híbrido',
    },
    period: {
      en: 'Mar 2022 – present',
      es: 'Mar 2022 – presente',
    },
    summary: {
      en: 'Full-stack work on business systems, from schema and API design to the React screens, where a lost write shows up as a stock or accounting error.',
      es: 'Trabajo full stack en sistemas de negocio, desde el esquema y la API hasta las pantallas en React, donde una escritura perdida aparece como un error de stock o contable.',
    },
    highlights: [
      {
        value: '>25%',
        label: {
          en: 'lower latency on critical endpoints, from Redis caching and query indexing',
          es: 'menos latencia en endpoints críticos, con caché en Redis e indexación de consultas',
        },
      },
      {
        value: '>80%',
        label: {
          en: 'unit and integration test coverage, kept there with Jest and React Testing Library',
          es: 'de cobertura unitaria y de integración, sostenida con Jest y React Testing Library',
        },
      },
      {
        value: '100K+',
        label: {
          en: 'records per dataset in SQL Server and MongoDB schemas I modeled and tuned',
          es: 'registros por conjunto de datos en esquemas de SQL Server y MongoDB que modelé y optimicé',
        },
      },
    ],
    achievements: {
      en: [
        'Led the architecture of modular web applications and microservices in NestJS, Node.js and React.',
        'Designed REST and GraphQL APIs secured with JWT and role-based access control.',
        'Applied indexing, cursor pagination and ACID transaction isolation to keep those datasets fast and consistent.',
        'Improved Core Web Vitals with Next.js SSR/SSG, code splitting and memoization.',
        'Built CI/CD with GitHub Actions and Docker, keeping development and production on AWS in parity.',
      ],
      es: [
        'Lideré la arquitectura de aplicaciones web modulares y microservicios en NestJS, Node.js y React.',
        'Diseñé APIs REST y GraphQL protegidas con JWT y control de acceso por roles.',
        'Apliqué indexación, paginación por cursor y aislamiento de transacciones ACID para mantener esos datos rápidos y consistentes.',
        'Mejoré los Core Web Vitals con SSR/SSG de Next.js, división de código y memoización.',
        'Monté CI/CD con GitHub Actions y Docker, con paridad entre desarrollo y producción en AWS.',
      ],
    },
    tech: ['TypeScript', 'NestJS', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'GraphQL', 'Docker', 'AWS', 'Jest'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'enterprise-procurement',
    title: 'Procurement and inbound inventory engine',
    context: {
      en: 'Healthcare logistics · SYSNET · code under NDA',
      es: 'Logística hospitalaria · SYSNET · código bajo NDA',
    },
    role: {
      en: 'Full stack engineer: schema, transaction layer and entry UI',
      es: 'Ingeniero full stack: esquema, capa transaccional e interfaz de captura',
    },
    problem: {
      en: 'When several large supplier invoices were entered at once, hospital purchasing and warehouse intake hit concurrency bottlenecks. Stock counts drifted and financial reconciliation ran late.',
      es: 'Cuando se registraban a la vez varias facturas grandes de proveedores, las compras y el ingreso a almacén chocaban por concurrencia. El stock se descuadraba y la conciliación financiera llegaba tarde.',
    },
    solution: {
      en: 'A transactional engine where the supplier invoice, its tax lines and the batch stock update commit together or roll back together. React handles fast multi-row entry; a Node.js service runs the ACID transaction against SQL Server.',
      es: 'Un motor transaccional donde la factura del proveedor, sus impuestos y la actualización de stock por lotes se confirman juntos o se revierten juntos. React resuelve la captura rápida de muchas filas; un servicio en Node.js ejecuta la transacción ACID sobre SQL Server.',
    },
    decisions: {
      en: [
        'Optimistic concurrency with row-level locks on stock counters, so simultaneous pallet receptions don’t deadlock.',
        'VAT, withholding and margin maths moved into custom hooks outside the render path, so forms with 100+ rows stay responsive.',
        'Connection pooling and indexes aimed at SKU and supplier-batch lookups, the hottest queries in the system.',
      ],
      es: [
        'Concurrencia optimista con bloqueos por fila en los contadores de stock, para que las recepciones simultáneas no se bloqueen entre sí.',
        'Cálculos de IVA, retenciones y márgenes en custom hooks fuera del render, para que los formularios de más de 100 filas sigan fluidos.',
        'Pool de conexiones e índices dirigidos a las búsquedas por SKU y lote de proveedor, las consultas más usadas del sistema.',
      ],
    },
    result: {
      metric: '~1200 ms → <300 ms',
      label: {
        en: 'SKU and supplier-batch query time after index and pool tuning',
        es: 'Tiempo de las consultas por SKU y lote de proveedor tras ajustar índices y pool',
      },
    },
    tech: ['React', 'Node.js', 'Express', 'SQL Server', 'PostgreSQL', 'Docker'],
    links: { isNDA: true },
    layout: 'wide',
    pipeline: {
      caption: {
        en: 'One invoice, one transaction. Client details removed.',
        es: 'Una factura, una transacción. Sin datos del cliente.',
      },
      steps: {
        en: ['Multi-row entry form (React)', 'Auth / RBAC guard', 'Transaction manager (Node.js)', 'Invoice + tax lines', 'Batch stock update', 'Ledger entry', 'Event hook'],
        es: ['Formulario multi-fila (React)', 'Guard Auth / RBAC', 'Gestor transaccional (Node.js)', 'Factura + impuestos', 'Actualización de stock por lote', 'Asiento contable', 'Hook de evento'],
      },
      span: {
        from: 3,
        to: 5,
        label: { en: 'BEGIN … COMMIT · SQL Server · all or nothing', es: 'BEGIN … COMMIT · SQL Server · todo o nada' },
      },
    },
  },
  {
    id: 'ai-gym-trainer',
    title: 'AI gym trainer and workout tracker',
    context: {
      en: 'Full-stack product · generative AI · web and Android',
      es: 'Producto full stack · IA generativa · web y Android',
    },
    role: {
      en: 'Built it end to end: API, recommendation engine, React client, Android build',
      es: 'Lo construí de punta a punta: API, motor de recomendaciones, cliente React, build Android',
    },
    problem: {
      en: 'Routine suggestions can’t depend only on an LLM. The model may be unconfigured, fail, or answer with text that isn’t valid JSON, and the user still expects a plan for the week.',
      es: 'Las sugerencias de rutina no pueden depender solo de un LLM. El modelo puede no estar configurado, fallar o responder con texto que no es JSON válido, y el usuario igual espera su plan de la semana.',
    },
    solution: {
      en: 'An Express and MongoDB API with a three-tier recommendation engine: rule-based matching by goal, a scoring engine built on the user’s own workout history, and Gemini for full weekly routines. The React client logs workouts with a live timer, tracks progress and ships to Android with Capacitor.',
      es: 'Una API en Express y MongoDB con un motor de recomendaciones de tres niveles: reglas según el objetivo, un motor de puntuación basado en el historial de entrenos del usuario y Gemini para rutinas semanales completas. El cliente React registra entrenos con temporizador, muestra el progreso y se empaqueta para Android con Capacitor.',
    },
    decisions: {
      en: [
        'Scoring favours the muscle groups trained least in the last 28 days (+3), then level match (+2) and available equipment (+1). Deterministic, so every suggestion can be explained.',
        'If Gemini is missing, throws, or returns unparseable JSON, the request falls back to the scoring engine or a local multi-day generator instead of returning an error.',
        'JWT auth with user and admin roles, plus helmet, rate limiting and express-validator on the API.',
      ],
      es: [
        'La puntuación prioriza los grupos musculares menos entrenados en los últimos 28 días (+3), luego el nivel (+2) y el equipamiento disponible (+1). Es determinista, así que cada sugerencia se puede explicar.',
        'Si Gemini no está configurado, falla o devuelve JSON que no se puede parsear, la petición cae al motor de puntuación o a un generador local de varios días en lugar de devolver un error.',
        'Autenticación JWT con roles de usuario y admin, más helmet, rate limiting y express-validator en la API.',
      ],
    },
    result: {
      label: {
        en: 'A routine is always returned: when the model fails, the deterministic engines take over.',
        es: 'Siempre se devuelve una rutina: cuando el modelo falla, los motores deterministas toman el relevo.',
      },
    },
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB (Mongoose)', 'Gemini API', 'JWT', 'Jest + Supertest', 'Vitest', 'Capacitor (Android)', 'Tailwind CSS'],
    links: {
      demo: 'https://app-ia-entrenador-gym-by9z.vercel.app',
      github: 'https://github.com/ivandex16/app-IA-entrenador-gym',
    },
    layout: 'split',
    pipeline: {
      caption: {
        en: 'The LLM is the first choice, never the only one.',
        es: 'El LLM es la primera opción, nunca la única.',
      },
      steps: {
        en: ['React client (web + Android)', 'Express API · JWT', 'Recommendation engine', 'Gemini 2.5 Flash', 'JSON parse', 'Routine saved (MongoDB)'],
        es: ['Cliente React (web + Android)', 'API Express · JWT', 'Motor de recomendaciones', 'Gemini 2.5 Flash', 'Parseo de JSON', 'Rutina guardada (MongoDB)'],
      },
      branch: {
        at: 4,
        label: {
          en: 'fails or invalid → scoring engine / local generator',
          es: 'falla o inválido → motor de puntuación / generador local',
        },
      },
    },
  },
  {
    id: 'microservices-core-api',
    title: 'Modular core API in NestJS',
    context: {
      en: 'Backend architecture · auth and testing',
      es: 'Arquitectura backend · autenticación y pruebas',
    },
    role: {
      en: 'Backend engineer: module design, auth, test suite',
      es: 'Ingeniero backend: diseño de módulos, autenticación, pruebas',
    },
    problem: {
      en: 'As monolithic APIs grow they pick up loose permissions and untested paths, which makes concurrent transaction processing a security and reliability risk.',
      es: 'Al crecer, las APIs monolíticas acumulan permisos laxos y rutas sin pruebas, y eso convierte el procesamiento concurrente de transacciones en un riesgo de seguridad y fiabilidad.',
    },
    solution: {
      en: 'A NestJS API split into modules along Clean Architecture lines, with dependency injection, JWT authentication, per-route RBAC guards, a Redis cache and OpenAPI docs generated from the code.',
      es: 'Una API en NestJS dividida en módulos según Arquitectura Limpia, con inyección de dependencias, autenticación JWT, guards RBAC por ruta, caché en Redis y documentación OpenAPI generada desde el código.',
    },
    result: {
      label: {
        en: 'API docs that can’t drift from the code, and a Jest unit and integration suite behind every module.',
        es: 'Documentación que no se desfasa del código y una suite de Jest unitaria y de integración detrás de cada módulo.',
      },
    },
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker Compose', 'Jest', 'OpenAPI'],
    // TODO(Ivan): replace with this project's repository URL.
    links: { github: 'https://github.com/ivandex16' },
    layout: 'split',
    pipeline: {
      caption: {
        en: 'Auth and role checks run before any domain code.',
        es: 'Autenticación y roles se verifican antes de cualquier código de dominio.',
      },
      steps: {
        en: ['Client', 'JWT guard', 'RBAC guard', 'Controller', 'Use case', 'Redis cache', 'PostgreSQL (on miss)'],
        es: ['Cliente', 'Guard JWT', 'Guard RBAC', 'Controlador', 'Caso de uso', 'Caché Redis', 'PostgreSQL (si no hay caché)'],
      },
      span: {
        from: 1,
        to: 2,
        label: { en: '401 / 403 stop here', es: '401 / 403 se cortan aquí' },
      },
    },
  },
];

/* Ordered by how much of my day each group takes, not alphabetically. */
export const techStackData: TechCategory[] = [
  {
    title: { en: 'Core', es: 'Base' },
    note: { en: 'What I write every day', es: 'Lo que uso a diario' },
    skills: ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'SQL Server', 'React'],
  },
  {
    title: { en: 'Backend and data', es: 'Backend y datos' },
    note: { en: 'APIs, storage, auth', es: 'APIs, almacenamiento, autenticación' },
    skills: ['Express', 'REST', 'GraphQL', 'JWT and RBAC', 'Redis', 'MongoDB', 'Schema design and indexing', 'Cursor pagination', 'OpenAPI'],
  },
  {
    title: { en: 'Frontend', es: 'Frontend' },
    note: { en: 'Interfaces for the APIs above', es: 'Interfaces para esas APIs' },
    skills: ['Next.js (App Router)', 'SSR / SSG', 'Tailwind CSS', 'Core Web Vitals'],
  },
  {
    title: { en: 'Cloud and delivery', es: 'Cloud y entrega' },
    note: { en: 'Getting it to production', es: 'Llevarlo a producción' },
    skills: ['AWS (EC2, S3, IAM, VPC)', 'Docker', 'GitHub Actions', 'Linux and Bash', 'Terraform (foundations)'],
  },
  {
    title: { en: 'Practice', es: 'Práctica' },
    note: { en: 'How I keep it maintainable', es: 'Cómo lo mantengo mantenible' },
    skills: ['Jest', 'React Testing Library', 'Clean Architecture', 'SOLID', 'Microservices'],
  },
];

export const educationData = [
  {
    institution: { en: 'SENA (National Learning Service)', es: 'SENA (Servicio Nacional de Aprendizaje)' },
    title: {
      en: 'Analysis and Development of Information Systems',
      es: 'Análisis y Desarrollo de Sistemas de Información',
    },
    period: { en: 'Aug 2020 – Dec 2022', es: 'Ago 2020 – Dic 2022' },
    details: {
      en: 'Systems analysis, software engineering fundamentals, database design and algorithms.',
      es: 'Análisis de sistemas, fundamentos de ingeniería de software, diseño de bases de datos y algoritmos.',
    },
  },
  {
    institution: { en: 'Amazon Web Services · Coursera', es: 'Amazon Web Services · Coursera' },
    title: {
      en: 'Architecting Solutions on AWS',
      es: 'Architecting Solutions on AWS',
    },
    period: { en: 'Completed', es: 'Completado' },
    details: {
      en: 'High availability, VPC design, IAM, decoupling with SQS/SNS, EC2 and S3.',
      es: 'Alta disponibilidad, diseño de VPC, IAM, desacoplamiento con SQS/SNS, EC2 y S3.',
    },
  },
  {
    institution: { en: 'Self-directed', es: 'Autodidacta' },
    title: {
      en: 'NestJS module architecture and Next.js in production',
      es: 'Arquitectura modular en NestJS y Next.js en producción',
    },
    period: { en: 'Ongoing', es: 'En curso' },
    details: {
      en: 'Dependency injection, microservice boundaries, SSR/SSG/ISR trade-offs, end-to-end type safety.',
      es: 'Inyección de dependencias, límites entre microservicios, SSR/SSG/ISR, tipado de punta a punta.',
    },
  },
];

export const languagesData = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Professional working proficiency (B2+)', es: 'Competencia profesional (B2+)' },
  },
];
