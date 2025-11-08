import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const pricingPlans = [
  {
    name: 'Starter',
    price: 299,
    description: 'Perfect for getting started with social media growth',
    features: [
      'Social media posts (3x per week)',
      'Basic content strategy',
      'Growth analytics dashboard',
      'Community management',
      'Monthly performance report'
    ],
    highlighted: false
  },
  {
    name: 'Growth',
    price: 799,
    description: 'Scale your brand with advanced marketing',
    features: [
      'Everything in Starter, plus:',
      'Paid advertising campaigns',
      'Advanced content creation',
      'Weekly strategy sessions',
      'A/B testing & optimization',
      'Detailed analytics & insights',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Scale',
    price: 1499,
    description: 'Full-service growth for ambitious brands',
    features: [
      'Everything in Growth, plus:',
      'Full account management',
      'User-generated content (UGC)',
      'Influencer partnerships',
      'Custom growth strategies',
      'Dedicated account manager',
      '24/7 priority support',
      'Quarterly business reviews'
    ],
    highlighted: false
  }
];

export default function PricingSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 hover-elevate ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-2xl scale-105 border-0'
                  : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-white' : 'text-teal-500'
                    }`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-xl'
                }`}
              >
                Start {plan.name} Plan
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <a href="#contact" className="text-blue-600 hover:text-teal-500 font-semibold underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
