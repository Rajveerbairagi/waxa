import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import waxaLogo from '@assets/3_1762636982583.png';

export default function Footer() {
  const footerLinks = {
    services: [
      { label: 'Social Media Marketing', href: '/solutions' },
      { label: 'Paid Advertising', href: '/solutions' },
      { label: 'Brand Development', href: '/solutions' },
      { label: 'Content Creation', href: '/solutions' },
    ],
    company: [
      { label: 'About Us', href: '/approach' },
      { label: 'Our Approach', href: '/approach' },
      { label: 'Why Choose Us', href: '/advantages' },
      { label: 'Case Studies', href: '/references' },
    ],
    support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={waxaLogo}
              alt="WAXA"
              className="h-12 mb-6"
            />
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Empowering brands to achieve sustainable growth through strategic marketing and
              data-driven campaigns that deliver real results.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="contact-email">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@waxa.agency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="contact-phone">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 gradient-text">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 gradient-text">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 gradient-text">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WAXA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors" data-testid="link-privacy-policy">
                  Privacy Policy
                </span>
              </Link>
              <Link href="#">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors" data-testid="link-terms-of-service">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
