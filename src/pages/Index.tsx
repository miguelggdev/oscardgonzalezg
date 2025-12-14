import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AdvisorSection } from "@/components/AdvisorSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ObjectionsSection } from "@/components/ObjectionsSection";
import ModelsSection from "@/components/ModelsSection";
import { MoreModelsSection } from "@/components/MoreModelsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ImageGallerySection } from "@/components/ImageGallerySection";
import { ProcessSection } from "@/components/ProcessSection";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal delay={100}>
          <AdvisorSection />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <BenefitsSection />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <ObjectionsSection />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <ModelsSection />
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <MoreModelsSection />
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal delay={700}>
          <ImageGallerySection />
        </ScrollReveal>
        <ScrollReveal delay={800}>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal delay={900}>
          <LeadMagnetSection />
        </ScrollReveal>
        <ScrollReveal delay={1000}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;