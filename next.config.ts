import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder logos are SVGs authored in-repo, safe to allow directly.
    // Case-study/service photography is temporary stock imagery from
    // Picsum (picsum.photos) — swap remotePatterns for the real asset CDN
    // (Cloudinary/S3/Sanity) once MiM supplies actual photography.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      // Placeholder team portraits (src/content/team.ts) — remove once real
      // team photos are added to /public.
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
    ],
  },
};

export default nextConfig;
