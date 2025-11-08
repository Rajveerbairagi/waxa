import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ReferencesSection from '@/components/ReferencesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSolutionSection />
      <ServicesSection />
      <AdvantagesSection />
      <ReferencesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
