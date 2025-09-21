import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Wrench, Sparkles, MapPin } from "lucide-react";

const WhoItsFor = () => {
  const personas = [
    {
      icon: Wind,
      title: "HVAC Companies",
      description: "Struggling to keep up with peak summer/winter demand."
    },
    {
      icon: Wrench,
      title: "Plumbing & Roofing Contractors", 
      description: "Juggling incoming calls, dispatch, and seasonal rushes."
    },
    {
      icon: Sparkles,
      title: "Cleaning & Landscaping Teams",
      description: "Growing crews but overwhelmed with scheduling and follow-ups."
    },
    {
      icon: MapPin,
      title: "Multi-location Service Businesses",
      description: "Ready to unify customer intake, dispatch, and automation across locations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Who We Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mayday AI is built for home service owners who are ready to stop missing jobs and start running smoother.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-card/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground text-center">
                    {persona.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;