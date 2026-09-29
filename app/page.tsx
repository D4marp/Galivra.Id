import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { ProjectMarquee } from "@/sections/ProjectMarquee";
import { Agitation } from "@/sections/Agitation";
import { Services } from "@/sections/Services";
import { FeaturedWork } from "@/sections/FeaturedWork";
import { Capabilities } from "@/sections/Capabilities";
import { Process } from "@/sections/Process";
import { Objections } from "@/sections/Objections";
import { HargaPreview } from "@/sections/HargaPreview";
import { CTASection } from "@/sections/CTASection";

// Page follows PAS: Problem (Hero) → Agitation → Solution (Services, Work,
// Capabilities) → proof of process → objection handling → price → ultimatum.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectMarquee />
        <Agitation />
        <Services />
        <FeaturedWork />
        <Capabilities />
        <Process />
        <Objections />
        <HargaPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
