import React, { useState } from 'react';
import {
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Clock,
  Users,
  Compass,
  Layers,
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface AcademicProgramsProps {
  onOpenEnquiry: (gradeHint?: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPrograms =
    activeTab === 'all'
      ? ACADEMIC_PROGRAMS
      : ACADEMIC_PROGRAMS.filter((p) => p.id === activeTab);

  return (
    <section id="academics" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 03 • Comprehensive Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Academic Programs (Grades 1 to 12)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A scaffolded developmental continuum designed to ignite curiosity, cultivate rigorous analytical depth, and prepare students for top tier world universities.
          </p>

          {/* Interactive Level Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Levels (Grades 1–12)
            </button>
            {ACADEMIC_PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === prog.id
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {prog.level}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-3xl p-6 sm:p-8 border ${prog.colorScheme.border} ${prog.colorScheme.bg} transition-all duration-300 hover:shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Card Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white shadow-xs">
                      <BookOpen className={`w-5 h-5 ${prog.colorScheme.accent}`} />
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                        {prog.level}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {prog.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.colorScheme.badge}`}>
                    {prog.grades}
                  </span>
                </div>

                {/* Class / Age Range & Ratio Metrics */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-white/90 border border-slate-200/80 mb-5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Age Cohort</span>
                      <strong className="text-slate-800">{prog.ageRange}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Class Ratio</span>
                      <strong className="text-slate-800">{prog.ratio}</strong>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  {prog.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Key Features & Pedagogical Focus:
                  </h4>
                  {prog.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Curriculum & Action */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>{prog.curriculum}</span>
                </div>

                <button
                  onClick={() => onOpenEnquiry(prog.level)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-bold text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Enquire for {prog.level.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
