import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  FileCheck,
  UserCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { ADMISSION_PROCESS } from '../data/schoolData';

interface AdmissionProcessProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
}

export const AdmissionProcess: React.FC<AdmissionProcessProps> = ({
  onOpenApply,
  onOpenEnquiry,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 06 • 5-Step Admissions Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Transparent 5-Step Admission Flow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your very first enquiry to the welcome orientation, our admissions committee ensures a warm, organized, and stress-free experience for your family.
          </p>

          {/* Quick Flow Summary Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-100/90 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700">
            <span className="px-2.5 py-1 rounded-lg bg-blue-700 text-white font-bold">1. Enquiry</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200">2. Application</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200">3. Assessment / Interaction</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200">4. Selection</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold">5. Enrollment</span>
          </div>
        </div>

        {/* 5 Steps Timeline & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 mb-12">
          {ADMISSION_PROCESS.map((item) => {
            const isCurrent = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-blue-50/80 border-blue-600 shadow-lg ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                        isCurrent
                          ? 'bg-blue-700 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      0{item.step}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1 pt-3 border-t border-slate-100 mb-3">
                    {item.checklist.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{point}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-blue-700 font-semibold italic">
                    💡 {item.actionHint}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">
                Ready to take Step 1 or Step 2 right now?
              </p>
              <p className="text-xs text-slate-500">
                It takes only 3 minutes to submit an enquiry or start your digital application.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              Step 1: Start Enquiry
            </button>
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Step 2: Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
