import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhoItsFor from "../components/WhoItsFor";
import HowItWorks from "../components/HowItWorks";
import BookingSection from "../components/BookingSection";
import About from "../components/About";
import MarketValidation from "../components/MarketValidation";
import SmsCallout from "../components/SmsCallout";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <section id="services">
        <Services />
      </section>
      
      <WhoItsFor />
      
      <HowItWorks />
      
      <BookingSection />
      
      <section id="about">
        <About />
      </section>
      
      <MarketValidation />

      <SmsCallout />
      
      <Footer />
    </div>
  );
};

export default Index;
