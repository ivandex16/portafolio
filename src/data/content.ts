import { Project, ExperienceItem, MetricItem, TechCategory } from '../types';

export const personalInfo = {
  name: "Ivan Javier Cabeza Garces",
  shortName: "Ivan Cabeza",
  title: {
    en: "Full Stack & Backend Software Engineer",
    es: "Ingeniero de Software Full Stack & Backend"
  },
  tagline: {
    en: "Building Scalable TypeScript Systems: From Modular NestJS APIs to High-Performance Next.js Interfaces.",
    es: "Construyendo Sistemas Escalables en TypeScript: Desde APIs Modulares en NestJS hasta Interfaces en Next.js de Alto Rendimiento."
  },
  bio: {
    en: "Software Engineer with 4+ years of hands-on experience designing microservices, optimizing database performance, and shipping resilient web applications across the TypeScript ecosystem. Proven track record reducing API latency by over 25%, establishing automated testing pipelines (Jest/RTL >80% coverage), and deploying production-grade systems on AWS.",
    es: "Ingeniero de Software con 4+ años de experiencia práctica diseñando microservicios, optimizando bases de datos y entregando aplicaciones web confiables en el ecosistema TypeScript. Trayectoria comprobada reduciendo la latencia de APIs en más del 25%, estableciendo suites de pruebas automatizadas (>80% cobertura) y desplegando sistemas en AWS."
  },
  location: "Cartagena, Colombia",
  availability: {
    en: "Available for Remote Roles (USD / Contractor / B2B)",
    es: "Disponible para Roles Remotos (USD / Contractor / B2B)"
  },
  email: "ivandex16@gmail.com",
  phone: "+57 3218816736",
  linkedin: "https://linkedin.com/in/ivancbgz",
  github: "https://github.com/ivancbgz",
  resumePath: "/resume.pdf"
};

