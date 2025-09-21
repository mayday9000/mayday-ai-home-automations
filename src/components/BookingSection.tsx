import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Ensure Calendly script is loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
            data-url="https://calendly.com/masondavisai?hide_landing_page_details=1" 
            style={{minWidth: '320px', height: '700px'}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;