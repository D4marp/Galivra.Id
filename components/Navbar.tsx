"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide while reading downward, return as soon as the visitor scrolls up.
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-out-expo",
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="container-galivra flex h-20 items-center justify-between gap-6">
          <Link href="/" className="relative z-10 flex items-center gap-2.5" aria-label="GALIVRA — Beranda">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
            <span className="font-display text-[17px] font-semibold tracking-[-0.03em] text-ink">
              {SITE.name}
            </span>
          </Link>

          <nav
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full p-1.5 lg:flex",
              "border transition-[background-color,border-color] duration-500",
              scrolled
                ? "border-white/10 bg-void/60 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            )}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] transition-colors duration-300",
                  isActive(link.href)
                    ? "bg-white/[0.08] text-white"
                    : "text-ink-muted hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <Button href="/kontak" variant="primary" withArrow className="hidden h-10 px-5 text-[13px] lg:inline-flex">
              Mulai Project
            </Button>
            <button
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-void/40 backdrop-blur-md lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-4 bg-white transition-transform duration-500 ease-out-expo",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-white transition-transform duration-500 ease-out-expo",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-void pt-24 lg:hidden"
          >
            <nav className="container-galivra flex flex-1 flex-col justify-center gap-1 pb-10">
              {NAV_LINKS.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line py-3"
                    >
                      <span className="font-mono text-[11px] text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[2rem] font-medium leading-tight tracking-[-0.035em] text-ink">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button href="/kontak" variant="primary" withArrow size="lg" onClick={() => setOpen(false)}>
                  Mulai Project
                </Button>
                <WhatsAppCTA
                  locationLabel="Navbar Mobile Menu"
                  message="Halo GALIVRA, saya ingin konsultasi mengenai project digital."
                  className="text-center text-sm text-ink-muted hover:text-white transition-colors"
                >
                  atau chat langsung via WhatsApp
                </WhatsAppCTA>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
