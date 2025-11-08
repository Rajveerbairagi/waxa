import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'WAXA transformed our social media presence completely. Within 3 months, we saw a 340% increase in engagement and 2.5x growth in qualified leads. Their strategy is simply unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Founder, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The ROI we achieved with WAXA has been phenomenal. Their data-driven approach and creative content helped us scale from $50k to $500k in monthly revenue. Absolute game-changer!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Marketing Director, FitnessPro',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Working with WAXA has been incredible. They don\'t just execute - they think strategically and bring innovative ideas. Our brand awareness doubled and customer acquisition costs dropped by 45%.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Park',
    title: 'Co-founder, EcoGoods',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    content: 'WAXA helped us build a loyal community around our brand. Their authentic storytelling and consistent engagement strategy turned followers into customers and customers into advocates.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join hundreds of brands that have transformed their growth with WAXA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
                {/* Star rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 md:-px-16">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full w-12 h-12 -ml-6 md:-ml-20 hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full w-12 h-12 -mr-6 md:-mr-20 hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
