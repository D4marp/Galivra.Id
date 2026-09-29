"use client";

import * as React from "react";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";

type CounterProps = {
  to: number;
  suffix?: string;
  className?: string;
};

/** Counts up from zero the first time it scrolls into view. */
export function Counter({ to, suffix = "", className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = ensureGsap();
    const state = { v: 0 };
    el.textContent = `0${suffix}`;
    const ctx = gsap.context(() => {
      gsap.to(state, {
        v: to,
        duration: 1.8,
        ease: "expo.out",
        onUpdate: () => {
          el.textContent = `${Math.round(state.v)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
      });
    }, ref);
    scheduleRefresh();
    return () => ctx.revert();
  }, [to, suffix]);

  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
