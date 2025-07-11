import img1 from "@/assets/Orbix.91.png";
import img2 from "@/assets/Render1.jpeg";
import img3 from "@/assets/Orbix.113.png";
import img4 from "@/assets/board1.jpeg";

export const MultiGameSection = () => {
  const gameSetups = [
    {
      image: img1,
      title: "Strategy Games",
      description: "Complex tactical gameplay"
    },
    {
      image: img2,
      title: "Party Games", 
      description: "Fun for everyone"
    },
    {
      image: img3,
      title: "Adventure Games",
      description: "Epic storytelling experiences"
    },
    {
      image: img4,
      title: "Classic Games",
      description: "Timeless board game favorites"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Multi-game
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transform your Orbix board into any game you can imagine. From classic favorites 
            to cutting-edge new experiences, the possibilities are endless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 slide-in-right">
          {gameSetups.map((game, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-48 md:h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">{game.title}</h3>
                <p className="text-sm md:text-base text-gray-200">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 fade-in">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Each game setup is automatically configured through our intelligent software, 
            ensuring perfect gameplay every time with zero setup complexity.
          </p>
        </div>
      </div>
    </section>
  );
};