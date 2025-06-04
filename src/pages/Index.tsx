import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <ServicesSection />
      <ContactForm />
    </div>
  );
};
