import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/board1.jpeg"
import image2 from "../assets/Orbix.113.png"
import image3 from "../assets/board2.jpg"

export const ModularitySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: image1,
      caption: "Expand the board with extra modules for endless gaming possibilities"
    },
    {
      image: image2,
      caption: "Connect multiple boards to create massive multiplayer experiences"
    },
    {
      image: image3,
      caption: "Seamless integration with digital components and physical gameplay"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="modularity" className="min-h-screen flex items-center py-12 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Modularity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Build your perfect gaming setup with our revolutionary modular system. 
            Each module adds new dimensions to your gameplay.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto slide-in-left">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={slide.image} 
                    alt={`Modularity ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Caption */}
          <div className="text-center mt-6 md:mt-8">
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {slides[currentSlide].caption}
            </p>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? 'bg-secondary' 
                    : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};