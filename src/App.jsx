import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/home/AboutSection";
import ServicesSection from "./sections/home/ServicesSection";
import GallerySection from "./sections/home/GallerySection";
import StatsSection from "./sections/home/StatsSection";
import ContactSection from "./sections/home/ContactSection";

function App() {
  return (
    <div className="bg-[#0a0814] text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <StatsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;