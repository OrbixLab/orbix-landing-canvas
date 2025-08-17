import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SmartBoardIntroSection } from "@/components/SmartBoardIntroSection";
import { FeaturesWithImagesSection } from "@/components/FeaturesWithImagesSection";
import { VideoSection } from "@/components/VideoSection";
import { KickstarterSoonSection } from "@/components/KickstarterSoonSection";
import { MarketPromoSection } from "@/components/MarketPromoSection";
import { OrbixStudioShowcaseSection } from "@/components/OrbixStudioShowcaseSection";
import { FAQSection } from "@/components/FAQSection";
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
        <VideoSection />
        <KickstarterSoonSection />
        <MarketPromoSection />
        <OrbixStudioShowcaseSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
