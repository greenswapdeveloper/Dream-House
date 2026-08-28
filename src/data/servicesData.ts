import { ServiceItem, WorkProject, ColorPaletteItem } from '../types';

import heroImg from '../assets/images/living_room_hero_1787875943509.jpg';
import beforeImg from '../assets/images/paint_before_room_1787875958948.jpg';
import afterImg from '../assets/images/paint_after_room_1787875973607.jpg';
import bedroomImg from '../assets/images/work_bedroom_interior_1787875989077.jpg';
import trimImg from '../assets/images/work_accent_trim_1787876005521.jpg';

export { heroImg, beforeImg, afterImg, bedroomImg, trimImg };

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'interior-wall-painting',
    name: 'Interior Wall Painting',
    shortDesc: 'Smooth, dual-coat luxury emulsion with surgical tape edge cut-ins, roller texture uniformity, and furniture masking.',
    scopeHighlights: [
      'Edge masking & full perimeter drop cloth protection',
      'Surface dusting, adhesion check & light sanding',
      'Even 2-coat silk/matte coverage across walls',
      'Clean corner, crown, and ceiling line cut-ins'
    ],
    recommendedFor: 'Living rooms, bedrooms, dining halls, study rooms & offices',
    colorAccent: '#F66504',
    bgGradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
    startingRate: '₹14 / sq.ft'
  },
  {
    id: 'ceiling-painting',
    name: 'Ceiling Painting',
    shortDesc: 'Lap-free ultra-flat ceiling coat delivering maximum light reflection, stain blocking, and clean boundary lines.',
    scopeHighlights: [
      '360° ceiling fan & chandelier wrapping',
      'Stain blocker primer on water/smoke marks',
      'Directional cross-rolling to prevent lap bands',
      'Crisp overhead perimeter cut-ins'
    ],
    recommendedFor: 'Discolored ceilings, water-spot updates, renovation refreshes',
    colorAccent: '#09DAF6',
    bgGradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
    startingRate: '₹12 / sq.ft'
  },
  {
    id: 'trim-baseboard-painting',
    name: 'Trim & Baseboard Painting',
    shortDesc: 'High-durability satin & PU enamel on baseboards, cornices, window casings, and architectural woodwork.',
    scopeHighlights: [
      'Fine-grit surface smoothing & caulk sealing',
      'Floor and wall precision masking',
      'Durable scuff-resistant enamel coating',
      'Silky smooth brush-stroke-free finish'
    ],
    recommendedFor: 'Baseboards, window sills, door casings & crown moulding',
    colorAccent: '#F59E0B',
    bgGradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    startingRate: '₹35 / r.ft'
  },
  {
    id: 'door-painting',
    name: 'Door & Frame Painting',
    shortDesc: 'Flawless spray or fine-roller coating for flush and panel interior doors with scratch-proof durable PU sheen.',
    scopeHighlights: [
      'Brass hardware & lock masking / removal',
      'Bevel seam prep, degreasing & priming',
      'Even coat application on faces, edges & jambs',
      'Non-sticky quick-cure polyurethane topcoat'
    ],
    recommendedFor: 'Bedroom doors, main entry interior faces, bathroom doors & frames',
    colorAccent: '#EC4899',
    bgGradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    startingRate: '₹1,200 / door'
  },
  {
    id: 'drywall-patch-paint',
    name: 'Wall Patch, Putty & Crack Repair',
    shortDesc: 'Multi-layer acrylic putty repair, nail hole patching, hairline crack mesh bridging, and invisible color blending.',
    scopeHighlights: [
      'Nail hole, anchor & impact dent filling',
      'Fiberglass mesh bridging over active settle cracks',
      'Spot priming over smoothed patched repairs',
      'Blended topcoat matching surrounding sheen'
    ],
    recommendedFor: 'TV mount repairs, settlement cracks, anchor holes, damp patch fixes',
    colorAccent: '#8B5CF6',
    bgGradient: 'from-purple-500/10 via-violet-500/5 to-transparent',
    startingRate: 'Included in prep'
  },
  {
    id: 'interior-repainting',
    name: 'Complete Home Repainting',
    shortDesc: 'End-to-end multi-room staging, color consulting, dust-free prep, and deep transformation for 2BHK/3BHK/4BHK & villas.',
    scopeHighlights: [
      'Multi-room staged protection & daily cleanup',
      'Coordinated wall, ceiling, and trim coating',
      'Deep color transitions with high-opacity primers',
      'Free color swatches & digital room preview'
    ],
    recommendedFor: 'New home move-in, rental handover, festive season upgrades, complete remodels',
    colorAccent: '#03FC4E',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    startingRate: 'Custom package'
  }
];

