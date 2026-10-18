import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export const ParentTestimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 10 • Community Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            What Parents Say About EAK International
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from our parent community whose children learn, grow, and excel with us every day.
          </p>
        </div>

        {/* Testimonials 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                idx === activeIdx
                  ? 'bg-blue-50/60 border-blue-300 shadow-lg ring-2 ring-blue-500/20'
                  : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:shadow-md'
              }`}
            >
              <div>
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-blue-200 shrink-0" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.parentName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {t.parentName}
                    </h4>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{t.parentDesignation}</p>
                  <span className="inline-block mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    {t.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>
              98% of surveyed parents actively recommend EAK International School to friends and family.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
