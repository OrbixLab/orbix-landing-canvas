import heroBg from "@/assets/hero-bg.jpg";
import { Wifi, Lightbulb, Boxes, Scan } from "lucide-react";

export const FeaturesWithImagesSection = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-8 md:mb-10 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Scan className="h-6 w-6 text-primary" aria-hidden="true" />
            SMART PIECE SCANNING
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <figure className="bg-card rounded-xl overflow-hidden border border-border shadow-elegant order-1 slide-in-right">
            <img
              src={heroBg}
              alt="Orbix board illuminated with RGB LEDs"
              className="w-full h-56 md:h-80 object-cover"
              loading="lazy"
            />
          </figure>
          <div className="order-2 slide-in-right">
            <ul className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <li className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Wi‑Fi Connection</span>
              </li>
              <li className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>RGB LEDs</span>
              </li>
              <li className="flex items-center gap-3">
                <Boxes className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Modularity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
