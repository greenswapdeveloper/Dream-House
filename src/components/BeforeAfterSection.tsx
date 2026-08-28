import { useState, useRef, ChangeEvent } from 'react';
import { Columns, SlidersHorizontal, Info, Sparkles, CheckCircle2, AlertTriangle, ZoomIn } from 'lucide-react';
import { beforeImg, afterImg } from '../data/servicesData';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Colorful Accent Halos */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F66504]/20 border border-[#F66504]/40 text-[#F66504] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Real Project Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Real Work:{' '}
              <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
                Before &amp; After
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Slide to inspect the exact same living room before preparation (faded off-white, wall scuffs &amp; cracks) versus after complete surface repair, acrylic putty leveling, and 2-coat Royal Deep Teal luxury emulsion.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700 shadow-lg self-start md:self-auto backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'slider'
                  ? 'bg-gradient-to-r from-[#F66504] to-[#ff7d26] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={viewMode === 'slider'}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Interactive Slider</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('sideBySide')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'sideBySide'
                  ? 'bg-gradient-to-r from-[#F66504] to-[#ff7d26] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={viewMode === 'sideBySide'}
            >
              <Columns className="w-4 h-4" />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* View Mode: Interactive Slider */}
        {viewMode === 'slider' ? (
          <div className="max-w-4xl mx-auto">
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-800 select-none group"
            >
              {/* After Layer (Full underneath) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={afterImg}
                  alt="Interior living room after luxury royal teal painting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* After Floating Tag */}
                <div className="absolute bottom-5 right-5 z-10 px-4 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-[#03FC4E]/50 text-white text-xs font-bold flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#03FC4E] animate-pulse"></span>
                  <span className="text-[#03FC4E] font-black uppercase">AFTER</span>
                  <span className="text-slate-300 font-medium">| Royal Deep Teal &amp; Flawless Finish</span>
                </div>
              </div>

              {/* Before Layer (Clipped on top) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImg}
                  alt="Interior room before painting with faded walls"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Before Floating Tag */}
                <div className="absolute bottom-5 left-5 z-10 px-4 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-[#F66504]/50 text-white text-xs font-bold flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F66504]"></span>
                  <span className="text-[#F66504] font-black uppercase">BEFORE</span>
                  <span className="text-slate-300 font-medium">| Scuffed, Dingy &amp; Patched</span>
                </div>
              </div>

              {/* Divider Line & Glow Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-tr from-[#F66504] to-[#09DAF6] shadow-2xl border-2 border-white flex items-center justify-center text-white text-sm font-black transition-transform group-hover:scale-110">
                  ⇄
                </div>
              </div>

              {/* Accessible Range Input */}
              <label htmlFor="before-after-slider" className="sr-only">
                Slide to compare before and after interior painting
              </label>
              <input
                id="before-after-slider"
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Comparison slider between before and after painting"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Slider Control Instructions & Live Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 mt-4 px-2 gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#09DAF6]"></span>
                <span>Drag the handle or use arrow keys left/right to compare</span>
              </span>
              <span className="font-semibold text-slate-200 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Split Position: {sliderPosition}%
              </span>
            </div>
          </div>
        ) : (
          /* View Mode: Side-by-Side */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before Box */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl group hover:border-slate-700 transition-all">
              <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
                <img
                  src={beforeImg}
                  alt="Interior space before painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#F66504] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                  Before Work
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Identified Surface Defects:</span>
                  </div>
                  <span>14 hairline plaster cracks, heavy scuffing, uneven sheen, and yellowed trim.</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-white text-base">Pre-Paint Apartment State</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Notice the dull light reflection, dingy ceiling border, and damaged corners before professional masking, mesh crack bridging, and acrylic putty application.
                </p>
              </div>
            </div>

            {/* After Box */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl group hover:border-[#03FC4E]/50 transition-all">
              <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
                <img
                  src={afterImg}
                  alt="Interior space after painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#03FC4E] to-[#09DAF6] text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                  After Transformation
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-[#03FC4E] font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed Upgrades:</span>
                  </div>
                  <span>2-Coat Luxury Silk Emulsion, ultra-flat brilliant ceiling, zero tape bleed.</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-white text-base">Completed Interior Masterpiece</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Luminous deep teal feature wall, perfectly sharp ceiling perimeter lines, smooth scuff-resistant baseboards, and 100% dust-free post-job cleanup.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Transformation Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 backdrop-blur-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F66504]/20 text-[#F66504] flex items-center justify-center font-bold shrink-0">
              01
            </div>
            <div>
              <div className="text-xs font-bold text-white">Full Putty Leveling</div>
              <div className="text-[11px] text-slate-400">All dents &amp; cracks patched seamlessly</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 backdrop-blur-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#09DAF6]/20 text-[#09DAF6] flex items-center justify-center font-bold shrink-0">
              02
            </div>
            <div>
              <div className="text-xs font-bold text-white">Razor-Sharp Cut-Ins</div>
              <div className="text-[11px] text-slate-400">Crisp border between ceiling &amp; wall</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 backdrop-blur-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#03FC4E]/20 text-[#03FC4E] flex items-center justify-center font-bold shrink-0">
              03
            </div>
            <div>
              <div className="text-xs font-bold text-white">2-Coat Washable Sheen</div>
              <div className="text-[11px] text-slate-400">Durable luxury finish that lasts years</div>
            </div>
          </div>
        </div>

        {/* Note Footer */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <Info className="w-4 h-4 text-[#09DAF6] shrink-0" />
          <span>All photos represent Dream House&rsquo;s actual interior painting craftsmanship in Gurgaon.</span>
        </div>

      </div>
    </section>
  );
}
