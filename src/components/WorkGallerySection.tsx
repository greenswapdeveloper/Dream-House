import { useState } from 'react';
import { Sparkles, MapPin, Clock, Check, Eye, X, ArrowRight, Paintbrush } from 'lucide-react';
import { PROJECTS_DATA } from '../data/servicesData';
import { WorkProject } from '../types';

interface WorkGallerySectionProps {
  onOpenEstimate: (service?: string) => void;
}

export default function WorkGallerySection({ onOpenEstimate }: WorkGallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const filterTabs = ['All', 'Living Room', 'Bedroom', 'Accent Wall', 'Trim & Doors'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="work-gallery" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Colorful Gradient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#03FC4E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#03FC4E] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gurgaon Work Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Recent Interior Projects &amp;{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Workmanship
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse our completed interior painting projects across premier residential and commercial communities in Gurgaon. Click on any project to view details, paint finishes, and color palettes.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab
                    ? 'bg-gradient-to-r from-[#F66504] to-[#F59E0B] text-white shadow-lg shadow-[#F66504]/25 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/80 rounded-3xl border border-slate-700/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#09DAF6]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-[#09DAF6]">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-lg bg-[#F66504] text-xs font-black text-white shadow-md">
                    {project.finishType}
                  </span>
                </div>

                {/* Quick View Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-[#F66504] text-white text-xs font-bold backdrop-blur-md border border-slate-700 flex items-center gap-1.5 shadow-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                {/* Location on Image bottom */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#03FC4E]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#09DAF6] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#03FC4E] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Color Palette Bar */}
                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">Applied Palette:</span>
                    <div className="flex items-center -space-x-1.5">
                      {project.colorPalette.map((color, cIdx) => (
                        <div
                          key={cIdx}
                          title={color.name}
                          className="w-5 h-5 rounded-full border-2 border-slate-800 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenEstimate('Interior Wall Painting')}
                    className="text-xs font-bold text-[#F66504] hover:text-[#ff7d26] flex items-center gap-1"
                  >
                    <span>Get Similar Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-lg bg-[#F66504] text-xs font-bold text-white">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Location</span>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#03FC4E]" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Finish Applied</span>
                  <div className="text-xs font-bold text-[#09DAF6] mt-0.5">
                    {selectedProject.finishType}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Timeline</span>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-[#F66504]" />
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>
              </div>

              {/* Color Harmonies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <Paintbrush className="w-3.5 h-3.5 text-[#F66504]" />
                  <span>Color Harmonies Used in this Space</span>
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.colorPalette.map((col, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg border border-white/20 shadow-xs shrink-0"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{col.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{col.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Key Workmanship Standards Executed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.highlights.map((hl, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#03FC4E] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="tel:+917827404001"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F66504] hover:bg-[#de5900] text-white text-xs font-bold shadow-lg transition-all text-center"
                >
                  Call +91 7827404001 for this Finish
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenEstimate();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all text-center"
                >
                  Configure My Room Estimate
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
