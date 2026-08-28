import { Phone, MessageSquare, Award, Clock, Sparkles, ShieldCheck, CheckCircle2, Star, MapPin, UserCheck, ThumbsUp } from 'lucide-react';
import { CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

interface ContractorSpotlightProps {
  onOpenEstimate: () => void;
}

export default function ContractorSpotlight({ onOpenEstimate }: ContractorSpotlightProps) {
  return (
    <section
      id="contractor-profile"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F66504]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-[#03FC4E] text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-sm">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Meet Your Master Contractor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Directly Managed by{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              {CONTRACTOR_DETAILS.name}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            No middlemen, no subcontracting confusion. Work directly with Gurgaon’s senior interior painting contractor backed by 20 years of hands-on expertise.
          </p>
        </div>

        {/* Main Profile Showcase Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Contractor Bio & Trust Card */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F66504] via-[#F59E0B] to-[#25D366] p-0.5 shadow-xl shrink-0">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-2xl text-white">
                    SK
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white">
                      {CONTRACTOR_DETAILS.name}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#03FC4E]/20 text-[#03FC4E] text-[11px] font-bold border border-[#03FC4E]/30">
                      Verified Lead
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#09DAF6] mt-0.5">
                    {CONTRACTOR_DETAILS.role}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#F66504]" />
                    <span>Serving All Gurgaon &amp; NCR Sectors</span>
                  </div>
                </div>
              </div>

              {/* Experience Stat Badges */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#F66504] to-[#F59E0B] bg-clip-text text-transparent">
                    20+ Years
                  </div>
                  <div className="text-xs font-bold text-slate-300 mt-1">Field Experience</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Residential &amp; Commercial</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#03FC4E]">
                    100%
                  </div>
                  <div className="text-xs font-bold text-slate-300 mt-1">On-Time &amp; Neat</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Zero Mess Guarantee</div>
                </div>
              </div>

              {/* Direct Instant Contact Box */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Direct Contractor Hotline &amp; WhatsApp
                </div>
                <div className="text-lg sm:text-xl font-black text-white tracking-wide">
                  {CONTRACTOR_DETAILS.phone}
                </div>

                {/* 1-Click Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  
                  {/* 1-Click WhatsApp Button */}
                  <a
                    id="contractor-whatsapp-btn"
                    href={getWhatsAppUrl(`Hello Suraj ji, I want to book an interior painting estimate for my home in Gurgaon. Please let me know your availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-xs shadow-lg shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all"
                  >
                    {/* Official WhatsApp icon SVG */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                    </svg>
                    <span>WhatsApp Direct</span>
                  </a>

                  {/* 1-Click Direct Call Button */}
                  <a
                    id="contractor-call-btn"
                    href={getPhoneUrl()}
                    className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#de5900] hover:to-[#f06e14] text-white font-black text-xs shadow-lg shadow-[#F66504]/25 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Call Now</span>
                  </a>

                </div>
              </div>

            </div>

            {/* Right Column: 3 Core Contractor Commitments */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="text-xs font-black uppercase tracking-wider text-[#09DAF6] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F66504]" />
                <span>The 3 Pillars of Suraj Kumar Sah's Workmanship</span>
              </div>

              {/* Pillar 1: 20 Years Experience */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F66504] to-[#F59E0B] text-white flex items-center justify-center font-bold shrink-0 shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        20 Years of Practical Field Experience
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#F66504]/20 text-[#F66504] px-2 py-0.5 rounded-md border border-[#F66504]/30">
                        Senior Master
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      Two decades of hands-on expertise in Gurgaon’s top residential and commercial properties. Deep mastery over wall prep, surface moisture testing, crack sealing, primer application, and dual-coat luxury emulsion systems (Asian Paints Royale, Dulux Velvet, PU polish).
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Work Neatly */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#03FC4E] to-[#10B981] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg">
                    <Sparkles className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Work Neatly (Clean Handover Guarantee)
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#03FC4E]/20 text-[#03FC4E] px-2 py-0.5 rounded-md border border-[#03FC4E]/30">
                        Zero Mess
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      We protect your home like our own. 100% floor drop-cloth masking, precision tape sealing on switchboards, door frames, and glass. Zero paint droplets on marble or wooden flooring, with thorough daily vacuum cleaning and end-of-job handover.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Work On Time */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#09DAF6] to-[#0284C7] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Work On Time (Strict Milestone Delivery)
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#09DAF6]/20 text-[#09DAF6] px-2 py-0.5 rounded-md border border-[#09DAF6]/30">
                        Punctual
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      We respect your schedule and moving dates. Every project starts with a committed timeline and sufficient skilled painters to ensure completion strictly on or before the committed day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Banner inside Spotlight */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800">
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#03FC4E] shrink-0" />
                  <span>Free on-site consultation and laser measurement across Gurgaon</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors shrink-0"
                >
                  Plan Estimate Online
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
