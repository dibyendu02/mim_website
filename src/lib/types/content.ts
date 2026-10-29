export type BentoSize = "sm" | "md" | "lg" | "wide";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  icon: string;
  bentoSize: BentoSize;
  image: string;
}

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  clientSlug: string;
  clientName: string;
  clientLogo: string;
  metric?: Metric;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientLogo: string;
  industry: string;
  servicesUsed: string[];
  headline: string;
  summary: string;
  heroMetric: Metric;
  metrics: Metric[];
  introduction: string;
  challenge: string;
  strategy: string;
  creativeDirection: { concept: string; body: string };
  execution: { body: string; deliverables: string[] };
  outcomes: string;
  conclusion: string;
  gallery: GalleryItem[];
  testimonial?: Testimonial;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  /** Real project imagery only — the card renders text-only without it. */
  image?: string;
  /** Where to see related work, e.g. a case study, once one exists. */
  href?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Logo {
  name: string;
  src: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CtaContent {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
