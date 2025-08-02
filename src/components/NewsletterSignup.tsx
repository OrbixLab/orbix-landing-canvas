import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast({ title: "Invalid email", description: "Please enter a valid email." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://3.17.29.116:3000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!res.ok) {
        throw new Error("Error in subscription");
      }

      toast({ title: "Subscribed!", description: "You'll receive our updates soon." });
      setEmail("");
    } catch (err) {
      toast({ title: "Error", description: "Subscription failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-subtle rounded-2xl p-4 md:p-6 border border-border">
      <h4 className="font-semibold text-foreground mb-2 md:mb-3 text-sm md:text-base">Newsletter</h4>
      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
        Stay updated with the latest Orbix news and development updates.
      </p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 text-sm"
        />
        <Button
          variant="cta"
          size="sm"
          className="text-sm"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </div>
  );
};
