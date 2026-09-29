import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

/** Seamless CSS marquee — content is rendered twice and the track slides by half its width. */
export function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden marquee-mask", className)}>
      <div
        className={cn(
          "flex w-max shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
