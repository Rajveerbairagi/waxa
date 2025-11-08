import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import caseStudyImage from '@assets/generated_images/Case_study_metrics_visualization_fba8630f.png';

const clientLogos = [
  'TechCorp',
  'InnovateLabs',
  'GrowthCo',
  'StartupX',
  'Enterprise360',
  'DigitalWave',
];

const metrics = [
  {
    id: 1,
    icon: TrendingUp,
    value: '340%',
    label: 'Growth in Engagement',
  },
  {
    id: 2,
    icon: Users,
    value: '2.5M+',
    label: 'Audience Reached',
  },
  {
    id: 3,
    icon: DollarSign,
    value: '450%',
    label: 'ROI Improvement',
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="text-references-headline">
          From startup to enterprise
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Trusted by leading brands to drive measurable growth and lasting impact.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {clientLogos.map((logo, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover-elevate cursor-pointer"
              data-testid={`card-client-${index}`}
            >
              <span className="text-lg font-semibold text-muted-foreground">{logo}</span>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge className="w-fit mb-4" data-testid="badge-case-study">
                Case Study
              </Badge>
              <h3 className="text-3xl font-bold mb-4">TechCorp Digital Transformation</h3>
              <p className="text-muted-foreground mb-8">
                We helped TechCorp scale their digital presence from a regional player to a
                national leader through strategic content marketing and performance optimization.
              </p>

              <div className="space-y-6">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.id}
                      className="flex items-center gap-4"
                      data-testid={`metric-${metric.id}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-success">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src={caseStudyImage}
                alt="Case study results"
                className="w-full h-full object-cover"
                data-testid="img-case-study"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
