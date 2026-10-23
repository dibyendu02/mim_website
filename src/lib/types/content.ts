export interface Cta {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ServiceIconName = "share" | "target" | "camera" | "search" | "palette" | "layout";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  deliverables: string[];
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
}

/** Shared shape for the approach steps and the value propositions. */
export interface NumberedItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  /** One short line on what this person is responsible for. */
  detail: string;
  portrait: ImageAsset;
}

export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

/** Spec §5.3 recommended presentation structure — vary as evidence requires. */
export type CaseStudySlideKind =
  | "introduction"
  | "challenge"
  | "strategy"
  | "creative-direction"
  | "execution"
  | "the-work"
  | "outcomes"
  | "conclusion";

export interface CaseStudySlide {
  kind: CaseStudySlideKind;
  heading: string;
  body?: string;
  points?: string[];
  images?: ImageAsset[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  project: string;
  /** Matches an Industry slug, so industries can link to relevant work. */
  industry: string;
  /** Short service/category label shown on cards. */
  category: string;
  summary: string;
  cover: ImageAsset;
  /** Featured studies appear on the homepage; all appear on /case-studies. */
  featured: boolean;
  slides: CaseStudySlide[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
