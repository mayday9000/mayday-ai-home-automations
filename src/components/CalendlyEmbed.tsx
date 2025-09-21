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
          {/* Calendly placeholder - replace with actual Calendly widget */}
          <div className="min-h-[600px] bg-gradient-subtle rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Calendly Integration</h3>
              <p className="text-muted-foreground">
                Replace this placeholder with your Calendly embed widget
              </p>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg max-w-md mx-auto">
                <p className="text-sm text-primary font-medium">
                  Add your Calendly embed code here to enable direct booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;