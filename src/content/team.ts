import type { TeamMember } from "@/lib/types/content";

// PLACEHOLDER — names, roles and portraits are dummy content so the 7 × 3
// team grid can be designed. Portraits are stock mock-up photos from
// randomuser.me. Replace every entry with the real team (and their own
// photos, uploaded to /public) before launch.
const portrait = (gender: "men" | "women", id: number) => `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

export const team: TeamMember[] = [
  { name: "Arindam Sen", role: "Founder & CEO", image: portrait("men", 32) },
  { name: "Priyanka Ghosh", role: "Head of Strategy", image: portrait("women", 44) },
  { name: "Rohit Agarwal", role: "Head of Performance", image: portrait("men", 75) },
  { name: "Sneha Mukherjee", role: "Creative Director", image: portrait("women", 65) },
  { name: "Debjit Roy", role: "Social Media Lead", image: portrait("men", 12) },
  { name: "Ananya Das", role: "Content Lead", image: portrait("women", 68) },
  { name: "Sourav Banerjee", role: "SEO Lead", image: portrait("men", 46) },
  { name: "Ritika Jain", role: "Brand Strategist", image: portrait("women", 17) },
  { name: "Kunal Mishra", role: "Paid Media Manager", image: portrait("men", 52) },
  { name: "Tanushree Paul", role: "Account Director", image: portrait("women", 33) },
  { name: "Abhishek Saha", role: "Video Producer", image: portrait("men", 22) },
  { name: "Ishita Chatterjee", role: "Senior Designer", image: portrait("women", 50) },
  { name: "Sayan Dutta", role: "Web Developer", image: portrait("men", 41) },
  { name: "Megha Patnaik", role: "Copy Lead", image: portrait("women", 26) },
  { name: "Rajdeep Bose", role: "Photographer", image: portrait("men", 64) },
  { name: "Pooja Kedia", role: "Performance Analyst", image: portrait("women", 79) },
  { name: "Aniket Barua", role: "Motion Designer", image: portrait("men", 85) },
  { name: "Shreya Sinha", role: "Community Manager", image: portrait("women", 90) },
  { name: "Nilanjan Pal", role: "CRO Specialist", image: portrait("men", 7) },
  { name: "Moumita Kar", role: "Client Success Manager", image: portrait("women", 12) },
  { name: "Vikram Mohanty", role: "Operations Lead", image: portrait("men", 91) },
];
