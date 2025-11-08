import { Card } from '@/components/ui/card';
import { Users, Zap, Target, Handshake, Award, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning-Fast Execution',
    description: 'Rapid deployment of campaigns with agile methodology and quick turnaround times.',
  },
  {
    id: 2,
    icon: Target,
    title: 'ROI-First Approach',
    description: 'Every campaign is measured, optimized, and designed to deliver maximum return on investment.',
  },
  {
    id: 3,
    icon: Users,
    title: 'Dedicated Team',
    description: 'Your own account manager and specialized team members focused on your success.',
  },
  {
    id: 4,
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We grow with you, adapting strategies as your business evolves and scales.',
  },
  {
    id: 5,
    icon: Award,
    title: 'Award-Winning Creative',
    description: 'Industry-recognized creative excellence that captures attention and drives engagement.',
  },
  {
    id: 6,
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and reporting to continuously optimize your marketing performance.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-advantages-headline">
            Why Choose <span className="gradient-text">WAXA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with a dedicated growth partner committed to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="p-6 h-full hover-elevate group cursor-pointer"
                  data-testid={`card-advantage-${advantage.id}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4"
                    data-testid={`icon-advantage-${advantage.id}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects' },
                { value: '200+', label: 'Clients' },
                { value: '50M+', label: 'Reach' },
                { value: '95%', label: 'Satisfaction' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
