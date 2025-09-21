import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const MobileMenu = ({ scrollToSection, scrollToTop }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", action: () => { scrollToTop(); setIsOpen(false); } },
    { label: "Services", action: () => { scrollToSection('services'); setIsOpen(false); } },
    { label: "How It Works", action: () => { scrollToSection('how-it-works'); setIsOpen(false); } },
    { label: "About", action: () => { scrollToSection('about'); setIsOpen(false); } },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <Button
                onClick={() => { scrollToSection('calendly'); setIsOpen(false); }}
                className="bg-gradient-primary text-white hover:shadow-primary transition-all duration-300 mt-4"
                size="sm"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;