import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_PROJECTS, getPortfolioProject } from "@/lib/portfolio";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getPortfolioProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Karya GALIVRA`,
    description: project.summary,
  };
}

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getPortfolioProject(params.slug);
  if (!project) notFound();

  const hasLinks = project.links.playStore || project.links.appStore || project.links.website;

  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-galivra relative">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Karya Pilihan
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-faint">
                  {project.year}
                </span>
              </div>

              {hasLinks ? (
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.links.playStore && (
                    <Button href={project.links.playStore} variant="primary" withArrow>
                      Lihat di Play Store
                    </Button>
                  )}
                  {project.links.appStore && (
                    <Button href={project.links.appStore} variant="secondary">
                      Lihat di App Store
                    </Button>
                  )}
                  {project.links.website && (
                    <Button href={project.links.website} variant="secondary">
                      Kunjungi Website
                    </Button>
                  )}
                </div>
              ) : (
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-ink-faint">
                  {project.linkNote ?? "Tidak ada akses publik untuk project ini."}
                </p>
              )}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-line">
              <Image
                src={`/portfolio/${project.slug}.png`}
                alt={project.name}
                width={3000}
                height={1688}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-line pt-14 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-white">Peran Saya</h2>
              <ul className="mt-4 space-y-3">
                {project.role.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink-muted"
                  >
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Dampak</h2>
              <ul className="mt-4 space-y-3">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink-muted"
                  >
                    — {item}
                  </li>
                ))}
              </ul>
            </div>

            {project.features && (
              <div>
                <h2 className="text-lg font-medium text-white">Fitur Utama</h2>
                <ul className="mt-4 space-y-3">
                  {project.features.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-ink-muted"
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.learning && (
              <div>
                <h2 className="text-lg font-medium text-white">Yang Dipelajari</h2>
                <ul className="mt-4 space-y-3">
                  {project.learning.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-ink-muted"
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="glass-panel relative mt-16 mb-24 overflow-hidden rounded-2xl p-8 text-center md:p-12">
            <p className="text-lg font-medium text-white md:text-xl">
              Butuh solusi digital serupa?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
              Ceritakan kebutuhan Anda dan kami bantu wujudkan jadi produk
              nyata.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button href="/kontak" variant="primary" withArrow>
                Mulai Project
              </Button>
              {hasLinks && (
                <a
                  href={
                    project.links.website ??
                    project.links.playStore ??
                    project.links.appStore
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-white"
                >
                  Buka project ini
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
