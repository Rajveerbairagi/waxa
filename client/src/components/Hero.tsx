import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import heroBackground from '@assets/generated_images/Hero_background_with_growth_motif_9101ab31.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-testid="text-hero-headline">
          Growth Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto" data-testid="text-hero-subheadline">
          We help brands scale through strategic marketing, engaging content, and performance-driven campaigns.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 gap-2"
            onClick={() => console.log('Start Project clicked')}
            data-testid="button-hero-start-project"
          >
            Start Project
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={() => console.log('See Case Studies clicked')}
            data-testid="button-hero-case-studies"
          >
            <PlayCircle className="h-5 w-5" />
            See Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
