import { useState, useId } from 'react';
import {
  Phone,
  Copy,
  Check,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Building2,
  Home,
  CheckCircle2,
  FileText,
  Sparkles,
  Award,
  Clock,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { EstimateFormState } from '../types';
import { CONTRACTOR_DETAILS, getWhatsAppUrl, getPhoneUrl } from '../data/servicesData';

interface EstimateRequestFlowProps {
  initialService?: string;
}

export default function EstimateRequestFlow({ initialService }: EstimateRequestFlowProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const initialForm: EstimateFormState = {
    propertyType: 'Residential',
    selectedServices: initialService ? [initialService] : ['Interior Wall Painting'],
    areasToPaint: ['Walls'],
    approxRooms: '2-3 Rooms',
    paintGrade: 'Premium Silk & Sheen',
    wallCondition: 'Minor marks/scuffs',
    minorPatching: 'Yes',
    colorTransition: 'Light to Light',
    preferredColorDirection: 'Warm neutral / Off-white',
    occupancyStatus: 'Furnished',
    projectTiming: 'Within 2 weeks',
    serviceArea: 'Gurgaon',
    fullName: '',
    phone: '',
    additionalNotes: '',
  };

  const [form, setForm] = useState<EstimateFormState>(initialForm);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});

  const toggleService = (svc: string) => {
    setForm((prev) => {
      const exists = prev.selectedServices.includes(svc);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== svc) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, svc] };
      }
    });
  };

  const toggleArea = (area: string) => {
    setForm((prev) => {
      const exists = prev.areasToPaint.includes(area);
      if (exists) {
        return { ...prev, areasToPaint: prev.areasToPaint.filter((a) => a !== area) };
      } else {
        return { ...prev, areasToPaint: [...prev.areasToPaint, area] };
      }
    });
  };

  const validateStep3 = (): boolean => {
    const errs: { fullName?: string; phone?: string } = {};
    if (!form.fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (validateStep3()) {
        setCurrentStep(4);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setCurrentStep(1);
    setCopied(false);
  };

  // Generate formatted summary
  const summaryText = `DREAM HOUSE - INTERIOR PAINTING ESTIMATE REQUEST
Contractor: ${CONTRACTOR_DETAILS.name} (20+ Yrs Exp)
Phone / WhatsApp: ${CONTRACTOR_DETAILS.phone}

Customer & Location:
- Contact Name: ${form.fullName || 'Not provided'}
- Phone: ${form.phone || 'Not provided'}
- Service Area: ${form.serviceArea || 'Gurgaon'}

Project Scope:
- Property Type: ${form.propertyType}
- Selected Services: ${form.selectedServices.join(', ') || 'Interior Wall Painting'}
- Areas to Paint: ${form.areasToPaint.join(', ') || 'Walls'}
- Scope / Rooms: ${form.approxRooms}
- Paint Grade: ${form.paintGrade}
- Occupancy State: ${form.occupancyStatus}
- Wall Condition: ${form.wallCondition}
- Minor Patching: ${form.minorPatching}
- Color Transition: ${form.colorTransition}
- Preferred Color: ${form.preferredColorDirection}
- Timing: ${form.projectTiming}
${form.additionalNotes.trim() ? `- Notes: ${form.additionalNotes}` : ''}`.trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const nameInputId = useId();
  const phoneInputId = useId();
  const areaInputId = useId();
  const notesInputId = useId();

  return (
    <section id="estimate-flow" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F66504]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#03FC4E] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#03FC4E] animate-pulse"></span>
            <span>Online Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Plan Your{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Painting Estimate
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your property type, rooms, and surface requirements. At the end, you will receive a clean summary to use when calling our Gurgaon estimator.
          </p>
        </div>

        {/* Progress Stepper Bar */}
        <div className="mb-10" aria-label="Estimate steps progress">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-0" />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#F66504] to-[#09DAF6] transition-all duration-300 -z-0"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />

            {[
              { step: 1, label: 'Scope' },
              { step: 2, label: 'Surfaces' },
              { step: 3, label: 'Contact' },
              { step: 4, label: 'Summary' },
            ].map((st) => (
              <div key={st.step} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors shadow-lg ${
                    currentStep >= st.step
                      ? 'bg-gradient-to-tr from-[#F66504] to-[#ff7d26] text-white shadow-[#F66504]/30'
                      : 'bg-slate-900 border-2 border-slate-700 text-slate-500'
                  }`}
                >
                  {currentStep > st.step ? <Check className="w-5 h-5 text-white" /> : st.step}
                </div>
                <span
                  className={`text-xs font-bold mt-2 ${
                    currentStep >= st.step ? 'text-[#09DAF6]' : 'text-slate-500'
                  }`}
                >
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* STEP 1: Property & Scope */}
          {currentStep === 1 && (
            <div className="space-y-7">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#F66504]">01.</span>
                  <span>Property Type &amp; Painting Scope</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Select your property structure and areas to paint.
                </p>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, propertyType: 'Residential' })}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      form.propertyType === 'Residential'
                        ? 'border-[#F66504] bg-slate-800/90 ring-2 ring-[#F66504]/30 shadow-lg'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-[#F66504]/20 text-[#F66504]">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Residential</div>
                      <div className="text-xs text-slate-400">Apartment, Villa, Floor</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, propertyType: 'Commercial' })}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      form.propertyType === 'Commercial'
                        ? 'border-[#09DAF6] bg-slate-800/90 ring-2 ring-[#09DAF6]/30 shadow-lg'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-[#09DAF6]/20 text-[#09DAF6]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Commercial</div>
                      <div className="text-xs text-slate-400">Office, Retail, Clinic</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Areas to Paint */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Surfaces to Include (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Walls', 'Ceilings', 'Trim & Baseboards', 'Doors'].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => toggleArea(area)}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.areasToPaint.includes(area)
                          ? 'border-[#03FC4E] bg-[#03FC4E]/15 text-[#03FC4E] ring-1 ring-[#03FC4E]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Approximate Rooms */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Approximate Number of Rooms or Zones
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['1 Room / Touch-up', '2-3 Rooms', '4-5 Rooms', 'Full Floorplate / Entire Home'].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setForm({ ...form, approxRooms: count })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.approxRooms === count
                          ? 'border-[#F66504] bg-[#F66504]/20 text-[#F66504] ring-1 ring-[#F66504]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Furnished or Vacant */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Occupancy State
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Furnished', 'Vacant / Empty', 'Partially Furnished'].map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setForm({ ...form, occupancyStatus: occ as any })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.occupancyStatus === occ
                          ? 'border-[#09DAF6] bg-[#09DAF6]/20 text-white ring-1 ring-[#09DAF6]'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Surface & Color Details */}
          {currentStep === 2 && (
            <div className="space-y-7">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#09DAF6]">02.</span>
                  <span>Surface Condition &amp; Color Preferences</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Help us understand current wall state and desired timing.
                </p>
              </div>

              {/* Current Wall Condition */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Current Wall Condition
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Good condition (Ready for paint)',
                    'Minor marks/scuffs',
                    'Nail holes or hairline cracks',
                    'Flaking or previous peeling'
                  ].map((cond) => (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => setForm({ ...form, wallCondition: cond })}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all ${
                        form.wallCondition === cond
                          ? 'border-[#F66504] bg-[#F66504]/20 text-[#F66504] ring-1 ring-[#F66504]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minor Patching Needed */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Minor Drywall Patching Needed?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Yes', 'No', 'Not sure'].map((patch) => (
                    <button
                      key={patch}
                      type="button"
                      onClick={() => setForm({ ...form, minorPatching: patch as any })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.minorPatching === patch
                          ? 'border-[#03FC4E] bg-[#03FC4E]/20 text-[#03FC4E] ring-1 ring-[#03FC4E]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {patch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Transition */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Existing Color Change
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Light to Light', 'Dark to Light', 'Light to Dark', 'Not sure yet'].map((trans) => (
                    <button
                      key={trans}
                      type="button"
                      onClick={() => setForm({ ...form, colorTransition: trans })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.colorTransition === trans
                          ? 'border-[#09DAF6] bg-[#09DAF6]/20 text-white ring-1 ring-[#09DAF6]'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {trans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Color Direction */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Preferred Color Direction
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Warm neutral / Off-white',
                    'Crisp White',
                    'Cool Greys',
                    'Accent Wall Tones',
                    'Same existing shade',
                    'Undecided'
                  ].map((dir) => (
                    <button
                      key={dir}
                      type="button"
                      onClick={() => setForm({ ...form, preferredColorDirection: dir })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.preferredColorDirection === dir
                          ? 'border-[#09DAF6] bg-[#09DAF6]/20 text-[#09DAF6] ring-1 ring-[#09DAF6]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desired Timing */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Desired Project Timing
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['As soon as possible', 'Within 2 weeks', 'Next month', 'Flexible'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setForm({ ...form, projectTiming: time })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        form.projectTiming === time
                          ? 'border-[#F66504] bg-[#F66504]/20 text-[#F66504] ring-1 ring-[#F66504]'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Property Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#03FC4E]">03.</span>
                  <span>Contact &amp; Property Information</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Please enter your name and phone number to finalize your project summary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={nameInputId}
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-[#F66504]">*</span>
                  </label>
                  <input
                    id={nameInputId}
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => {
                      setForm({ ...form, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F66504] focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={phoneInputId}
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Phone Number <span className="text-[#F66504]">*</span>
                  </label>
                  <input
                    id={phoneInputId}
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F66504] focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor={areaInputId}
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Gurgaon Area / Sector
                </label>
                <input
                  id={areaInputId}
                  type="text"
                  value={form.serviceArea}
                  onChange={(e) => setForm({ ...form, serviceArea: e.target.value })}
                  placeholder="e.g. DLF Phase 5, Golf Course Ext, Sector 57, Gurgaon"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F66504] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor={notesInputId}
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Additional Project Notes (Optional)
                </label>
                <textarea
                  id={notesInputId}
                  rows={3}
                  value={form.additionalNotes}
                  onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                  placeholder="Any specific requirements (e.g., high ceilings, moving furniture, specific room colors, weekend preference)..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F66504] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Generated Summary & Phone / WhatsApp Actions */}
          {currentStep === 4 && (
            <div className="space-y-6">
              
              {/* Success Header */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-[#03FC4E]/20 text-[#03FC4E] flex items-center justify-center font-bold shadow-lg shadow-[#03FC4E]/10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">
                    Your Estimate Request Summary Is Ready
                  </h3>
                  <p className="text-xs text-slate-400">
                    Send directly to contractor {CONTRACTOR_DETAILS.name} via WhatsApp or call for same-day site visit.
                  </p>
                </div>
              </div>

              {/* Contractor Guarantee Profile Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#F66504] to-[#25D366] p-0.5 shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                      SK
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                      <span>{CONTRACTOR_DETAILS.name}</span>
                      <span className="text-[10px] text-[#03FC4E] bg-[#03FC4E]/10 px-2 py-0.5 rounded-md border border-[#03FC4E]/20">
                        Lead Contractor
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">
                      20 Years Experience · Work Neatly · Work On Time Guaranteed
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium sm:text-right">
                  <span>Direct Hotline:</span>
                  <div className="text-sm font-black text-[#09DAF6]">{CONTRACTOR_DETAILS.phone}</div>
                </div>
              </div>

              {/* Summary Code Box */}
              <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#09DAF6]">
                    <FileText className="w-4 h-4" />
                    <span>Formatted Project Summary</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#03FC4E]" />
                        <span className="text-[#03FC4E]">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  {summaryText}
                </pre>
              </div>

              {/* 1-Click Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* 1-Click WhatsApp Direct Submission */}
                <a
                  id="summary-whatsapp-btn"
                  href={getWhatsAppUrl(`Hello Suraj ji, here is my Dream House interior painting estimate request details:\n\n${summaryText}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-sm font-black shadow-xl shadow-[#25D366]/25 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.796.814 3.182 0 5.769-2.587 5.769-5.766 0-3.18-2.587-5.766-5.769-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-5.181 1.358 1.382-5.051c-.886-1.493-1.382-3.238-1.382-5.069 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                  </svg>
                  <span>1-Click Send to WhatsApp</span>
                </a>

                {/* 1-Click Direct Call */}
                <a
                  id="summary-call-btn"
                  href={getPhoneUrl()}
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#de5900] hover:to-[#f06e14] text-white text-sm font-black shadow-xl shadow-[#F66504]/25 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>Call {CONTRACTOR_DETAILS.phone}</span>
                </a>

              </div>

              {/* Reset button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-slate-400 hover:text-white text-xs font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Plan Another Estimate</span>
                </button>
              </div>

            </div>
          )}

          {/* Navigation Controls */}
          {currentStep < 4 && (
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F66504] to-[#ff7d26] hover:from-[#de5900] hover:to-[#f06e14] text-white text-xs font-black shadow-lg shadow-[#F66504]/20 transition-all hover:scale-105"
              >
                <span>{currentStep === 3 ? 'Generate Request Summary' : 'Continue to Next Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
