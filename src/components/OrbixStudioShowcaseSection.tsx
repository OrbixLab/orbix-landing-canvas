import heroBg from "@/assets/orbix-studio.jpeg";

export const OrbixStudioShowcaseSection = () => {
  return (
    <section id="orbix-studio" className="py-16 md:py-24 bg-gray-800/20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-10 md:mb-14 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Have Some Game Ideas? Build it with our app Orbix Studio
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <figure className="bg-card rounded-2xl overflow-hidden border border-border shadow-elegant slide-in-right">
            <img
              src={heroBg}
              alt="Designing a board with Orbix Studio preview"
              className="w-full h-60 md:h-80 object-cover"
              loading="lazy"
            />
          </figure>
          <div className="space-y-4 text-muted-foreground slide-in-right">
            <p className="text-base md:text-lg">Design, test, and iterate your ideas visually.</p>
            <p className="text-base md:text-lg">Publish to the market and reach players instantly.</p>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-muted-foreground">
              <li>No-code AI assistant</li>
              <li>Publish it in our market and sell or share your creation</li>
            </ul>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-10 md:mt-14">
          <figure className="bg-card rounded-2xl overflow-hidden border border-border shadow-elegant order-2 lg:order-1 slide-in-right">
            <img
              src={mobileMock}
              alt="Orbix Studio app mobile interface"
              className="w-full h-60 md:h-80 object-cover"
              loading="lazy"
            />
          </figure>
          <div className="order-1 lg:order-2 slide-in-right">
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-muted-foreground">
              <li>No-code AI assistant</li>
              <li>Publish it in our market and sell or share your creation</li>
              <li>No-code AI assistant</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};
