"use client";

import * as React from "react";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  scale?: boolean;
  blur?: boolean;
  /** "mount" plays after the intro curtain lifts — use for above-the-fold content. */
  trigger?: "mount" | "scroll";
};

/** Fades + rises a block into view with a soft depth-of-field blur settle. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  duration = 1.1,
  scale = false,
  blur = true,
  trigger = "scroll",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || el.hasAttribute("data-revealed")) return;
    if (prefersReducedMotion()) {
      el.setAttribute("data-revealed", "");
      return;
    }

    const { gsap } = ensureGsap();
    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y,
            scale: scale ? 0.95 : 1,
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
            onComplete: () => {
              el.setAttribute("data-revealed", "");
              // A lingering filter/transform creates a containing block that
              // breaks position:fixed/sticky descendants — drop them once done.
              gsap.set(el, { clearProps: "transform,filter,opacity" });
            },
            ...(trigger === "scroll"
              ? {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              : {}),
          }
        );
      }, ref);
      scheduleRefresh();
    };

    const unsubscribe = trigger === "mount" ? onIntroDone(setup) : (setup(), () => {});

    return () => {
      cancelled = true;
      unsubscribe();
      ctx?.revert();
    };
  }, [delay, y, duration, scale, blur, trigger]);

  return (
    <div ref={ref} data-reveal className={cn(className)}>
      {children}
    </div>
  );
}
