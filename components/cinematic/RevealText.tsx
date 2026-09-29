"use client";

import * as React from "react";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { cn } from "@/lib/utils";

type GsapContext = ReturnType<ReturnType<typeof ensureGsap>["gsap"]["context"]>;

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Word(s) rendered in the italic serif accent face. Matched case-insensitively, ignoring punctuation. */
  accent?: string | string[];
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  trigger?: "mount" | "scroll";
};

const normalize = (w: string) => w.toLowerCase().replace(/[.,!?:;]/g, "");

/** Splits text into words and reveals them with a staggered mask-up. */
export function RevealText({
  text,
  as = "h2",
  className,
  accent,
  accentClassName = "serif-accent text-gradient",
  delay = 0,
  stagger = 0.05,
  trigger = "scroll",
}: RevealTextProps) {
  const ref = React.useRef<HTMLElement>(null);
  const Tag = as as unknown as "h1";

  const words = React.useMemo(() => text.split(" "), [text]);
  const accents = React.useMemo(
    () => new Set((Array.isArray(accent) ? accent : accent ? [accent] : []).map(normalize)),
    [accent]
  );

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal-word]");

    // Words start hidden via CSS (html[data-js] [data-reveal-word]) so there's
    // no visible→hidden flash on hydration; reduced motion shows them via CSS.
    if (prefersReducedMotion() || el.hasAttribute("data-revealed")) return;

    let ctx: GsapContext | undefined;
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      const { gsap } = ensureGsap();
      ctx = gsap.context(() => {
        gsap.fromTo(
          items,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            stagger,
            ease: "expo.out",
            onComplete: () => {
              el.setAttribute("data-revealed", "");
              gsap.set(items, { clearProps: "all" });
            },
            ...(trigger === "scroll"
              ? {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none",
                  },
                }
              : {}),
          }
        );
      }, ref);
      scheduleRefresh();
    };

    // Word heights drive yPercent, so wait for webfonts; mount-triggered
    // (above-the-fold) text also waits for the intro curtain to lift.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    let unsubscribe = () => {};
    fontsReady.then(() => {
      if (cancelled) return;
      if (trigger === "mount") unsubscribe = onIntroDone(setup);
      else setup();
    });

    return () => {
      cancelled = true;
      unsubscribe();
      ctx?.revert();
    };
  }, [words, delay, stagger, trigger]);

  return (
    <Tag ref={ref as never} className={cn("font-display", className)}>
      {words.map((word, i) => {
        const isAccent = accents.has(normalize(word));
        return (
          <React.Fragment key={`${word}-${i}`}>
            <span
              className={cn(
                "inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom",
                isAccent && "pr-[0.06em] -mr-[0.06em]"
              )}
            >
              <span
                data-reveal-word
                className={cn("inline-block will-change-transform", isAccent && accentClassName)}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
