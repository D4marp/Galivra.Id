import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://galivra.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GALIVRA — Solusi Inovasi | Mitra Teknologi Digital",
  description:
    "GALIVRA membantu bisnis membangun website modern, aplikasi mobile, otomasi berbasis AI, solusi data, dan sistem digital yang bisa berkembang bersama bisnis Anda.",
  keywords: [
    "GALIVRA",
    "mitra inovasi digital",
    "jasa website Indonesia",
    "otomasi AI",
    "web scraping",
    "jasa aplikasi mobile",
    "sistem bisnis",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GALIVRA",
    title: "GALIVRA — Solusi Inovasi | Mitra Teknologi Digital",
    description:
      "GALIVRA membantu bisnis membangun website modern, aplikasi mobile, otomasi berbasis AI, solusi data, dan sistem digital yang bisa berkembang bersama bisnis Anda.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "GALIVRA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GALIVRA — Solusi Inovasi | Mitra Teknologi Digital",
    description:
      "GALIVRA membantu bisnis membangun website modern, aplikasi mobile, otomasi berbasis AI, solusi data, dan sistem digital yang bisa berkembang bersama bisnis Anda.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
