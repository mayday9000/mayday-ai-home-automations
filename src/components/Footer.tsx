import { Link } from "react-router-dom";

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
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <a
              href="/#services"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection('services');
                }
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/#calendly"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection('calendly');
                }
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Book a Call
            </a>
            <a
              href="/#about"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection('about');
                }
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Mayday AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
