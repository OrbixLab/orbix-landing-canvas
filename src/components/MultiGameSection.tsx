export const MultiGameSection = () => {
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

  return (
    <section className="py-20 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 slide-in-right">
          {gameSetups.map((game, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-smooth hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl shadow-elegant hover:shadow-glow">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                  <h3 className="font-semibold text-lg">{game.title}</h3>
                  <p className="text-sm text-gray-200">{game.description}</p>
                </div>
              </div>
            </div>
          ))}
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