export const MarketPromoSection = () => {
  return (
    <section id="market-promo" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <header className="text-center mb-8 md:mb-12 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Orbix Market</h2>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Market Image */}
          <div className="slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" 
                alt="Digital Marketplace showcasing various board games"
                className="w-full rounded-2xl shadow-elegant"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-secondary/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Market Content */}
          <div className="slide-in-right space-y-4 text-base md:text-lg text-muted-foreground">
            <p>Do you want to enjoy a classic chess match?</p>
            <p>Create your own maps for your Dungeon and Dragons adventures?</p>
            <p>Relive classic games with your kids or challenge yourself with exciting trivia?</p>
            <p className="font-semibold text-foreground pt-2">All this and much more awaits you in the Orbix Market!</p>
            <p>Download any game and play it in seconds on your Orbix Board.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
