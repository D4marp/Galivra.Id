import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Kontak — GALIVRA",
  description:
    "Hubungi GALIVRA untuk konsultasi gratis project Anda — via WhatsApp atau form project inquiry.",
};

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
