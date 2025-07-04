import { Gamepad2, CreditCard, Scan } from "lucide-react";

export const AddOnsSection = () => {
  const addOns = [
    {
      icon: Gamepad2,
      title: "32 Generic Tokens",
      description: "High-quality plastic tokens for any game scenario"
    },
    {
      icon: CreditCard,
      title: "Generic Deck of Cards",
      description: "Versatile card deck that adapts to any game requirements"
    },
    {
      icon: Scan,
      title: "Token & Card Scanner",
      description: "Advanced RFID technology for seamless game integration"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Included Add-ons
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Orbix board comes complete with essential gaming components, 
            intelligently designed to work with hundreds of different games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <div 
              key={index} 
              className="text-center group slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-bounce shadow-glow">
                  <addon.icon className="h-10 w-10 text-secondary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-smooth"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {addon.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Smart Recognition Technology
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our advanced scanning system automatically recognizes tokens and cards, 
              eliminating manual setup and ensuring accurate gameplay tracking for 
              every game in your collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};