import { Button } from "@/components/ui/button";
import { Code, Palette, Share2, Zap } from "lucide-react";
import img1 from "@/assets/studio1.jpeg";

export const OrbixStudioSection = () => {
  const features = [
    {
      icon: Code,
      title: "No-Code Platform",
      description: "Create games without any programming knowledge"
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Let AI help you design balanced and engaging gameplay"
    },
    {
      icon: Palette,
      title: "Visual Editor",
      description: "Intuitive drag-and-drop interface for game creation"
    },
    {
      icon: Share2,
      title: "Share & Sell",
      description: "Publish your games to the Orbix Market instantly"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header - siempre arriba */}
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Create Your Own Board Games with{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Orbix Studio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            No-code, AI-powered platform to create, share, and sell your own board games. 
            Transform your creative ideas into playable experiences that millions can enjoy.
          </p>
        </div>

        {/* Content - responsive layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Studio Interface Mockup - arriba en móvil, izquierda en desktop */}
          <div className="slide-in-left order-1 lg:order-1 w-full">
            <div className="relative">
              <img 
                src={img1}
                alt="Orbix Studio Interface"
                className="w-full rounded-2xl shadow-elegant"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-secondary/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Features - abajo en móvil, derecha en desktop */}
          <div className="slide-in-right order-2 lg:order-2 w-full">
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce shadow-glow">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};