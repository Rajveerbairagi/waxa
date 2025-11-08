import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'WAXA transformed our social media presence. Within 6 months, we saw a 300% increase in engagement and doubled our lead generation.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, InnovateLabs',
    content: 'The team at WAXA delivers results. Their strategic approach to paid advertising helped us achieve a 4.5x ROAS consistently.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, StartupX',
    content: 'Professional, creative, and results-driven. WAXA helped us build our brand from scratch and scale to 100K followers in under a year.',
    rating: 5,
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-references-headline">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, we drive measurable growth and lasting impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-6 flex items-center justify-center hover-elevate cursor-pointer h-24"
                data-testid={`card-client-${index}`}
              >
                <span className="text-lg font-bold text-muted-foreground">{logo}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12 h-full">
              <Badge className="mb-4 gradient-bg border-0" data-testid="badge-case-study">
                Featured Case Study
              </Badge>
              <h3 className="text-3xl font-bold mb-4">TechCorp Digital Transformation</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We helped TechCorp scale their digital presence from a regional player to a
                national leader through strategic content marketing and performance optimization.
              </p>

              <div className="space-y-6 mb-8">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                      data-testid={`metric-${metric.id}`}
                    >
                      <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Button className="gradient-bg border-0 gap-2" data-testid="button-read-case-study">
                Read Full Case Study
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6 hover-elevate" data-testid={`testimonial-${testimonial.id}`}>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg" />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
