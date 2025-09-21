const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Mayday AI</h3>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#calendly"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('calendly');
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Book a Call
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Mayday AI. Retainers include hosting, monitoring, and regular system improvements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;