export type Lang = 'es' | 'en';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  alternatePath: string;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Metric {
  value: number;
  label: string;
}

export interface Project {
  slug: string;
  index: string;
  kicker: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  metrics?: Metric[];
  links: LinkItem[];
  image?: string;
  imageAlt?: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  context: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: { name: string; evidence: string }[];
}

export interface CaseSection {
  id: string;
  index: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  cards?: { title: string; body: string }[];
  gallery?: { src: string; alt: string; caption: string; wide?: boolean; fit?: 'cover' | 'contain' }[];
}

export interface CaseStudy {
  slug: string;
  seo: PageMeta;
  kicker: string;
  title: string;
  lede: string;
  facts: { label: string; value: string }[];
  links: LinkItem[];
  metrics: Metric[];
  sections: CaseSection[];
  closing: { title: string; body: string; cta: LinkItem };
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPage {
  seo: PageMeta;
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface ContactFormCopy {
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  privacyPrefix: string;
  privacyLink: string;
  required: string;
}

export interface SiteContent {
  lang: Lang;
  locale: 'es_ES' | 'en_US';
  meta: {
    home: PageMeta;
    laNuevaEra: PageMeta;
    portfolio: PageMeta;
    privacy: PageMeta;
    legal: PageMeta;
    notFound: PageMeta;
  };
  nav: LinkItem[];
  header: {
    status: string;
    menu: string;
    close: string;
    theme: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    name: [string, string];
    specTitle: string;
    role: string;
    lede: string;
    ctas: LinkItem[];
    spec: { label: string; value: string }[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    featured: Project;
    featuredCta: string;
    others: Project[];
    allLabel: string;
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    items: ExperienceEntry[];
  };
  skills: {
    label: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    photoAlt: string;
    educationTitle: string;
    education: { period: string; title: string; place: string; note?: string }[];
    coursesTitle: string;
    courses: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    form: ContactFormCopy;
    direct: LinkItem[];
  };
  footer: {
    note: string;
    built: string;
    links: LinkItem[];
    backToTop: string;
    copyright: string;
  };
  caseStudies: {
    laNuevaEra: CaseStudy;
    portfolio: CaseStudy;
  };
  legal: {
    privacy: LegalPage;
    notice: LegalPage;
  };
  notFound: {
    title: string;
    text: string;
    cta: LinkItem;
  };
}
