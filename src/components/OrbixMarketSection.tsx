import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Gamepad2 } from "lucide-react";

export const OrbixMarketSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const marketItems = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Adventure Quest Pack",
      price: "$19.99",
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      title: "Strategy Master Collection",
      price: "$24.99",
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      title: "Party Games Mega Pack",
      price: "$14.99",
      rating: 4.7
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % marketItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + marketItems.length) % marketItems.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marketItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [marketItems.length]);

  return (
    <section className="h-screen flex items-center py-12 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Orbix Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Buy third-party games, add-ons, and accessories. Discover new gaming 
            experiences from independent creators and major publishers worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto slide-in-right">
          {/* Featured Items Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant mb-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {marketItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-accent">{item.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                  </div>
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

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mb-8">
            {marketItems.map((_, index) => (
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

          {/* Market Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Easy Purchasing</h3>
              <p className="text-muted-foreground">One-click downloads directly to your Orbix board</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Curated Quality</h3>
              <p className="text-muted-foreground">All games tested and verified for optimal experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Creator Support</h3>
              <p className="text-muted-foreground">Support independent game developers worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};