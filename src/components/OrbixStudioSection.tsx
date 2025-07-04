import { Button } from "@/components/ui/button";
import { Code, Palette, Share2, Zap } from "lucide-react";

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
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Studio Interface Mockup */}
          <div className="slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                alt="Orbix Studio Interface"
                className="w-full rounded-2xl shadow-elegant"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-secondary/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Features */}
          <div className="slide-in-right">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce shadow-glow">
                    <feature.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studio Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
              alt="Game Designer Interface"
              className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
              <h3 className="font-semibold">Game Designer</h3>
              <p className="text-sm text-gray-200">Visual game board creation</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
              alt="Rule Builder Interface"
              className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
              <h3 className="font-semibold">Rule Builder</h3>
              <p className="text-sm text-gray-200">Intuitive logic creation</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
              alt="Playtesting Dashboard"
              className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
              <h3 className="font-semibold">Playtesting</h3>
              <p className="text-sm text-gray-200">Real-time game analytics</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-secondary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Join the Creator Beta
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be among the first to access Orbix Studio and start creating your dream board games. 
              Early access includes premium features and direct feedback from our development team.
            </p>
            <Button variant="cta" size="lg">
              Request Beta Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};