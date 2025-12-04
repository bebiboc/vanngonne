import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground/90 text-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Launching in your city soon
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Save delicious food,{" "}
              <span className="text-secondary">save the planet</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
              Rescue surplus meals from your favorite local spots. Great food at amazing prices while fighting food waste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <Button variant="warm" size="lg" className="gap-2">
                Find food <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 border-2 border-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                <span className="font-bold text-primary-foreground">2,400+</span> meals saved this week
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Food cards floating animation */}
              <div className="absolute top-[10%] left-[5%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "0s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 flex items-center justify-center text-4xl">🥐</div>
                <p className="font-semibold text-foreground text-sm">Morning Pastry Box</p>
                <p className="text-muted-foreground text-xs">Le Petit Café</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold">$4.99</span>
                  <span className="text-xs text-muted-foreground line-through">$12.99</span>
                </div>
              </div>

              <div className="absolute top-[35%] right-[0%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 flex items-center justify-center text-4xl">🍱</div>
                <p className="font-semibold text-foreground text-sm">Surprise Bento</p>
                <p className="text-muted-foreground text-xs">Grand Hotel Kitchen</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold">$7.99</span>
                  <span className="text-xs text-muted-foreground line-through">$22.00</span>
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[15%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 flex items-center justify-center text-4xl">🍰</div>
                <p className="font-semibold text-foreground text-sm">Baker's Choice</p>
                <p className="text-muted-foreground text-xs">Sweet Dreams Bakery</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold">$5.99</span>
                  <span className="text-xs text-muted-foreground line-through">$15.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
