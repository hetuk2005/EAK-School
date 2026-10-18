import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';

interface FAQSectionProps {
  onOpenEnquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // First open by default for immediate preview
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = ['All', 'Admissions', 'Academics & Faculty', 'Fees & Transport', 'Campus Visit'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 11 • Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find prompt clarity on age eligibility, assessments, bus routes, fee schedules, and campus visit logistics.
          </p>

          {/* Search Box */}
          <div className="relative max-w-lg mx-auto pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic: e.g. age, documents, test, fee, bus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-700 font-bold">No matching questions found.</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with different keywords or contact our admissions desk.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fadeIn">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-blue-700 font-semibold">
                        <span className="px-2 py-0.5 rounded bg-blue-100/70">{faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Help Banner Box */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-serif text-white">
              Have a Specific or Unique Question?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Admissions Counselors are available on phone, email, and live consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SCHOOL_INFO.admissionsHotline}`}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Ask Our Counselors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
