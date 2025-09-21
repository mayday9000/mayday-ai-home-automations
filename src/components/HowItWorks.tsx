import { Calendar, Cog, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Book a Call",
      description: "Quick discovery to map needs"
    },
    {
      number: "2", 
      icon: Cog,
      title: "We Build & Automate",
      description: "Deploy AI systems that fit your ops"
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "You Scale Stress-Free",
      description: "Steady work, no missed leads, no admin headaches"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple process, powerful results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-primary transform translate-x-8 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-primary">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{step.number}</div>
                      <Icon className="w-8 h-8 text-white mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;