import { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Paintbrush, Award, MapPin, MessageSquare, Clock } from 'lucide-react';
import { heroImg, CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export default function Hero({ onOpenEstimate }: HeroProps) {
  const [activeSwatch, setActiveSwatch] = useState<string>('Terracotta');

  const swatches = [
    { name: 'Terracotta', hex: '#D47151', text: 'Warm Earth' },
    { name: 'Peacock Teal', hex: '#0B4F6C', text: 'Regal Jewel' },
    { name: 'Nordic Sage', hex: '#7A9A7E', text: 'Serene Nature' },
    { name: 'Ochre Amber', hex: '#E5A93C', text: 'Modern Chic' }
  ];

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      {/* Colorful Architectural Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F66504]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#09DAF6]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#25D366]/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow badge with Contractor credentials */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-700/80 text-white text-xs font-bold w-fit mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#03FC4E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#03FC4E]"></span>
              </span>
              <span className="text-[#09DAF6] font-extrabold uppercase tracking-wider">Dream House</span>
              <span className="text-slate-500">|</span>
              <span className="text-white font-bold">Contractor: {CONTRACTOR_DETAILS.name}</span>
              <span className="text-[#F66504] font-black bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 text-[10px]">
                {CONTRACTOR_DETAILS.experience}
              </span>
            </div>

            {/* Vibrant, high-impact headline */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6"
            >
              Interior Painting in Gurgaon by{' '}
              <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
                Suraj Kumar Sah
              </span>
            </h1>

            {/* Grounded, practical subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-7 font-normal"
            >
              20 years of trusted craftsmanship. We guarantee <strong className="text-white font-bold">neat, splatter-free work</strong> and <strong className="text-white font-bold">100% on-time project completion</strong> for luxury apartments, builder floors, and villas across Gurgaon.
            </p>

            {/* Key Contractor Pillars with Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-sm text-slate-200">
              
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F66504] to-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">20 Yrs Experience</div>
                  <div className="text-[11px] text-slate-400">Master Level Artisan</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#03FC4E] to-[#10B981] text-slate-950 flex items-center justify-center shrink-0 shadow-md font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Work Neatly</div>
                  <div className="text-[11px] text-[#03FC4E]">Zero Mess Guarantee</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#09DAF6] to-[#0284C7] text-slate-950 flex items-center justify-center shrink-0 shadow-md font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Work On Time</div>
                  <div className="text-[11px] text-[#09DAF6]">Strict Schedule</div>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons (1-Click WhatsApp + 1-Click Direct Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              
              {/* 1-Click WhatsApp Direct Chat */}
              <a
                id="hero-whatsapp-cta"
                href={getWhatsAppUrl(`Hello Suraj ji, I want an interior painting estimate for my home in Gurgaon.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-sm font-black shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                </svg>
                <span>Direct WhatsApp Chat</span>
              </a>

              {/* 1-Click Direct Phone Call */}
              <a
                id="hero-primary-cta"
                href={getPhoneUrl()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#e05800] hover:to-[#f06e14] text-white text-sm font-black shadow-xl shadow-[#F66504]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call {CONTRACTOR_DETAILS.phone}</span>
              </a>

              {/* Cost planner */}
              <button
                id="hero-secondary-planner"
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-white text-xs font-bold border border-slate-700 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>Scope Calculator</span>
                <ArrowRight className="w-4 h-4 text-[#09DAF6]" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F66504]" />
                <span>DLF Phase 1-5 · Golf Course Rd · Sohna Rd · Nirvana · All Gurgaon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#03FC4E]" />
                <span>Direct Site Supervision by Suraj Kumar Sah</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Showcase Column with Real Work Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group">
              {/* Vibrant Decorative Glow Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F66504] via-[#09DAF6] to-[#25D366] rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Real Work Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={heroImg}
                    alt="Completed luxury modern interior painting by Suraj Kumar Sah in Gurgaon"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-[#03FC4E] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#03FC4E]" />
                    <span>Real Gurgaon Project</span>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#F66504] text-white text-xs font-bold shadow-md">
                    20 Yrs Experience
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-[#09DAF6] uppercase tracking-wider">
                      Master Finish by Suraj Kumar Sah
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight">
                      Warm Terracotta &amp; Ivory Luxury Living Lounge
                    </p>
                  </div>
                </div>

                {/* Card Content & Interactive Palette Preview */}
                <div className="p-5 sm:p-6 bg-slate-900/95 space-y-4">
                  
                  {/* Interactive Quick Swatch Selector */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <Paintbrush className="w-3.5 h-3.5 text-[#F66504]" />
                        <span>Curated Popular Palettes</span>
                      </span>
                      <span className="text-[#03FC4E] font-semibold">{activeSwatch}</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {swatches.map((swatch) => (
                        <button
                          key={swatch.name}
                          type="button"
                          onClick={() => setActiveSwatch(swatch.name)}
                          className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                            activeSwatch === swatch.name
                              ? 'border-white/80 bg-slate-800 shadow-md scale-105'
                              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                          }`}
                        >
                          <div
                            className="w-5 h-5 rounded-full border border-white/20 shadow-xs"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span className="text-[10px] font-semibold text-slate-300 truncate w-full">
                            {swatch.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Micro specs grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Finish</div>
                      <div className="text-xs font-bold text-slate-200">Velvet Matte</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Coats</div>
                      <div className="text-xs font-bold text-[#03FC4E]">2x + Primer</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Dust Free</div>
                      <div className="text-xs font-bold text-[#09DAF6]">100% Masked</div>
                    </div>
                  </div>

                  {/* Direct Contact Bar with 1-Click WhatsApp & Call */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <div>
                      <div className="text-[11px] text-slate-400">Direct Contractor:</div>
                      <div className="text-xs font-bold text-white">Suraj Kumar Sah ({CONTRACTOR_DETAILS.phone})</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={getWhatsAppUrl(`Hello Suraj ji, please share quote details for painting in Gurgaon.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#25D366] text-slate-950 font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-1.5"
                        title="WhatsApp Suraj Kumar Sah"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={getPhoneUrl()}
                        className="p-2.5 rounded-xl bg-gradient-to-r from-[#F66504] to-[#F59E0B] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

