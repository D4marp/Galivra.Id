"use client";

import * as React from "react";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ScrollTextRevealProps = {
  text: string;
  className?: string;
  accent?: string[];
};

const normalize = (w: string) => w.toLowerCase().replace(/[.,!?:;—]/g, "");

/** Paragraph whose words brighten one by one as it scrolls through the viewport. */
export function ScrollTextReveal({ text, className, accent = [] }: ScrollTextRevealProps) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const words = React.useMemo(() => text.split(" "), [text]);
  const accents = React.useMemo(() => new Set(accent.map(normalize)), [accent]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const items = el.querySelectorAll<HTMLElement>("[data-word]");
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            end: "bottom 42%",
            scrub: 0.6,
          },
        }
      );
    }, ref);
    scheduleRefresh();
    return () => ctx.revert();
  }, [words]);

  return (
    <p ref={ref} className={cn("font-display", className)}>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            data-word
            className={cn(accents.has(normalize(word)) && "serif-accent text-gradient")}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </p>
  );
}
