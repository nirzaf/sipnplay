import {
  Header,
  Hero,
  Stats,
  Services,
  WhyChooseUs,
  CTA,
  Footer,
  WhatsAppButton,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Header */}
      <Header />

      {/* Hero Section with Coming Soon Message */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
