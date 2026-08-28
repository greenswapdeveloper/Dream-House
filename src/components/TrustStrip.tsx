import { Paintbrush, Layers, PhoneCall, Building2, ShieldCheck, Award, Sparkles, Clock } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      icon: <Building2 className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-br from-[#F66504] to-[#ff7d26]',
      title: 'Residential & Commercial',
      desc: 'Apartments, villas, builder floors & executive offices across Gurgaon.',
      badge: '450+ Rooms Done'
    },
    {
      icon: <Layers className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-br from-[#03FC4E] to-[#10B981]',
      title: '100% Dust-Free Masking',
      desc: 'Heavy drop cloths, switch plate taping & zero splatter on luxury flooring.',
      badge: 'Zero Mess Guarantee'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-br from-[#09DAF6] to-[#0284C7]',
      title: 'Asian Paints Royale & Dulux',
      desc: '100% genuine luxury emulsions, anti-fungal primers & PU enamels.',
      badge: 'Genuine Batch Sealing'
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-br from-[#8B5CF6] to-[#6366F1]',
      title: 'On-Time Project Delivery',
      desc: 'Staged multi-room schedules, dedicated site lead & daily milestone signoff.',
      badge: '2-Year Warranty'
    }
  ];

  return (
    <div id="trust-strip" className="bg-slate-950 text-white py-8 border-y border-slate-800 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F66504]/5 via-[#09DAF6]/5 to-[#03FC4E]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-md"
            >
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 rounded-xl ${pillar.iconBg} shrink-0 shadow-md`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#09DAF6]">Standard</span>
                <span className="text-[10px] font-bold text-[#03FC4E] bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                  {pillar.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
