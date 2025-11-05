import {
  AnimatedBackground,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />

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