export const PROJECTS_DATA: WorkProject[] = [
  {
    id: 'golf-course-living-room',
    title: 'Modern Warm Terracotta & Ivory Living Lounge',
    category: 'Living Room',
    location: 'DLF Phase 5, Golf Course Rd, Gurgaon',
    image: heroImg,
    finishType: 'Luxury Velvet Matte Emulsion',
    duration: '4 Days (Full Prep & Paint)',
    colorPalette: [
      { name: 'Warm Terracotta', hex: '#D47151' },
      { name: 'Soft Ivory', hex: '#FAF7F2' },
      { name: 'Pure White Trim', hex: '#FFFFFF' }
    ],
    highlights: ['Multi-coat velvet finish', 'Dust-free orbital sanding', 'Seamless ceiling cut-in']
  },
  {
    id: 'sohna-road-teal-renovation',
    title: 'Royal Teal & Warm Alabaster Complete Makeover',
    category: 'Accent Wall',
    location: 'Sohna Road, Sector 49, Gurgaon',
    image: afterImg,
    finishType: 'Silky Sheen Luxury Emulsion',
    duration: '3 Days (Full Transformation)',
    colorPalette: [
      { name: 'Royal Deep Teal', hex: '#0B4F6C' },
      { name: 'Warm Alabaster', hex: '#F3EFE6' },
      { name: 'Crisp White', hex: '#FFFFFF' }
    ],
    highlights: ['Repaired 14 wall cracks', 'Deep rich color saturation', 'Zero paint splatter on tiles']
  },
  {
    id: 'nirvana-country-bedroom',
    title: 'Calming Scandinavian Sage Green Master Suite',
    category: 'Bedroom',
    location: 'Nirvana Country, Sector 50, Gurgaon',
    image: bedroomImg,
    finishType: 'Anti-Bacterial Eggshell Finish',
    duration: '2 Days',
    colorPalette: [
      { name: 'Nordic Sage', hex: '#7A9A7E' },
      { name: 'Warm Almond', hex: '#EFE7DA' },
      { name: 'Chalk White', hex: '#F8F9FA' }
    ],
    highlights: ['Low-VOC eco-safe paint', 'Smooth satin ceiling', 'Baseboard scuff protection']
  },
  {
    id: 'dlf-phase-2-trim-door',
    title: 'Designer Navy Door & Ochre Accent Craftsmanship',
    category: 'Trim & Doors',
    location: 'DLF Phase 2, Gurgaon',
    image: trimImg,
    finishType: 'PU Satin Enamel & High Sheen',
    duration: '2 Days',
    colorPalette: [
      { name: 'Midnight Navy', hex: '#1B2A4A' },
      { name: 'Ochre Amber', hex: '#E09F3E' },
      { name: 'Pure Enamel White', hex: '#FFFFFF' }
    ],
    highlights: ['Brush-mark-free spray finish', 'Sealed silicone perimeter', 'Scratch-proof door jambs']
  }
];

export const COLOR_PALETTES: ColorPaletteItem[] = [
  {
    id: 'palette-terracotta',
    name: 'Warm Sunset & Terracotta Clay',
    mood: 'Inviting, earthy, rich and cozy',
    category: 'Warm & Cozy',
    colors: [
      { role: 'Accent Wall', name: 'Terracotta Earth', hex: '#C85A32', code: 'AP 7954' },
      { role: 'Main Walls', name: 'Desert Sand', hex: '#F5EBE1', code: 'AP 0398' },
      { role: 'Ceiling', name: 'Alabaster Whisper', hex: '#FCFAF7', code: 'AP 0951' },
      { role: 'Trim & Base', name: 'Crisp Cotton', hex: '#FFFFFF', code: 'AP 0001' }
    ],
    recommendedSheen: 'Luxury Velvet Matte or Soft Sheen',
    roomSuitability: 'Living Rooms, Dining Areas & Foyer Entrances'
  },
  {
    id: 'palette-royal-teal',
    name: 'Regal Peacock Teal & Gold Accent',
    mood: 'Dramatic, luxurious, sophisticated',
    category: 'Regal & Bold',
    colors: [
      { role: 'Accent Wall', name: 'Peacock Jewel', hex: '#0A4B62', code: 'AP 7382' },
      { role: 'Main Walls', name: 'Warm Greige', hex: '#E8E4DC', code: 'AP 8412' },
      { role: 'Ceiling', name: 'Brilliant White', hex: '#F8FAFC', code: 'AP 0002' },
      { role: 'Trim & Accents', name: 'Antique Gold Trim', hex: '#D4AF37', code: 'PU 9021' }
    ],
    recommendedSheen: 'High-Gloss Enamel Trims + Silk Wall Emulsion',
    roomSuitability: 'Master Bedrooms, Formal Lounges & TV Accent Walls'
  },
  {
    id: 'palette-scandi-sage',
    name: 'Nordic Sage & Mineral Olive',
    mood: 'Peaceful, refreshing, nature-inspired',
    category: 'Calm & Serene',
    colors: [
      { role: 'Accent Wall', name: 'Eucalyptus Sage', hex: '#688B74', code: 'AP 7619' },
      { role: 'Main Walls', name: 'Misty Canvas', hex: '#EEF0EB', code: 'AP 0984' },
      { role: 'Ceiling', name: 'Pure Flat White', hex: '#FFFFFF', code: 'AP 0001' },
      { role: 'Trim', name: 'Soft Linen', hex: '#E2E5DE', code: 'AP 8201' }
    ],
    recommendedSheen: 'Eggshell or Anti-Bacterial Washable Matte',
    roomSuitability: 'Kids Bedrooms, Master Suites, Wellness Rooms'
  },
  {
    id: 'palette-vibrant-ochre',
    name: 'Sunshine Ochre & Midnight Navy',
    mood: 'Energetic, contemporary, architectural',
    category: 'Modern Chic',
    colors: [
      { role: 'Feature Accent', name: 'Ochre Amber', hex: '#E5A93C', code: 'AP 7891' },
      { role: 'Door / Contrast', name: 'Midnight Charcoal', hex: '#1E293B', code: 'AP 8123' },
      { role: 'Main Walls', name: 'Ivory Glaze', hex: '#F9F6F0', code: 'AP 0341' },
      { role: 'Ceiling', name: 'Bright Pure White', hex: '#FFFFFF', code: 'AP 0001' }
    ],
    recommendedSheen: 'Satin Sheen on doors, Super Matte on feature wall',
    roomSuitability: 'Home Offices, Entertainment Rooms & Modern Apartments'
  }
];

