import heroBg from "@/assets/hero-bg.jpg";
import mobileMockup from "@/assets/mobile-mockup.png";
import { Wifi, Lightbulb, Boxes, Scan } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const FeaturesWithImagesSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const images = [
    {
      src: heroBg,
      alt: "Orbix board illuminated with RGB LEDs"
    },
    {
      src: mobileMockup,
      alt: "Orbix mobile app interface"
    },
    {
      src: heroBg,
      alt: "Orbix modular gaming pieces"
    }
  ];

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
          <div className="bg-card rounded-xl overflow-hidden border border-border shadow-elegant order-1 slide-in-right">
            <Carousel 
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-56 md:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
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
