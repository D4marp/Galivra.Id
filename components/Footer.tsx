"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";
import { ensureGsap, prefersReducedMotion, scheduleRefresh } from "@/lib/gsap";

const SOCIALS = [
  { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}` },
  { label: "Instagram", href: "https://www.instagram.com/galivra.id/" },
  { label: "Email", href: `mailto:${SITE.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();
  const wordRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = wordRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-letter]",
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "expo.out",
          duration: 1.4,
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
        }
      );
    }, el);
    scheduleRefresh();
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-void">
      <div className="container-galivra relative pt-20 md:pt-28">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="font-display text-display-sm font-medium text-ink">
              Punya project? <span className="serif-accent text-gradient">Mari ngobrol.</span>
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-white"
            >
              {SITE.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow mb-5">Navigasi</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink-muted transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Layanan</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="eyebrow mb-5">Terhubung</p>
            <ul className="space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-faint md:flex-row md:items-center">
          <p>
            © {year} {SITE.fullName}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={wordRef}
        aria-hidden="true"
        className="pointer-events-none relative mt-6 flex select-none justify-center overflow-hidden"
      >
        <div className="flex font-display text-[23vw] font-semibold leading-[0.78] tracking-[-0.07em]">
          {SITE.name.split("").map((ch, i, all) => (
            <span
              key={i}
              data-footer-letter
              className="text-gradient inline-block pb-[0.02em]"
              // One continuous gradient across the word: each letter shows its slice.
              style={{
                backgroundSize: `${all.length * 100}% 100%`,
                backgroundPosition: `${(i / (all.length - 1)) * 100}% 0`,
              }}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
