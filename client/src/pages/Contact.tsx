import ContactSection from '@/components/ContactSection';
import { Card } from '@/components/ui/card';
import { Clock, Globe, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Clock,
    value: '48h',
    label: 'Average Response Time',
  },
  {
    id: 2,
    icon: Globe,
    value: '100+',
    label: 'Clients Worldwide',
  },
  {
    id: 3,
    icon: Award,
    value: '5 Years',
    label: 'Industry Experience',
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-contact-headline">
            Let's Start Growing Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to take your marketing to the next level? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.id} className="p-6 text-center" data-testid={`card-stat-${stat.id}`}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
