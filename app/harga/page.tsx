import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/sections/Pricing";
import { CTASection } from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Harga — GALIVRA",
  description:
    "Harga mulai per layanan GALIVRA — website, mobile app, e-commerce, sistem bisnis, AI & otomasi, data solutions, API integrasi, dan cloud deployment.",
  alternates: {
    canonical: "/harga",
  },
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
