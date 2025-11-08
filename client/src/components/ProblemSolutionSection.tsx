import { Card } from '@/components/ui/card';
import { XCircle, CheckCircle } from 'lucide-react';

interface Problem {
  id: number;
  problem: string;
  solution: string;
}

const problems: Problem[] = [
  {
    id: 1,
    problem: 'Inconsistent brand messaging across channels',
    solution: 'Unified brand strategy with cohesive messaging',
  },
  {
    id: 2,
    problem: 'Low engagement and reach on social media',
    solution: 'Data-driven content that resonates with your audience',
  },
  {
    id: 3,
    problem: 'Poor ROI from marketing campaigns',
    solution: 'Performance-optimized campaigns with measurable results',
  },
  {
    id: 4,
    problem: 'Limited time and resources for content creation',
    solution: 'Full-service content production and management',
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="text-section-headline">
          Your problems. Our promises.
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          We understand the challenges you face. Here's how we transform them into opportunities.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-destructive flex items-center gap-2">
              <XCircle className="h-6 w-6" />
              Without WAXA
            </h3>
            <div className="space-y-4">
              {problems.map((item) => (
                <Card
                  key={`problem-${item.id}`}
                  className="p-6 bg-muted/30"
                  data-testid={`card-problem-${item.id}`}
                >
                  <p className="text-muted-foreground">{item.problem}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-success flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              With WAXA
            </h3>
            <div className="space-y-4">
              {problems.map((item) => (
                <Card
                  key={`solution-${item.id}`}
                  className="p-6 border-success/20 bg-success/5"
                  data-testid={`card-solution-${item.id}`}
                >
                  <p className="font-medium">{item.solution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
