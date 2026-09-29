"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Dot + trailing ring. Elements with `data-cursor-label="Lihat"` expand the
 * ring into a filled disc showing the label (used on project cards).
 */
export function CustomCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setActive(true);

    let mx = -100;
    let my = -100;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
      const target = e.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      setLabel(labelled?.dataset.cursorLabel ?? null);
      setHovering(!!target?.closest("a, button, [data-cursor-hover]"));
    };
    const onLeave = () => setHidden(true);

    const tick = () => {
      rx += (mx - rx) * 0.17;
      ry += (my - ry) * 0.17;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!active) return null;

  // Outer elements carry the pointer translate; inner elements do the centering
  // and sizing, so the two transforms never overwrite each other.
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300",
        hidden && "opacity-0"
      )}
    >
      <div ref={ringRef} className="absolute left-0 top-0">
        <div
          className={cn(
            "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-500 ease-out-expo",
            label
              ? "h-24 w-24 bg-white text-void"
              : hovering
                ? "h-12 w-12 border border-white/60 mix-blend-difference"
                : "h-8 w-8 border border-white/35 mix-blend-difference"
          )}
        >
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300",
              label ? "opacity-100" : "opacity-0"
            )}
          >
            {label}
          </span>
        </div>
      </div>
      <div ref={dotRef} className="absolute left-0 top-0">
        <div
          className={cn(
            "h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-opacity duration-200",
            label && "opacity-0"
          )}
        />
      </div>
    </div>
  );
}
