import { Sparkles, Leaf, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    emoji: "🥐",
    title: "Great food, low price",
    description: "Enjoy delicious meals from top restaurants and bakeries at up to 70% off retail prices.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Leaf,
    emoji: "🌱",
    title: "Reduce food waste effortlessly",
    description: "Every meal you save prevents perfectly good food from ending up in landfills.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    emoji: "🛍️",
    title: "Safe & high quality",
    description: "We partner only with verified businesses committed to food safety standards.",
    color: "bg-accent text-accent-foreground",
  },
];

const ValueProps = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why FoodSave?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Good for you, good for the planet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of food lovers making a difference one meal at a time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{value.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
