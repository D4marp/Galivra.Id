"use client";

import * as React from "react";
import Lenis from "lenis";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";

/** Inertial scroll kept in sync with GSAP's ticker so ScrollTrigger stays accurate. */
export function SmoothScroll() {
  React.useEffect(() => {
    if (prefersReducedMotion()) return;

    const { gsap, ScrollTrigger } = ensureGsap();

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Images finishing late shift layout, which moves pinned sections' start/end.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    scheduleRefresh();

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
