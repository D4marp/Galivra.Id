"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

let refreshQueued = false;

/**
 * Coalesce ScrollTrigger.refresh() calls into one per frame. Every reveal
 * component asks for a refresh after it mounts (Lenis never fires an initial
 * scroll event, so already-visible triggers would otherwise stay pending);
 * refreshing once per component is O(n²) on a page with dozens of them.
 */
export function scheduleRefresh() {
  if (refreshQueued || typeof window === "undefined") return;
  refreshQueued = true;
  requestAnimationFrame(() => {
    refreshQueued = false;
    ensureGsap().ScrollTrigger.refresh();
  });
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
