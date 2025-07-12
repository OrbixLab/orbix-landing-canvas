import { useState, useEffect } from "react";
import img1 from "@/assets/app1.png";
import img2 from "@/assets/app2.png";
import img3 from "@/assets/app3.png";
import img4 from "@/assets/app4.png";
import { Bluetooth, Download, Settings } from "lucide-react";

export const AppControlSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const features = [
    {
      icon: Bluetooth,
      title: "Bluetooth Connectivity",
      description: "Seamless wireless connection to your Orbix board"
    },
    {
      icon: Download,
      title: "Game Downloads", 
      description: "Access thousands of games from our digital library"
    },
    {
      icon: Settings,
      title: "UI Management",
      description: "Customize interfaces and game settings on the fly"
    }
  ];

  const controlImages = [
    img1,
    img2,
    img3,
    img4,
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % controlImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [controlImages.length]);

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Control Orbix from your phone via Bluetooth. Download games, manage UIs, 
            track scores, and enhance your gaming experience with our intuitive mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="fade-in">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                    <feature.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Carousel */}
          <div className="slide-in-right w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant max-w-full w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {controlImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 min-w-0">
                    <img 
                      src={image} 
                      alt={`Control Interface ${index + 1}`}
                      className="w-full h-80 object-contain max-w-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-6">
              {controlImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentSlide 
                      ? 'bg-secondary' 
                      : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};