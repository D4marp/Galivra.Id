import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { WhyGalivra } from "@/sections/WhyGalivra";
import { Process } from "@/sections/Process";

export const metadata: Metadata = {
  title: "Tentang Kami — GALIVRA",
  description:
    "Kenali GALIVRA lebih dekat — prinsip kerja kami dan alur lengkap memulai project bersama kami.",
};

const STATS = [
  { value: "8", label: "Kategori Layanan" },
  { value: "13+", label: "Project Terkirim" },
  { value: "50%", label: "DP untuk Mulai" },
  { value: "5", label: "Langkah ke Selesai" },
];

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <section className="container-galivra relative">
          <p className="eyebrow">Tentang GALIVRA</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Mitra Teknologi yang Fokus pada Hasil Bisnis Anda.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            GALIVRA membantu bisnis — dari UMKM, startup, sampai institusi
            pendidikan dan pemerintahan — membangun produk digital yang benar-benar
            dipakai, bukan sekadar dikerjakan. Kami percaya teknologi yang baik
            lahir dari proses yang jelas: kebutuhan didengar dulu, baru dibangun.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <WhyGalivra />
        <Process />

        <section className="section-pad relative border-t border-line">
          <div className="container-galivra">
            <div className="glass-panel relative overflow-hidden rounded-2xl p-8 text-center md:p-14">
              <h2 className="text-2xl font-semibold text-white md:text-4xl">
                Siap mulai project bersama kami?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted md:text-base">
                Chat dulu untuk konsultasi gratis, tanpa komitmen.
              </p>
              <div className="mt-8 flex items-center justify-center">
                <Button href="/kontak" variant="primary" withArrow>
                  Mulai Project
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
