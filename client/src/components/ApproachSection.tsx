import { Card } from '@/components/ui/card';
import { Lightbulb, PenTool, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'We analyze your market, define goals, and create a tailored growth strategy.',
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Content Production',
    description: 'Our team creates engaging, high-quality content that speaks to your audience.',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Optimization & Growth',
    description: 'Continuous testing, refinement, and scaling to maximize your ROI.',
  },
];

export default function ApproachSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="text-approach-headline">
          How We Work
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Our proven process transforms your marketing from good to exceptional.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative" data-testid={`step-${step.id}`}>
                <Card className="p-8 h-full hover-elevate">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-primary/20 mb-2">{step.id}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
