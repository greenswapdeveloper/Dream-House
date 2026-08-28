import { Phone, ArrowRight, CheckCircle2, Calculator, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';

interface PricingSectionProps {
  onOpenEstimate: () => void;
}

export default function PricingSection({ onOpenEstimate }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#03FC4E] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Honest &amp; Transparent Scoping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Interior Painting{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Estimate Scoping
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Every interior painting project is tailored to the specific dimensions, surface state, and finish requirements of your Gurgaon property.
          </p>
          <div className="text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 inline-flex items-center gap-2.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#03FC4E] shrink-0"></span>
            <span>Final cost depends on project size, surface condition, preparation needed, site access, number of areas, trim and detail work, and project scope.</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 flex flex-col justify-between hover:border-[#F66504]/50 transition-all shadow-xl">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F66504] mb-3 block">
                Factor 01
              </span>
              <h3 className="font-bold text-white text-xl mb-2">Surface Condition &amp; Prep</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Minor patching for nail holes and hairline cracks, level of drywall smoothing needed, sanding and acrylic base surface priming.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#03FC4E]" />
              <span>Assessed during estimate</span>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 flex flex-col justify-between hover:border-[#09DAF6]/50 transition-all shadow-xl">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#09DAF6] mb-3 block">
                Factor 02
              </span>
              <h3 className="font-bold text-white text-xl mb-2">Room Dimensions &amp; Heights</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Total wall square footage, ceiling heights, number of continuous walls, and multi-room layouts across Gurgaon apartments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#03FC4E]" />
              <span>Scoped by property layout</span>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 flex flex-col justify-between hover:border-[#03FC4E]/50 transition-all shadow-xl">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#03FC4E] mb-3 block">
                Factor 03
              </span>
              <h3 className="font-bold text-white text-xl mb-2">Detail &amp; Trim Work</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Baseboard linear footage, door frames, passage doors, crown moulding, and color transition complexity with PU coatings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#03FC4E]" />
              <span>Itemized per requirement</span>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#F66504]/10 to-transparent pointer-events-none" />
          
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F66504]/20 border border-[#F66504]/40 text-[#F66504] text-xs font-bold uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Instant Call or Custom Planner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              Ready for an itemized estimate for your Gurgaon property?
            </h3>
            <p className="text-sm text-slate-300">
              Call us directly or use our interactive estimate planner to customize your rooms, coats, and paint types.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 relative">
            <a
              href="tel:+917827404001"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#e05800] hover:to-[#f06e14] text-white text-xs font-bold shadow-lg shadow-[#F66504]/25 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 7827404001</span>
            </a>
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all"
            >
              <span>Use Estimate Planner</span>
              <ArrowRight className="w-4 h-4 text-[#09DAF6]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
