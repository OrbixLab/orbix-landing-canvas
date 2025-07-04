import mobileMockup from "@/assets/mobile-mockup.png";
import { Smartphone, Bluetooth, Download, Settings } from "lucide-react";

export const AppControlSection = () => {
  const features = [
    {
      icon: Bluetooth,
      title: "Bluetooth Connectivity",
      description: "Seamless wireless connection to your Orbix board"
    },
    {
      icon: Download,
      title: "Game Downloads",
      description: "Access thousands of games from our digital library"
    },
    {
      icon: Settings,
      title: "UI Management",
      description: "Customize interfaces and game settings on the fly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Control
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Control Orbix from your phone via Bluetooth. Download games, manage UIs, 
              track scores, and enhance your gaming experience with our intuitive mobile app.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                    <feature.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="text-center slide-in-right">
            <div className="relative inline-block">
              <img 
                src={mobileMockup} 
                alt="Orbix Mobile App" 
                className="max-w-xs mx-auto drop-shadow-2xl animate-float"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-secondary/20 rounded-[2.5rem] blur-3xl scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};