import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import PositionsSection from "@/components/PositionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={heroBg} />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TeachingSection />
      <PositionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
