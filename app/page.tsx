import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSection from "@/components/home/AboutSection";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <ServicesGrid />
      <AboutSection />
      <EquipmentShowcase />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
