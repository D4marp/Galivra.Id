"use client";

import * as React from "react";
import { ensureGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Reveals an image block with a clip-path expansion + subtle scale-down settle. */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      el.style.clipPath = "inset(0% 0% 0% 0%)";
      const img = el.firstElementChild as HTMLElement | null;
      if (img) img.style.transform = "none";
      return;
    }

    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      const img = el.firstElementChild;
      gsap.set(el, { clipPath: "inset(8% 8% 8% 8%)" });
      if (img) gsap.set(img, { scale: 1.25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay,
      });
      tl.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.3,
        ease: "expo.out",
      });
      if (img) {
        tl.to(
          img,
          {
            scale: 1,
            duration: 1.6,
            ease: "expo.out",
            clearProps: "transform",
          },
          0
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
