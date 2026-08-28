import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../data/faqData';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#09DAF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#09DAF6] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#F66504] via-[#F59E0B] to-[#09DAF6] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Clear information regarding surface prep, room scoping, pricing estimation, and rapid scheduling for Gurgaon interiors.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#F66504]/60 bg-slate-900 shadow-xl shadow-[#F66504]/5'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F66504]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                      isOpen ? 'bg-[#F66504] text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F66504]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-block text-[11px] font-bold text-[#09DAF6] bg-slate-800 px-3 py-1 rounded-full border border-slate-700 uppercase tracking-wider">
                        Topic: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F66504]/20 text-[#F66504] flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Have a custom question about your Gurgaon property?
              </div>
              <div className="text-xs text-slate-400">
                Direct consultation with our senior project estimator.
              </div>
            </div>
          </div>
          <a
            href="tel:+917827404001"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F66504] hover:bg-[#de5900] text-white text-xs font-black transition-all shadow-md shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +91 7827404001</span>
          </a>
        </div>

      </div>
    </section>
  );
}
