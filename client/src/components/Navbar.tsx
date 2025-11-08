import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import waxaLogo from '@assets/1_1762636982582.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Handle pending scroll after navigation
  useEffect(() => {
    if (pendingScroll && location === '/') {
      const scrollToElement = () => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setPendingScroll(null);
        } else {
          // Element not ready yet, try again
          setTimeout(scrollToElement, 50);
        }
      };
      // Small delay to ensure DOM is ready
      setTimeout(scrollToElement, 100);
    }
  }, [location, pendingScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '/') {
      if (location === '/') {
        // Already on home, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to home
        setLocation('/');
      }
    } else if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      if (location !== '/') {
        // Navigate to home first, store scroll target
        setPendingScroll(sectionId);
        setLocation('/');
      } else {
        // Already on home, scroll immediately
        scrollToSection(sectionId);
      }
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#references', label: 'Work' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">

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
              <button
                key={link.href}
                onClick={(e) => handleNavClick(link.href, e as any)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer relative"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                {location === link.href && !link.href.startsWith('#') && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg"
                  />
                )}
              </button>
            ))}
            <Link href="/contact">
              <Button
                size="default"
                className="gradient-bg border-0 gap-2"
                data-testid="button-book-call"
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
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
                  <button
                    key={link.href}
                    onClick={(e) => handleNavClick(link.href, e as any)}
                    className={`text-sm font-medium cursor-pointer block py-2 text-left ${
                      location === link.href && !link.href.startsWith('#') ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
                <Link href="/contact">
                  <Button
                    className="w-full gradient-bg border-0 gap-2"
                    data-testid="button-mobile-book-call"
                  >
                    Book Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
