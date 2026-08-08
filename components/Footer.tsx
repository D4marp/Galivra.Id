import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-deep">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-galivra relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="GALIVRA"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold text-white">
                  {SITE.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  Solusi Inovasi
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm text-ink-muted">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/galivra.id/",
                },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  href: `https://wa.me/${SITE.whatsapp}`,
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors duration-200 hover:border-galivra-blue/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Navigasi
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-white"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-white"
                >
                  Syarat &amp; Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-8 text-xs text-ink-faint md:flex-row">
          <p>
            © {year} {SITE.fullName}. Hak cipta dilindungi.
          </p>
          <p className="font-mono">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
