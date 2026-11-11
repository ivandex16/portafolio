import { Project, ExperienceItem, TechCategory, Localized } from '../types';

/*
  Metric placement rule: every number appears in exactly ONE place.
  - Hero:        4+ years
  - Experience:  50,000+ records, thousands of appointments, 30+ form fields
  - Procurement: no metric (not measured)
*/

export const personalInfo = {
  name: 'Ivan Javier Cabeza Garces',
  shortName: 'Ivan Cabeza',
  /** Hero headline, one entry per line. */
  headline: {
    en: ['Backends that hold up.', 'Interfaces that respond.'],
    es: ['Backends que aguantan.', 'Interfaces que responden.'],
  },
  role: {
    en: 'Full-stack engineer, backend first.',
    es: 'Ingeniero full stack, con foco en backend.',
  },
  intro: {
    en: 'I build APIs, transactional data layers and the React interfaces that sit on top of them, in TypeScript with NestJS, PostgreSQL and SQL Server. At SYSNET that means healthcare software: procurement and inventory, appointment scheduling and clinical records.',
    es: 'Construyo APIs, capas de datos transaccionales y las interfaces en React que las usan, en TypeScript con NestJS, PostgreSQL y SQL Server. En SYSNET eso es software de salud: compras e inventario, agendamiento de citas e historias clínicas.',
  },
  location: 'Cartagena, Colombia',
  timezone: 'UTC−5',
  yearsExperience: '4+',
  currentRole: {
    en: 'Full Stack Engineer at SYSNET',
    es: 'Ingeniero Full Stack en SYSNET',
  },
  availability: {
    en: 'Remote roles · B2B · USD or COP · Colombian companies too',
    es: 'Roles remotos · B2B · USD o COP · también empresas colombianas',
  },
  english: {
    en: 'B2+ · overlaps US Eastern hours',
    es: 'B2+ · coincide con el horario del Este de EE. UU.',
  },
  email: 'ivandex16@gmail.com',
  phone: '+57 321 881 6736',
  whatsapp: 'https://wa.me/573218816736',
  linkedin: 'https://www.linkedin.com/in/ivancbgz/',
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
      en: 'Full-stack work on healthcare business software, from schemas and stored procedures to the React screens. In procurement and clinical records a lost write is a real error, so data integrity comes first.',
      es: 'Trabajo full stack en software de salud, desde esquemas y procedimientos almacenados hasta las pantallas en React. En compras e historias clínicas una escritura perdida es un error real, así que la integridad de los datos va primero.',
    },
    highlights: [
      {
        value: '50,000+',
        label: {
          en: 'medical and transactional records in SQL Server and PostgreSQL where I tuned queries, indexes and ACID transactions',
          es: 'registros clínicos y transaccionales en SQL Server y PostgreSQL donde optimicé consultas, índices y transacciones ACID',
        },
      },
      {
        value: { en: 'Thousands', es: 'Miles' },
        label: {
          en: 'of medical appointments booked in real time through my Node.js REST API, from web portals and WhatsApp',
          es: 'de citas médicas agendadas en tiempo real con mi API REST en Node.js, desde portales web y WhatsApp',
        },
      },
      {
        value: '30+',
        label: {
          en: 'input fields in dynamic React procurement forms, kept lag-free with a custom useForm hook and memoization',
          es: 'campos en formularios dinámicos de compras en React, sin retardos gracias a un hook useForm propio y memoización',
        },
      },
    ],
    achievements: {
      en: [
        'Built and deployed an internal Node.js REST API on top of the existing SIOS healthcare database, so client web portals and WhatsApp chatbots can book appointments in real time.',
        {
          text: 'Worked on the front end and back end of the procurement and inbound inventory system (React, TypeScript, Node.js/NestJS), written up as Case 01.',
          caseId: 'enterprise-procurement',
        },
        'Designed schemas, indexes and stored procedures in PostgreSQL and SQL Server, with strict ACID transactions on inventory tables in a multi-client setup.',
        'Supported clinical records modules in production: wrote stored procedures and carried new clinical fields and validation rules through interdependent patient templates.',
        'Wrote unit and integration tests with Jest and React Testing Library for critical transaction calculations and healthcare flows, and ran delivery through Docker CI/CD pipelines in a Scrum team.',
      ],
      es: [
        'Construí y desplegué una API REST interna en Node.js sobre la base de datos de salud SIOS, para que portales web de clientes y chatbots de WhatsApp agenden citas en tiempo real.',
        {
          text: 'Trabajé en el front end y el back end del sistema de compras e ingreso de inventario (React, TypeScript, Node.js/NestJS), contado en el Caso 01.',
          caseId: 'enterprise-procurement',
        },
        'Diseñé esquemas, índices y procedimientos almacenados en PostgreSQL y SQL Server, con transacciones ACID estrictas en las tablas de inventario en un entorno multi-cliente.',
        'Di soporte en producción a los módulos de historias clínicas: escribí procedimientos almacenados y llevé nuevos campos clínicos y reglas de validación a plantillas de pacientes interdependientes.',
        'Escribí pruebas unitarias y de integración con Jest y React Testing Library para cálculos transaccionales críticos y flujos de salud, con entrega por pipelines de CI/CD en Docker dentro de un equipo Scrum.',
      ],
    },
    tech: ['TypeScript', 'React', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'SQL Server', 'Stored procedures', 'Docker', 'Jest', 'React Testing Library'],
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
      en: 'Full-stack engineer on the team: purchase orders, tax calculation, stock updates and the entry forms',
      es: 'Ingeniero full stack del equipo: órdenes de compra, cálculo de impuestos, actualización de stock y formularios de captura',
    },
    problem: {
      en: 'When several large supplier invoices were entered at once, hospital purchasing and warehouse intake hit concurrency bottlenecks. Stock counts drifted and financial reconciliation ran late.',
      es: 'Cuando se registraban a la vez varias facturas grandes de proveedores, las compras y el ingreso a almacén chocaban por concurrencia. El stock se descuadraba y la conciliación financiera llegaba tarde.',
    },
    solution: {
      en: 'A transactional engine where the supplier invoice, its tax lines and the batch stock update commit together or roll back together. React handles fast multi-row entry; a Node.js service runs the ACID transaction against SQL Server. The module covers the whole path: requisition, authorization or quotation request, purchase order, receipt into warehouse and batch, and the purchase record with its journal entry.',
      es: 'Un motor transaccional donde la factura del proveedor, sus impuestos y la actualización de stock por lotes se confirman juntos o se revierten juntos. React resuelve la captura rápida de muchas filas; un servicio en Node.js ejecuta la transacción ACID sobre SQL Server. El módulo cubre todo el recorrido: requisición, autorización o solicitud de cotización, orden de compra, entrada a bodega y lote, y el registro de compra con su asiento contable.',
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
      label: {
        en: 'Each invoice commits or rolls back as a whole, so stock and accounting stay in step even when receptions happen at the same time.',
        es: 'Cada factura se confirma o se revierte completa, así el stock y la contabilidad cuadran aunque las recepciones ocurran a la vez.',
      },
    },
    tech: ['React', 'Node.js', 'Express', 'SQL Server', 'PostgreSQL', 'Docker'],
    links: { isNDA: true },
    screensAspect: '11 / 5',
    screensNote: {
      en: 'Test environment · third-party details blurred',
      es: 'Entorno de pruebas · datos de terceros difuminados',
    },
    screens: [
      {
        src: '/images/projects/compras-requisitions',
        title: { en: 'Requisitions', es: 'Requisiciones' },
        desc: {
          en: 'Every purchase starts as a requisition, tracked by status: pending, authorized, partly authorized, closed, expired, finished or voided.',
          es: 'Toda compra empieza como requisición, con seguimiento por estado: pendiente, autorizada, parcial, cerrada, vencida, terminada o anulada.',
        },
        alt: { en: 'Requisition list with the status panel and filters', es: 'Listado de requisiciones con el panel de estados y los filtros' },
      },
      {
        src: '/images/projects/compras-order',
        title: { en: 'Purchase order', es: 'Orden de compra' },
        desc: {
          en: 'VAT, discount, gross value and total per line, recalculated as quantities and prices change.',
          es: 'IVA, descuento, valor bruto y total por línea, recalculados al cambiar cantidades y precios.',
        },
        alt: { en: 'New purchase order with per-line VAT and discount and the order totals', es: 'Nueva orden de compra con IVA y descuento por línea y los totales' },
      },
      {
        src: '/images/projects/compras-receipt',
        title: { en: 'Purchase receipt', es: 'Entrada de compra' },
        desc: {
          en: 'Each product is received into a warehouse and a batch, with the order’s totals carried over.',
          es: 'Cada producto entra a una bodega y a un lote, con los totales de la orden.',
        },
        alt: { en: 'New purchase receipt with warehouse and batch per product', es: 'Nueva entrada de compra con bodega y lote por producto' },
      },
      {
        src: '/images/projects/compras-ledger',
        title: { en: 'Journal entry', es: 'Asiento contable' },
        desc: {
          en: 'The purchase becomes a balanced journal entry (debit equals credit), viewable under COLGAAP or IFRS.',
          es: 'La compra genera un asiento contable cuadrado (débito igual a crédito), consultable en COLGAAP o NIIF.',
        },
        alt: { en: 'Journal entry for a purchase with COLGAAP and IFRS views; third-party details blurred', es: 'Asiento contable de una compra con vistas COLGAAP y NIIF; datos de terceros difuminados' },
      },
      {
        src: '/images/projects/compras-roles',
        title: { en: 'Roles and permissions', es: 'Roles y permisos' },
        desc: {
          en: 'Each role decides which sections and actions a user can reach.',
          es: 'Cada rol define a qué secciones y acciones puede acceder un usuario.',
        },
        alt: { en: 'Roles and permissions list', es: 'Listado de roles y permisos' },
      },
    ],
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
      en: 'An Express and MongoDB API with a three-tier recommendation engine: rule-based matching by goal, a scoring engine built on the user’s own workout history, and Gemini for full weekly routines and healthy recipe suggestions. The React client logs workouts with a live timer, tracks progress and ships to Android with Capacitor.',
      es: 'Una API en Express y MongoDB con un motor de recomendaciones de tres niveles: reglas según el objetivo, un motor de puntuación basado en el historial de entrenos del usuario y Gemini para rutinas semanales completas y sugerencias de recetas saludables. El cliente React registra entrenos con temporizador, muestra el progreso y se empaqueta para Android con Capacitor.',
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
    screens: [
      {
        src: '/images/projects/gym-dashboard',
        title: { en: 'Home dashboard', es: 'Panel de inicio' },
        desc: { en: 'Today’s workout, weekly consistency and quick access to every module.', es: 'Entrenamiento del día, constancia semanal y accesos rápidos.' },
        alt: { en: 'App dashboard with today’s workout, weekly consistency and module shortcuts', es: 'Panel de la app con el entrenamiento de hoy, la constancia semanal y accesos a los módulos' },
      },
      {
        src: '/images/projects/gym-routines',
        title: { en: 'Routines', es: 'Rutinas' },
        desc: { en: 'Imported from a PDF or generated by the AI coach with Gemini.', es: 'Importadas desde PDF o generadas por el coach IA con Gemini.' },
        alt: { en: 'My routines: routines imported from PDF and generated by the AI coach', es: 'Mis rutinas: rutinas importadas desde PDF y generadas por el coach IA' },
      },
      {
        src: '/images/projects/gym-exercises',
        title: { en: 'Exercises', es: 'Ejercicios' },
        desc: { en: 'Catalogue filtered by muscle group and equipment, with a Gemini advisor.', es: 'Catálogo filtrable por músculo y equipo, con asesor Gemini.' },
        alt: { en: 'Exercise catalogue with muscle and equipment filters', es: 'Catálogo de ejercicios con filtros por músculo y equipo' },
      },
    ],
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
];

