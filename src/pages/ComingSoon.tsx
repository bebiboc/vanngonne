import { useState } from "react";
import { Leaf, ArrowLeft, Mail, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as we launch.",
      });
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      {/* Header */}
      <header className="container py-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to home
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-8 animate-float">
            <Leaf className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-secondary-foreground text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            Launching next month
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            We're almost ready!
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-md mx-auto">
            Be the first to save delicious food and fight waste in your city. Enter your email to get notified when we launch.
          </p>

          {/* Email form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <Button type="submit" variant="warm" size="lg">
                Notify me
              </Button>
            </form>
          ) : (
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                You're on the list!
              </h2>
              <p className="text-primary-foreground/80">
                We'll send you an email when FoodSave launches in your area. Get ready to save!
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">12K+</p>
              <p className="text-sm text-primary-foreground/70">People waiting</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Partner businesses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">5</p>
              <p className="text-sm text-primary-foreground/70">Cities launching</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 text-center">
        <p className="text-sm text-primary-foreground/60">
          © 2024 FoodSave. Together against food waste.
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
