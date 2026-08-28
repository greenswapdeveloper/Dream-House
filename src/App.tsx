import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ContractorSpotlight from './components/ContractorSpotlight';
import ServicesSection from './components/ServicesSection';
import WorkGallerySection from './components/WorkGallerySection';
import BeforeAfterSection from './components/BeforeAfterSection';
import ColorVisualizerSection from './components/ColorVisualizerSection';
import SpecialistNeedsSection from './components/SpecialistNeedsSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import EstimateRequestFlow from './components/EstimateRequestFlow';
import ServiceAreaSection from './components/ServiceAreaSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import QuickContactFloating from './components/QuickContactFloating';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-[#F66504] selection:text-white antialiased">
      {/* 1. Header */}
      <Header onOpenEstimate={() => scrollToEstimate()} />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 2. Hero */}
        <Hero onOpenEstimate={() => scrollToEstimate()} />

        {/* 3. Compact Trust/Value Strip */}
        <TrustStrip />

        {/* 4. Contractor Spotlight: Suraj Kumar Sah */}
        <ContractorSpotlight onOpenEstimate={() => scrollToEstimate()} />

        {/* 5. Services */}
        <ServicesSection onSelectService={(svc) => scrollToEstimate(svc)} />

        {/* 6. Work Gallery & Completed Projects */}
        <WorkGallerySection onOpenEstimate={() => scrollToEstimate()} />

        {/* 7. Interactive Before-and-After Comparison */}
        <BeforeAfterSection onOpenEstimate={() => scrollToEstimate()} />

        {/* 8. Color Harmonies & Palettes */}
        <ColorVisualizerSection onOpenEstimate={() => scrollToEstimate()} />

        {/* 9. Specialist / Painting Project Needs */}
        <SpecialistNeedsSection />

        {/* 10. Project / Painting Process */}
        <ProcessSection />

        {/* 11. Pricing */}
        <PricingSection onOpenEstimate={() => scrollToEstimate()} />

        {/* 12. Guided Painting Estimate Request */}
        <EstimateRequestFlow initialService={selectedService} />

        {/* 13. Service Area */}
        <ServiceAreaSection />

        {/* 14. FAQ */}
        <FaqSection />

        {/* 15. Final CTA */}
        <FinalCta onOpenEstimate={() => scrollToEstimate()} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Floating 1-Click WhatsApp and Call Action Dock */}
      <QuickContactFloating />
    </div>
  );
}
