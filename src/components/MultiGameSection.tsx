import { useState, useEffect } from "react";

export const MultiGameSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gameSetups = [
    {
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      title: "Strategy Games",
      description: "Complex tactical gameplay"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Party Games", 
      description: "Fun for everyone"
    },
    {
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      title: "Adventure Games",
      description: "Epic storytelling experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Classic Games",
      description: "Timeless board game favorites"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gameSetups.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [gameSetups.length]);

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Multi-game
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your Orbix board into any game you can imagine. From classic favorites 
            to cutting-edge new experiences, the possibilities are endless.
          </p>
        </div>

        <div className="relative slide-in-right">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {gameSetups.map((game, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                    <p className="text-lg text-gray-200">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {gameSetups.map((_, index) => (
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

        <div className="text-center mt-12 fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each game setup is automatically configured through our intelligent software, 
            ensuring perfect gameplay every time with zero setup complexity.
          </p>
        </div>
      </div>
    </section>
  );
};