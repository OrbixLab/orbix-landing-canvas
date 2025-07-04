import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about Orbix? Want to become a partner or early adopter? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-32"
                    placeholder="Tell us about your interest in Orbix..."
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a gamer, developer, investor, or just curious about 
                  the future of board gaming, we're excited to connect with you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@orbix.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Community</h4>
                    <p className="text-muted-foreground">Join our Discord for updates and discussions</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle rounded-2xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest Orbix news and development updates.
                </p>
                <div className="flex space-x-3">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button variant="cta">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};