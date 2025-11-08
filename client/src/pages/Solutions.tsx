import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Target,
    title: 'Content Strategy',
    description: 'Data-driven content planning that aligns with your business goals and resonates with your target audience.',
    features: ['Audience research', 'Content calendar', 'Brand voice development', 'SEO optimization'],
  },
  {
    id: 2,
    icon: Users,
    title: 'Social Media Management',
    description: 'End-to-end social media management from content creation to community engagement and analytics.',
    features: ['Platform management', 'Content creation', 'Community engagement', 'Performance tracking'],
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Paid Advertising',
    description: 'Strategic paid campaigns across platforms that maximize ROI and drive qualified traffic to your business.',
    features: ['Campaign strategy', 'Ad creative', 'A/B testing', 'Budget optimization'],
  },
  {
    id: 4,
    icon: Zap,
    title: 'Performance Analytics',
    description: 'Comprehensive analytics and reporting to track progress, identify opportunities, and optimize performance.',
    features: ['Custom dashboards', 'Weekly reports', 'Competitor analysis', 'Actionable insights'],
  },
];

export default function Solutions() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-solutions-headline">
            Solutions That Drive Growth
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive digital marketing services designed to help your brand reach new heights.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="p-8 hover-elevate" data-testid={`card-service-${service.id}`}>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" data-testid={`button-learn-more-${service.id}`}>
                    Learn More
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ProblemSolutionSection />
    </div>
  );
}
