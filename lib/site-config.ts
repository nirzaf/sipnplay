import {
  ChefHat,
  Utensils,
  Flame,
  ShoppingCart,
  Users,
  Award,
  Wrench,
  Package,
  Headphones,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Feature {
  text: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  title: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    whatsappNumber: string;
    description: string;
  };
  hero: {
    title: string;
    highlightedWords: string[];
    description: string;
    ctaText: string;
  };
  services: Service[];
  stats: Stat[];
  features: Feature[];
  gallery: GalleryItem[];
  comingSoon: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    tags: string[];
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: 'SIP & PLAY',
    tagline: 'Commercial Kitchens',
    whatsappNumber: '+94770757575',
    description:
      'Transforming culinary dreams into reality with world-class commercial kitchen solutions',
  },
  hero: {
    title: 'Where Precision Meets Passion',
    highlightedWords: ['Precision', 'Passion'],
    description:
      'We design, build, and equip bespoke commercial kitchens that are as efficient as they are inspiring. From bustling cafes to fine-dining, we bring your vision to life.',
    ctaText: 'Get Started Today',
  },
  services: [
    {
      icon: ChefHat,
      title: 'Bespoke Kitchen Design',
      description:
        'Custom 3D modeling and layout planning focused on workflow, efficiency, and aesthetics tailored to your needs.',
    },
    {
      icon: Utensils,
      title: 'Premium Equipment Supply',
      description:
        'Access to top-tier, durable kitchen equipment from leading brands. From ovens to refrigeration, we source the best.',
    },
    {
      icon: Flame,
      title: 'Professional Installation',
      description:
        'Expert installation with minimal downtime, ensuring your kitchen is operational from day one.',
    },
    {
      icon: ShoppingCart,
      title: 'Supply Chain Solutions',
      description:
        'Complete procurement and logistics support to keep your kitchen running smoothly.',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description:
        'Professional guidance and support throughout your kitchen planning and setup journey.',
    },
    {
      icon: Award,
      title: 'Maintenance & Support',
      description:
        'Comprehensive after-sales support and preventive maintenance to maximize your investment.',
    },
  ],
  stats: [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ],
  features: [
    { text: 'Premium quality equipment and materials' },
    { text: 'Expert team with years of experience' },
    { text: 'Customized solutions for every budget' },
    { text: 'Fast and efficient project delivery' },
    { text: 'Comprehensive after-sales support' },
    { text: 'Competitive pricing with no hidden costs' },
  ],
  gallery: [
    {
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      alt: 'Modern Cafe Bar',
      title: 'Modern Cafe Kitchen',
    },
    {
      image: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800&q=80',
      alt: 'Restaurant Kitchen',
      title: 'Fine Dining Setup',
    },
    {
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80',
      alt: 'Hotel Pantry',
      title: 'Hotel Pantry Design',
    },
    {
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
      alt: 'Industrial Kitchen',
      title: 'Industrial Kitchen Setup',
    },
    {
      image: 'https://images.unsplash.com/photo-1596040033229-a0b0c3af0d04?w=800&q=80',
      alt: 'Bakery Kitchen',
      title: 'Artisan Bakery Kitchen',
    },
    {
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
      alt: 'Cloud Kitchen',
      title: 'Cloud Kitchen Solution',
    },
  ],
  comingSoon: {
    badge: 'COMING SOON',
    title: "We're Cooking Something",
    titleHighlight: 'BIG for You!',
    description:
      'Stay tuned as we prepare to unveil our most user-friendly, powerful, and revolutionary eCommerce platform for commercial kitchens!',
    tags: ['User-Friendly', 'Lightning Fast', 'Secure', 'Innovative'],
    subtitle: 'The wait will be worth it!',
  },
  cta: {
    title: 'Ready to Transform Your Kitchen?',
    description: "Contact us now and let's bring your vision to life",
    buttonText: 'Chat on WhatsApp',
    subtitle: 'Quick response guaranteed',
  },
  footer: {
    tagline: 'Crafting Excellence in Every Kitchen',
    copyright: '2024 Sip & Play. All rights reserved.',
  },
};
