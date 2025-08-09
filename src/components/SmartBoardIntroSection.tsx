export const SmartBoardIntroSection = () => {
  return (
    <section id="smart-intro" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="sr-only">About the Orbix Smart Board</h2>
        <div className="space-y-4 md:space-y-5 text-center fade-in">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            The smart board for ALL your board games.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Download games from our app and play in seconds.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Orbix combines smart pieces, LED lights, and a digital interface to make playing easier, more immersive, and more fun.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Connect online with other players and expand your experience with additional modules.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Orbix brings together the best of physical and digital play, without losing the magic of the board.
          </p>
        </div>
      </div>
    </section>
  );
};
