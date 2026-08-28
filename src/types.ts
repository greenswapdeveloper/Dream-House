export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  scopeHighlights: string[];
  recommendedFor: string;
  imageFileName?: string;
  colorAccent?: string;
  bgGradient?: string;
  startingRate?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Accent Wall' | 'Trim & Doors' | 'Full Home';
  location: string;
  image: string;
  finishType: string;
  colorPalette: { name: string; hex: string }[];
  duration: string;
  highlights: string[];
}

export interface ColorPaletteItem {
  id: string;
  name: string;
  mood: string;
  category: 'Warm & Cozy' | 'Regal & Bold' | 'Calm & Serene' | 'Modern Chic' | 'Vibrant Energetic';
  colors: {
    role: string;
    name: string;
    hex: string;
    code: string;
  }[];
  recommendedSheen: string;
  roomSuitability: string;
}

export interface EstimateFormState {
  propertyType: 'Residential' | 'Commercial' | '';
  selectedServices: string[];
  areasToPaint: string[];
  approxRooms: string;
  paintGrade: 'Standard Washable' | 'Premium Silk & Sheen' | 'Luxury Royal Emulsion' | 'Eco Anti-Bacterial';
  wallCondition: string;
  minorPatching: 'Yes' | 'No' | 'Not sure' | '';
  colorTransition: string;
  preferredColorDirection: string;
  occupancyStatus: 'Furnished' | 'Vacant / Empty' | 'Partially Furnished' | '';
  projectTiming: string;
  serviceArea: string;
  fullName: string;
  phone: string;
  additionalNotes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  iconName?: string;
  accentColor?: string;
}
