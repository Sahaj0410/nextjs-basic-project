import React from "react";
import { cn } from "@/utils/cn";

type SpotlightProps = {
  className?: string;
  fill?: string;
  size?: number; // allow resizing
};

export const Spotlight = ({ className, fill = "white", size = 900 }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      width={size * 2}
      height={size * 2}
      fill="none"
    >
      <g filter="url(#blur)">
        <circle
          cx={size}
          cy={size}
          r={size / 2}
          fill={fill}
          fillOpacity="0.25"
        />
      </g>
      <defs>
        <filter
          id="blur"
          x="0"
          y="0"
          width={size * 2}
          height={size * 2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={size / 6} />
        </filter>
      </defs>
    </svg>
  );
};
