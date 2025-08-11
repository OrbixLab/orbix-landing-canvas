import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoSection = () => {
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID
  return (
    <section id="video" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-2xl shadow-elegant overflow-hidden fade-in">
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Orbix Product Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
