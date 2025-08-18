import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Heart } from "lucide-react";
import orbixLogo from "@/assets/logo3.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={orbixLogo} 
                alt="Orbix" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">Orbix</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Revolutionizing board gaming with intelligent, modular technology. 
              One board to rule them all.
            </p>
            <div className="flex space-x-4">
              {/* <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/orbix-board-5a8775375/" 
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:support@orbixboard.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#smart-intro" className="hover:text-primary-foreground transition-smooth">Features</a></li>
              <li><a href="#features" className="hover:text-primary-foreground transition-smooth">Specifications</a></li>
              {/* <li><a href="#" className="hover:text-primary-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Pre-order</a></li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-smooth">FAQ</a></li>
              {/* <li><a href="#" className="hover:text-primary-foreground transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Community</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Orbix. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>for gamers everywhere</span>
            </div>
            
            <div className="flex space-x-6 text-primary-foreground/60 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};