export const CONTRACTOR_DETAILS = {
  name: 'Suraj Kumar Sah',
  role: 'Lead Painting Contractor & Master Craftsman',
  experience: '20+ Years Experience',
  experienceYears: 20,
  phone: '+91 7827404001',
  phoneRaw: '917827404001',
  qualities: [
    {
      title: '20 Years Experience',
      desc: 'Deep mastery of high-end emulsion chemistry, surface leveling, waterproof primers, and precision cut-ins across Gurgaon homes.'
    },
    {
      title: 'Work Neatly (Zero Mess)',
      desc: 'Complete floor drop-cloth masking, switchplate sealing, zero splatter on expensive marble/wood, and daily vacuum cleanup.'
    },
    {
      title: 'Work On Time Guaranteed',
      desc: 'Clear timeline commitment with staged milestones. Multi-painter manpower to finish your rooms strictly on schedule.'
    }
  ],
  serviceAreas: 'DLF Phase 1-5, Golf Course Road, Sohna Road, Nirvana Country, Sushant Lok, Cyber City & All Gurgaon Sectors'
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Hello Suraj ji, I saw your Dream House interior painting profile. I would like to get a quote and schedule a site visit for my property in Gurgaon.`;
  const text = customMessage ? customMessage : defaultText;
  return `https://wa.me/917827404001?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl(): string {
  return `tel:+917827404001`;
}

export const SPECIALIST_NEEDS = [
  {
    title: 'Interior Wall Painting',
    residentialUse: 'Refreshes high-traffic living spaces, bedrooms, dining areas, and corridors with clean uniform sheen and zero patchiness.',
    commercialUse: 'Enhances client reception areas, executive suites, and shared workspaces with durable scuff-resistant finishes.',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  {
    title: 'Ceiling Painting',
    residentialUse: 'Restores brightness and eliminates dingy yellowing or water marks with ultra-flat light-reflective white coats.',
    commercialUse: 'Ensures uniform acoustic or drywall ceiling appearances under bright office panel lighting fixtures.',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200'
  },
  {
    title: 'Trim & Baseboard Painting',
    residentialUse: 'Protects skirting boards and door frames from daily vacuum scuffs, mop water stains, and pet scratches.',
    commercialUse: 'Maintains crisp, professional corridor perimeters, conference room borders, and clean floor transitions.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    title: 'Door & Frame Painting',
    residentialUse: 'Restores passage doors, wardrobe surfaces, and utility entrance panels with smooth, drip-free enamel finishes.',
    commercialUse: 'Keeps high-frequency office doors, cabin entrances, and restroom doors cleanly coated and easy to sanitize.',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200'
  },
  {
    title: 'Drywall Patch & Paint',
    residentialUse: 'Fixes anchors, picture hang marks, door-handle dings, and fine hairline settling lines invisibly.',
    commercialUse: 'Repairs partition wall shifts, cable pass-through scars, and monitor mount patch areas before tenant inspections.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    title: 'Complete Interior Repainting',
    residentialUse: 'Full apartment, villa, or builder floor transformation before moving in, after tenancy, or for festive celebrations.',
    commercialUse: 'Full floorplate or office layout repaints scheduled seamlessly around commercial work hours and weekends.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  }
];
