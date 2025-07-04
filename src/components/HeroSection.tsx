import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import orbixLogo from "@/assets/orbix-logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (using image as fallback) */}
      <div className="hero-video">
        <img 
          src={heroBackground} 
          alt="Orbix Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <div className="fade-in">
          <img 
            src={orbixLogo} 
            alt="Orbix" 
            className="h-24 w-24 mx-auto mb-8 animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            One board to
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              {" "}rule them all
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Experience the future of board gaming with Orbix - the revolutionary 
            modular platform that transforms any game night
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              Pre-order Now
            </Button>
            <Button 
              variant="support" 
              size="xl" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href="https://patreon.com/orbix" target="_blank" rel="noopener noreferrer">
                Support Us
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};