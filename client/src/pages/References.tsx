import ReferencesSection from '@/components/ReferencesSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'WAXA transformed our digital presence completely. In just 6 months, we saw a 340% increase in engagement and doubled our customer base.',
    author: 'Sarah Chen',
    role: 'CMO, TechCorp',
    company: 'TechCorp',
  },
  {
    id: 2,
    quote: 'The team at WAXA truly understands growth marketing. Their data-driven approach and creative content helped us achieve unprecedented ROI.',
    author: 'Michael Rodriguez',
    role: 'Founder, StartupX',
    company: 'StartupX',
  },
  {
    id: 3,
    quote: 'Working with WAXA feels like having an in-house marketing team, but with the expertise of a world-class agency. Highly recommended!',
    author: 'Emily Thompson',
    role: 'VP Marketing, Enterprise360',
    company: 'Enterprise360',
  },
];

export default function References() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-references-headline">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real results from real partnerships. See how we've helped brands achieve exceptional growth.
          </p>
        </div>
      </section>

      <ReferencesSection />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it—hear from the brands we've helped grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8" data-testid={`card-testimonial-${testimonial.id}`}>
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
