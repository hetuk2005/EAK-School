import React from 'react';
import {
  Award,
  Users,
  BookOpen,
  Sparkles,
  TrendingUp,
  Building,
  CheckCircle,
  GraduationCap,
  Globe2,
  ShieldAlert,
} from 'lucide-react';
import { HIGHLIGHT_STATS } from '../data/schoolData';

const statIconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7 text-amber-500" />,
  Users: <Users className="w-7 h-7 text-blue-500" />,
  BookOpen: <BookOpen className="w-7 h-7 text-indigo-500" />,
  Sparkles: <Sparkles className="w-7 h-7 text-purple-500" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-500" />,
  Building: <Building className="w-7 h-7 text-teal-500" />,
};

export const SchoolHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-400/30">
            <span>Section 04 • Proven Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
            School Highlights & Numbers of Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Over nearly three decades, our benchmark standards of excellence have fostered thousands of leaders, scholars, and Olympic aspirants.
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {HIGHLIGHT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 text-center flex flex-col justify-between hover:bg-slate-800 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {statIconMap[stat.icon] || <Award className="w-6 h-6 text-amber-400" />}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mb-1 leading-snug">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility & Accreditation Strip */}
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Dual Board Affiliation</h4>
                <p className="text-xs text-slate-400">
                  Affiliated with CBSE (Affil. 2130889) & Cambridge Assessment International Education.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Global Alumni Network</h4>
                <p className="text-xs text-slate-400">
                  Graduates studying at Oxford, MIT, Stanford, IIT Bombay, AIIMS, and IIM Ahmedabad.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">ISO 9001:2015 Certified</h4>
                <p className="text-xs text-slate-400">
                  Certified quality management system for pedagogical excellence and campus hygiene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
