import { SPECIALIST_NEEDS } from '../data/servicesData';
import { Home, Building, CheckSquare2, Sparkles } from 'lucide-react';

export default function SpecialistNeedsSection() {
  return (
    <section id="specialist-needs" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Halo */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#03FC4E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#F66504] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Interior Scopes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Interior Scope:{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Residential &amp; Commercial
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Different interior environments have distinct practical requirements. Here is how our interior painting specialty addresses residential homes and commercial workplaces across Gurgaon.
          </p>
        </div>

        {/* Comparison Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIST_NEEDS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 flex flex-col justify-between shadow-xl hover:border-slate-600 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-slate-700/80">
                  <div className="w-8 h-8 rounded-xl bg-[#F66504]/20 text-[#F66504] flex items-center justify-center font-bold">
                    <CheckSquare2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  {/* Residential column */}
                  <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-md">
                    <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                      <div className="p-1 rounded bg-[#03FC4E]/20 text-[#03FC4E]">
                        <Home className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs uppercase text-[#03FC4E] tracking-wider">Residential Properties</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {item.residentialUse}
                    </p>
                  </div>

                  {/* Commercial column */}
                  <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-md">
                    <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                      <div className="p-1 rounded bg-[#09DAF6]/20 text-[#09DAF6]">
                        <Building className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs uppercase text-[#09DAF6] tracking-wider">Commercial Workplaces</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {item.commercialUse}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400 italic">
                Surface conditions and specific project needs are confirmed during the estimate review.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
