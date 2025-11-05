import {
  Header,
  Hero,
  ComingSoon,
  Stats,
  Services,
  Gallery,
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

      {/* Hero Section */}
      <Hero />

      {/* Coming Soon Banner */}
      <ComingSoon />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
