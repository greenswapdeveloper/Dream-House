import { Phone, Paintbrush, MapPin, ArrowUp, Sparkles, Heart, Award, Clock } from 'lucide-react';
import { SERVICES_LIST, CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative overflow-hidden pb-16 md:pb-0">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#F66504]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Overview & Contractor Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#F66504] via-[#ff7d26] to-[#09DAF6] flex items-center justify-center text-white font-black shadow-lg">
                <Paintbrush className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Dream House
                </span>
                <span className="block text-[11px] text-[#09DAF6] uppercase tracking-wider font-bold">
                  Suraj Kumar Sah · Gurgaon
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional interior painting in Gurgaon led by <strong className="text-white">Suraj Kumar Sah</strong> (20+ years field experience). Committed to <span className="text-[#03FC4E] font-semibold">neat mess-free work</span> and <span className="text-[#09DAF6] font-semibold">on-time completion</span> for residential and commercial interiors.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#03FC4E]" />
                <span>Service Hub: DLF, Golf Course Rd, Sohna Rd, Nirvana Country, All Gurgaon</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={getWhatsAppUrl(`Hello Suraj ji, I want to book an interior painting estimate for my Gurgaon property.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-950 font-black text-xs bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                  </svg>
                  <span>1-Click WhatsApp</span>
                </a>

                <a
                  href={getPhoneUrl()}
                  className="inline-flex items-center gap-2 text-white hover:text-[#09DAF6] font-bold text-xs transition-colors bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F66504]" />
                  <span>Call {CONTRACTOR_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F66504]" />
              <span>Interior Services</span>
            </h3>
            <ul className="space-y-2 text-slate-300">
              {SERVICES_LIST.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-[#09DAF6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#03FC4E]"></span>
                    <span>{svc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Explorers */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold uppercase tracking-wider text-xs">
              Contractor &amp; Portfolio
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#contractor-profile" className="hover:text-[#03FC4E] transition-colors flex items-center gap-1.5 text-[#03FC4E] font-semibold">
                  <span>✦</span>
                  <span>Suraj Kumar Sah Profile</span>
                </a>
              </li>
              <li>
                <a href="#work-gallery" className="hover:text-[#09DAF6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F66504]">✦</span>
                  <span>Work Portfolio Photos</span>
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-[#09DAF6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#09DAF6]">✦</span>
                  <span>Before &amp; After Comparison</span>
                </a>
              </li>
              <li>
                <a href="#color-palettes" className="hover:text-[#09DAF6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#03FC4E]">✦</span>
                  <span>Color Harmonies &amp; Codes</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  4-Stage Painting Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Estimate Information
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Dream House. Contractor: <strong className="text-slate-300">{CONTRACTOR_DETAILS.name}</strong> ({CONTRACTOR_DETAILS.phone}). Professional interior painting in Gurgaon.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F66504]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#09DAF6]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

