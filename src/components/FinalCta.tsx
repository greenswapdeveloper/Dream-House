import { Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Award, Clock } from 'lucide-react';
import { CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

interface FinalCtaProps {
  onOpenEstimate: () => void;
}

export default function FinalCta({ onOpenEstimate }: FinalCtaProps) {
  return (
    <section id="final-cta" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#F66504]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#09DAF6]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#25D366]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-[#03FC4E] text-xs font-bold uppercase tracking-wider mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#F66504]" />
          <span>Direct Contractor Consultation · Gurgaon</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.15]">
          Book Your Project with{' '}
          <span className="bg-gradient-to-r from-[#F66504] via-[#ff9248] to-[#09DAF6] bg-clip-text text-transparent">
            {CONTRACTOR_DETAILS.name}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Backed by 20 years of experience, neat mess-free execution, and 100% on-time project completion. Connect directly for a same-day site visit in Gurgaon.
        </p>

        {/* Actions (WhatsApp 1-Click + Direct Call + Scope Calculator) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-10">
          
          {/* 1-Click WhatsApp */}
          <a
            id="final-whatsapp-btn"
            href={getWhatsAppUrl(`Hello Suraj ji, I would like to schedule an interior painting consultation for my home in Gurgaon.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-base font-black shadow-2xl shadow-[#25D366]/25 hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
            <span>WhatsApp Direct</span>
          </a>

          {/* 1-Click Call */}
          <a
            id="final-call-btn"
            href={getPhoneUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#F66504] via-[#ff7d26] to-[#F66504] hover:from-[#de5900] hover:to-[#f06e14] text-white text-base font-black shadow-2xl shadow-[#F66504]/30 hover:scale-105 transition-all duration-200"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span>Call {CONTRACTOR_DETAILS.phone}</span>
          </a>

          {/* Scope Planner */}
          <button
            onClick={onOpenEstimate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold border border-slate-700 shadow-xl hover:border-[#09DAF6] hover:text-[#09DAF6] transition-all hover:scale-105"
          >
            <span>Scope Planner</span>
            <ArrowRight className="w-4 h-4 text-[#09DAF6]" />
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F66504]" />
            <span>20+ Years Field Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#03FC4E]" />
            <span>Work Neatly (Zero Mess)</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#09DAF6]" />
            <span>Work On Time Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  );
}