export const metricsData: MetricItem[] = [
  {
    value: "4+ Years",
    label: {
      en: "Engineering Experience",
      es: "Años de Experiencia"
    },
    description: {
      en: "Hands-on production delivery in scalable web apps",
      es: "Desarrollo en producción de aplicaciones escalables"
    }
  },
  {
    value: ">25%",
    label: {
      en: "API Latency Cut",
      es: "Reducción de Latencia"
    },
    description: {
      en: "Achieved via Redis caching & database index tuning",
      es: "Logrado mediante caché en Redis e indexación en BD"
    }
  },
  {
    value: ">80%",
    label: {
      en: "Test Coverage",
      es: "Cobertura de Pruebas"
    },
    description: {
      en: "Unit and integration tests with Jest & RTL",
      es: "Pruebas unitarias y de integración con Jest y RTL"
    }
  },
  {
    value: "100%",
    label: {
      en: "End-to-End TypeScript",
      es: "Ecosistema TypeScript"
    },
    description: {
      en: "Type safety from NestJS backend to Next.js frontend",
      es: "Seguridad de tipos de backend NestJS a frontend Next.js"
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "SYSNET Ltda",
    role: {
      en: "Full Stack Software Engineer (React • Node.js • NestJS • TypeScript)",
      es: "Ingeniero de Software Full Stack (React • Node.js • NestJS • TypeScript)"
    },
    location: {
      en: "Cartagena de Indias, Colombia • Remote / Hybrid",
      es: "Cartagena de Indias, Colombia • Remoto / Híbrido"
    },
    period: {
      en: "March 2022 – Present",
      es: "Marzo 2022 – Presente"
    },
    achievements: {
      en: [
        "Led end-to-end architecture and engineering of modular web applications and microservices using NestJS, Node.js, and React.js, delivering stable and maintainable code across production releases.",
        "Architected and secured RESTful and GraphQL APIs utilizing JWT and Role-Based Access Control (RBAC), cutting critical endpoint response latency by over 25% with Redis caching and query indexing.",
        "Modeled and tuned database schemas across SQL Server and MongoDB, implementing indexing strategies, cursor pagination, and ACID transaction isolation for datasets exceeding 100K records.",
        "Instituted automated testing suites using Jest and React Testing Library, maintaining unit and integration test coverage above 80% and drastically reducing regression incidents.",
        "Boosted frontend client performance via Next.js SSR/SSG, code splitting, and memoization, substantially improving Largest Contentful Paint (LCP) and Core Web Vitals.",
        "Streamlined deployment velocity by creating automated CI/CD pipelines with GitHub Actions and Docker containerization, ensuring development-to-production environment parity on AWS."
      ],
      es: [
        "Lideré la arquitectura e ingeniería de aplicaciones web modulares y microservicios con NestJS, Node.js y React.js, entregando código mantenible en lanzamientos a producción.",
        "Diseñé y aseguré APIs RESTful y GraphQL con JWT y control de acceso basado en roles (RBAC), reduciendo la latencia de endpoints críticos en más del 25% mediante caché en Redis e indexación.",
        "Modelé y optimicé esquemas de bases de datos en SQL Server y MongoDB, implementando estrategias de indexación, paginación por cursor y aislamiento ACID para más de 100K registros.",
        "Establecí suites de pruebas automatizadas con Jest y React Testing Library, manteniendo una cobertura superior al 80% y mitigando incidencias de regresión.",
        "Optimicé el rendimiento frontend mediante Next.js SSR/SSG, división de código y memoización, mejorando sustancialmente el Largest Contentful Paint (LCP) y las Core Web Vitals.",
        "Aceleré la velocidad de despliegue creando pipelines de CI/CD automatizados con GitHub Actions y Docker, garantizando paridad entre desarrollo y producción en AWS."
      ]
    },
    tech: ["TypeScript", "NestJS", "Node.js", "React.js", "Next.js", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "Docker", "AWS", "Jest", "GraphQL"]
  }
];

export const projectsData: Project[] = [
  {
    id: "enterprise-procurement",
    title: "Enterprise Procurement & Inbound Inventory Engine",
    badge: {
      en: "Enterprise Architecture Case Study • NDA Protected",
      es: "Caso de Estudio de Arquitectura Empresarial • Bajo NDA"
    },
    role: {
      en: "Full Stack Software Engineer (SYSNET)",
      es: "Ingeniero de Software Full Stack (SYSNET)"
    },
    problem: {
      en: "Healthcare supply procurement and warehouse inbound workflows were prone to concurrency bottlenecks, stock discrepancies, and delayed financial reconciliation when handling dynamic multi-line purchase invoices.",
      es: "La adquisición de insumos hospitalarios críticos y el ingreso a almacén sufrían cuellos de botella por concurrencia, descuadres de stock y retrasos en conciliaciones al procesar facturas complejas de múltiples líneas."
    },
    solution: {
      en: "Engineered a high-throughput transactional engine with React (custom form hooks for dynamic multi-row entry) and a Node.js/Express backend running strict ACID database transactions, preventing race conditions and ensuring instant inventory reconciliation.",
      es: "Desarrollé un motor transaccional de alto rendimiento con React (custom hooks de formulario con validación inmediata) y backend Node.js con transacciones ACID estrictas, eliminando condiciones de carrera y asegurando conciliación instantánea."
    },
    impact: {
      metric: ">25% & 100%",
      label: {
        en: "Latency reduction & 100% stock reconciliation accuracy",
        es: "Reducción de latencia y 100% de precisión en stock"
      }
    },
    tech: ["React.js", "Node.js", "Express", "PostgreSQL", "SQL Server", "ACID Transactions", "Docker", "Tailwind CSS"],
    links: {
      isNDA: true
    },
    architectureDetails: {
      overview: {
        en: "Built to process multi-item hospital logistics with atomic operations. Ensures that supplier billing, tax calculation, and batch inventory updates either commit together or roll back entirely.",
        es: "Diseñado para logística hospitalaria con operaciones atómicas. Garantiza que la facturación de proveedores, cálculo de impuestos e inventario por lotes se confirmen juntos o se reviertan íntegramente."
      },
      keyDecisions: {
        en: [
          "Optimistic concurrency control with row-level locks on stock counters to avoid deadlock during simultaneous pallet receptions.",
          "Custom React hook architecture decoupling complex multi-field calculation (VAT, withholding, unit margins) from the rendering cycle, avoiding lag on 100+ row forms.",
          "Connection pooling and database index tuning targeting SKU and supplier batch queries, reducing execution time from ~1200ms to <300ms."
        ],
        es: [
          "Control de concurrencia optimista con bloqueos a nivel de fila en contadores de stock para evitar bloqueos mutuos durante recepciones simultáneas.",
          "Arquitectura de custom hooks en React que desacopla cálculos complejos (IVA, retenciones, márgenes unitarios) del ciclo de renderizado, evitando lag en formularios de más de 100 filas.",
          "Afinamiento de pools de conexión e indexación dirigida a SKU y lotes de proveedores, reduciendo el tiempo de ejecución de ~1200ms a <300ms."
        ]
      },
      diagramSummary: {
        en: "React Dynamic Form Client → Auth/RBAC Guard → Transaction Manager (Node.js) → [BEGIN TRANSACTION] → SQL Server Stock Allocator + Ledger Journal → [COMMIT] → Event Hook",
        es: "Cliente Formulario React → Guard Auth/RBAC → Administrador Transaccional (Node.js) → [BEGIN TRANSACTION] → Asignador Stock SQL Server + Asiento Contable → [COMMIT] → Hook de Evento"
      }
    }
  },
  {
    id: "ai-health-fitness",
    title: "AI-Powered Health & Fitness Web Application",
    badge: {
      en: "Full Stack Product • Generative AI & Schema Validation",
      es: "Producto Full Stack • IA Generativa & Validación de Esquemas"
    },
    role: {
      en: "Lead Full Stack Engineer & Product Builder",
      es: "Líder Full Stack & Desarrollador de Producto"
    },
    problem: {
      en: "Standard generative AI apps suffer from hallucinations and malformed JSON structures when building complex multi-day workout regimes and macro-targeted meal plans, breaking frontend client applications.",
      es: "Las aplicaciones estándar con IA generativa sufren de alucinaciones y estructuras JSON malformadas al generar planes nutricionales y rutinas de múltiples días, provocando caídas en la interfaz."
    },
    solution: {
      en: "Built a resilient Next.js (App Router) platform featuring real-time token streaming via Server-Sent Events (SSE) paired with runtime Zod schema parsing. Enforces 100% type safety and consistent UI data contracts before rendering.",
      es: "Construí una plataforma en Next.js (App Router) con streaming en tiempo real vía Server-Sent Events (SSE) y validación en tiempo de ejecución con Zod. Garantiza 100% de consistencia de tipos y contratos de datos seguros antes de renderizar."
    },
    impact: {
      metric: "100%",
      label: {
        en: "Type-safe schema compliance with zero client render crashes",
        es: "Cumplimiento estricto de esquemas con cero caídas en la UI"
      }
    },
    tech: ["Next.js (App Router)", "TypeScript", "Anthropic Claude API", "OpenAI API", "Zod", "Tailwind CSS", "Vercel"],
    links: {
      demo: "https://ivancbgz.vercel.app",
      github: "https://github.com/ivancbgz"
    }
  },
  {
    id: "microservices-core-api",
    title: "Microservices & Event-Driven Core API",
    badge: {
      en: "Backend Architecture • Distributed Systems & Testing",
      es: "Arquitectura Backend • Sistemas Distribuidos & Testing"
    },
    role: {
      en: "Backend Engineer",
      es: "Ingeniero Backend"
    },
    problem: {
      en: "Monolithic architectures struggle under high-concurrency transaction processing, exhibiting security vulnerabilities from loose permissions and lack of test coverage.",
      es: "Las arquitecturas monolíticas colapsan ante el procesamiento de transacciones altamente concurrentes, exhibiendo vulnerabilidades de seguridad por permisos laxos y falta de cobertura de pruebas."
    },
    solution: {
      en: "Designed a modular NestJS core API incorporating Clean Architecture, dependency injection, JWT authentication with granular RBAC guards, Redis caching, and automated Swagger/OpenAPI documentation. Backed by a full Jest testing suite.",
      es: "Diseñé una API central modular en NestJS incorporando Arquitectura Limpia, inyección de dependencias, autenticación JWT con guardias RBAC, capa de caché en Redis y documentación OpenAPI/Swagger automática, respaldada por Jest."
    },
    impact: {
      metric: ">80%",
      label: {
        en: "Code coverage via unit and integration tests",
        es: "Cobertura de código en pruebas unitarias y de integración"
      }
    },
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker Compose", "Jest", "Swagger / OpenAPI"],
    links: {
      github: "https://github.com/ivancbgz"
    }
  }
];

export const techStackData: TechCategory[] = [
  {
    title: {
      en: "Core Production Stack",
      es: "Stack Principal en Producción"
    },
    skills: [
      { name: "TypeScript", level: "Core" },
      { name: "NestJS", level: "Core" },
      { name: "Node.js", level: "Core" },
      { name: "React.js", level: "Core" },
      { name: "Next.js (App Router)", level: "Core" },
      { name: "Express.js", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "RESTful APIs & GraphQL", level: "Core" }
    ]
  },
  {
    title: {
      en: "Databases, Caching & Data",
      es: "Bases de Datos, Caché & Modelado"
    },
    skills: [
      { name: "PostgreSQL", level: "Core" },
      { name: "SQL Server", level: "Core" },
      { name: "MongoDB", level: "Core" },
      { name: "Redis (Caching & Invalidation)", level: "Core" },
      { name: "Schema Design & Indexing", level: "Architecture" },
      { name: "Cursor & Offset Pagination", level: "Architecture" }
    ]
  },
  {
    title: {
      en: "Architecture, Security & Quality",
      es: "Arquitectura, Seguridad & Calidad"
    },
    skills: [
      { name: "Clean Architecture & SOLID", level: "Architecture" },
      { name: "Microservices Design", level: "Architecture" },
      { name: "Jest (Unit & Integration)", level: "Architecture" },
      { name: "React Testing Library", level: "Architecture" },
      { name: "JWT & Role-Based Access Control (RBAC)", level: "Architecture" },
      { name: "Core Web Vitals & Web Performance", level: "Architecture" },
      { name: "OpenAPI / Swagger", level: "Architecture" }
    ]
  },
  {
    title: {
      en: "Cloud, DevOps & Tooling",
      es: "Cloud, DevOps & Herramientas"
    },
    skills: [
      { name: "AWS (EC2, S3, IAM, VPC)", level: "Cloud" },
      { name: "Docker & Containerization", level: "Cloud" },
      { name: "GitHub Actions (CI/CD)", level: "Cloud" },
      { name: "Terraform (Foundations)", level: "Cloud" },
      { name: "Linux & Bash", level: "Cloud" },
      { name: "Postman", level: "Cloud" },
      { name: "Git & GitHub", level: "Cloud" }
    ]
  }
];

export const educationData = [
  {
    institution: "SENA (National Learning Service)",
    title: {
      en: "Analysis and Development of Information Systems",
      es: "Análisis y Desarrollo de Sistemas de Información"
    },
    period: "Aug 2020 – Dec 2022",
    details: {
      en: "Formal systems analysis, software engineering fundamentals, database architecture, and algorithms.",
      es: "Formación integral en análisis de sistemas, fundamentos de ingeniería de software, arquitectura de bases de datos y algoritmos."
    }
  },
  {
    institution: "Amazon Web Services (via Coursera)",
    title: {
      en: "Architecting Solutions on AWS",
      es: "Architecting Solutions on AWS"
    },
    period: "Completed",
    details: {
      en: "Cloud architecture best practices: High availability, VPC design, IAM security, decoupling with SQS/SNS, and resilient compute on EC2/S3.",
      es: "Mejores prácticas de arquitectura en la nube: alta disponibilidad, diseño de VPC, seguridad IAM y cómputo resiliente con EC2/S3."
    }
  },
  {
    institution: "Specialized Engineering Tracks",
    title: {
      en: "Enterprise NestJS Modular Architecture & Production Next.js",
      es: "Arquitectura Modular Empresarial en NestJS & Next.js en Producción"
    },
    period: "Continuous Learning",
    details: {
      en: "In-depth specialization in scalable backend microservices, dependency injection, SSR/SSG/ISR optimization, and full-stack TypeScript safety.",
      es: "Especialización avanzada en microservicios backend escalables, inyección de dependencias, optimización SSR/SSG/ISR y seguridad de tipos en TypeScript."
    }
  }
];

export const languagesData = [
  {
    name: {
      en: "Spanish",
      es: "Español"
    },
    level: {
      en: "Native",
      es: "Nativo"
    }
  },
  {
    name: {
      en: "English",
      es: "Inglés"
    },
    level: {
      en: "Professional Working Proficiency (B2+)",
      es: "Competencia Profesional de Trabajo (B2+)"
    }
  }
];
