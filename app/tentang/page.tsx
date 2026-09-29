import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/cinematic/Reveal";
import { Counter } from "@/components/cinematic/Counter";
import { WhyGalivra } from "@/sections/WhyGalivra";
import { Process } from "@/sections/Process";
import { CTASection } from "@/sections/CTASection";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Tentang Kami — GALIVRA",
  description:
    "Kenali GALIVRA lebih dekat — prinsip kerja kami dan alur lengkap memulai project bersama kami.",
};

const STATS = [
  { to: PORTFOLIO_PROJECTS.length, suffix: "+", label: "Project terkirim" },
  { to: SERVICES.length, suffix: "", label: "Layanan digital" },
  { to: PROCESS_STEPS.length, suffix: "", label: "Langkah ke live" },
  { to: 0, suffix: "", prefix: "Rp", label: "Biaya konsultasi" },
];

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container-galivra relative pb-20 pt-36 md:pb-28 md:pt-44">
          <SectionHeading
            as="h1"
            trigger="mount"
            eyebrow="Tentang GALIVRA"
            title="Mitra teknologi yang fokus pada hasil bisnis Anda."
            accent="hasil"
            description="GALIVRA membantu bisnis — dari UMKM, startup, sampai institusi pendidikan — membangun produk digital yang benar-benar dipakai. Kami percaya teknologi yang baik lahir dari proses yang jelas: kebutuhan didengar dulu, baru dibangun."
          />

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} y={16} delay={i * 0.06} trigger="mount">
                <p className="font-display text-5xl font-medium tracking-[-0.05em] text-ink md:text-6xl">
                  {stat.prefix}
                  <Counter to={stat.to} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <WhyGalivra />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
