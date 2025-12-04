import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">FoodSave</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#browse" className="text-muted-foreground hover:text-foreground transition-colors">
            Browse deals
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About us
          </a>
        </nav>

        <Button variant="default" size="sm">
          Get the App
        </Button>
      </div>
    </header>
  );
};

export default Header;