/* Ordered by how much of my day each group takes, not alphabetically. */
export const techStackData: TechCategory[] = [
  {
    title: { en: 'Core', es: 'Base' },
    note: { en: 'What I write every day', es: 'Lo que uso a diario' },
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Docker'],
  },
  {
    title: { en: 'Backend and data', es: 'Backend y datos' },
    note: { en: 'APIs, storage, auth', es: 'APIs, almacenamiento, autenticación' },
    skills: ['Express', 'REST API design', 'GraphQL', 'Microservices', 'JWT and granular RBAC', 'Input sanitization', 'Stored procedures', 'ACID transactions', 'Schema design and indexing', 'Schema migrations', 'Redis', 'MySQL', 'OpenAPI / Swagger'],
  },
  {
    title: { en: 'Frontend', es: 'Frontend' },
    note: { en: 'Interfaces for the APIs above', es: 'Interfaces para esas APIs' },
    skills: ['App Router, SSR / SSG', 'Redux Toolkit', 'Context API', 'Custom hooks and dynamic forms', 'Tailwind CSS', 'Responsive UI', 'Accessibility (WCAG)'],
  },
  {
    title: { en: 'AI integration', es: 'Integración de IA' },
    note: { en: 'LLMs inside real features', es: 'LLMs dentro de funciones reales' },
    skills: ['Google Gemini API', 'OpenAI API', 'Structured JSON output', 'Prompt engineering', 'AI-assisted coding (Codex, Claude Code)'],
  },
  {
    title: { en: 'Cloud and delivery', es: 'Cloud y entrega' },
    note: { en: 'Getting it to production', es: 'Llevarlo a producción' },
    skills: ['AWS (EC2, S3, IAM, VPC)', 'GitHub Actions (CI/CD)', 'Git', 'Linux'],
  },
  {
    title: { en: 'Practice', es: 'Práctica' },
    note: { en: 'How I keep it maintainable', es: 'Cómo lo mantengo mantenible' },
    skills: ['Jest', 'React Testing Library', 'Clean Architecture', 'SOLID', 'Code reviews', 'Scrum'],
  },
];

