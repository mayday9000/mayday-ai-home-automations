import { Calendar } from "lucide-react";

const CalendlyEmbed = () => {
  return (
    <section id="calendly" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your Free Strategy Call
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how Mayday AI can transform your home service business
          </p>
        </div>
        
        <div className="bg-card rounded-3xl shadow-card p-8">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/masondavisai" 
            style={{minWidth: '320px', height: '700px'}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;