import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicesSection from './components/ServicesSection';
import SpecialistNeedsSection from './components/SpecialistNeedsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import EstimateRequestFlow from './components/EstimateRequestFlow';
import ServiceAreaSection from './components/ServiceAreaSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Interior Wall Painting');

  const scrollToEstimate = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('estimate-flow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#F66504] selection:text-white">
      {/* 1. Header */}
      <Header onOpenEstimate={() => scrollToEstimate()} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenEstimate={() => scrollToEstimate()} />

        {/* 3. Compact Trust/Value Strip */}
        <TrustStrip />

        {/* 4. Services */}
        <ServicesSection onSelectService={(svc) => scrollToEstimate(svc)} />

        {/* 5. Specialist / Painting Project Needs */}
        <SpecialistNeedsSection />

        {/* 6. Before-and-After Comparison */}
        <BeforeAfterSection />

        {/* 7. Project / Painting Process */}
        <ProcessSection />

        {/* 8. Pricing */}
        <PricingSection onOpenEstimate={() => scrollToEstimate()} />

        {/* 9. (Business/About section omitted as no about media exists) */}

        {/* 10. Guided Painting Estimate Request */}
        <EstimateRequestFlow initialService={selectedService} />

        {/* 11. Service Area */}
        <ServiceAreaSection />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Final CTA */}
        <FinalCta onOpenEstimate={() => scrollToEstimate()} />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
