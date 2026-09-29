import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/sections/Portfolio";
import { CTASection } from "@/sections/CTASection";

export const metadata: Metadata = {
  title: "Karya — GALIVRA",
  description:
    "Portofolio GALIVRA: website, aplikasi mobile, sistem bisnis, dan infrastruktur yang sudah kami bangun untuk klien di Indonesia.",
};

export default function KaryaPage() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
