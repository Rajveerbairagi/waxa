import Hero from '@/components/Hero';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ApproachSection from '@/components/ApproachSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ReferencesSection from '@/components/ReferencesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSolutionSection />
      <ApproachSection />
      <AdvantagesSection />
      <ReferencesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
