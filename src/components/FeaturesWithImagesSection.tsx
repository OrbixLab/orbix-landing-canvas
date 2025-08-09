import mobileMock from "@/assets/mobile-mockup.png";
import heroBg from "@/assets/hero-bg.jpg";

export const FeaturesWithImagesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-10 md:mb-14 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
            SMART PIECE SCANNING
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 slide-in-right">
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base md:text-lg">
              <li>Wi‑Fi Connection</li>
              <li>RGB LEDs</li>
              <li>Modularity</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2 slide-in-right">
            <figure className="bg-card rounded-xl overflow-hidden border border-border shadow-elegant">
              <img
                src={mobileMock}
                alt="Orbix app mobile mockup showing game selection"
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="bg-card rounded-xl overflow-hidden border border-border shadow-elegant">
              <img
                src={heroBg}
                alt="Orbix board illuminated with RGB LEDs"
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
