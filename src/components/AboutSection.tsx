import gonzaloPhoto from "@/assets/gonzalo-photo.jpg";
import juanPhoto from "@/assets/juan-photo.jpg";
import { Linkedin, Twitter } from "lucide-react";

export const AboutSection = () => {
  const team = [
    {
      name: "Gonzalo López Di Paola",
      title: "CEO & Founder",
      photo: gonzaloPhoto,
      bio: "Passionate game designer with 15+ years in the industry. Former lead designer at major gaming studios, now revolutionizing board gaming with cutting-edge technology.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Juan Gabriel Losada",
      title: "CTO & Co-Founder", 
      photo: juanPhoto,
      bio: "Tech innovator specializing in IoT and AI systems. Previously architected smart device platforms for Fortune 500 companies, bringing expertise to gaming hardware.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate innovators dedicated to transforming the board gaming 
            experience through cutting-edge technology and thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth border border-border">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-accent group-hover:scale-105 transition-bounce"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-secondary/20 group-hover:bg-gradient-secondary/30 transition-smooth"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  
                  <p className="text-lg text-secondary font-semibold mb-4">
                    {member.title}
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <a 
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-bounce"
                    >
                      <Linkedin className="h-5 w-5 text-secondary-foreground" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-bounce"
                    >
                      <Twitter className="h-5 w-5 text-accent-foreground" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
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