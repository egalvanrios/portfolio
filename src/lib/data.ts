// Single source of truth for all portfolio content.
// No strings should be hardcoded elsewhere in the app.

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface Cta {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Metric {
  value: string
  label: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface CaseStudy {
  id: string
  slug: string
  num: string
  client: string
  tag: string
  title: string
  challenge: string
  metrics: [Metric, Metric, Metric]
  accentColor: string
  image: string
  link?: string
  role?: string
  year?: string
  overview?: string
  process?: ProcessStep[]
  outcome?: string
  nextProject?: string
}

export interface WorkSectionMeta {
  heading: string
  subheading: string
  cta: string
}

export interface Certification {
  name: string
  issuer?: string
  year?: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface ContactLink {
  id: string
  label: string
  href: string
}

export interface NavConfig {
  logo: string
  cta: Cta
}

export interface HeroData {
  eyebrow: string
  headline: string
  headlineHighlight: string
  subheading: string
  primaryCta: Cta
  secondaryCta: Cta
  companiesLabel: string
  companies: string[]
}

export interface AboutData {
  name: string
  nameLines: [string, string]
  role: string
  location: string
  socialLinks: SocialLink[]
  pullQuote: string
  certificationsLabel: string
  expertiseLabel: string
}

export interface ContactData {
  eyebrow: string
  headline: string
  subtext: string
  footerText: string
  footerCredit: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navConfig: NavConfig = {
  logo: "Eric Galván",
  cta: { label: "Let's talk →", href: "/#contact" },
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero: HeroData = {
  eyebrow: "UX Manager & Design Leader",
  headline: "I build the design function organizations actually need.",
  headlineHighlight: "actually need.",
  subheading:
    "20 years leading enterprise UX at IBM, Deloitte Digital, and Backbase — teams, systems, and strategy at scale.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Read about me →", href: "#about" },
  companiesLabel: "Worked with",
  companies: ["IBM", "Deloitte Digital", "AT&T", "Backbase", "Banorte", "Motorola Solutions"],
}

// ─── Work ─────────────────────────────────────────────────────────────────────

export const work: WorkSectionMeta = {
  heading: "Selected work",
  subheading: "Enterprise UX at scale — 2026",
  cta: "View case study →",
}

export const caseStudies: CaseStudy[] = [
  {
    id: "att-customer-connect",
    slug: "att-customer-connect",
    num: "01",
    client: "AT&T · Deloitte Digital",
    tag: "Design System · Leadership",
    title: "Customer Connect Design System",
    role: "UX Manager — Delivery Lead",
    year: "Jan 2022 – Dec 2023",
    challenge:
      "AT&T's Salesforce ecosystem had fragmented experiences across Service Cloud, Sales Cloud, and Marketing Cloud. Three companies working in separate Figma spaces — no unified design standards, slow approvals, no governance.",
    overview:
      "The project started with just two designers. Within six months we had more than 16 working across 5,000+ user stories. Without a clear structure, that growth would have made the fragmentation even worse.",
    process: [
      {
        title: "Team structure & scaling",
        description:
          "Scaled the UX team from 2 to 16+ designers in six months, defining structure aligned to Salesforce clouds. Aligned designers from AT&T, Salesforce, and Deloitte around a shared strategy and roadmap.",
      },
      {
        title: "Design system — Customer Connect",
        description:
          "Built AT&T's Customer Connect design system from scratch in Figma: component libraries, design tokens, page templates, and documentation guidelines. Served as Figma org admin for 16+ designers.",
      },
      {
        title: "Governance & adoption",
        description:
          "Established governance for contributions, versioning, and adoption across all three companies. Standardized design-to-dev handoff using Figma and Jira.",
      },
      {
        title: "Stakeholder alignment",
        description:
          "Redesigned approval flows across Service, Sales, and Marketing. Maintained close alignment with AT&T leadership, product managers, and development teams.",
      },
    ],
    outcome:
      "Bringing three companies, two cultures, and 16 designers into a single coherent practice — without losing speed or quality — is what I'm most proud of from this engagement.",
    metrics: [
      { value: "2→16+", label: "Designers in 6 months" },
      { value: "5,000+", label: "User stories delivered" },
      { value: "60%", label: "Design system adoption" },
    ],
    accentColor: "#EAF3DE",
    image: "/clients/att.png",
    nextProject: "backbase-digital-banking",
  },
  {
    id: "backbase-digital-banking",
    slug: "backbase-digital-banking",
    num: "02",
    client: "Backbase · LATAM Banks",
    tag: "Research · Fintech",
    title: "Digital Banking UX",
    role: "Senior UX Designer",
    year: "Apr 2021 – Oct 2021",
    challenge:
      "Two large Latin American banks were losing customers to friction in their key digital journeys. Retail customers struggled with complex onboarding flows; corporate clients faced cumbersome payroll processes.",
    overview:
      "Strict Scrum cadences and tight release windows left little room for rework. The solution required validated design patterns for the LATAM market before any handoff to development.",
    process: [
      {
        title: "Design strategy",
        description:
          "Redesigned end-to-end UX for retail onboarding and corporate payroll journeys — simplifying information architecture to reduce cognitive load. Created wireframes, interactive prototypes, and high-fidelity designs for web and mobile.",
      },
      {
        title: "User research & validation",
        description:
          "Used Maze to run usability tests on payroll flows with real users from corporate client segments. Collected behavioral data and qualitative feedback; iterated designs before any handoff.",
      },
      {
        title: "Agile delivery",
        description:
          "Worked one half-sprint ahead of development in a Scrum setup, keeping delivery smooth and reducing back-and-forth. Partnered with product owners and client stakeholders during sprint planning and reviews.",
      },
    ],
    outcome:
      "Validated prototypes eliminated major dev rework cycles. The redesigned flows are now standard for LATAM banking implementations on the Backbase platform.",
    metrics: [
      { value: "65%", label: "Drop-off reduction" },
      { value: "~45%", label: "Faster task completion" },
      { value: "~40%", label: "Error rate reduction" },
    ],
    accentColor: "#EAF0F5",
    image: "/clients/backbase.png",
    nextProject: "motorola-cpq",
  },
  {
    id: "motorola-cpq",
    slug: "motorola-cpq",
    num: "03",
    client: "Motorola Solutions · Deloitte Digital",
    tag: "Enterprise · CPQ",
    title: "Oracle CPQ Redesign",
    role: "UX Lead",
    year: "2 months · 2023",
    challenge:
      "Motorola Solutions needed to modernize their Oracle CPQ platform — used daily by sales teams across North America and Europe. The existing interface was complex and inconsistent, slowing quoting and increasing training overhead.",
    overview:
      "The organization wanted to adopt Oracle's Redwood Design System without breaking established workflows or creating disruption for regional stakeholders.",
    process: [
      {
        title: "Design system implementation",
        description:
          "Led the application of the Oracle Redwood Design System to the CPQ platform — mapping existing flows and components to Redwood patterns. Created a component library blending Redwood standards with Motorola-specific needs.",
      },
      {
        title: "Workflow optimization",
        description:
          "Simplified navigation and step-by-step quoting flows for the most common sales scenarios. Designed role-based views tailored to different user types in the quote process.",
      },
      {
        title: "Stakeholder management",
        description:
          "Coordinated requirements with product owners and stakeholders in North America and Europe simultaneously. Facilitated design reviews balancing business goals, technical constraints, and user needs.",
      },
    ],
    outcome:
      "Successfully aligned CPQ to Motorola's design strategy using Oracle Redwood. Regional stakeholders in NA and Europe responded positively to the clarity and usability improvements.",
    metrics: [
      { value: "45%", label: "Task efficiency gain" },
      { value: "NA+EU", label: "Regional alignment" },
      { value: "Redwood", label: "Design system adopted" },
    ],
    accentColor: "#F5F3EA",
    image: "/clients/motorola.png",
    nextProject: "banorte-mobile-banking",
  },
  {
    id: "banorte-mobile-banking",
    slug: "banorte-mobile-banking",
    num: "04",
    client: "Banorte · IBM",
    tag: "Mobile · Team Building",
    title: "Mobile Banking App",
    role: "UX Lead",
    year: "Feb 2015 – Aug 2015",
    challenge:
      "Banorte needed to redesign its mobile banking app and public web portal from the ground up — no existing UX team, waterfall methodology, stakeholders in two cities, banking regulations at every turn.",
    overview:
      "This was not just a design project. It was an organizational challenge: build the team, establish the process, and deliver a product that would serve millions of customers.",
    process: [
      {
        title: "Building the team & practice",
        description:
          "Assembled a 12-person team from scratch: UX designers, UI designers, and Business Analysts — many with no prior UX experience. Trained 5 BAs in UX techniques, transforming them into capable contributors. This model was later replicated on other IBM projects.",
      },
      {
        title: "Design process",
        description:
          "Spent five months defining the new end-to-end banking experience. Produced wireframes in Keynote and documented every behaviour in InDesign, including functional requirements for engineering.",
      },
      {
        title: "Visual system",
        description:
          "Led high-fidelity design in Illustrator once wireframes were approved. Created detailed stylesheets for core UI elements — buttons, forms, menus, typography — designed for reuse across multiple banking products.",
      },
      {
        title: "Stakeholder alignment",
        description:
          "Aligned stakeholders across Mexico City and Monterrey around a single, well-documented experience in a waterfall environment with banking compliance requirements.",
      },
    ],
    outcome:
      "The hardest part of a UX engagement isn't the design — it's building the people and process around it. That lesson has shaped how I've led every team since.",
    metrics: [
      { value: "12", label: "Person team built" },
      { value: "5", label: "BAs turned UX contributors" },
      { value: "2+ yr", label: "Design in production" },
    ],
    accentColor: "#F5ECEA",
    image: "/clients/banorte.png",
    nextProject: "att-customer-connect",
  },
]

// ─── About ────────────────────────────────────────────────────────────────────

export const about: AboutData = {
  name: "Eric Galván Ríos",
  nameLines: ["Eric", "Galván Ríos"],
  role: "UX Manager & Design Leader",
  location: "Querétaro, Mexico · Open to remote & relocation",
  socialLinks: [
    { label: "egalvanrios@gmail.com", href: "mailto:egalvanrios@gmail.com" },
    { label: "linkedin.com/in/ericgalvan", href: "https://linkedin.com/in/ericgalvan" },
  ],
  pullQuote: "I help organizations build the design function they actually need.",
  certificationsLabel: "Certifications",
  expertiseLabel: "Core expertise",
}

export const aboutParagraphs: [string, string, string] = [
  "Over 20 years I've led UX at scale for IBM, Deloitte Digital, and Backbase — delivering enterprise products for US global companies including AT&T, Motorola Solutions, and Lithia Motors, and major banks across Mexico and LATAM.",
  "I've built design teams from the ground up, created design systems adopted across entire organizations, and brought structure to environments where fragmentation was slowing everything down.",
  "My work sits at the intersection of design leadership, operations, and strategy. I don't just manage designers — I build the conditions for design to have a real impact on business outcomes.",
]

export const certifications: Certification[] = [
  { name: "Enterprise Design Thinking Coach", issuer: "IBM" },
  { name: "Professional Scrum Master", issuer: "Scrum.org" },
  { name: "Professional Product Owner", issuer: "Scrum.org" },
  { name: "IBM Agile Champion", issuer: "IBM" },
  { name: "Claude 101 & Claude Code 101", issuer: "Anthropic" },
]

export const expertise: string[] = [
  "Building & scaling UX teams (2→20+ designers) with the right structure, rituals, and culture",
  "Enterprise design systems — architecture, governance, adoption, and tooling",
  "Design operations: onboarding, quality reviews, dev handoff standards, Figma org administration",
  "Stakeholder alignment across business, technology, and leadership in multi-company engagements",
  "Design Thinking facilitation and capability building for clients and internal teams",
  "Financial services, telecom, SaaS, and enterprise B2B platform design",
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const siteUrl = "https://eric-galvan-dev.base44.app"

export const contact: ContactData = {
  eyebrow: "Contact",
  headline: "Let's build something\nthat matters.",
  subtext:
    "Open to UX Manager, Head of UX, and senior IC roles. Also available for consulting and Design Thinking facilitation.",
  footerText: "© 2026 Eric Galván Ríos",
  footerCredit: "Designed in Figma · Built with Next.js & Claude Code",
}

// href for WhatsApp uses wa.me — number is never rendered in the UI
export const contactLinks: ContactLink[] = [
  { id: "whatsapp", label: "WhatsApp →", href: "https://wa.me/523334936789" },
  { id: "email", label: "egalvanrios@gmail.com →", href: "mailto:egalvanrios@gmail.com" },
  { id: "linkedin", label: "LinkedIn →", href: "https://linkedin.com/in/ericgalvan" },
]
