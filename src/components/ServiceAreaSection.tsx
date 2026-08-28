import { MapPin, Phone, Building2, Home, Sparkles } from 'lucide-react';

export default function ServiceAreaSection() {
  const neighborhoods = [
    'DLF Phase 1, 2, 3, 4, 5',
    'Golf Course Road & Extn',
    'Sohna Road & Sector 47-50',
    'Nirvana Country & South City',
    'Cyber City & Udyog Vihar',
    'Sushant Lok 1, 2, 3',
    'Sector 56, 57, 65, 67',
    'Dwarka Expressway Sector 102-113'
  ];

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#09DAF6] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Rapid Mobilization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Interior Painting Services Across{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Gurgaon
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Dream House operates with dedicated local teams stationed across Gurgaon for fast on-site walkthroughs, detailed surface inspection, and on-time project handover.
          </p>
        </div>

        {/* Property Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-10">
          
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-7 shadow-xl hover:border-[#F66504]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#F66504] to-[#ff7d26] text-white shadow-lg shadow-[#F66504]/20">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">Residential Interiors</h3>
                  <p className="text-xs text-slate-400">Gurgaon High-Rises, Villas &amp; Floors</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Luxury interior wall, ceiling, baseboard, and door repainting with zero dust mess for 2BHK, 3BHK, 4BHK apartments, penthouses, and independent villas.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F66504]" />
                <span>Gurgaon Residential Zones</span>
              </div>
              <span className="text-[#03FC4E] text-[11px] bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Same-Day Walkthrough</span>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-7 shadow-xl hover:border-[#09DAF6]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#09DAF6] to-[#0284C7] text-slate-950 shadow-lg shadow-[#09DAF6]/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">Commercial Interiors</h3>
                  <p className="text-xs text-slate-400">Gurgaon Offices &amp; Tech Parks</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Rapid turnaround interior coating for commercial offices, co-working suites, conference boardrooms, corridors, and client-facing reception bays.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#09DAF6]" />
                <span>Corporate &amp; Tech Corridors</span>
              </div>
              <span className="text-[#09DAF6] text-[11px] bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">After-Hours / Weekend Shifts</span>
            </div>
          </div>

        </div>

        {/* Active Neighborhood Badges */}
        <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#F66504]" />
            <span>Active Gurgaon Service Enclaves:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((nh, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium hover:border-[#09DAF6] hover:text-white transition-colors"
              >
                {nh}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Call Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#03FC4E]/20 text-[#03FC4E] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Booking an interior painting project anywhere in Gurgaon?
              </div>
              <div className="text-xs text-slate-400">
                Direct mobile dispatch: +91 7827404001
              </div>
            </div>
          </div>
          <a
            href="tel:+917827404001"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F66504] hover:bg-[#de5900] text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 7827404001</span>
          </a>
        </div>

      </div>
    </section>
  );
}
