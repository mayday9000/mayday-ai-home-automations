import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', handleMouseEnter);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', handleMouseEnter);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const spotlightStyle = isHovered ? {
    background: `
      radial-gradient(
        180px circle at ${mousePosition.x}px ${mousePosition.y}px,
        hsl(24 100% 72%) 0%,
        hsl(24 100% 65%) 25%,
        hsl(24 100% 58%) 50%,
        hsl(24 100% 50%) 100%
      )
    `,
    transition: 'background 0.2s ease-out'
  } : {};

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-hero md:hover:bg-transparent transition-all duration-300 ease-in-out flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden"
      style={spotlightStyle}
    >
      <div className="container mx-auto max-w-6xl text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start">
          <div className="w-full max-w-2xl order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Never Miss a Call. 
              <span className="block">Never Miss a Job.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 lg:mb-8 leading-relaxed">
              Mayday AI builds smart automation systems for home service companies — 
              so you can answer every lead, keep crews dispatched, and stay busy year-round.
            </p>
            <div className="relative">
              {/* Mobile gradient highlight behind button */}
              <div className="absolute inset-0 md:hidden bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl scale-150 -z-10"></div>
              
              <Button 
                size="lg"
                onClick={scrollToCalendly}
                className="bg-white text-primary hover:bg-primary-foreground/95 shadow-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold relative z-10 w-full sm:w-auto"
              >
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src={profileImage}
                alt="Business Owner Profile"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-soft border-4 border-white/20"
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