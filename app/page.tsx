import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { ProjectMarquee } from "@/sections/ProjectMarquee";
import { Manifesto } from "@/sections/Manifesto";
import { Services } from "@/sections/Services";
import { FeaturedWork } from "@/sections/FeaturedWork";
import { Capabilities } from "@/sections/Capabilities";
import { Process } from "@/sections/Process";
import { HargaPreview } from "@/sections/HargaPreview";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectMarquee />
        <Manifesto />
        <Services />
        <FeaturedWork />
        <Capabilities />
        <Process />
        <HargaPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
