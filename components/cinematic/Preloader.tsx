"use client";

import * as React from "react";
import { ensureGsap } from "@/lib/gsap";
import { markIntroDone } from "@/lib/intro";

const WORD = "GALIVRA";

/**
 * First-visit-per-session intro curtain. Visibility is decided before paint by
 * the inline script in the root layout (html[data-intro="pending"]), so
 * returning visitors never see a flash of it.
 */
export function Preloader() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const countRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const html = document.documentElement;
    const root = rootRef.current;
    if (html.dataset.intro !== "pending" || !root) {
      markIntroDone();
      return;
    }

    const { gsap } = ensureGsap();
    const counter = { v: 0 };
    const finish = () => {
      try {
        sessionStorage.setItem("galivra-intro", "1");
      } catch {
        /* storage blocked — the intro will simply replay next visit */
      }
      html.dataset.intro = "done";
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("[data-pl-letter]", {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.05,
        ease: "expo.out",
      })
        .to(
          counter,
          {
            v: 100,
            duration: 1.1,
            ease: "power2.inOut",
            onUpdate: () => {
              if (countRef.current) {
                countRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
              }
            },
          },
          0
        )
        .to("[data-pl-bar]", { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0)
        .to("[data-pl-letter]", {
          yPercent: -110,
          duration: 0.6,
          stagger: 0.03,
          ease: "expo.in",
        })
        .add(markIntroDone, "-=0.15")
        .to(root, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.9,
          ease: "expo.inOut",
          onComplete: finish,
        }, "-=0.35");
    }, root);

    // Safety net: never trap the visitor behind the curtain.
    const bail = window.setTimeout(() => {
      markIntroDone();
      finish();
    }, 5000);

    return () => {
      window.clearTimeout(bail);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      data-preloader
      className="fixed inset-0 z-[120] flex-col items-center justify-center bg-void"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      aria-hidden="true"
    >
      <div className="flex overflow-hidden font-display text-[clamp(3rem,12vw,10rem)] font-medium leading-none tracking-[-0.05em] text-ink">
        {WORD.split("").map((ch, i) => (
          <span key={i} data-pl-letter className="inline-block">
            {ch}
          </span>
        ))}
      </div>
      <div className="absolute inset-x-5 bottom-8 flex items-end justify-between md:inset-x-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
          Studio teknologi digital
        </span>
        <span ref={countRef} className="font-mono text-sm tabular-nums text-ink-muted">
          000
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-line">
        <div data-pl-bar className="h-full origin-left scale-x-0 bg-brand-gradient" />
      </div>
    </div>
  );
}
