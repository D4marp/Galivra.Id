import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Kontak — GALIVRA",
  description:
    "Hubungi GALIVRA untuk konsultasi gratis project Anda — via WhatsApp atau form project inquiry.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
