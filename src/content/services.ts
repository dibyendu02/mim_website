import type { Service } from "@/lib/types/content";

// PLACEHOLDER copy — realistic length/voice so layout holds up once real
// service descriptions arrive. Swap text fields only; structure stays.
//
// Order + bentoSize drive the bento grid: the two "lg" core services sit
// side by side as highlighted tiles, the four "sm" ones fill the row below.
//
// `image` is temporary stock photography from Picsum (Unsplash-backed,
// seeded for a stable URL, no API key needed) — swap for real production
// stills once MiM supplies them.
const stockPhoto = (seed: string) => `https://picsum.photos/seed/${seed}/1000/800`;

export const services: Service[] = [
  {
    slug: "social-media-management",
    image: stockPhoto("social-media-management"),
    title: "Social Media Marketing",
    shortDescription:
      "Build a distinctive digital presence through strategic planning, compelling content and consistent social media management that keeps your brand relevant and connected to its audience.",
    description:
      "End-to-end management of always-on channels — strategy, calendar, community, and reporting — so organic and paid pull in the same direction.",
    deliverables: [
      "Channel strategy",
      "Content calendar & publishing",
      "Community management",
      "Monthly growth reporting",
    ],
    icon: "share",
    bentoSize: "lg",
  },
  {
    slug: "performance-marketing",
    image: stockPhoto("performance-marketing"),
    title: "Performance Marketing",
    shortDescription:
      "Turn advertising investment into measurable opportunities through targeted campaigns, audience insights and continuous optimisation focused on customer acquisition and business growth.",
    description:
      "We run paid acquisition across search, social, and programmatic as one connected system — built around a target CAC or ROAS from day one, not vanity reach.",
    deliverables: [
      "Full-funnel paid media strategy",
      "Cross-platform campaign management",
      "Creative testing at scale",
      "Weekly performance reporting",
    ],
    icon: "target",
    bentoSize: "lg",
  },
  {
    slug: "content-production",
    image: stockPhoto("content-production"),
    title: "Content Production",
    shortDescription:
      "Bring your brand to life through high-quality photography, video and creative assets that capture attention, communicate value and strengthen your marketing across digital platforms.",
    description:
      "In-house photography and videography that gives every campaign a steady supply of native-feeling creative, produced fast enough to keep up with paid media's testing cadence.",
    deliverables: [
      "Photo & video shoots",
      "Short-form content systems",
      "Post-production & editing",
      "Content calendars",
    ],
    icon: "camera",
    bentoSize: "sm",
  },
  {
    slug: "seo-organic-growth",
    image: stockPhoto("seo-organic-growth"),
    title: "Search Engine Optimisation",
    shortDescription:
      "Improve your visibility across search engines, attract relevant organic traffic and build a stronger foundation for long-term discoverability and growth.",
    description:
      "Technical SEO, content strategy, and organic growth systems designed to compound over quarters — the channel that keeps working after the ad budget is spent elsewhere.",
    deliverables: [
      "Technical SEO audits",
      "Content & keyword strategy",
      "On-page optimization",
      "Organic performance tracking",
    ],
    icon: "trending-up",
    bentoSize: "sm",
  },
  {
    slug: "brand-creative-direction",
    image: stockPhoto("brand-creative-direction"),
    title: "Brand Strategy & Identity",
    shortDescription:
      "Define what makes your brand different through clear positioning, distinctive visual identity and cohesive communication that builds recognition and trust.",
    description:
      "Positioning, visual identity, and creative direction that gives every campaign, shoot, and platform a consistent voice — so growth doesn't come at the cost of coherence.",
    deliverables: [
      "Brand positioning & voice",
      "Visual identity systems",
      "Campaign creative direction",
      "Brand guidelines",
    ],
    icon: "palette",
    bentoSize: "sm",
  },
  {
    slug: "website-conversion-systems",
    image: stockPhoto("website-conversion-systems"),
    title: "Website Design & Development",
    shortDescription:
      "Create purposeful digital experiences that communicate your value, establish credibility and turn visitors into meaningful enquiries and business opportunities.",
    description:
      "Websites, landing pages, and conversion funnels designed and engineered as a system — so every other channel's traffic actually turns into pipeline.",
    deliverables: [
      "Website design & development",
      "Landing page systems",
      "CRO & A/B testing",
      "Analytics & tracking setup",
    ],
    icon: "layout-grid",
    bentoSize: "sm",
  },
];
