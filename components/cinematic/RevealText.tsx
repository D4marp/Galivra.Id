"use client";

import * as React from "react";
import { ensureGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type GsapContext = ReturnType<ReturnType<typeof ensureGsap>["gsap"]["context"]>;

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  highlight?: string;
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
  trigger?: "mount" | "scroll";
};

/** Splits text into words and reveals them with a staggered mask-up animation. */
export function RevealText({
  text,
  as = "h2",
  className,
  highlight,
  highlightClassName = "text-gradient",
  delay = 0,
  stagger = 0.045,
  trigger = "scroll",
}: RevealTextProps) {
  const ref = React.useRef<HTMLElement>(null);
  const Tag = as as unknown as "h1";

  const words = React.useMemo(() => text.split(" "), [text]);
  const highlightLower = highlight?.toLowerCase();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-reveal-word]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      items.forEach((item) => {
        item.style.transform = "none";
        item.style.opacity = "1";
      });
      return;
    }

    let ctx: GsapContext | undefined;
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      const { gsap, ScrollTrigger } = ensureGsap();
      ctx = gsap.context(() => {
        gsap.set(items, { yPercent: 110, opacity: 0 });
        gsap.to(items, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          delay,
          stagger,
          ease: "expo.out",
          ...(trigger === "scroll"
            ? {
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  toggleActions: "play none none none",
                },
              }
            : {}),
        });
        ScrollTrigger.refresh();
      }, ref);
    };

    // Wait for webfonts so word heights (used by yPercent) are final —
    // otherwise a late font swap desyncs the transform after it finishes.
    if (document.fonts?.ready) {
      document.fonts.ready.then(setup);
    } else {
      setup();
    }

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [words, delay, stagger, trigger]);

  return (
    <Tag ref={ref as never} className={cn("font-display", className)}>
      {words.map((word, i) => {
        const isHighlight =
          highlightLower && word.toLowerCase().replace(/[.,]/g, "") === highlightLower;
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.1em] align-bottom"
          >
            <span
              data-reveal-word
              className={cn("inline-block", isHighlight && highlightClassName)}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
