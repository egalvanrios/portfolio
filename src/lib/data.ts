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

export interface CaseStudy {
  id: string
  num: string
  client: string
  tag: string
  title: string
  challenge: string
  metrics: [Metric, Metric, Metric]
  link: string
  accentColor: string // 12px dot, unique per case study
}

export interface WorkSectionMeta {
  heading: string
  subheading: string
  cta: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
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
  headlineHighlight: string // rendered in forest color
  subheading: string
  primaryCta: Cta
  secondaryCta: Cta
  companiesLabel: string
  companies: string[]
}

export interface AboutData {
  name: string              // full name for metadata/title
  nameLines: [string, string] // display format: ["Eric", "Galván Ríos"]
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
  cta: { label: "Let's talk →", href: "#contact" },
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero: HeroData = {
  eyebrow: "UX Manager & Design Strategist",
  headline: "I build the design function organizations actually need.",
  headlineHighlight: "actually need.",
  subheading:
    "I partner with product and business leaders to bring structure, craft, and clarity to design — from day one to a scaled practice.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Read about me →", href: "#about" },
  companiesLabel: "Worked with",
  companies: ["Bancoppel", "Rappi", "Clip", "GBM+", "FEMSA", "Banorte"],
}

// ─── Work ─────────────────────────────────────────────────────────────────────

export const work: WorkSectionMeta = {
  heading: "Selected work",
  subheading: "Enterprise UX at scale — 2026",
  cta: "View case study →",
}

export const caseStudies: CaseStudy[] = [
  {
    id: "bancoppel-design-system",
    num: "01",
    client: "Bancoppel",
    tag: "Design Systems",
    title: "Building a design system from zero for Mexico's largest retail bank.",
    challenge:
      "Seven digital products were shipping inconsistent experiences with no shared component language between design and engineering, causing duplicated work and slow release cycles.",
    metrics: [
      { value: "4×", label: "faster component delivery" },
      { value: "60%", label: "reduction in design QA cycles" },
      { value: "12", label: "products unified under one system" },
    ],
    link: "#",
    accentColor: "#EAF3DE", // mist
  },
  {
    id: "rappi-checkout",
    num: "02",
    client: "Rappi",
    tag: "UX Research",
    title: "Reframing the checkout experience through a 6-week discovery sprint.",
    challenge:
      "Cart abandonment was at 38% but no one had mapped the actual decision points users hit before dropping off — the team was optimizing copy instead of fixing the real friction.",
    metrics: [
      { value: "38%", label: "drop in cart abandonment" },
      { value: "21", label: "user interviews synthesized" },
      { value: "3", label: "critical drop-off points resolved" },
    ],
    link: "#",
    accentColor: "#D0E8F3", // blue-tint
  },
  {
    id: "clip-design-ops",
    num: "03",
    client: "Clip",
    tag: "Design Operations",
    title: "Scaling a 3-person design team into a 14-person practice in 18 months.",
    challenge:
      "Rapid headcount growth with no onboarding playbook, tooling strategy, or shared processes was creating duplicated work, inconsistent output, and designer burnout.",
    metrics: [
      { value: "14", label: "designers onboarded and retained" },
      { value: "2×", label: "improvement in design-to-dev handoff speed" },
      { value: "91%", label: "team satisfaction score at 12 months" },
    ],
    link: "#",
    accentColor: "#F1EFE8", // sand
  },
  {
    id: "gbm-investment-app",
    num: "04",
    client: "GBM+",
    tag: "Product Strategy",
    title: "Redesigning the investment experience for first-time investors in Mexico.",
    challenge:
      "First-time investors were churning within 2 weeks because the product mirrored complexity designed for seasoned traders, creating anxiety rather than confidence at the critical activation moment.",
    metrics: [
      { value: "47%", label: "increase in 30-day retention" },
      { value: "+5 pts", label: "NPS improvement within 90 days" },
      { value: "2.1M", label: "users reached at launch" },
    ],
    link: "#",
    accentColor: "#F5DDD8", // pink-tint
  },
]

// ─── About ────────────────────────────────────────────────────────────────────

export const about: AboutData = {
  name: "Eric Galván Ríos",
  nameLines: ["Eric", "Galván Ríos"],
  role: "UX Manager & Design Strategist",
  location: "Guadalajara, México",
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ericgalvan" },
    { label: "Email", href: "mailto:egalvanrios@gmail.com" },
  ],
  pullQuote:
    "Good design isn't just about what ships — it's about building the conditions where good work can happen consistently.",
  certificationsLabel: "Certifications",
  expertiseLabel: "Core expertise",
}

// Three body paragraphs for the About right column
export const aboutParagraphs: [string, string, string] = [
  "I've spent the last decade helping companies in Latin America build design functions that actually work — not just in theory, but in the daily reality of competing priorities, tight timelines, and fast-growing teams. I've led design at fintechs, e-commerce platforms, and traditional banks, and the lesson is always the same: the quality of the work is inseparable from the health of the system that produces it.",
  "My approach is rooted in systems thinking. I don't just solve the problem in front of me — I try to understand why it keeps appearing and what structures need to change so it doesn't come back. Whether that's a design system, a research practice, a hiring rubric, or a new way of running critique, I'm always building toward something that outlasts any single project.",
  "I care about craft, clarity, and teams that trust each other. I believe the best design leaders are the ones who make themselves progressively less necessary — because they've built something that runs on shared values and good judgment, not on their own constant presence.",
]

export const certifications: Certification[] = [
  {
    name: "UX Management: Strategy and Tactics",
    issuer: "Nielsen Norman Group",
    year: "2023",
  },
  {
    name: "Product Strategy",
    issuer: "Reforge",
    year: "2023",
  },
  {
    name: "Human-Centered Design",
    issuer: "IDEO U",
    year: "2022",
  },
  {
    name: "Design Leadership",
    issuer: "School of Visual Arts",
    year: "2022",
  },
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    year: "2021",
  },
]

// Flat array of 6 — component splits at index 3 for the two-column layout
export const expertise: string[] = [
  "Design Strategy",
  "UX Research",
  "Design Systems",
  "Design Operations",
  "Team Leadership",
  "Product Thinking",
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const siteUrl = "https://eric-galvan-dev.base44.app"

export const contact: ContactData = {
  eyebrow: "Contact",
  headline: "Let's build something worth building.",
  subtext:
    "Whether you're scaling a team, starting a design practice from zero, or just need a second opinion — I'd love to hear what you're working on.",
  footerText: "© 2025 Eric Galván Ríos. All rights reserved.",
  footerCredit: "Designed in Figma · Built with Next.js & Claude Code",
}

// href for WhatsApp uses wa.me — number is never rendered in the UI
export const contactLinks: ContactLink[] = [
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/523334936789" },
  { id: "email", label: "Email", href: "mailto:egalvanrios@gmail.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/ericgalvan" },
  { id: "portfolio", label: "Portfolio", href: "https://eric-galvan-dev.base44.app" },
]
