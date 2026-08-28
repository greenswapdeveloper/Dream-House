import { Phone, CheckCircle2, ArrowRight, Paintbrush, Layers, DoorClosed, Sparkles, Home, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'interior-wall-painting':
        return <Paintbrush className="w-5 h-5" />;
      case 'ceiling-painting':
        return <Layers className="w-5 h-5" />;
      case 'trim-baseboard-painting':
        return <ShieldCheck className="w-5 h-5" />;
      case 'door-painting':
        return <DoorClosed className="w-5 h-5" />;
      case 'drywall-patch-paint':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F66504]/20 border border-[#F66504]/40 text-[#F66504] text-xs font-bold uppercase tracking-wider mb-3">
            <Paintbrush className="w-3.5 h-3.5" />
            <span>Dedicated Interior Painting Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Interior Painting Services in{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Gurgaon
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Focused exclusively on interior surfaces with zero exterior distractions. Each service includes protective masking, surface repair, dust-free sanding, clean cut-ins, and consistent luxury coats.
          </p>
          <p className="text-xs text-slate-400 mt-2 italic flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#03FC4E]"></span>
            <span>Final cost depends on project size, surface condition, preparation needed, site access, number of areas, and trim work.</span>
          </p>
        </div>

        {/* 6 Services Grid with Vibrant Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              id={`service-card-${index + 1}`}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden group hover:scale-[1.01]"
            >
              {/* Dynamic Top Gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: service.colorAccent || '#F66504' }}
              />

              <div>
                {/* Header with Icon and Starting Price */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: service.colorAccent || '#F66504' }}
                  >
                    {getIcon(service.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Starting</span>
                    <span className="text-xs font-black text-[#03FC4E] bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {service.startingRate}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#09DAF6] transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-2 mb-6 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Included Execution Standards:
                  </p>
                  {service.scopeHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#03FC4E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended For */}
                <div className="text-[11px] text-slate-400 mb-2">
                  <strong className="text-slate-300">Recommended for:</strong> {service.recommendedFor}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 mt-3 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectService(service.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#e05800] hover:to-[#f06e14] text-white text-xs font-bold shadow-md shadow-[#F66504]/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F66504]"
                >
                  <span>Request Estimate for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:+917827404001"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#09DAF6]" />
                  <span>Call +91 7827404001</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
