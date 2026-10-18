import React from 'react';
import { X, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import type { Facility } from '../types';

interface FacilityDetailModalProps {
  facility: Facility | null;
  onClose: () => void;
  onOpenVisit: () => void;
}

export const FacilityDetailModal: React.FC<FacilityDetailModalProps> = ({
  facility,
  onClose,
  onOpenVisit,
}) => {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 bg-slate-900">
          <img
            src={facility.imageUrl}
            alt={facility.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 inline-block mb-2">
              {facility.badge} • {facility.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">
              {facility.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {facility.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Infrastructure & Safety Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facility.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              EAK Main Campus • Sector 24
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenVisit();
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>See During Campus Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
