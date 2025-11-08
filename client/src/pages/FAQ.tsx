import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Mail } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about our services, process, and partnership model.
          </p>
        </div>
      </section>

      <FAQSection />

      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you understand how
              WAXA can drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" data-testid="button-schedule-call">
                <MessageCircle className="h-5 w-5" />
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-email-us">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
