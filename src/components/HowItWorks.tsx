import { Search, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Find deals near you",
    description: "Browse restaurants, bakeries, and cafés offering surprise bags with surplus food today.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Reserve your meal",
    description: "Pay a small price to claim your surprise bag. Most bags are just $4-8!",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Pick up and enjoy",
    description: "Collect your food during the pickup window. Enjoy great food while saving money!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple & Easy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Save food in just three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 text-center relative z-10">
                  <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <span className="inline-block text-5xl font-bold text-muted/60 mb-4">
                    {step.number}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 w-12 h-12 items-center justify-center z-20">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
