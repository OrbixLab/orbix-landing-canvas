import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SmartBoardIntroSection } from "@/components/SmartBoardIntroSection";
import { FeaturesWithImagesSection } from "@/components/FeaturesWithImagesSection";
import { KickstarterSoonSection } from "@/components/KickstarterSoonSection";
import { MarketPromoSection } from "@/components/MarketPromoSection";
import { OrbixStudioShowcaseSection } from "@/components/OrbixStudioShowcaseSection";
import { VideoSection } from "@/components/VideoSection";
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
        <SmartBoardIntroSection />
        <FeaturesWithImagesSection />
        <KickstarterSoonSection />
        <MarketPromoSection />
        <OrbixStudioShowcaseSection />
        <VideoSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
