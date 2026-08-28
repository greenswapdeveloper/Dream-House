import { useState } from 'react';
import { Phone, MessageSquare, X, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

export default function QuickContactFloating() {
  const [minimized, setMinimized] = useState(false);

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
          
          {/* Direct WhatsApp 1-Click */}
          <a
            id="mobile-floating-whatsapp"
            href={getWhatsAppUrl(`Hello Suraj ji, I need an interior painting estimate for my property in Gurgaon.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-slate-950 font-black text-xs shadow-lg shadow-[#25D366]/30 active:scale-95 transition-transform"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
            <span>WhatsApp Direct</span>
          </a>

          {/* Direct Phone Call 1-Click */}
          <a
            id="mobile-floating-call"
            href={getPhoneUrl()}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] text-white font-black text-xs shadow-lg shadow-[#F66504]/30 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Call Suraj Kumar</span>
          </a>

        </div>
      </aside>

      {/* Desktop Floating Action Dock (Bottom Right) */}
      <aside
        aria-label="Contractor direct contact dock"
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5"
      >
        {!minimized ? (
          <div className="bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 shadow-2xl w-80 text-white relative animate-in slide-in-from-bottom-3 duration-300">
            {/* Close / Minimize Button */}
            <button
              type="button"
              onClick={() => setMinimized(true)}
              className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Minimize quick contact"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Contractor Badge */}
            <div className="flex items-center gap-3 pr-6 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F66504] to-[#25D366] p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-xs text-white">
                  SK
                </div>
              </div>
              <div>
                <div className="text-xs font-black text-white flex items-center gap-1.5">
                  <span>{CONTRACTOR_DETAILS.name}</span>
                  <span className="w-2 h-2 rounded-full bg-[#03FC4E] animate-pulse"></span>
                </div>
                <div className="text-[11px] text-[#09DAF6] font-semibold">
                  20 Yrs Exp · Neat &amp; On Time
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-3.5 leading-relaxed bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
              Direct consultation for Gurgaon apartments, builder floors &amp; villas.
            </p>

            {/* 1-Click Buttons */}
            <div className="flex flex-col gap-2">
              <a
                id="desktop-floating-whatsapp"
                href={getWhatsAppUrl(`Hello Suraj ji, I would like to get an interior painting quote for my home in Gurgaon.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-xs shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                </svg>
                <span>Direct WhatsApp Chat</span>
              </a>

              <a
                id="desktop-floating-call"
                href={getPhoneUrl()}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#de5900] hover:to-[#f06e14] text-white font-black text-xs shadow-lg shadow-[#F66504]/20 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call +91 7827404001</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              id="desktop-min-whatsapp"
              href={getWhatsAppUrl(`Hello Suraj ji, I want to inquire about interior painting in Gurgaon.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 shadow-2xl hover:scale-110 transition-all flex items-center gap-2 font-black text-xs"
              title="1-Click WhatsApp to Suraj Kumar Sah"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              id="desktop-min-call"
              href={getPhoneUrl()}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] text-white shadow-2xl hover:scale-110 transition-all flex items-center gap-2 font-black text-xs"
              title="1-Click Direct Call: Suraj Kumar Sah"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMinimized(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 text-[10px]"
            >
              Suraj Sah
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
