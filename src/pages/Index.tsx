import Hero from "../components/Hero";
import Services from "../components/Services";
import WhoItsFor from "../components/WhoItsFor";
import HowItWorks from "../components/HowItWorks";
import CalendlyEmbed from "../components/CalendlyEmbed";
import About from "../components/About";
import MarketValidation from "../components/MarketValidation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="services">
        <Services />
      </section>
      
      <WhoItsFor />
      
      <HowItWorks />
      
      <CalendlyEmbed />
      
      <section id="about">
        <About />
      </section>
      
      <MarketValidation />
      
      <Footer />
    </div>
  );
};

export default Index;
