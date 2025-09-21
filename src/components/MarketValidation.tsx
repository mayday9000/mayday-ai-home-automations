import { TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MarketValidation = () => {
  const stats = [
    {
      icon: DollarSign,
      stat: "$720,000",
      description: "AI saves home service companies up to $720,000 annually in admin costs."
    },
    {
      icon: TrendingUp,
      stat: "$1 Trillion",
      description: "The global home services market is projected to grow by $1 trillion between 2025–2029."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Market Proven Results
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the growing number of home service companies leveraging AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-card/80 backdrop-blur-sm text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                    {item.stat}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketValidation;