import Image from "next/image";
import type { TeamMember } from "@/lib/types/content";

/**
 * 7 × 3 grid (fewer columns on smaller screens) of portrait cards that flip
 * on hover — or keyboard focus — to reveal name and role. Pure CSS 3D, so it
 * stays a server component; reduced-motion users get an instant swap.
 */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
      {members.map((member) => (
        <li key={member.name} className="group aspect-[3/4] perspective-distant">
          <div
            tabIndex={0}
            className="relative h-full w-full rounded-2xl transition-transform duration-700 transform-3d group-hover:rotate-y-180 focus-visible:rotate-y-180 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:duration-0"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl bg-surface-muted backface-hidden">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 25vw, 33vw"
                className="object-cover grayscale"
              />
            </div>

            {/* Name and role are already in the portrait's alt text. */}
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col justify-end rounded-2xl bg-ink p-3 text-text-inverse rotate-y-180 backface-hidden sm:p-4"
            >
              <span aria-hidden className="mb-auto h-1.5 w-1.5 rounded-full bg-text-inverse/60" />
              <p className="font-display text-sm font-semibold leading-tight sm:text-base">{member.name}</p>
              <p className="mt-1 text-xs text-text-inverse/60">{member.role}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
