"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>;

/** Card with a soft radial light that tracks the pointer (see `.spotlight` in globals.css). */
export function SpotlightCard({ className, children, onMouseMove, ...props }: SpotlightCardProps) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    onMouseMove?.(e);
  };

  return (
    <div className={cn("spotlight", className)} onMouseMove={handleMove} {...props}>
      {children}
    </div>
  );
}
