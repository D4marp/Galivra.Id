import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CustomCursor } from "@/components/cinematic/CustomCursor";
import { SmoothScroll } from "@/components/cinematic/SmoothScroll";
import { Preloader } from "@/components/cinematic/Preloader";
import { ScrollProgress } from "@/components/cinematic/ScrollProgress";
import SchemaOrg from "@/components/SchemaOrg";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.galivra.web.id";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const metadata: Metadata = {
  // Lock metadataBase to the exact active domain to resolve all relative canonicals automatically
  metadataBase: new URL(siteUrl),

  title: {
    default: "Galivra Innovation Solutions | Jasa Pembuatan Website, Aplikasi Mobile & Otomasi AI",
    template: "%s | Galivra Innovation Solutions",
  },
  description:
    "Galivra adalah studio teknologi digital terpercaya. Kami melayani jasa pembuatan website profesional, aplikasi Android & iOS (Flutter), sistem bisnis, dan otomasi AI untuk membantu bisnis Anda tumbuh dan dikenal.",
  keywords: [
    "Galivra",
    "Galivra Innovation Solutions",
    "Jasa Pembuatan Website",
    "Jasa Bikin Aplikasi Mobile",
    "Jasa Otomasi AI Bisnis",
    "Jasa Website Surabaya",
    "Jasa Website Lamongan",
    "Pengembangan Aplikasi Flutter",
    "Software House Jawa Timur",
    "Sistem Kasir POS On-Premise",
  ],
  authors: [{ name: "Galivra Innovation Solutions", url: siteUrl }],
  creator: "Galivra Innovation Solutions",
  publisher: "Galivra Innovation Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // FIX CANONICAL MISMATCH: Resolves strictly to https://www.galivra.web.id/
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Galivra Innovation Solutions | Studio Teknologi Digital",
    description:
      "Kami bangun website, aplikasi mobile, dan otomasi AI. Hasilnya: bisnis Anda ditemukan, dipercaya, lalu dipilih.",
    url: siteUrl,
    siteName: "Galivra Innovation Solutions",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Galivra Innovation Solutions",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galivra Innovation Solutions | Studio Teknologi Digital",
    description:
      "Jasa pembuatan website, aplikasi mobile, dan otomasi AI profesional untuk akselerasi bisnis Anda.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <SchemaOrg />
      </head>
      <body>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll />
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
