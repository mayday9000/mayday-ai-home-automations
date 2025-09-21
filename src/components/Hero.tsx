import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero hover:bg-gradient-hero-hover transition-all duration-300 ease-in-out flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Never Miss a Call. 
              <span className="block">Never Miss a Job.</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Mayday AI builds smart automation systems for home service companies — 
              so you can answer every lead, keep crews dispatched, and stay busy year-round.
            </p>
            <Button 
              size="lg"
              onClick={scrollToCalendly}
              className="bg-white text-primary hover:bg-primary-foreground/95 shadow-primary text-lg px-8 py-6 font-semibold"
            >
              Book a Free Strategy Call
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profileImage}
                alt="Business Owner Profile"
                className="w-80 h-80 rounded-full object-cover shadow-soft border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;