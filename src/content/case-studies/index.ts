import type { CaseStudy } from "@/lib/types/content";

// PLACEHOLDER data — real client names, metrics, and imagery to replace
// before launch. Structure (challenge/approach/results, metrics array,
// gallery) is what CaseStudyCard / strip / detail page all key off of, so
// new real case studies can be added as new array entries with zero
// component changes.
//
// Gallery images are temporary stock photography from Picsum (Unsplash-
// backed, seeded for stable URLs, no API key needed) — swap for real
// campaign/production stills once MiM supplies them.
const stockPhoto = (seed: string) => `https://picsum.photos/seed/${seed}/1200/900`;
export const caseStudies: CaseStudy[] = [
  {
    slug: "northline-foods",
    clientName: "Northline Foods",
    clientLogo: "/placeholders/logos/northline.svg",
    industry: "D2C / Food & Beverage",
    servicesUsed: ["Performance Marketing", "Website & Conversion Systems"],
    headline: "Turning a seasonal spike into a repeatable acquisition engine",
    summary:
      "Rebuilt Northline's paid funnel and checkout flow to convert a one-time festive spike into a system that keeps performing year-round.",
    heroMetric: { label: "ROAS", value: 186, prefix: "+", suffix: "%" },
    metrics: [
      { label: "ROAS", value: 186, prefix: "+", suffix: "%" },
      { label: "Conversion rate", value: 3.4, suffix: "x" },
      { label: "CAC", value: 41, prefix: "-", suffix: "%" },
    ],
    challenge:
      "Northline's paid spend spiked hard around festive season but fell off a cliff the rest of the year — the funnel wasn't built to hold attention once the discount ended.",
    approach:
      "We rebuilt the acquisition funnel end-to-end: restructured campaigns around always-on evergreen offers, redesigned the checkout flow for mobile, and ran continuous creative testing to keep cost-per-click low outside peak season.",
    results:
      "Within two quarters, Northline's off-season ROAS matched their previous festive-season peak, with checkout conversion up 3.4x and CAC down 41%.",
    gallery: [
      { type: "image", src: stockPhoto("northline-foods-1"), alt: "Northline Foods campaign visual" },
      { type: "image", src: stockPhoto("northline-foods-2"), alt: "Northline Foods checkout redesign" },
    ],
    testimonial: {
      quote:
        "MiM didn't just run our ads better — they rebuilt the whole system so growth didn't depend on a discount code.",
      authorName: "Riya Kapoor",
      authorRole: "Head of Growth",
      clientSlug: "northline-foods",
      clientName: "Northline Foods",
      clientLogo: "/placeholders/logos/northline.svg",
      metric: { label: "ROAS", value: 186, prefix: "+", suffix: "%" },
    },
  },
  {
    slug: "verve-fitness",
    clientName: "Verve Fitness",
    clientLogo: "/placeholders/logos/verve.svg",
    industry: "Fitness / Lifestyle",
    servicesUsed: ["Social Media Management", "Content & Production"],
    headline: "Building an always-on content engine from three studios",
    summary:
      "Stood up a repeatable content system across Verve's studios that turned organic social into their top acquisition channel.",
    heroMetric: { label: "Organic reach", value: 2.1, suffix: "M" },
    metrics: [
      { label: "Organic reach", value: 2.1, suffix: "M" },
      { label: "Engagement rate", value: 64, prefix: "+", suffix: "%" },
      { label: "Trial sign-ups from social", value: 3.1, suffix: "x" },
    ],
    challenge:
      "Verve had strong studios and instructors but inconsistent, one-off social content that didn't compound month over month.",
    approach:
      "We embedded a content production system across all three studios — weekly shoot days, a repeatable short-form format, and a community management cadence that turned members into recurring content.",
    results:
      "Organic reach grew to 2.1M monthly impressions within five months, with social-attributed trial sign-ups tripling.",
    gallery: [
      { type: "image", src: stockPhoto("verve-fitness-1"), alt: "Verve Fitness content shoot" },
      { type: "image", src: stockPhoto("verve-fitness-2"), alt: "Verve Fitness social campaign" },
    ],
    testimonial: {
      quote:
        "Social used to be an afterthought for us. Now it's the first place new members hear about Verve.",
      authorName: "Dev Malhotra",
      authorRole: "Founder",
      clientSlug: "verve-fitness",
      clientName: "Verve Fitness",
      clientLogo: "/placeholders/logos/verve.svg",
      metric: { label: "Organic reach", value: 2.1, suffix: "M" },
    },
  },
  {
    slug: "kaira-home",
    clientName: "Kaira Home",
    clientLogo: "/placeholders/logos/kaira.svg",
    industry: "D2C / Home & Living",
    servicesUsed: ["SEO & Organic Growth", "Brand & Creative Direction"],
    headline: "Compounding organic traffic that doesn't disappear when spend stops",
    summary:
      "A technical SEO overhaul and content strategy that made Kaira Home's organic channel bigger than its paid channel within a year.",
    heroMetric: { label: "Organic traffic", value: 212, prefix: "+", suffix: "%" },
    metrics: [
      { label: "Organic traffic", value: 212, prefix: "+", suffix: "%" },
      { label: "Keywords in top 3", value: 40, suffix: "+" },
      { label: "Organic revenue share", value: 47, suffix: "%" },
    ],
    challenge:
      "Kaira Home was almost entirely paid-dependent, with organic traffic flat for over a year and a site architecture that was actively hurting rankings.",
    approach:
      "We ran a full technical SEO audit and fix pass, rebuilt the site's content architecture around commercial-intent keywords, and paired it with a quarterly content calendar tied to product launches.",
    results:
      "Organic traffic more than tripled in twelve months, with 40+ keywords ranking in the top 3 and organic now driving nearly half of total revenue.",
    gallery: [
      { type: "image", src: stockPhoto("kaira-home-1"), alt: "Kaira Home SEO strategy" },
      { type: "image", src: stockPhoto("kaira-home-2"), alt: "Kaira Home brand refresh" },
    ],
    testimonial: {
      quote: "Organic used to be a rounding error for us. It's now our most profitable channel.",
      authorName: "Ananya Sen",
      authorRole: "CMO",
      clientSlug: "kaira-home",
      clientName: "Kaira Home",
      clientLogo: "/placeholders/logos/kaira.svg",
      metric: { label: "Organic traffic", value: 212, prefix: "+", suffix: "%" },
    },
  },
  {
    slug: "solstice-bank",
    clientName: "Solstice",
    clientLogo: "/placeholders/logos/solstice.svg",
    industry: "Fintech",
    servicesUsed: ["Brand & Creative Direction", "Website & Conversion Systems"],
    headline: "A brand and site rebuild that made a fintech feel trustworthy at a glance",
    summary:
      "Repositioned Solstice's brand and rebuilt their site around clarity and trust signals, lifting lead conversion without changing traffic volume.",
    heroMetric: { label: "Lead conversion", value: 38, prefix: "+", suffix: "%" },
    metrics: [
      { label: "Lead conversion", value: 38, prefix: "+", suffix: "%" },
      { label: "Time to first action", value: 52, prefix: "-", suffix: "%" },
      { label: "Bounce rate", value: 29, prefix: "-", suffix: "%" },
    ],
    challenge:
      "Solstice had solid product-market fit but a brand and website that read as generic fintech — visitors bounced before understanding the actual offer.",
    approach:
      "We repositioned the brand around a single clear promise, redesigned the visual identity, and rebuilt the marketing site with conversion-first UX — clarifying the offer above the fold and cutting form friction.",
    results:
      "With no change in traffic volume, lead conversion rose 38% and bounce rate dropped 29%, driven almost entirely by clarity, not new spend.",
    gallery: [
      { type: "image", src: stockPhoto("solstice-bank-1"), alt: "Solstice brand identity" },
      { type: "image", src: stockPhoto("solstice-bank-2"), alt: "Solstice website redesign" },
    ],
    testimonial: {
      quote: "The rebrand didn't just look better — it made the product easier to say yes to.",
      authorName: "Kabir Rao",
      authorRole: "Co-founder",
      clientSlug: "solstice-bank",
      clientName: "Solstice",
      clientLogo: "/placeholders/logos/solstice.svg",
      metric: { label: "Lead conversion", value: 38, prefix: "+", suffix: "%" },
    },
  },
];
