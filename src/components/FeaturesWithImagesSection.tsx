import heroBg from "@/assets/Orbix.113.png";
import mobileMockup from "@/assets/Orbix.93.png";
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
      src: mobileMockup,
      alt: "Orbix mobile app interface"
    },
    {
      src: heroBg,
      alt: "Orbix board illuminated with RGB LEDs"
    },
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-8 md:mb-10 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Scan className="h-6 w-6 text-primary" aria-hidden="true" />
            Meet Orbix Board
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
            <ul className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <li className="space-y-2">
                <div className="flex items-center gap-3">
                  <Wifi className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">Wi‑Fi Connection</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground ml-8">
                  Connect and play with your friends no matter the distance!
                </p>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">RGB LEDs</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground ml-8">
                  Bring your games to life with vibrant, dynamic lighting effects.
                </p>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-3">
                  <Boxes className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">Modularity</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground ml-8">
                  Customize and expand your board for endless gameplay possibilities.
                </p>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-3">
                  <Scan className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">Smart Piece Scanning and Cards</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground ml-8">
                  Seamlessly track pieces and cards to enhance gameplay flow.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
