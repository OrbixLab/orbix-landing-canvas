import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is Orbix and how does it work?",
      answer: "Orbix is a revolutionary smart board gaming platform that combines physical gameplay with digital intelligence. It features modular pieces, RGB LED lighting, and Wi-Fi connectivity to enhance your gaming experience with any board game."
    },
    {
      question: "Is Orbix compatible with existing board games?",
      answer: "Yes! Orbix is designed to work with a wide variety of existing board games. You can download games from our Orbix Market and play them instantly, or use the modular system to adapt your favorite games."
    },
    {
      question: "What devices do I need to use Orbix?",
      answer: "Orbix connects via Wi-Fi and works with smartphones, tablets, and computers. Simply download the Orbix app, connect to your board, and you're ready to play!"
    },
    {
      question: "Can I create my own games for Orbix?",
      answer: "Absolutely! Orbix Studio allows you to create custom games, maps, and experiences. Whether you want to design D&D campaigns or create entirely new games, our platform gives you the tools to bring your ideas to life."
    },
    {
      question: "How many players can use Orbix at once?",
      answer: "Orbix supports multiple players both locally and online. The exact number depends on the specific game you're playing, but our modular system can accommodate various player counts and game types."
    },
    {
      question: "When will Orbix be available for purchase?",
      answer: "Orbix will be launching on Kickstarter soon! Subscribe to our newsletter to be notified when the campaign goes live and get early access to special pricing and exclusive content."
    },
    {
      question: "What's included in the Orbix package?",
      answer: "The Orbix package includes the smart board, modular pieces, charging station, and access to the Orbix Market and Studio. Additional expansion modules will be available separately."
    },
    {
      question: "Do I need an internet connection to play?",
      answer: "While Orbix features Wi-Fi connectivity for online play and downloading new games, many games can be played offline once downloaded. However, internet connection enhances the experience with features like online multiplayer and regular content updates."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <header className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Orbix and how it revolutionizes board gaming
          </p>
        </header>
        
        <div className="slide-in-left">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary text-base md:text-lg font-medium py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};