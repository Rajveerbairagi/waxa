import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ReferencesSection from '@/components/ReferencesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSolutionSection />
      <div id="services">
        <ServicesSection />
      </div>
      <AdvantagesSection />
      <div id="references">
        <ReferencesSection />
      </div>
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
