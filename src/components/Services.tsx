import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Zap, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Diagnostic & Pilot",
      description: "Audit of your current call handling and response times. Identify exactly where leads and jobs are slipping through the cracks. Optional mini-pilot: a basic AI call flow demo."
    },
    {
      icon: Zap,
      title: "AI Voice Agent Build", 
      description: "A custom AI voice receptionist that answers instantly — no more missed jobs. Call routing and qualification tailored for HVAC, plumbing, roofing, or cleaning crews. CRM + scheduling integration, plus staff onboarding. 30–60 days of tuning and support."
    },
    {
      icon: Wrench,
      title: "Optimization & Expansion",
      description: "Continuous tuning of your AI agent(s). Expansion to multiple services, teams, or locations. Advanced workflows: automated reminders, billing updates, and job follow-ups. Regular reviews to keep your systems aligned with growth."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 px-4 sm:px-0">
            Smart Solutions for Home Service Companies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            From missed calls to streamlined operations — we build AI systems that work for your business.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-card/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300 hover:-translate-y-2 mx-4 sm:mx-0">
                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {service.description}
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

export default Services;