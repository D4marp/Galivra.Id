import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/sections/Pricing";
import { CTASection } from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Harga — GALIVRA",
  description:
    "Harga mulai per layanan GALIVRA — website, mobile app, e-commerce, sistem bisnis, AI & otomasi, data solutions, API integrasi, dan cloud deployment.",
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
