import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <section id="calendly" className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl overflow-x-hidden">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 px-4 sm:px-0">
            Book Your Free Strategy Call
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4 sm:px-0">
            Let's discuss how Mayday AI can transform your home service business
          </p>
          <p className="text-sm text-muted-foreground mt-4 px-4 sm:px-0">
            By booking an appointment, you agree to our{" "}
            <Link 
              to="/terms-and-conditions-privacy-policy" 
              className="underline hover:text-foreground transition-colors"
            >
              Terms of Service and Privacy Policy
            </Link>
          </p>
        </div>
        
        <div className="bg-card rounded-2xl sm:rounded-3xl shadow-card p-2 sm:p-6 lg:p-8 mx-4 sm:mx-0 overflow-hidden">
          <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/masondavisai?hide_landing_page_details=1" 
            style={{
              minWidth: '100%',
              width: '100%',
              height: '600px',
              maxWidth: '100%'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;