export const educationData: {
  institution: Localized;
  title: Localized;
  period: Localized;
  details: Localized;
  verify?: string;
}[] = [
  {
    institution: { en: 'Amazon Web Services · Coursera (course certificate)', es: 'Amazon Web Services · Coursera (certificado de curso)' },
    title: { en: 'Architecting Solutions on AWS', es: 'Architecting Solutions on AWS' },
    period: { en: 'Oct 2026', es: 'Oct 2026' },
    details: {
      en: 'High availability, VPC design, IAM, decoupling with SQS/SNS, EC2 and S3.',
      es: 'Alta disponibilidad, diseño de VPC, IAM, desacoplamiento con SQS/SNS, EC2 y S3.',
    },
    verify: 'https://coursera.org/verify/Z3T5AYWSF9WF',
  },
  {
    institution: { en: 'Amazon Web Services · Coursera (course certificate)', es: 'Amazon Web Services · Coursera (certificado de curso)' },
    title: { en: 'AWS Cloud Technical Essentials', es: 'AWS Cloud Technical Essentials' },
    period: { en: 'Nov 2025', es: 'Nov 2025' },
    details: {
      en: 'Core AWS services: IAM, EC2, VPC networking, S3 and EBS storage, RDS and DynamoDB, load balancing and auto scaling.',
      es: 'Servicios base de AWS: IAM, EC2, redes con VPC, almacenamiento S3 y EBS, RDS y DynamoDB, balanceo de carga y auto scaling.',
    },
    verify: 'https://coursera.org/verify/7XO0AMYVIXOK',
  },
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
];

export const languagesData = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Professional working proficiency (B2+), technical and conversational', es: 'Competencia profesional (B2+), técnica y conversacional' },
  },
];
