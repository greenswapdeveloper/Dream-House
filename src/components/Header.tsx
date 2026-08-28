import { useState } from 'react';
import { Phone, Menu, X, Paintbrush, ArrowRight, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export default function Header({ onOpenEstimate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Contractor Profile', href: '#contractor-profile', contractor: true },
    { label: 'Services', href: '#services' },
    { label: 'Work Portfolio', href: '#work-gallery', highlight: true },
    { label: 'Before & After', href: '#before-after', highlight: true },
    { label: 'Color Harmonies', href: '#color-palettes' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-all"
    >
      {/* Top Quick Bar with Contractor Credentials */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 py-1.5 px-4 text-[11px] text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#03FC4E] animate-pulse"></span>
            <span className="font-semibold text-white">Lead Contractor:</span>
            <span className="font-extrabold text-[#F66504]">{CONTRACTOR_DETAILS.name}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">{CONTRACTOR_DETAILS.experience} · Zero Mess · On-Time Guaranteed</span>
          </div>

          <div className="flex items-center gap-3 font-bold">
            <a
              href={getWhatsAppUrl(`Hello Suraj ji, I want an interior painting estimate for my home in Gurgaon.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline flex items-center gap-1"
            >
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={getPhoneUrl()}
              className="text-[#09DAF6] hover:underline flex items-center gap-1"
            >
              <span>{CONTRACTOR_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Mark */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F66504] rounded-xl p-1 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#F66504] via-[#ff7d26] to-[#09DAF6] flex items-center justify-center text-white shadow-lg shadow-[#F66504]/20 group-hover:scale-105 transition-transform">
              <Paintbrush className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-white leading-tight group-hover:text-[#09DAF6] transition-colors">
                Dream House
              </span>
              <span className="text-[11px] font-bold tracking-wider text-[#F66504] uppercase">
                Suraj Kumar Sah · Gurgaon
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            aria-label="Main Navigation"
            className="hidden xl:flex items-center space-x-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-bold transition-all px-2.5 py-1.5 rounded-lg ${
                  link.contractor
                    ? 'text-[#03FC4E] bg-[#03FC4E]/10 border border-[#03FC4E]/30 hover:bg-[#03FC4E]/20'
                    : link.highlight
                    ? 'text-white bg-slate-900 border border-slate-700/80 hover:border-[#09DAF6] hover:text-[#09DAF6]'
                    : 'text-slate-300 hover:text-[#F66504]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 1-Click WhatsApp, Direct Phone & Primary CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* 1-Click WhatsApp Button */}
            <a
              id="header-whatsapp-link"
              href={getWhatsAppUrl(`Hello Suraj ji, I want an interior painting estimate for my home in Gurgaon.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-black text-slate-950 bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md shadow-[#25D366]/20 transition-all hover:scale-105"
              title="1-Click WhatsApp to Suraj Kumar Sah"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* 1-Click Direct Call Button */}
            <a
              id="header-phone-link"
              href={getPhoneUrl()}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Call Suraj Kumar Sah at +91 7827404001"
            >
              <Phone className="w-4 h-4 text-[#F66504]" />
              <span>{CONTRACTOR_DETAILS.phone}</span>
            </a>

            {/* Online Estimate Flow Trigger */}
            <button
              id="header-estimate-button"
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#de5900] hover:to-[#f06e14] rounded-xl shadow-lg shadow-[#F66504]/25 transition-all hover:scale-105"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              id="mobile-header-whatsapp"
              href={getWhatsAppUrl(`Hello Suraj ji, I want an interior painting estimate for my home in Gurgaon.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#25D366] text-slate-950 font-bold text-xs"
              aria-label="WhatsApp directly"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
            </a>

            <a
              id="mobile-header-call"
              href={getPhoneUrl()}
              className="p-2.5 rounded-xl bg-[#F66504]/20 text-[#F66504] border border-[#F66504]/30"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="xl:hidden border-t border-slate-800 bg-slate-950 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          {/* Contractor profile badge in mobile drawer */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F66504] to-[#25D366] p-0.5 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-xs text-white">
                SK
              </div>
            </div>
            <div>
              <div className="text-xs font-black text-white">{CONTRACTOR_DETAILS.name}</div>
              <div className="text-[11px] text-[#03FC4E] font-semibold">20 Yrs Experience · Zero Mess</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-[#F66504] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] uppercase font-bold text-[#09DAF6] bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                    Photos
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            {/* 1-Click WhatsApp in drawer */}
            <a
              href={getWhatsAppUrl(`Hello Suraj ji, I would like an interior painting quote for my Gurgaon home.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-slate-950 font-black text-xs shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
              <span>1-Click WhatsApp to Suraj Kumar Sah</span>
            </a>

            {/* 1-Click Call in drawer */}
            <a
              href={getPhoneUrl()}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs border border-slate-800"
            >
              <Phone className="w-4 h-4 text-[#F66504]" />
              <span>Direct Call: {CONTRACTOR_DETAILS.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F66504]/20"
            >
              <span>Calculate Estimate Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

