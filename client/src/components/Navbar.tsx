import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import waxaLogo from '@assets/1_1762636982582.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/approach', label: 'Approach' },
    { href: '/advantages', label: 'Why Us' },
    { href: '/references', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={waxaLogo}
              alt="WAXA"
              className="h-10 cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors cursor-pointer relative ${
                    location === link.href
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-foreground hover:text-primary'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            <Button
              size="default"
              className="gradient-bg border-0 gap-2"
              data-testid="button-book-call"
            >
              Book Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className={`lg:hidden ${!isScrolled && 'text-white hover:text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 flex flex-col gap-4 glass-effect rounded-lg p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    <span
                      className={`text-sm font-medium cursor-pointer block py-2 ${
                        location === link.href ? 'text-primary font-semibold' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Button
                  className="w-full gradient-bg border-0 gap-2"
                  data-testid="button-mobile-book-call"
                >
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
