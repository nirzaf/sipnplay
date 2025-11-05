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
  CookingPot,
  Warehouse,
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
    tagline: 'Commercial Kitchenware',
    whatsappNumber: '+94770757575',
    description:
      'Your trusted partner for premium commercial kitchenware and complete kitchen solutions',
  },
  hero: {
    title: 'Premium Commercial Kitchenware Solutions',
    highlightedWords: ['Premium', 'Solutions'],
    description:
      'From high-grade cookware to industrial equipment, we supply everything you need to run a professional kitchen. Serving restaurants, hotels, cafes, and catering businesses across Sri Lanka.',
    ctaText: 'Explore Our Range',
  },
  services: [
    {
      icon: CookingPot,
      title: 'Professional Cookware',
      description:
        'Heavy-duty pots, pans, woks, and specialty cookware designed for high-volume commercial cooking operations.',
    },
    {
      icon: Utensils,
      title: 'Kitchen Utensils & Tools',
      description:
        'Complete range of professional-grade knives, cutting boards, ladles, spatulas, and essential kitchen tools.',
    },
    {
      icon: Flame,
      title: 'Cooking Equipment',
      description:
        'Commercial ovens, ranges, grills, fryers, and specialized cooking equipment from trusted manufacturers.',
    },
    {
      icon: Package,
      title: 'Storage & Organization',
      description:
        'Food storage containers, shelving units, prep tables, and organizational solutions for efficient kitchen workflow.',
    },
    {
      icon: Warehouse,
      title: 'Bulk Supply Solutions',
      description:
        'Competitive pricing for bulk orders. We supply hotels, restaurants, catering companies, and institutional kitchens.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description:
        'All products meet international food safety standards. Warranty and after-sales support included.',
    },
  ],
  stats: [
    { number: '1000+', label: 'Products in Stock' },
    { number: '15+', label: 'Years in Business' },
    { number: '500+', label: 'Satisfied Clients' },
    { number: '24/7', label: 'Customer Support' },
  ],
  features: [
    { text: 'Premium quality kitchenware from global brands' },
    { text: 'Competitive wholesale and retail pricing' },
    { text: 'Same-day delivery available in Colombo' },
    { text: 'Customized bulk order solutions' },
    { text: 'Warranty and after-sales service' },
    { text: 'Expert product consultation and recommendations' },
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
    title: 'Your Ultimate Online',
    titleHighlight: 'Kitchenware Store!',
    description:
      'Stay tuned as we launch our comprehensive eCommerce platform. Browse thousands of products, compare prices, and order online with just a few clicks. The future of commercial kitchenware shopping is coming!',
    tags: ['Easy Ordering', '24/7 Shopping', 'Secure Payments', 'Fast Delivery'],
    subtitle: 'Shop smarter, cook better!',
  },
  cta: {
    title: 'Ready to Upgrade Your Commercial Kitchen?',
    description: 'Get in touch for product inquiries, bulk orders, or expert advice',
    buttonText: 'Chat on WhatsApp',
    subtitle: 'Quick quotes and expert recommendations',
  },
  footer: {
    tagline: 'Equipping Professional Kitchens Since 2009',
    copyright: '2024 Sip & Play. All rights reserved.',
  },
};
