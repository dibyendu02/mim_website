import type { Industry } from "@/lib/types/content";

// Homepage "Industries we understand" grid. As the portfolio grows, give each
// industry an `image` (authentic project photography, not stock) and an
// `href` to its most relevant case study — the cards pick both up
// automatically.
export const industries: Industry[] = [
  {
    slug: "architecture-interiors",
    title: "Architecture & Interiors",
    description:
      "Showcase design expertise, communicate project value and build a distinctive digital presence in a visually driven industry.",
  },
  {
    slug: "hospitality-hotels",
    title: "Hospitality & Hotels",
    description:
      "Showcase exceptional experiences, strengthen brand desirability and connect with audiences looking for their next destination.",
  },
  {
    slug: "food-beverages",
    title: "Food & Beverages",
    description:
      "Make your offerings stand out through compelling content, consistent brand communication and targeted marketing campaigns.",
  },
  {
    slug: "furniture-lifestyle",
    title: "Furniture & Lifestyle",
    description:
      "Turn products and spaces into compelling brand stories through creative content, distinctive positioning and strategic digital marketing.",
  },
];
