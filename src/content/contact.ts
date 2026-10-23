import type { FaqItem } from "@/lib/types/content";

export const contactHero = {
  eyebrow: "Let’s talk growth",
  heading: "Tell us about your business.",
  body: "Share where your business is today, where you want to take it, and what you need help with. We’ll come back to you to arrange a strategy call.",
};

// PLACEHOLDER answers — confirm with MiM before launch. Avoid promising fixed
// timelines or outcomes that aren't contractual practice.
export const faqItems: FaqItem[] = [
  {
    question: "What does a first conversation with MiM look like?",
    answer:
      "A strategy call where we look at what’s working, what isn’t, and whether we’re a good fit — no obligation.",
  },
  {
    question: "Can we start with one service?",
    answer:
      "Yes. Many clients start with one or two services and expand as the work develops. We’ll recommend a sensible starting point rather than the full set upfront.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work across architecture and interiors, hospitality, food and beverages, and furniture and lifestyle, and we tailor our approach to each business.",
  },
];
