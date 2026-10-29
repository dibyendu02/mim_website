import type { CaseStudy } from "@/lib/types/content";

// PLACEHOLDER data — real client names, metrics, copy, and imagery to
// replace before launch. Structure (the eight narrative fields from
// introduction to conclusion, metrics array, gallery) is what CaseStudyCard /
// strip / detail page all key off of, so
// new real case studies can be added as new array entries with zero
// component changes.
//
// Gallery images are temporary stock photography from Picsum (Unsplash-
// backed, seeded for stable URLs, no API key needed) — swap for real
// campaign/production stills once MiM supplies them.
// Sized for the full-bleed detail-page hero carousel, which also uses these.
const stockPhoto = (seed: string) => `https://picsum.photos/seed/${seed}/2400/1600`;
export const caseStudies: CaseStudy[] = [
  {
    slug: "northline-foods",
    clientName: "Northline Foods",
    clientLogo: "/placeholders/logos/northline.svg",
    industry: "D2C / Food & Beverage",
    servicesUsed: ["Performance Marketing", "Website Design & Development"],
    headline: "Turning a seasonal spike into a repeatable acquisition engine",
    summary:
      "Rebuilt Northline's paid funnel and checkout flow to convert a one-time festive spike into a system that keeps performing year-round.",
    heroMetric: { label: "ROAS", value: 186, prefix: "+", suffix: "%" },
    metrics: [
      { label: "ROAS", value: 186, prefix: "+", suffix: "%" },
      { label: "Conversion rate", value: 3.4, suffix: "x" },
      { label: "CAC", value: 41, prefix: "-", suffix: "%" },
    ],
    introduction:
      "Northline Foods is a D2C food brand selling pantry staples and gift hampers direct to consumers. We partnered with their growth team for nine months across paid media and their online storefront to make demand less dependent on the festive calendar.",
    challenge:
      "Northline's paid spend spiked hard around festive season but fell off a cliff the rest of the year — the funnel wasn't built to hold attention once the discount ended.",
    strategy:
      "Rather than chasing a bigger festive peak, we treated the off-season as the real problem. The plan was to give people a reason to buy that didn't depend on a discount — evergreen offers built around everyday use — and to remove every bit of friction between ad click and paid order, so cheaper year-round traffic could actually convert.",
    creativeDirection: {
      concept: "Everyday, not just festive.",
      body: "We moved the creative away from gift-box hero shots and onto the kitchen table — real meals, real portions, warm natural light — so the product read as a staple rather than a seasonal treat.",
    },
    execution: {
      body: "We restructured the paid account around always-on evergreen campaigns, rebuilt the checkout for mobile, and set up a weekly creative testing loop so fresh ads were always rotating in.",
      deliverables: [
        "Paid social & search account restructure",
        "Mobile-first checkout redesign",
        "Evergreen offer & landing page system",
        "Weekly creative testing program",
      ],
    },
    outcomes:
      "Within two quarters, Northline's off-season ROAS matched their previous festive-season peak, with checkout conversion up 3.4x and CAC down 41%.",
    conclusion:
      "Sustainable growth comes from fixing the system, not the spike. By pairing media strategy with conversion work, we turned a seasonal business into one that performs every month of the year.",
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
    servicesUsed: ["Social Media Marketing", "Content Production"],
    headline: "Building an always-on content engine from three studios",
    summary:
      "Stood up a repeatable content system across Verve's studios that turned organic social into their top acquisition channel.",
    heroMetric: { label: "Organic reach", value: 2.1, suffix: "M" },
    metrics: [
      { label: "Organic reach", value: 2.1, suffix: "M" },
      { label: "Engagement rate", value: 64, prefix: "+", suffix: "%" },
      { label: "Trial sign-ups from social", value: 3.1, suffix: "x" },
    ],
    introduction:
      "Verve Fitness runs three boutique studios offering strength, HIIT, and mobility classes. We worked with the founding team for five months to build a social presence that matched the energy inside their studios.",
    challenge:
      "Verve had strong studios and instructors but inconsistent, one-off social content that didn't compound month over month.",
    strategy:
      "Verve's best asset was already in the room: its instructors and members. Instead of producing occasional polished campaigns, we built a system that captured that energy every week, so content would compound instead of resetting each month.",
    creativeDirection: {
      concept: "Real sweat, real people.",
      body: "Handheld, close-up footage shot during actual classes, bold on-screen type in Verve's colors, and instructors front and center as recurring characters members could follow.",
    },
    execution: {
      body: "We set up weekly shoot days across all three studios, defined a repeatable short-form format, and ran daily community management to turn member posts and comments into ongoing content.",
      deliverables: [
        "Short-form video series & format playbook",
        "Weekly multi-studio shoot days",
        "Content calendar & publishing workflow",
        "Community management & UGC program",
      ],
    },
    outcomes:
      "Organic reach grew to 2.1M monthly impressions within five months, with social-attributed trial sign-ups tripling.",
    conclusion:
      "Consistency beats virality. A clear format and a reliable production rhythm turned social from an afterthought into Verve's most dependable source of new members.",
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
    servicesUsed: ["Search Engine Optimisation", "Brand Strategy & Identity"],
    headline: "Compounding organic traffic that doesn't disappear when spend stops",
    summary:
      "A technical SEO overhaul and content strategy that made Kaira Home's organic channel bigger than its paid channel within a year.",
    heroMetric: { label: "Organic traffic", value: 212, prefix: "+", suffix: "%" },
    metrics: [
      { label: "Organic traffic", value: 212, prefix: "+", suffix: "%" },
      { label: "Keywords in top 3", value: 40, suffix: "+" },
      { label: "Organic revenue share", value: 47, suffix: "%" },
    ],
    introduction:
      "Kaira Home is a D2C home and living brand selling furniture, décor, and soft furnishings online. Over twelve months we led their SEO and refreshed the visual system behind their content.",
    challenge:
      "Kaira Home was almost entirely paid-dependent, with organic traffic flat for over a year and a site architecture that was actively hurting rankings.",
    strategy:
      "Paid traffic stops the moment spend does; organic compounds. We fixed the technical foundations first, then built content around the searches closest to purchase, so every new page added lasting commercial value.",
    creativeDirection: {
      concept: "Rooms, not products.",
      body: "Content and imagery styled around complete, lived-in spaces — editorial room guides and buying advice in a calm, warm visual language that made Kaira's pages as useful as they were shoppable.",
    },
    execution: {
      body: "We ran a full technical audit and fix pass, rebuilt the category and content architecture around commercial-intent keywords, and launched a quarterly content calendar tied to product drops.",
      deliverables: [
        "Technical SEO audit & remediation",
        "Site & category architecture rebuild",
        "Editorial room guides & buying guides",
        "Quarterly content calendar",
        "Refreshed content visual guidelines",
      ],
    },
    outcomes:
      "Organic traffic more than tripled in twelve months, with 40+ keywords ranking in the top 3 and organic now driving nearly half of total revenue.",
    conclusion:
      "Organic growth is an asset, not a campaign. Investing in foundations and intent-led content gave Kaira a channel that keeps paying back long after the work is done.",
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
    servicesUsed: ["Brand Strategy & Identity", "Website Design & Development"],
    headline: "A brand and site rebuild that made a fintech feel trustworthy at a glance",
    summary:
      "Repositioned Solstice's brand and rebuilt their site around clarity and trust signals, lifting lead conversion without changing traffic volume.",
    heroMetric: { label: "Lead conversion", value: 38, prefix: "+", suffix: "%" },
    metrics: [
      { label: "Lead conversion", value: 38, prefix: "+", suffix: "%" },
      { label: "Time to first action", value: 52, prefix: "-", suffix: "%" },
      { label: "Bounce rate", value: 29, prefix: "-", suffix: "%" },
    ],
    introduction:
      "Solstice is a fintech offering business accounts and payments for small companies. We partnered with the founders on a brand repositioning and a full marketing-site rebuild.",
    challenge:
      "Solstice had solid product-market fit but a brand and website that read as generic fintech — visitors bounced before understanding the actual offer.",
    strategy:
      "The product wasn't the problem — comprehension was. We set out to make Solstice understood in five seconds: one clear promise, proof of trust visible early, and a path to sign-up with as few steps as possible.",
    creativeDirection: {
      concept: "Clarity is the brand.",
      body: "A restrained identity with confident typography, generous whitespace, and a single accent color, with plain-language messaging and real product UI replacing abstract fintech imagery.",
    },
    execution: {
      body: "We defined the new positioning and messaging, designed the identity system, and rebuilt the marketing site with conversion-first UX — clarifying the offer above the fold and cutting form friction.",
      deliverables: [
        "Brand positioning & messaging framework",
        "Visual identity system",
        "Marketing website design & build",
        "Lead form & onboarding flow optimization",
      ],
    },
    outcomes:
      "With no change in traffic volume, lead conversion rose 38% and bounce rate dropped 29%, driven almost entirely by clarity, not new spend.",
    conclusion:
      "Good design is a business tool. By making the offer clear and credible, Solstice converted more of the visitors it already had — without increasing spend.",
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
