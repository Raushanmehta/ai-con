import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/sections/TestimonialSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import CTASection from "@/sections/CTASection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
