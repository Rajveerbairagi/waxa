import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Zap, Target } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'wouter';

function AnimatedCounter({ value, suffix = '', duration = 2, decimals = 0 }: { value: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * value;
      setCount(decimals > 0 ? Number(currentValue.toFixed(decimals)) : Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView, decimals]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const stats = [
    { icon: TrendingUp, value: 340, suffix: '%', label: 'Growth', decimals: 0 },
    { icon: Users, value: 2.5, suffix: 'M+', label: 'Reach', decimals: 1 },
    { icon: Target, value: 450, suffix: '%', label: 'ROI', decimals: 0 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2" data-testid="badge-hero-label">
                <Zap className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Digital Marketing Experts</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
              data-testid="text-hero-headline"
            >
              We Grow Brands &{' '}
              <span className="gradient-text">Build Digital Leaders</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              Social media strategy, content creation, paid ads & brand growth engineered for results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 gap-2 gradient-bg border-0"
                  data-testid="button-hero-get-strategy"
                >
                  Get Marketing Strategy
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById('references');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-base font-medium"
                data-testid="button-hero-view-work"
              >
                View Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 glass-effect px-4 py-3 rounded-xl"
                  data-testid={`stat-${index}`}
                >
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shadow-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-effect rounded-2xl p-8 mb-4"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-bg" />
                    <div>
                      <div className="font-semibold">Social Growth</div>
                      <div className="text-sm text-muted-foreground">Instagram Campaign</div>
                    </div>
                  </div>
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Followers</span>
                    <span className="font-bold text-secondary">+125K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-full gradient-bg"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">ROI Tracking</div>
                    <div className="text-sm text-muted-foreground">Real-time metrics</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['CTR', 'Conv', 'ROAS'].map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">{metric}</div>
                      <div className="text-lg font-bold gradient-text">
                        {idx === 0 ? '8.4%' : idx === 1 ? '12%' : '4.2x'}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-bg opacity-50 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary/50 opacity-50 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
