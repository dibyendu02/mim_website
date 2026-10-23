import type { TeamMember } from "@/lib/types/content";

// PLACEHOLDER — spec §5.8 / §10: names, roles, one-line responsibilities and
// approved black-and-white portraits must come from MiM. These entries are
// deliberately generic so no identity is invented; replace before launch, or
// empty the array to hide the team section entirely.

const portrait = { src: "/placeholders/team/portrait.svg", width: 800, height: 1000 };

export const teamMembers: TeamMember[] = Array.from({ length: 6 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    name: `Team member ${number}`,
    role: "Role to be confirmed",
    detail: "One-line responsibility supplied by MiM.",
    portrait: { ...portrait, alt: `Portrait of team member ${number}` },
  };
});
