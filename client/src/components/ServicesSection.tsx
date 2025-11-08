import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Palette, Video, Target, BarChart3 } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Social Media Marketing',
    description: 'Strategic content planning, community management, and engagement optimization across all major platforms.',
    features: ['Content Strategy', 'Community Management', 'Analytics & Reporting'],
  },
  {
    id: 2,
    icon: Target,
    title: 'Paid Advertising',
    description: 'Performance-driven ad campaigns on Facebook, Instagram, Google, and LinkedIn with measurable ROI.',
    features: ['Campaign Strategy', 'Ad Creative', 'A/B Testing'],
  },
  {
    id: 3,
    icon: Palette,
    title: 'Brand Development',
    description: 'Complete brand identity creation including logo design, brand guidelines, and visual storytelling.',
    features: ['Brand Identity', 'Visual Guidelines', 'Brand Positioning'],
  },
  {
    id: 4,
    icon: Video,
    title: 'Content Creation',
    description: 'Professional photo, video, and graphic design services tailored to your brand and audience.',
    features: ['Video Production', 'Photography', 'Graphic Design'],
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Data-driven strategies to scale your brand through conversion optimization and funnel management.',
    features: ['Conversion Optimization', 'Funnel Strategy', 'Growth Hacking'],
  },
  {
    id: 6,
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Deep-dive reporting and actionable insights to continuously improve your marketing performance.',
    features: ['Performance Tracking', 'Custom Dashboards', 'Strategic Recommendations'],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold mb-3" data-testid="text-services-headline">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive digital marketing solutions that scale your brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="p-6 h-full hover-elevate cursor-pointer group"
                  data-testid={`card-service-${service.id}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                    data-testid={`icon-service-${service.id}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full gradient-bg" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
