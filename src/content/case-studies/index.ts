import type { CaseStudy } from "@/lib/types/content";
import { placeholderPhoto } from "@/content/placeholder";

// PLACEHOLDER case studies — client names, copy and imagery are stand-ins so
// the cards and presentation can be built and reviewed. Spec §5.3 / §10:
// replace with MiM's nine approved case studies before launch, and publish
// only verified, approved outcomes. Where metrics are unavailable, describe
// deliverables and qualitative outcomes — never invent numbers.
//
// Each study is a sequence of slides following the recommended structure
// (introduction → conclusion); add, drop or reorder slides as evidence
// requires — the presentation renders whatever is here.

export const caseStudies: CaseStudy[] = [
  {
    slug: "atelier-forma",
    client: "Atelier Forma",
    project: "A digital home for a design-led studio",
    industry: "architecture-interiors",
    category: "Brand & Web",
    summary: "Positioning, identity refresh and a portfolio-first website for an interior architecture studio.",
    cover: placeholderPhoto("cs-forma-cover", "Atelier Forma website shown on a laptop"),
    featured: true,
    slides: [
      {
        kind: "introduction",
        heading: "Atelier Forma",
        body: "An interior architecture studio with an award-worthy body of work and a digital presence that undersold it.",
        points: ["Industry: Architecture & Interiors", "Services: Brand Strategy & Identity, Website Design & Development"],
      },
      {
        kind: "challenge",
        heading: "Strong work, weak first impression",
        body: "Prospective clients found the studio through referrals, then met an outdated website that made projects hard to explore and harder to trust.",
      },
      {
        kind: "strategy",
        heading: "Let the projects make the argument",
        body: "We positioned the studio around its process and finished spaces, and planned a site where every page leads back to the work.",
      },
      {
        kind: "creative-direction",
        heading: "Quiet, architectural, material",
        body: "A restrained identity built on generous whitespace, a single typeface and photography that lets materials and light do the talking.",
        images: [placeholderPhoto("cs-forma-creative", "Atelier Forma identity elements")],
      },
      {
        kind: "execution",
        heading: "What we delivered",
        points: ["Brand positioning and messaging", "Identity refresh and guidelines", "Portfolio website design and build", "Project photography direction"],
      },
      {
        kind: "the-work",
        heading: "The work",
        images: [
          placeholderPhoto("cs-forma-work-1", "Atelier Forma homepage design"),
          placeholderPhoto("cs-forma-work-2", "Atelier Forma project page design"),
        ],
      },
      {
        kind: "outcomes",
        heading: "Outcomes",
        body: "Placeholder — to be replaced with verified, approved outcomes or delivered outputs supplied by MiM.",
      },
      {
        kind: "conclusion",
        heading: "Structure makes good work visible",
        body: "A clear position and a purposeful website gave the studio a digital presence that matches the quality of its spaces.",
      },
    ],
  },
  {
    slug: "the-coastline-hotel",
    client: "The Coastline Hotel",
    project: "Making a boutique stay feel unmissable",
    industry: "hospitality-hotels",
    category: "Social & Content",
    summary: "An always-on social and content programme built around the guest experience.",
    cover: placeholderPhoto("cs-coastline-cover", "The Coastline Hotel campaign photography"),
    featured: true,
    slides: [
      {
        kind: "introduction",
        heading: "The Coastline Hotel",
        body: "A boutique coastal hotel looking to strengthen direct demand and stand apart from larger chains.",
        points: ["Industry: Hospitality & Hotels", "Services: Social Media Marketing, Content Production"],
      },
      {
        kind: "challenge",
        heading: "A memorable stay, a forgettable feed",
        body: "Guests loved the experience, but the hotel’s social presence was sporadic and didn’t convey what made a stay special.",
      },
      {
        kind: "strategy",
        heading: "Sell the feeling, not the room",
        body: "We built a content plan around moments guests remember — mornings, food, the coastline — and a consistent publishing rhythm to keep the brand visible.",
      },
      {
        kind: "creative-direction",
        heading: "Slow, warm, cinematic",
        body: "Natural light, unhurried edits and a warm colour treatment that carried across photography, reels and stories.",
        images: [placeholderPhoto("cs-coastline-creative", "The Coastline Hotel moodboard")],
      },
      {
        kind: "execution",
        heading: "What we delivered",
        points: ["Social media strategy", "Seasonal content shoots", "Short-form video series", "Community management"],
      },
      {
        kind: "the-work",
        heading: "The work",
        images: [
          placeholderPhoto("cs-coastline-work-1", "The Coastline Hotel social content"),
          placeholderPhoto("cs-coastline-work-2", "The Coastline Hotel video stills"),
        ],
      },
      {
        kind: "outcomes",
        heading: "Outcomes",
        body: "Placeholder — to be replaced with verified, approved outcomes or delivered outputs supplied by MiM.",
      },
      {
        kind: "conclusion",
        heading: "Consistency builds desirability",
        body: "A steady, recognisable content system turned a great guest experience into a brand people want to discover.",
      },
    ],
  },
  {
    slug: "harvest-table",
    client: "Harvest Table",
    project: "Launching a neighbourhood restaurant brand",
    industry: "food-beverages",
    category: "Brand & Performance",
    summary: "Identity, launch content and targeted local campaigns for a new restaurant concept.",
    cover: placeholderPhoto("cs-harvest-cover", "Harvest Table launch campaign photography"),
    featured: true,
    slides: [
      {
        kind: "introduction",
        heading: "Harvest Table",
        body: "A new all-day restaurant concept launching into a crowded local dining scene.",
        points: ["Industry: Food & Beverages", "Services: Brand Strategy & Identity, Performance Marketing, Content Production"],
      },
      {
        kind: "challenge",
        heading: "Opening day is not a strategy",
        body: "The team needed a brand people would recognise and a plan to keep tables full beyond launch week.",
      },
      {
        kind: "strategy",
        heading: "Local first, then loyal",
        body: "We focused spend on the surrounding neighbourhoods and paired launch campaigns with content designed to bring guests back.",
      },
      {
        kind: "creative-direction",
        heading: "Honest food, bold type",
        body: "An identity with confident typography and close-up food photography that made the menu the hero.",
        images: [placeholderPhoto("cs-harvest-creative", "Harvest Table identity and menu design")],
      },
      {
        kind: "execution",
        heading: "What we delivered",
        points: ["Brand identity and menu design", "Launch photography and video", "Local performance campaigns", "Social media launch plan"],
      },
      {
        kind: "the-work",
        heading: "The work",
        images: [
          placeholderPhoto("cs-harvest-work-1", "Harvest Table campaign creative"),
          placeholderPhoto("cs-harvest-work-2", "Harvest Table social posts"),
        ],
      },
      {
        kind: "outcomes",
        heading: "Outcomes",
        body: "Placeholder — to be replaced with verified, approved outcomes or delivered outputs supplied by MiM.",
      },
      {
        kind: "conclusion",
        heading: "Brand and performance, planned together",
        body: "Launching the identity and the campaigns as one system gave the restaurant a recognisable presence from day one.",
      },
    ],
  },
  {
    slug: "oak-and-loom",
    client: "Oak & Loom",
    project: "Turning furniture into stories worth sharing",
    industry: "furniture-lifestyle",
    category: "Content & SEO",
    summary: "Lifestyle content and an SEO foundation for a furniture and homeware brand.",
    cover: placeholderPhoto("cs-oak-cover", "Oak & Loom lifestyle photography"),
    featured: true,
    slides: [
      {
        kind: "introduction",
        heading: "Oak & Loom",
        body: "A furniture and homeware brand with beautiful products and limited visibility beyond its showroom.",
        points: ["Industry: Furniture & Lifestyle", "Services: Content Production, Search Engine Optimisation"],
      },
      {
        kind: "challenge",
        heading: "Products without a story",
        body: "Catalogue-style imagery and thin product pages made it hard for the brand to be found or remembered online.",
      },
      {
        kind: "strategy",
        heading: "Show the life around the product",
        body: "We planned lifestyle content that placed products in real spaces, and restructured the site so that content could be discovered in search.",
      },
      {
        kind: "creative-direction",
        heading: "Lived-in, tactile, calm",
        body: "Styled rooms, natural textures and soft daylight — images that feel like a home, not a showroom.",
        images: [placeholderPhoto("cs-oak-creative", "Oak & Loom styled room photography")],
      },
      {
        kind: "execution",
        heading: "What we delivered",
        points: ["Lifestyle photography", "Product content for web and social", "Technical SEO audit and fixes", "Category page content"],
      },
      {
        kind: "the-work",
        heading: "The work",
        images: [
          placeholderPhoto("cs-oak-work-1", "Oak & Loom product photography"),
          placeholderPhoto("cs-oak-work-2", "Oak & Loom category page design"),
        ],
      },
      {
        kind: "outcomes",
        heading: "Outcomes",
        body: "Placeholder — to be replaced with verified, approved outcomes or delivered outputs supplied by MiM.",
      },
      {
        kind: "conclusion",
        heading: "Content that works twice",
        body: "Planning content for both people and search meant every shoot strengthened the brand and its discoverability.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export const slideLabels: Record<CaseStudy["slides"][number]["kind"], string> = {
  introduction: "Introduction",
  challenge: "Challenge",
  strategy: "Strategy",
  "creative-direction": "Creative direction",
  execution: "Execution",
  "the-work": "The work",
  outcomes: "Outcomes",
  conclusion: "Conclusion",
};
