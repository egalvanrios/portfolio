export type Lang = 'en' | 'es'

export interface CaseStudyTranslation {
  challenge: string
  overview: string
  process: Array<{ title: string; description: string }>
  outcome: string
}

export interface Translations {
  nav: {
    logo: string
    links: [string, string, string]
    cta: string
  }
  hero: {
    eyebrow: string
    headline: string
    headlineHighlight: string
    subheading: string
    companiesLabel: string
    primaryCta: string
    secondaryCta: string
  }
  work: {
    heading: string
    subheading: string
    viewCaseStudy: string
    backLink: string
    processLabel: string
    outcomeLabel: string
    nextProjectLabel: string
  }
  caseStudies: Record<string, CaseStudyTranslation>
  about: {
    role: string
    location: string
    pullQuote: string
    paragraphs: [string, string, string]
    certificationsLabel: string
    expertiseLabel: string
    expertise: string[]
  }
  contact: {
    eyebrow: string
    headline: string
    subtext: string
    copyright: string
    footerCredit: string
    links: Array<{ id: string; label: string; href: string }>
  }
}

const en: Translations = {
  nav: {
    logo: 'Eric Galván',
    links: ['Work', 'About', 'Contact'],
    cta: "Let's talk →",
  },
  hero: {
    eyebrow: 'UX Manager & Design Leader',
    headline: 'I build the design function organizations actually need.',
    headlineHighlight: 'actually need.',
    subheading:
      '20 years leading enterprise UX at IBM, Deloitte Digital, and Backbase — teams, systems, and strategy at scale.',
    companiesLabel: 'Worked with',
    primaryCta: 'View my work',
    secondaryCta: 'Read about me →',
  },
  work: {
    heading: 'Selected work',
    subheading: 'Enterprise UX at scale — 2015–2024',
    viewCaseStudy: 'View case study →',
    backLink: '← All work',
    processLabel: 'Process',
    outcomeLabel: 'Outcome',
    nextProjectLabel: 'Next project',
  },
  caseStudies: {
    'att-customer-connect': {
      challenge:
        "AT&T's Salesforce ecosystem had fragmented experiences across Service Cloud, Sales Cloud, and Marketing Cloud. Three companies working in separate Figma spaces — no unified design standards, slow approvals, no governance.",
      overview:
        'The project started with just two designers. Within six months we had more than 16 working across 5,000+ user stories. Without a clear structure, that growth would have made the fragmentation even worse.',
      process: [
        {
          title: 'Team structure & scaling',
          description:
            'Scaled the UX team from 2 to 16+ designers in six months, defining structure aligned to Salesforce clouds. Aligned designers from AT&T, Salesforce, and Deloitte around a shared strategy and roadmap.',
        },
        {
          title: 'Design system — Customer Connect',
          description:
            "Built AT&T's Customer Connect design system from scratch in Figma: component libraries, design tokens, page templates, and documentation guidelines. Served as Figma org admin for 16+ designers.",
        },
        {
          title: 'Governance & adoption',
          description:
            'Established governance for contributions, versioning, and adoption across all three companies. Standardized design-to-dev handoff using Figma and Jira.',
        },
        {
          title: 'Stakeholder alignment',
          description:
            'Redesigned approval flows across Service, Sales, and Marketing. Maintained close alignment with AT&T leadership, product managers, and development teams.',
        },
      ],
      outcome:
        "Bringing three companies, two cultures, and 16 designers into a single coherent practice — without losing speed or quality — is what I'm most proud of from this engagement.",
    },
    'backbase-digital-banking': {
      challenge:
        'Two large Latin American banks were losing customers to friction in their key digital journeys. Retail customers struggled with complex onboarding flows; corporate clients faced cumbersome payroll processes.',
      overview:
        'Strict Scrum cadences and tight release windows left little room for rework. The solution required validated design patterns for the LATAM market before any handoff to development.',
      process: [
        {
          title: 'Design strategy',
          description:
            'Redesigned end-to-end UX for retail onboarding and corporate payroll journeys — simplifying information architecture to reduce cognitive load. Created wireframes, interactive prototypes, and high-fidelity designs for web and mobile.',
        },
        {
          title: 'User research & validation',
          description:
            'Used Maze to run usability tests on payroll flows with real users from corporate client segments. Collected behavioral data and qualitative feedback; iterated designs before any handoff.',
        },
        {
          title: 'Agile delivery',
          description:
            'Worked one half-sprint ahead of development in a Scrum setup, keeping delivery smooth and reducing back-and-forth. Partnered with product owners and client stakeholders during sprint planning and reviews.',
        },
      ],
      outcome:
        'Validated prototypes eliminated major dev rework cycles. The redesigned flows are now standard for LATAM banking implementations on the Backbase platform.',
    },
    'motorola-cpq': {
      challenge:
        'Motorola Solutions needed to modernize their Oracle CPQ platform — used daily by sales teams across North America and Europe. The existing interface was complex and inconsistent, slowing quoting and increasing training overhead.',
      overview:
        "The organization wanted to adopt Oracle's Redwood Design System without breaking established workflows or creating disruption for regional stakeholders.",
      process: [
        {
          title: 'Design system implementation',
          description:
            'Led the application of the Oracle Redwood Design System to the CPQ platform — mapping existing flows and components to Redwood patterns. Created a component library blending Redwood standards with Motorola-specific needs.',
        },
        {
          title: 'Workflow optimization',
          description:
            'Simplified navigation and step-by-step quoting flows for the most common sales scenarios. Designed role-based views tailored to different user types in the quote process.',
        },
        {
          title: 'Stakeholder management',
          description:
            'Coordinated requirements with product owners and stakeholders in North America and Europe simultaneously. Facilitated design reviews balancing business goals, technical constraints, and user needs.',
        },
      ],
      outcome:
        "Successfully aligned CPQ to Motorola's design strategy using Oracle Redwood. Regional stakeholders in NA and Europe responded positively to the clarity and usability improvements.",
    },
    'banorte-mobile-banking': {
      challenge:
        'Banorte needed to redesign its mobile banking app and public web portal from the ground up — no existing UX team, waterfall methodology, stakeholders in two cities, banking regulations at every turn.',
      overview:
        'This was not just a design project. It was an organizational challenge: build the team, establish the process, and deliver a product that would serve millions of customers.',
      process: [
        {
          title: 'Building the team & practice',
          description:
            'Assembled a 12-person team from scratch: UX designers, UI designers, and Business Analysts — many with no prior UX experience. Trained 5 BAs in UX techniques, transforming them into capable contributors. This model was later replicated on other IBM projects.',
        },
        {
          title: 'Design process',
          description:
            'Spent five months defining the new end-to-end banking experience. Produced wireframes in Keynote and documented every behaviour in InDesign, including functional requirements for engineering.',
        },
        {
          title: 'Visual system',
          description:
            'Led high-fidelity design in Illustrator once wireframes were approved. Created detailed stylesheets for core UI elements — buttons, forms, menus, typography — designed for reuse across multiple banking products.',
        },
        {
          title: 'Stakeholder alignment',
          description:
            'Aligned stakeholders across Mexico City and Monterrey around a single, well-documented experience in a waterfall environment with banking compliance requirements.',
        },
      ],
      outcome:
        "The hardest part of a UX engagement isn't the design — it's building the people and process around it. That lesson has shaped how I've led every team since.",
    },
  },
  about: {
    role: 'UX Manager & Design Leader',
    location: 'Querétaro, Mexico · Open to remote & relocation',
    pullQuote: 'I help organizations build the design function they actually need.',
    paragraphs: [
      "Over 20 years I've led UX at scale for IBM, Deloitte Digital, and Backbase — delivering enterprise products for US global companies including AT&T, Motorola Solutions, and Lithia Motors, and major banks across Mexico and LATAM.",
      "I've built design teams from the ground up, created design systems adopted across entire organizations, and brought structure to environments where fragmentation was slowing everything down.",
      "My work sits at the intersection of design leadership, operations, and strategy. I don't just manage designers — I build the conditions for design to have a real impact on business outcomes.",
    ],
    certificationsLabel: 'Certifications',
    expertiseLabel: 'Core expertise',
    expertise: [
      'Building & scaling UX teams (2→20+ designers) with the right structure, rituals, and culture',
      'Enterprise design systems — architecture, governance, adoption, and tooling',
      'Design operations: onboarding, quality reviews, dev handoff standards, Figma org administration',
      'Stakeholder alignment across business, technology, and leadership in multi-company engagements',
      'Design Thinking facilitation and capability building for clients and internal teams',
      'Financial services, telecom, SaaS, and enterprise B2B platform design',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    headline: "Let's build something\nthat matters.",
    subtext:
      'Open to UX Manager, Head of UX, and senior IC roles. Also available for consulting and Design Thinking facilitation.',
    copyright: '© 2026 Eric Galván Ríos',
    footerCredit: 'Designed in Figma · Built with Next.js & Claude Code',
    links: [
      { id: 'whatsapp', label: 'WhatsApp →', href: 'https://wa.me/523334936789' },
      { id: 'email', label: 'egalvanrios@gmail.com →', href: 'mailto:egalvanrios@gmail.com' },
      { id: 'linkedin', label: 'LinkedIn →', href: 'https://linkedin.com/in/ericgalvan' },
    ],
  },
}

const es: Translations = {
  nav: {
    logo: 'Eric Galván',
    links: ['Trabajo', 'Sobre mí', 'Contacto'],
    cta: 'Hablemos →',
  },
  hero: {
    eyebrow: 'UX Manager & Design Leader',
    headline: 'Diseñar la experiencia que las organizaciones realmente necesitan.',
    headlineHighlight: 'realmente necesitan.',
    subheading:
      '20 años liderando UX empresarial en IBM, Deloitte Digital y Backbase — equipos, sistemas y estrategia a escala.',
    companiesLabel: 'Trabajé con',
    primaryCta: 'Ver mi trabajo',
    secondaryCta: 'Conóceme →',
  },
  work: {
    heading: 'Trabajo seleccionado',
    subheading: 'UX empresarial a escala — 2015–2024',
    viewCaseStudy: 'Ver caso de estudio →',
    backLink: '← Todo el trabajo',
    processLabel: 'Proceso',
    outcomeLabel: 'Resultado',
    nextProjectLabel: 'Siguiente proyecto',
  },
  caseStudies: {
    'att-customer-connect': {
      challenge:
        'El ecosistema Salesforce de AT&T tenía experiencias fragmentadas entre Service Cloud, Sales Cloud y Marketing Cloud. Tres empresas trabajando en espacios de Figma separados — sin estándares de diseño unificados, aprobaciones lentas, sin gobernanza.',
      overview:
        'El proyecto comenzó con solo dos diseñadores. En seis meses teníamos más de 16 trabajando en más de 5,000 historias de usuario. Sin una estructura clara, ese crecimiento habría empeorado la fragmentación.',
      process: [
        {
          title: 'Estructura y escala del equipo',
          description:
            'Escalé el equipo de UX de 2 a 16+ diseñadores en seis meses, definiendo estructura alineada a los clouds de Salesforce. Alineé diseñadores de AT&T, Salesforce y Deloitte alrededor de una estrategia y hoja de ruta compartidas.',
        },
        {
          title: 'Sistema de diseño — Customer Connect',
          description:
            'Construí el sistema de diseño Customer Connect de AT&T desde cero en Figma: bibliotecas de componentes, tokens de diseño, plantillas de páginas y guías de documentación. Administré la organización de Figma para 16+ diseñadores.',
        },
        {
          title: 'Gobernanza y adopción',
          description:
            'Establecí gobernanza para contribuciones, versionado y adopción entre las tres empresas. Estandaricé la entrega diseño-a-desarrollo usando Figma y Jira.',
        },
        {
          title: 'Alineación con stakeholders',
          description:
            'Rediseñé los flujos de aprobación entre Service, Sales y Marketing. Mantuve alineación estrecha con el liderazgo de AT&T, product managers y equipos de desarrollo.',
        },
      ],
      outcome:
        'Unir tres empresas, dos culturas y 16 diseñadores en una práctica coherente — sin perder velocidad ni calidad — es de lo que más me enorgullezco de este proyecto.',
    },
    'backbase-digital-banking': {
      challenge:
        'Dos grandes bancos latinoamericanos perdían clientes por fricción en sus journeys digitales clave. Los clientes retail luchaban con flujos de onboarding complejos; los corporativos enfrentaban procesos de nómina engorrosos.',
      overview:
        'Los ciclos Scrum estrictos y las ventanas de lanzamiento ajustadas dejaban poco margen para retrabajos. La solución requería patrones de diseño validados para el mercado LATAM antes de cualquier entrega a desarrollo.',
      process: [
        {
          title: 'Estrategia de diseño',
          description:
            'Rediseñé el UX end-to-end para onboarding retail y journeys de nómina corporativa — simplificando la arquitectura de información para reducir la carga cognitiva. Creé wireframes, prototipos interactivos y diseños de alta fidelidad para web y móvil.',
        },
        {
          title: 'Investigación y validación con usuarios',
          description:
            'Usé Maze para pruebas de usabilidad en flujos de nómina con usuarios reales de segmentos corporativos. Recopilé datos de comportamiento y feedback cualitativo; iteré los diseños antes de cualquier entrega.',
        },
        {
          title: 'Entrega ágil',
          description:
            'Trabajé medio sprint adelante del desarrollo en un setup Scrum, manteniendo la entrega fluida y reduciendo el va y viene. Me asocié con product owners y stakeholders del cliente durante la planificación y revisiones de sprint.',
        },
      ],
      outcome:
        'Los prototipos validados eliminaron ciclos mayores de retrabajo de desarrollo. Los flujos rediseñados son ahora estándar para implementaciones bancarias LATAM en la plataforma Backbase.',
    },
    'motorola-cpq': {
      challenge:
        'Motorola Solutions necesitaba modernizar su plataforma Oracle CPQ — usada diariamente por equipos de ventas en Norteamérica y Europa. La interfaz existente era compleja e inconsistente, ralentizando las cotizaciones y aumentando la carga de capacitación.',
      overview:
        'La organización quería adoptar el Oracle Redwood Design System sin romper los flujos de trabajo establecidos ni crear disrupción para los stakeholders regionales.',
      process: [
        {
          title: 'Implementación del sistema de diseño',
          description:
            'Lideré la aplicación del Oracle Redwood Design System a la plataforma CPQ — mapeando flujos y componentes existentes a patrones Redwood. Creé una biblioteca de componentes combinando estándares Redwood con necesidades específicas de Motorola.',
        },
        {
          title: 'Optimización de flujos de trabajo',
          description:
            'Simplifiqué la navegación y los flujos de cotización paso a paso para los escenarios de ventas más comunes. Diseñé vistas basadas en roles adaptadas a los diferentes tipos de usuarios en el proceso de cotización.',
        },
        {
          title: 'Gestión de stakeholders',
          description:
            'Coordiné requerimientos con product owners y stakeholders en Norteamérica y Europa simultáneamente. Facilité revisiones de diseño equilibrando objetivos de negocio, restricciones técnicas y necesidades de usuarios.',
        },
      ],
      outcome:
        'Se alineó exitosamente el CPQ a la estrategia de diseño de Motorola usando Oracle Redwood. Los stakeholders regionales en NA y Europa respondieron positivamente a las mejoras de claridad y usabilidad.',
    },
    'banorte-mobile-banking': {
      challenge:
        'Banorte necesitaba rediseñar su app de banca móvil y portal web público desde cero — sin equipo de UX, metodología waterfall, stakeholders en dos ciudades y regulaciones bancarias en cada paso.',
      overview:
        'Este no era solo un proyecto de diseño. Era un desafío organizacional: construir el equipo, establecer el proceso y entregar un producto que serviría a millones de clientes.',
      process: [
        {
          title: 'Construcción del equipo y la práctica',
          description:
            'Ensamblé un equipo de 12 personas desde cero: diseñadores UX, diseñadores UI y Analistas de Negocio — muchos sin experiencia previa en UX. Capacité a 5 BAs en técnicas UX, transformándolos en contribuidores capaces. Este modelo se replicó después en otros proyectos de IBM.',
        },
        {
          title: 'Proceso de diseño',
          description:
            'Dediqué cinco meses a definir la nueva experiencia bancaria end-to-end. Produje wireframes en Keynote y documenté cada comportamiento en InDesign, incluyendo requerimientos funcionales para ingeniería.',
        },
        {
          title: 'Sistema visual',
          description:
            'Lideré el diseño de alta fidelidad en Illustrator una vez aprobados los wireframes. Creé hojas de estilo detalladas para elementos UI core — botones, formularios, menús, tipografía — diseñados para reutilización en múltiples productos bancarios.',
        },
        {
          title: 'Alineación con stakeholders',
          description:
            'Alineé stakeholders en Ciudad de México y Monterrey alrededor de una experiencia única y bien documentada en un entorno waterfall con requerimientos de cumplimiento bancario.',
        },
      ],
      outcome:
        'La parte más difícil de un proyecto de UX no es el diseño — es construir las personas y el proceso a su alrededor. Esa lección ha moldeado cómo he liderado cada equipo desde entonces.',
    },
  },
  about: {
    role: 'UX Manager & Design Leader',
    location: 'Querétaro, México · Disponible para trabajo remoto y reubicación',
    pullQuote: 'Ayudo a las organizaciones a construir la función de diseño que realmente necesitan.',
    paragraphs: [
      'Durante más de 20 años he liderado UX a escala para IBM, Deloitte Digital y Backbase — entregando productos empresariales para compañías globales como AT&T, Motorola Solutions y Lithia Motors, y grandes bancos en México y LATAM.',
      'He construido equipos de diseño desde cero, creado sistemas de diseño adoptados en organizaciones completas y aportado estructura a entornos donde la fragmentación lo ralentizaba todo.',
      'Mi trabajo se encuentra en la intersección del liderazgo de diseño, las operaciones y la estrategia. No solo gestiono diseñadores — construyo las condiciones para que el diseño tenga un impacto real en los resultados del negocio.',
    ],
    certificationsLabel: 'Certificaciones',
    expertiseLabel: 'Especialidades',
    expertise: [
      'Construcción y escala de equipos UX (2→20+ diseñadores) con estructura, rituales y cultura',
      'Sistemas de diseño empresariales — arquitectura, gobernanza, adopción y herramientas',
      'Operaciones de diseño: onboarding, revisiones de calidad, estándares de entrega, administración de Figma',
      'Alineación de stakeholders en negocio, tecnología y liderazgo en proyectos multi-empresa',
      'Facilitación de Design Thinking y desarrollo de capacidades para clientes y equipos internos',
      'Servicios financieros, telecomunicaciones, SaaS y diseño de plataformas B2B empresariales',
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    headline: 'Construyamos algo\nque importe.',
    subtext:
      'Abierto a roles de UX Manager, Head of UX y senior IC. También disponible para consultoría y facilitación de Design Thinking.',
    copyright: '© 2026 Eric Galván Ríos',
    footerCredit: 'Diseñado en Figma · Desarrollado con Next.js y Claude Code',
    links: [
      { id: 'whatsapp', label: 'WhatsApp →', href: 'https://wa.me/523334936789' },
      { id: 'email', label: 'egalvanrios@gmail.com →', href: 'mailto:egalvanrios@gmail.com' },
      { id: 'linkedin', label: 'LinkedIn →', href: 'https://linkedin.com/in/ericgalvan' },
    ],
  },
}

export const translations: Record<Lang, Translations> = { en, es }
