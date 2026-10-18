import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  PhoneCall,
  CheckCircle,
  Shield,
  Clock,
  Award,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FinalCTAProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
  onOpenTalk: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenApply,
  onOpenVisit,
  onOpenTalk,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 lg:py-28">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section 12 Identifier Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 12 • Shape Their Tomorrow Today</span>
          </div>

          {/* Strong Required Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-serif leading-tight">
            Give Your Child a <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Future-Ready Education
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Academic Session <strong>{SCHOOL_INFO.academicSession}</strong> admissions are now open for Grades 1 through 12. Join a vibrant community where intellectual rigor and human values go hand-in-hand.
          </p>

          {/* Three Required Actions: Apply Now, Book a Campus Visit, Talk to Our Admissions Team */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* 1. Apply Now */}
            <button
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            {/* 2. Book a Campus Visit */}
            <button
              onClick={onOpenVisit}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-blue-700" />
              <span>Book a Campus Visit</span>
            </button>

            {/* 3. Talk to Our Admissions Team */}
            <button
              onClick={onOpenTalk}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-base backdrop-blur-xs transition-all hover:border-slate-500 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>Talk to Our Admissions Team</span>
            </button>
          </div>

          {/* Reassurance Guarantees */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-Pressure Admissions Counseling</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Transparent Fee Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Response within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
