export const MarketPromoSection = () => {
  return (
    <section id="market-promo" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <header className="text-center mb-8 md:mb-10 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Orbix Market</h2>
        </header>
        <div className="space-y-4 text-center text-base md:text-lg text-muted-foreground">
          <p>Do you want to enjoy a classic chess match?</p>
          <p>Create your own maps for your Dungeon and Dragons adventures?</p>
          <p>Relive classic games with your kids or challenge yourself with exciting trivia?</p>
          <p className="font-semibold text-foreground pt-2">All this and much more awaits you in the Orbix Market!</p>
          <p>Download any game and play it in seconds on your Orbix Board.</p>
        </div>
      </div>
    </section>
  );
};
