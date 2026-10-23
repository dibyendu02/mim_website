"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { TeamMember } from "@/lib/types/content";

/**
 * Clean portrait by default. Name, role and one-line detail reveal on hover
 * or keyboard focus (desktop) and toggle on tap (touch) — never hover-only.
 * The text is always in the DOM, so screen readers get it regardless of the
 * visual state; the button just controls the overlay.
 */
export function TeamPortraitCard({ member }: { member: TeamMember }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={revealed}
      onClick={() => setRevealed((value) => !value)}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-card border border-line bg-surface text-left"
    >
      {/* Decorative here: the name below already labels the card. */}
      <Image
        src={member.portrait.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 40vw, 70vw"
        className="object-cover grayscale"
      />
      <span
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-canvas/85 p-5 transition-opacity duration-200",
          "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
          revealed && "opacity-100",
        )}
      >
        <span className="font-display text-xl font-semibold text-fg">{member.name}</span>
        <span className="eyebrow mt-1 text-accent">{member.role}</span>
        <span className="mt-2 text-sm text-muted">{member.detail}</span>
      </span>
    </button>
  );
}
