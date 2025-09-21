import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: "Home", action: scrollToTop },
    { label: "Services", action: () => scrollToSection('services') },
    { label: "How It Works", action: () => scrollToSection('how-it-works') },
    { label: "About", action: () => scrollToSection('about') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Mayday AI
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="relative text-foreground hover:text-primary transition-colors duration-200 font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <Button
              onClick={() => scrollToSection('calendly')}
              className="bg-gradient-primary text-white hover:shadow-primary transition-all duration-300 hover:scale-105"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => scrollToSection('calendly')}
              size="sm"
              className="bg-gradient-primary text-white hover:shadow-primary transition-all duration-300"
            >
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;