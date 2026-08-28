import { PhoneCall, ShieldCheck, Paintbrush, CheckCheck, Sparkles, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Estimate Call & Project Scoping',
      description: 'We review your room count, surface types, timeline, and color preferences via phone or on-site walkthrough in Gurgaon.',
      detail: 'Clear discussion of walls, ceilings, baseboards, doors, and occupancy conditions.'
    },
    {
      step: '02',
      title: 'Surface Masking & Preparation',
      description: 'Flooring, furniture, and fixtures are masked with clean drop cloths and painter tape.',
      detail: 'Minor nail holes and cracks are filled, smoothed, and spot-primed prior to topcoating.'
    },
    {
      step: '03',
      title: 'Precision Interior Application',
      description: 'Coats are applied with consistent roller texture, sharp ceiling edge cut-ins, and smooth enamel brushwork on trim and doors.',
      detail: 'Sequential painting: ceilings first, followed by wall planes, baseboards, and passage doors.'
    },
    {
      step: '04',
      title: 'Clean Walkthrough & Finish Review',
      description: 'Masking tape and floor protection are removed cleanly, debris is tidied, and completed surfaces are reviewed.',
      detail: 'Ensuring even coverage, crisp corners, and neat room handback.'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#09DAF6] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Disciplined 4-Stage Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            How Your Interior Project Is{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Flawlessly Delivered
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From initial phone scoping to final masking removal, here is the structured step-by-step process used for interior residential and commercial painting in Gurgaon.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((stepItem, idx) => {
            const icons = [
              <PhoneCall key="1" className="w-5 h-5 text-white" />,
              <ShieldCheck key="2" className="w-5 h-5 text-white" />,
              <Paintbrush key="3" className="w-5 h-5 text-white" />,
              <CheckCheck key="4" className="w-5 h-5 text-white" />
            ];

            const colors = [
              'bg-gradient-to-br from-[#F66504] to-[#ff7d26]',
              'bg-gradient-to-br from-[#03FC4E] to-[#10B981]',
              'bg-gradient-to-br from-[#09DAF6] to-[#0284C7]',
              'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
            ];

            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 flex flex-col justify-between relative shadow-xl hover:border-slate-600 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-slate-900 text-white border border-slate-700 flex items-center justify-center font-black text-sm group-hover:border-[#09DAF6] transition-colors">
                      {stepItem.step}
                    </span>
                    <div className={`p-2.5 rounded-2xl ${colors[idx]} shadow-md`}>
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#09DAF6] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-700/80 text-xs text-slate-400 bg-slate-900/50 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <span className="font-semibold text-slate-300">Focus: </span>
                  {stepItem.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Callout Note */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-800/60 border border-slate-700 max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300 text-left">
            Surface conditions, specific material requirements, and project schedules are confirmed during the initial estimate review.
          </p>
          <a
            href="tel:+917827404001"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#F66504] hover:bg-[#de5900] text-white text-xs font-bold transition-all shadow-md"
          >
            Discuss Timeline with Us
          </a>
        </div>

      </div>
    </section>
  );
}
