import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisaJourneyAnimation from "@/components/VisaJourneyAnimation";
import HowItWorks from "@/components/HowItWorks";
import CountrySelection from "@/components/CountrySelection";
import TopFeatures from "@/components/TopFeatures";
import WhyChoose from "@/components/WhyChoose";
import ServicesOffered from "@/components/ServicesOffered";
import GlobalMap from "@/components/GlobalMap";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisaJourneyAnimation />
      <HowItWorks />
      <CountrySelection />
      <TopFeatures />
      <WhyChoose />
      <ServicesOffered />
      <GlobalMap />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
