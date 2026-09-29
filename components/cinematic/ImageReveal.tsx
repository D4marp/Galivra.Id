"use client";

import * as React from "react";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Reveals an image block with a clip-path expansion + scale-down settle. */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      const img = el.firstElementChild;
      gsap.set(el, { clipPath: "inset(10% 10% 10% 10% round 24px)" });
      if (img) gsap.set(img, { scale: 1.3 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        delay,
      });
      tl.to(el, {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        duration: 1.4,
        ease: "expo.out",
        clearProps: "clipPath",
      });
      if (img) {
        tl.to(img, { scale: 1, duration: 1.8, ease: "expo.out", clearProps: "transform" }, 0);
      }
    }, ref);
    scheduleRefresh();

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
