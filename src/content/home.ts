import type { NumberedItem } from "@/lib/types/content";

// Approved homepage copy (spec §5). Edits beyond consistency fixes require
// MiM sign-off — keep wording in sync with the specification.

export const hero = {
  eyebrow: "Full-service digital marketing",
  headline: ["Structure drives", "growth."],
  body: "MiM Digital brings performance, content, brand, SEO and web development together in one integrated marketing system, helping brands build a stronger presence and drive business growth.",
};

export const clientsIntro = {
  eyebrow: "Trusted by ambitious brands",
};

export const selectedWork = {
  eyebrow: "Selected work",
  heading: "Good work speaks for itself. Great work shows you why.",
  body: "From brand storytelling to integrated marketing, we bring strategy and execution together to solve business challenges and build stronger brands.",
};

export const servicesIntro = {
  heading: "Every part of your marketing. Working as one.",
  body: "We bring strategy, creativity and digital execution together to help brands build a stronger presence, reach the right audiences and drive sustainable business growth.",
};

export const industriesIntro = {
  eyebrow: "Industries we understand",
  heading: "Different industries. Distinct challenges. One strategic approach.",
  body: "Every industry has its own audience, competitive landscape and definition of growth. We tailor our approach to the realities of your business, bringing strategy, creativity and execution together to help you stand out.",
};

export const approach = {
  eyebrow: "How we work",
  heading: "First, we understand your brand. Then we build its next chapter.",
  body: "Every engagement begins with understanding the business, evaluating its current marketing, and identifying where we can make a meaningful difference.",
  steps: [
    {
      title: "Audit & Understand",
      description:
        "We examine your brand, existing digital presence, content, marketing activities, competitors and opportunities to identify what’s working, what’s missing and what needs attention.",
    },
    {
      title: "Strategise & Plan",
      description:
        "Based on our findings, we establish priorities, define the right marketing direction and develop a plan aligned with your business objectives.",
    },
    {
      title: "Create & Execute",
      description:
        "We put the plan into action through the relevant combination of social media, content production, performance marketing, SEO, branding and web development.",
    },
    {
      title: "Monitor & Improve",
      description:
        "We review performance, evaluate progress against objectives and refine our approach as we learn what works best for your business.",
    },
  ] satisfies NumberedItem[],
};

export const value = {
  eyebrow: "The value of working with MiM",
  heading: "Your marketing needs to work for your business.",
  body: "We bring strategy, creativity and digital execution together to help your brand build a stronger presence, connect with the right audience and pursue meaningful business growth.",
  items: [
    {
      title: "Build a Stronger Presence",
      description:
        "Create a consistent, recognisable brand presence across the digital platforms where your audience discovers and engages with you.",
    },
    {
      title: "Turn Attention into Opportunity",
      description:
        "Reach relevant audiences through targeted campaigns designed to generate enquiries, attract customers and support business growth.",
    },
    {
      title: "Make Your Brand Worth Noticing",
      description:
        "Use purposeful photography, video and creative storytelling to communicate your value and make your brand stand out.",
    },
    {
      title: "Get Discovered More Often",
      description:
        "Strengthen your visibility across search engines so potential customers can find your business when they’re looking for relevant products or services.",
    },
    {
      title: "Give Your Brand a Clear Identity",
      description:
        "Define how your brand looks, sounds and positions itself, creating a more distinctive and consistent experience for your audience.",
    },
    {
      title: "Turn Your Website into an Asset",
      description:
        "Build a credible, purposeful digital destination that communicates what you offer and makes it easier for visitors to take the next step.",
    },
  ] satisfies NumberedItem[],
};

export const team = {
  eyebrow: "Our team",
  heading: "The people behind the work.",
};

export const finalCta = {
  eyebrow: "Let’s talk growth",
  heading: "Have a business to grow? Let’s talk.",
  body: "Tell us where your business is today, where you want to take it, and what you need help with. Let’s explore how MiM Digital can help you get there.",
};
