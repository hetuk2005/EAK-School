import React, { useState } from 'react';
import {
  Check,
  Maximize2,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { FACILITIES } from '../data/schoolData';
import type { Facility } from '../types';

interface FacilitiesProps {
  onSelectFacility: (facility: Facility) => void;
  onOpenVisit: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({
  onSelectFacility,
  onOpenVisit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academics', 'Labs & Tech', 'Sports', 'Campus Life'];

  const filteredFacilities =
    selectedCategory === 'All'
      ? FACILITIES
      : FACILITIES.filter((f) => f.category === selectedCategory);

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 05 • Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            World-Class 18-Acre Modern Facilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Thoughtfully built spaces engineered to stimulate innovation, athletic excellence, safety, and holistic student well-being.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => onSelectFacility(facility)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={facility.imageUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 backdrop-blur-xs shadow-xs">
                    {facility.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-white/80 text-slate-800 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {facility.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2 group-hover:text-blue-700 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-1.5">
                    {facility.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold group-hover:bg-blue-50/50 transition-colors">
                <span>Explore Spec Sheet</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to tour campus */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenVisit}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book a Guided Walkthrough of These Facilities</span>
          </button>
        </div>
      </div>
    </section>
  );
};
