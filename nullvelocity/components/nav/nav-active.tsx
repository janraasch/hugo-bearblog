import React from "react";
import { cn } from "../../lib/utils";

export default function NavActive({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  return (
    <svg
      className={cn(
        `absolute bottom-0 left-1/2 w-[180%] h-full -translate-x-1/2 -z-1 opacity-10 dark:opacity-15 `,
        backgroundColor
      )}
      preserveAspectRatio="none"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="230"
        y="230"
        width="230"
        height="230"
        transform="rotate(-180 230 230)"
        fill="url(#paint0_radial_1_33)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_33"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(345 230) rotate(90) scale(230 115)"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
