import { Card } from '@/components/ui/card';
import { Users, MapPin, Target, Handshake, Clock } from 'lucide-react';
import teamPhoto from '@assets/generated_images/Team_collaboration_workspace_photo_c64cd57b.png';

const advantages = [
  {
    id: 1,
    icon: Users,
    title: 'Individual Service',
    description: 'Dedicated account manager and custom strategies tailored to your unique needs.',
  },
  {
    id: 2,
    icon: MapPin,
    title: 'On-Site Support',
    description: 'We work alongside your team, bringing expertise directly to your workspace.',
  },
  {
    id: 3,
    icon: Target,
    title: 'ROI Focus',
    description: 'Every campaign is measured, optimized, and designed to deliver measurable results.',
  },
  {
    id: 4,
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We grow with you, adapting strategies as your business evolves.',
  },
  {
    id: 5,
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to address your questions and optimize performance.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="text-advantages-headline">
          Your advantages with us as partner
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Experience the difference of working with a dedicated growth partner.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={advantage.id}
                className="p-6 hover-elevate"
                data-testid={`card-advantage-${advantage.id}`}
              >
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src={teamPhoto}
            alt="WAXA team collaboration"
            className="w-full h-80 object-cover"
            data-testid="img-team"
          />
        </div>
      </div>
    </section>
  );
}
