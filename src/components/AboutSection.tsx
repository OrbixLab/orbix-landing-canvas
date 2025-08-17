import gonzaloPhoto from "@/assets/gonza.jpg";
import juanPhoto from "@/assets/Juan.jpg";
import { Linkedin, Twitter } from "lucide-react";

export const AboutSection = () => {
  const team = [
    {
      name: "Gonzalo López Di Paola",
      title: "CEO & Founder",
      photo: gonzaloPhoto,
      bio: "Electronic Engineer with experience leading product development for hard-tech industries.",
      social: {
        linkedin: "https://www.linkedin.com/in/gonzalo-a-lopez-di-paola-099576213/",
      }
    },
    {
      name: "Juan Gabriel Losada",
      title: "CTO & Co-Founder", 
      photo: juanPhoto,
      bio: "Systems Engineer with a background in developing entertainment platforms.",
      social: {
        linkedin: "https://www.linkedin.com/in/juan-gabriel-losada-631005367/",
      }
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-12 md:py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We're a team of passionate board-game enthusiasts, video-game developers, and experts in crafting interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-glow transition-smooth border border-border">
                <div className="text-center mb-4 md:mb-6">
                  <div className="relative inline-block mb-3 md:mb-4">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-24 md:w-32 h-24 md:h-32 rounded-full object-cover mx-auto shadow-accent group-hover:scale-105 transition-bounce"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-secondary/20 group-hover:bg-gradient-secondary/30 transition-smooth"></div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-foreground">
                    {member.name}
                  </h3>
                  
                  <p className="text-base md:text-lg text-secondary font-semibold mb-3 md:mb-4">
                    {member.title}
                  </p>
                  
                  <div className="flex justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                    <a 
                      href={member.social.linkedin}
                      className="w-8 md:w-10 h-8 md:h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-bounce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 md:h-5 w-4 md:w-5 text-secondary-foreground" />
                    </a>
                    {/* <a 
                      href={member.social.twitter}
                      className="w-8 md:w-10 h-8 md:h-10 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-bounce"
                    >
                      <Twitter className="h-4 md:h-5 w-4 md:w-5 text-accent-foreground" />
                    </a> */}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center px-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 fade-in">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant max-w-3xl mx-auto border border-border">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              To bridge the gap between traditional board gaming and modern technology, 
              creating immersive experiences that bring people together while pushing 
              the boundaries of what's possible in tabletop entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};