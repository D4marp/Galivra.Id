import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Trust } from "@/sections/Trust";
import { Services } from "@/sections/Services";
import { FeaturedSolutions } from "@/sections/FeaturedSolutions";
import { WebScraping } from "@/sections/WebScraping";
import { AIAutomation } from "@/sections/AIAutomation";
import { AboutPreview } from "@/sections/AboutPreview";
import { Portfolio } from "@/sections/Portfolio";
import { HargaPreview } from "@/sections/HargaPreview";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <FeaturedSolutions />
        <WebScraping />
        <AIAutomation />
        <AboutPreview />
        <Portfolio />
        <HargaPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
