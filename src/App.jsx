import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/home/AboutSection";
import ServicesSection from "./sections/home/ServicesSection";
import GallerySection from "./sections/home/GallerySection";
import StatsSection from "./sections/home/StatsSection";
import ContactSection from "./sections/home/ContactSection";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;