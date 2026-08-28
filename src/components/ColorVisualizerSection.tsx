import { useState } from 'react';
import { Palette, Sparkles, Check, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { COLOR_PALETTES } from '../data/servicesData';
import { ColorPaletteItem } from '../types';

interface ColorVisualizerSectionProps {
  onOpenEstimate: () => void;
}

export default function ColorVisualizerSection({ onOpenEstimate }: ColorVisualizerSectionProps) {
  const [activePaletteId, setActivePaletteId] = useState<string>(COLOR_PALETTES[0].id);

  const currentPalette: ColorPaletteItem =
    COLOR_PALETTES.find((p) => p.id === activePaletteId) || COLOR_PALETTES[0];

  return (
    <section id="color-palettes" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#09DAF6] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Color Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Curated{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Interior Color Harmonies
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore curated color combinations tailored for modern Gurgaon luxury apartments, builder floors, and villas. Tap each palette to preview wall, accent, ceiling, and trim color balances with real paint codes.
          </p>
        </div>

        {/* Interactive Palette Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {COLOR_PALETTES.map((pal) => {
            const isSelected = pal.id === activePaletteId;
            return (
              <button
                key={pal.id}
                type="button"
                onClick={() => setActivePaletteId(pal.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-[#F66504] shadow-xl shadow-[#F66504]/20 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-[#09DAF6] tracking-wider">
                      {pal.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#03FC4E] animate-pulse"></span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{pal.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{pal.mood}</p>
                </div>

                {/* Color Swatch Dots */}
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800">
                  {pal.colors.map((c, i) => (
                    <div
                      key={i}
                      title={`${c.role}: ${c.name}`}
                      className="w-5 h-5 rounded-full border border-white/20 shadow-xs shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Palette Interactive Visualizer Showcase */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Simulated Room Representation */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-inner">
                
                {/* Simulated Room Canvas */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8 border border-white/10"
                  style={{
                    backgroundColor: currentPalette.colors.find(c => c.role.includes('Main'))?.hex || '#F5EBE1',
                    color: '#1E293B'
                  }}
                >
                  {/* Simulated Ceiling */}
                  <div
                    className="absolute top-0 left-0 right-0 h-10 border-b-2 border-white/40 shadow-xs flex items-center justify-between px-4 text-[11px] font-bold text-slate-700"
                    style={{
                      backgroundColor: currentPalette.colors.find(c => c.role.includes('Ceiling'))?.hex || '#FCFAF7'
                    }}
                  >
                    <span>CEILING: {currentPalette.colors.find(c => c.role.includes('Ceiling'))?.name}</span>
                    <span className="text-[10px] opacity-70">Flat Finish</span>
                  </div>

                  {/* Simulated Feature Accent Wall */}
                  <div
                    className="absolute top-14 left-6 sm:left-8 w-1/3 bottom-14 rounded-lg shadow-xl border border-white/20 p-3 sm:p-4 flex flex-col justify-between"
                    style={{
                      backgroundColor: currentPalette.colors.find(c => c.role.includes('Accent') || c.role.includes('Feature'))?.hex || '#C85A32',
                      color: '#FFFFFF'
                    }}
                  >
                    <span className="text-[10px] uppercase font-black tracking-wider bg-black/40 px-2 py-0.5 rounded w-fit">
                      ACCENT WALL
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-black leading-tight">
                        {currentPalette.colors.find(c => c.role.includes('Accent') || c.role.includes('Feature'))?.name}
                      </div>
                      <div className="text-[10px] opacity-80 font-mono mt-0.5">
                        {currentPalette.colors.find(c => c.role.includes('Accent') || c.role.includes('Feature'))?.code}
                      </div>
                    </div>
                  </div>

                  {/* Simulated Main Wall Label */}
                  <div className="absolute top-20 right-6 sm:right-8 bg-black/60 backdrop-blur-xs text-white p-3 rounded-xl border border-white/20 max-w-[160px] text-right">
                    <span className="text-[10px] uppercase font-bold text-[#09DAF6]">MAIN WALLS</span>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {currentPalette.colors.find(c => c.role.includes('Main'))?.name}
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono">
                      {currentPalette.colors.find(c => c.role.includes('Main'))?.code}
                    </div>
                  </div>

                  {/* Simulated Baseboard Trim at Bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-9 border-t-2 border-slate-900/20 shadow-md flex items-center justify-between px-4 text-[11px] font-bold text-slate-800"
                    style={{
                      backgroundColor: currentPalette.colors.find(c => c.role.includes('Trim') || c.role.includes('Door'))?.hex || '#FFFFFF'
                    }}
                  >
                    <span>SKIRTING TRIM: {currentPalette.colors.find(c => c.role.includes('Trim') || c.role.includes('Door'))?.name}</span>
                    <span className="text-[10px] text-slate-600">PU Enamel Sheen</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Simulated interior spatial color proportion guide</span>
                  <span className="text-[#03FC4E] font-semibold">60-30-10 Design Rule</span>
                </div>
              </div>
            </div>

            {/* Right: Color Specifications Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#F66504]/20 text-[#F66504] text-xs font-bold uppercase mb-2">
                  {currentPalette.category}
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {currentPalette.name}
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  {currentPalette.mood}. Specially composed to maximize natural sunlight and architectural aesthetics.
                </p>
              </div>

              {/* Color Swatch List */}
              <div className="space-y-2.5">
                {currentPalette.colors.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg border-2 border-white/20 shadow-sm shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span>{c.name}</span>
                          <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                            {c.role}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Code: <span className="text-[#09DAF6] font-semibold">{c.code}</span> · {c.hex}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sheen and Recommendations */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-[#F66504] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Recommended Sheen:</strong> {currentPalette.recommendedSheen}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#03FC4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Best Room Suitability:</strong> {currentPalette.roomSuitability}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenEstimate}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#F66504] to-[#F59E0B] hover:from-[#de5900] hover:to-[#e08e00] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Estimate with this Palette</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
