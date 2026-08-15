"use client";

import * as React from "react";
import { ensureGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  scale?: boolean;
  once?: boolean;
  blur?: boolean;
};

/** Fades + rises a single block into view as it enters the viewport, with a soft depth-of-field blur settle. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  duration = 1.1,
  scale = false,
  once = true,
  blur = true,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
      return;
    }

    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y,
          scale: scale ? 0.94 : 1,
          filter: blur ? "blur(10px)" : "blur(0px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, [delay, y, duration, scale, once, blur]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
