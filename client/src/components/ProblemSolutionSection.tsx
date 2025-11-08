import { Card } from '@/components/ui/card';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-section-headline">
            Your <span className="gradient-text">Challenges</span>. Our <span className="gradient-text">Solutions</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the obstacles you face. Here's how we transform them into opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">Without WAXA</h3>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <motion.div
                  key={`problem-${item.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 bg-muted/30 border-destructive/20"
                    data-testid={`card-problem-${item.id}`}
                  >
                    <p className="text-muted-foreground">{item.problem}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">With WAXA</h3>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <motion.div
                  key={`solution-${item.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 border-secondary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover-elevate group cursor-pointer"
                    data-testid={`card-solution-${item.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{item.solution}</p>
                      <ArrowRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
