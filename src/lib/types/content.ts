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
  challenge: string;
  approach: string;
  results: string;
  gallery: GalleryItem[];
  testimonial?: Testimonial;
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
