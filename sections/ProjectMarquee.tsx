import { Marquee } from "@/components/cinematic/Marquee";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

// Only stack that actually appears in the portfolio.
const TECH = ["Next.js", "Flutter", "Laravel", "React", "Tailwind CSS", "Docker", "Proxmox", "MikroTik", "OpenAI", "OCR", "Metabase", "Augmented Reality"];

export function ProjectMarquee() {
  return (
    <section aria-label="Project dan teknologi" className="relative border-y border-line py-10 md:py-14">
      <p className="container-galivra eyebrow mb-8">Project terbaru yang kami bangun</p>
      <Marquee duration={55}>
        {PORTFOLIO_PROJECTS.map((p, i) => (
          <span key={p.slug} className="flex items-center">
            <span
              className={
                i % 2 === 0
                  ? "font-display text-3xl font-medium tracking-[-0.035em] text-ink md:text-5xl"
                  : "serif-accent text-3xl text-ink-muted md:text-5xl"
              }
            >
              {p.name}
            </span>
            <span className="mx-6 text-galivra-cyan md:mx-10" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
      <Marquee duration={40} reverse className="mt-6">
        {TECH.map((t) => (
          <span key={t} className="mx-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:mx-8">
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
