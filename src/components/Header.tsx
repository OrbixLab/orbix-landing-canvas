import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import orbixLogo from "@/assets/logo3.png";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

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
          <a href="#modularity" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-muted"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="cta" size="sm" className="hidden sm:inline-flex">
            Pre-order
          </Button>
        </div>
      </nav>
    </header>
  );
};