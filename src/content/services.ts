import type { Service } from "@/lib/types/content";

// The six approved core services (spec §5.4) — do not add services without
// approval. Titles and descriptions are approved copy. `deliverables` feed
// the /services page only and still need MiM sign-off.

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Build a distinctive digital presence through strategic planning, compelling content and consistent social media management that keeps your brand relevant and connected to its audience.",
    icon: "share",
    deliverables: ["Channel strategy", "Content calendars & publishing", "Community management", "Performance reviews"],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Turn advertising investment into measurable opportunities through targeted campaigns, audience insights and continuous optimisation focused on customer acquisition and business growth.",
    icon: "target",
    deliverables: ["Paid media strategy", "Cross-platform campaign management", "Audience research", "Creative testing"],
  },
  {
    slug: "content-production",
    title: "Content Production",
    description:
      "Bring your brand to life through high-quality photography, video and creative assets that capture attention, communicate value and strengthen your marketing across digital platforms.",
    icon: "camera",
    deliverables: ["Photography", "Video production", "Short-form content", "Post-production & editing"],
  },
  {
    slug: "search-engine-optimisation",
    title: "Search Engine Optimisation",
    description:
      "Improve your visibility across search engines, attract relevant organic traffic and build a stronger foundation for long-term discoverability and growth.",
    icon: "search",
    deliverables: ["Technical SEO audits", "Keyword & content strategy", "On-page optimisation", "Local search visibility"],
  },
  {
    slug: "brand-strategy-identity",
    title: "Brand Strategy & Identity",
    description:
      "Define what makes your brand different through clear positioning, distinctive visual identity and cohesive communication that builds recognition and trust.",
    icon: "palette",
    deliverables: ["Brand positioning", "Visual identity systems", "Tone of voice", "Brand guidelines"],
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    description:
      "Create purposeful digital experiences that communicate your value, establish credibility and turn visitors into meaningful enquiries and business opportunities.",
    icon: "layout",
    deliverables: ["UX & website design", "Website development", "Landing pages", "Analytics & tracking setup"],
  },
];
