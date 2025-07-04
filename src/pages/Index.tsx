import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ModularitySection } from "@/components/ModularitySection";
import { MultiGameSection } from "@/components/MultiGameSection";
import { AddOnsSection } from "@/components/AddOnsSection";
import { AppControlSection } from "@/components/AppControlSection";
import { OrbixMarketSection } from "@/components/OrbixMarketSection";
import { OrbixStudioSection } from "@/components/OrbixStudioSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <HeroSection />
        <ModularitySection />
        <MultiGameSection />
        <AddOnsSection />
        <AppControlSection />
        <OrbixMarketSection />
        <OrbixStudioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
