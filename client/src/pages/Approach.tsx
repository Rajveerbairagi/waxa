import ApproachSection from '@/components/ApproachSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import workspaceImage from '@assets/generated_images/Professional_workspace_detail_shot_11835145.png';

const values = [
  {
    id: 1,
    title: 'Data-Driven Decisions',
    description: 'Every strategy is backed by comprehensive data analysis and market research.',
  },
  {
    id: 2,
    title: 'Transparent Communication',
    description: 'Regular updates, clear reporting, and open dialogue throughout our partnership.',
  },
  {
    id: 3,
    title: 'Continuous Improvement',
    description: 'We constantly test, learn, and optimize to stay ahead of the curve.',
  },
  {
    id: 4,
    title: 'Results-Focused',
    description: 'Our success is measured by your growth and the ROI we deliver.',
  },
];

export default function Approach() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-approach-headline">
            Our Approach
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A proven methodology built on data, creativity, and unwavering commitment to your success.
          </p>
        </div>
      </section>

      <ApproachSection />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-muted-foreground mb-8">
                We're not just another agency. We're your growth partner, committed to understanding
                your business and delivering measurable results.
              </p>
              <div className="space-y-6">
                {values.map((value) => (
                  <Card key={value.id} className="p-6" data-testid={`card-value-${value.id}`}>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={workspaceImage}
                alt="Our workspace"
                className="w-full h-full object-cover"
                data-testid="img-workspace"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
