import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CustomCursor } from "@/components/cinematic/CustomCursor";
import { SmoothScroll } from "@/components/cinematic/SmoothScroll";
import { Preloader } from "@/components/cinematic/Preloader";
import { ScrollProgress } from "@/components/cinematic/ScrollProgress";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#07060C",
  colorScheme: "dark",
};

// Runs before first paint: flags JS (so reveal targets can start hidden without
// hurting no-JS visitors) and decides whether this visit gets the intro curtain.
const prePaintScript = `(function(){try{var d=document.documentElement;d.dataset.js="";var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var seen=sessionStorage.getItem("galivra-intro");d.dataset.intro=(r||seen)?"done":"pending";}catch(e){document.documentElement.dataset.intro="done";}})();`;

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
    <html
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      </head>
      <body>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
