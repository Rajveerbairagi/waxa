import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'What services does WAXA offer?',
    answer:
      'We provide comprehensive digital marketing services including content strategy, social media management, paid advertising, SEO optimization, and performance analytics. Our team handles everything from initial strategy to ongoing optimization.',
  },
  {
    id: 2,
    question: 'How long does it take to see results?',
    answer:
      'While some improvements can be seen within the first month, significant growth typically becomes evident within 3-6 months. We focus on sustainable, long-term growth rather than quick fixes that don\'t last.',
  },
  {
    id: 3,
    question: 'Do you work with startups or only established companies?',
    answer:
      'We work with businesses at every stage, from early-stage startups to enterprise organizations. Our strategies are tailored to your specific needs, resources, and growth objectives.',
  },
  {
    id: 4,
    question: 'What makes WAXA different from other agencies?',
    answer:
      'Our data-driven approach, dedicated account management, and transparent reporting set us apart. We become an extension of your team, focusing on measurable ROI and long-term partnership rather than one-off campaigns.',
  },
  {
    id: 5,
    question: 'How do you measure success?',
    answer:
      'We establish clear KPIs at the start of every partnership, including metrics like engagement rate, conversion rate, ROI, and audience growth. You receive regular reports with actionable insights and recommendations.',
  },
  {
    id: 6,
    question: 'What is your pricing structure?',
    answer:
      'Our pricing is customized based on your specific needs, scope, and objectives. We offer flexible packages and can work within various budget ranges. Contact us for a personalized quote.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-faq-headline">
            <span className="gradient-text">Frequently</span> Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about partnering with WAXA.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${faq.id}`}
                className="border rounded-lg px-6 hover-elevate"
                data-testid={`accordion-faq-${faq.id}`}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
