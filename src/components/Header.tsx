import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import orbixLogo from "@/assets/orbix-logo.png";
import { JoinUsModal } from "@/components/JoinUsModal";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set dark mode as default and permanent
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-elegant border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={orbixLogo} 
            alt="Orbix Logo" 
            className="h-8 w-8 animate-float"
          />
          <span className="text-lg md:text-xl font-bold text-foreground">Orbix</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href="#smart-intro" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('smart-intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          <Button 
            variant="cta" 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => setIsModalOpen(true)}
          >
            Join Us
          </Button>
        </div>
      </nav>
      
      <JoinUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};