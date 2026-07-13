import BentoGrid from "@/components/BentoGrid";
import ContactUsSection from "@/components/ContactUsSection";
import FAQSection from "@/components/FAQSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        heading="Turning bold ideas into"
        italicWord="bold"
        description="From first sketch to production deploy, we partner with ambitious teams to ship software that performs, scales, and lasts."
        textCycle={[
          "Production-Ready Software",
          "Scalable Digital Products",
          "Seamless User Experiences",
          "Reliable Cloud Infrastructure",
          "Data-Driven AI Systems",
          "Modern Brand Identities",
          "Launch-Ready MVPs",
        ]}
      />
      {/* <div className="h-screen bg-white"></div> */}
      {/* <BentoGrid /> */}
      <IndustriesSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <TeamSection />
      <ContactUsSection />
      {/* <ContactUsSection /> */}
      <Footer />
    </div>
  );
}
