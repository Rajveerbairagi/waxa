import AdvantagesSection from '@/components/AdvantagesSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Dedicated account manager assigned to your project',
  'Custom strategies tailored to your industry and goals',
  'Transparent pricing with no hidden fees',
  'Flexible contracts that adapt to your needs',
  'Access to our full suite of marketing tools',
  'Regular strategy sessions and performance reviews',
  'Priority support and rapid response times',
  'Exclusive insights from industry experts',
];

export default function Advantages() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-advantages-headline">
            Why Choose WAXA
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the difference of working with a partner truly invested in your success.
          </p>
        </div>
      </section>

      <AdvantagesSection />

      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Partnership Benefits</Badge>
            <h2 className="text-4xl font-bold mb-4">What You Get With WAXA</h2>
            <p className="text-xl text-muted-foreground">
              More than just a service provider—a true growth partner.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3" data-testid={`benefit-${idx}`}>
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
