"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/cinematic/RevealText";
import { Reveal } from "@/components/cinematic/Reveal";
import { ensureGsap } from "@/lib/gsap";
import { SITE } from "@/lib/data";

const Aurora = dynamic(() => import("@/components/cinematic/Aurora").then((m) => m.Aurora), {
  ssr: false,
});

/** Large circular CTA that leans toward the pointer. */
function MagneticCircle() {
  const ref = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const { gsap } = ensureGsap();
    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link
      ref={ref}
      href="/kontak"
      className="group relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-ink text-void md:h-52 md:w-52"
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-brand-gradient transition-transform duration-700 ease-out-expo group-hover:scale-100" />
      <span className="relative flex flex-col items-center gap-2 text-center font-medium tracking-[-0.01em] transition-colors duration-500 group-hover:text-white">
        <ArrowUpRight className="h-6 w-6 transition-transform duration-700 ease-out-expo group-hover:rotate-45" />
        Mulai Project
      </span>
    </Link>
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <Aurora className="absolute inset-0" intensity={0.85} focus={[0.5, 0.15]} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent" />

      <div className="container-galivra relative flex flex-col gap-14 py-28 md:flex-row md:items-end md:justify-between md:py-44">
        <div>
          <Reveal y={10} blur={false}>
            <p className="eyebrow mb-8 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
              Mulai sekarang
            </p>
          </Reveal>
          <RevealText
            text="Punya ide? Ayo wujudkan bersama."
            accent="wujudkan"
            accentClassName="serif-accent"
            className="max-w-[12ch] text-display-lg font-medium text-ink"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md leading-relaxed text-ink-muted md:text-[17px]">
              Ceritakan apa yang ingin Anda bangun. Konsultasi gratis, dan Anda
              menerima rencana serta penawaran tertulis sebelum memutuskan.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-galivra-cyan"
            >
              <span className="border-b border-white/25 pb-0.5">Atau chat langsung via WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} scale>
          <MagneticCircle />
        </Reveal>
      </div>
    </section>
  );
}
