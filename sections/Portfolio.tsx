"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const FILTERS = ["Semua", "Website", "Mobile", "Sistem & Data"] as const;
type Filter = (typeof FILTERS)[number];

function groupOf(p: PortfolioProject): Exclude<Filter, "Semua"> {
  if (p.category.startsWith("Website")) return "Website";
  if (p.category.includes("Mobile")) return "Mobile";
  return "Sistem & Data";
}

/** Full project archive with category filter — used on /karya. */
export function Portfolio() {
  const [filter, setFilter] = React.useState<Filter>("Semua");
  const items = PORTFOLIO_PROJECTS.filter((p) => filter === "Semua" || groupOf(p) === filter);
  const count = (f: Filter) =>
    f === "Semua" ? PORTFOLIO_PROJECTS.length : PORTFOLIO_PROJECTS.filter((p) => groupOf(p) === f).length;

  return (
    <section id="work" className="relative pb-24 pt-36 md:pb-36 md:pt-44">
      <div className="container-galivra">
        <SectionHeading
          as="h1"
          trigger="mount"
          eyebrow="Karya"
          title="Project yang sudah kami bangun."
          accent="bangun."
          description={`${PORTFOLIO_PROJECTS.length} project nyata — website, aplikasi mobile, sistem bisnis, sampai infrastruktur server.`}
        />

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                filter === f
                  ? "border-transparent bg-ink text-void"
                  : "border-white/10 text-ink-muted hover:border-white/25 hover:text-white"
              )}
            >
              {f}
              <span className="ml-2 font-mono text-[10px] opacity-60">{count(f)}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/portfolio/${item.slug}`}
                  data-cursor-label="Lihat"
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-panel">
                    <Image
                      src={`/portfolio/${item.slug}.png`}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-[-0.03em] text-ink transition-colors group-hover:text-galivra-cyan md:text-[1.75rem]">
                        {item.name}
                      </h2>
                      <p className="mt-2 line-clamp-2 max-w-lg text-sm leading-relaxed text-ink-muted">
                        {item.summary}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                        {groupOf(item)}
                      </p>
                      <p className="mt-1 font-mono text-xs text-ink-muted">{item.year}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
