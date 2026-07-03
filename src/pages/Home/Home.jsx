import HeroSection from "../../components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import PortfolioCTA from "./components/PortfolioCTA";
import ClientsSection from "./components/ClientsSection";

function Home() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <PortfolioCTA />
      <ClientsSection />
    </div>
  );
}

export default Home;
