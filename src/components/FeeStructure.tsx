import React, { useState } from 'react';
import {
  CreditCard,
  Calculator,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import { FEE_DATA } from '../data/schoolData';

interface FeeStructureProps {
  onOpenEnquiry: (gradeHint?: string) => void;
}

export const FeeStructure: React.FC<FeeStructureProps> = ({ onOpenEnquiry }) => {
  // Interactive Calculator State
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(0);
  const [paymentFrequency, setPaymentFrequency] = useState<'annual' | 'quarterly'>('quarterly');
  const [includeTransport, setIncludeTransport] = useState<boolean>(true);
  const [includeMeals, setIncludeMeals] = useState<boolean>(false);

  const activeGrade = FEE_DATA[selectedGradeIndex];

  // Calculations
  const transportPerQuarter = 2500;
  const mealsPerQuarter = 3000;

  const transportAnnual = transportPerQuarter * 4;
  const mealsAnnual = mealsPerQuarter * 4;

  const baseAnnual = activeGrade.annualFee;
  const admissionFee = activeGrade.admissionFee;

  let netTuitionPayable = baseAnnual;
  let discountAmount = 0;

  if (paymentFrequency === 'annual') {
    discountAmount = Math.round(baseAnnual * 0.05); // 5% upfront savings
    netTuitionPayable = baseAnnual - discountAmount;
  }

  const netPayableToday =
    paymentFrequency === 'annual'
      ? netTuitionPayable +
        admissionFee +
        (includeTransport ? transportAnnual : 0) +
        (includeMeals ? mealsAnnual : 0)
      : Math.round(baseAnnual / 4) +
        admissionFee +
        (includeTransport ? transportPerQuarter : 0) +
        (includeMeals ? mealsPerQuarter : 0);

  return (
    <section id="fees" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 09 • Transparent Fee Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Fee Information (Academic Session 2027–28)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparent, zero-hidden-cost pricing structure designed with flexibility for families. Explore the official schedule and try our interactive installment calculator below.
          </p>
        </div>

        {/* 1. Official Required Fee Table Display */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden mb-16">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Official Board Schedule
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                Annual & Admission Fee Structure
              </h3>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Capitation Fee • Fixed for Entire Academic Session</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-6">Grade Range</th>
                  <th className="py-4 px-6">Annual Fee</th>
                  <th className="py-4 px-6">Admission Fee (One-Time)</th>
                  <th className="py-4 px-6">Quarterly Installment</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {FEE_DATA.map((item, idx) => (
                  <tr
                    key={item.gradeRange}
                    className="hover:bg-blue-50/40 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                          0{idx + 1}
                        </span>
                        <span>{item.gradeRange}</span>
                        {item.popular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 ml-2">
                            Most Inquired
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-normal mt-1 pl-10">
                        {item.description}
                      </p>
                    </td>

                    <td className="py-5 px-6">
                      <span className="text-lg font-extrabold text-blue-900 font-mono">
                        Rs. {item.annualFee.toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[11px] text-slate-500">Per Academic Year</span>
                    </td>

                    <td className="py-5 px-6">
                      <span className="text-base font-bold text-slate-800 font-mono">
                        Rs. {item.admissionFee.toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[11px] text-slate-500">Payable at enrollment</span>
                    </td>

                    <td className="py-5 px-6">
                      <span className="text-sm font-semibold text-emerald-700 font-mono">
                        Rs. {item.quarterlyTuition.toLocaleString('en-IN')} / Qtr
                      </span>
                      <span className="block text-[11px] text-slate-500">4 easy installments</span>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => onOpenEnquiry(item.gradeRange)}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Enquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fee Inclusions Footnote */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Annual Fee includes:</strong> Tuition, Smart Lab Access, Library Membership, Regular Sports Coaching & Infirmary Care.
              </span>
            </div>
            <span className="text-slate-500 italic">
              * Optional transport & cafeteria billed separately per opted route & meal plan.
            </span>
          </div>
        </div>

        {/* 2. Interactive Fee & Installment Calculator */}
        <div className="bg-linear-to-br from-white to-blue-50/60 rounded-3xl border border-blue-200/80 p-6 sm:p-10 shadow-lg relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-md">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Interactive Planning Tool
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                Instant Fee & Installment Estimator
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Grade Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  1. Select Grade Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {FEE_DATA.map((item, idx) => (
                    <button
                      key={item.gradeRange}
                      type="button"
                      onClick={() => setSelectedGradeIndex(idx)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedGradeIndex === idx
                          ? 'bg-blue-700 text-white border-blue-700 shadow-md font-bold'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 font-semibold'
                      }`}
                    >
                      <span className="block text-sm">{item.gradeRange}</span>
                      <span
                        className={`text-[10px] block mt-0.5 ${
                          selectedGradeIndex === idx ? 'text-blue-100' : 'text-slate-500'
                        }`}
                      >
                        Rs. {item.annualFee.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Frequency Switch */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  2. Choose Payment Schedule
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentFrequency('quarterly')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      paymentFrequency === 'quarterly'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-bold text-sm text-slate-900">
                      4 Quarterly Installments
                    </span>
                    <span className="text-xs text-slate-500">
                      Even cashflow across the academic term
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentFrequency('annual')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      paymentFrequency === 'annual'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">One-Time Annual</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Save 5%
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">
                      Save Rs. {Math.round(activeGrade.annualFee * 0.05).toLocaleString('en-IN')} upfront
                    </span>
                  </button>
                </div>
              </div>

              {/* Optional Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  3. Optional Services
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeTransport}
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <div>
                        <span className="font-bold text-slate-800 text-sm">
                          GPS Tracked AC School Bus
                        </span>
                        <span className="block text-xs text-slate-500">
                          Door-to-door safe transit with female conductor
                        </span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-slate-800">
                      +Rs. 2,500/qtr
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeMeals}
                        onChange={(e) => setIncludeMeals(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <div>
                        <span className="font-bold text-slate-800 text-sm">
                          Farm-to-Table Organic Lunch & Snack
                        </span>
                        <span className="block text-xs text-slate-500">
                          Dietitian curated fresh daily hot meals
                        </span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sm text-slate-800">
                      +Rs. 3,000/qtr
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <span className="text-xs uppercase font-bold text-slate-400">
                    Estimate Summary
                  </span>
                  <span className="text-xs font-bold text-amber-400">
                    {activeGrade.gradeRange}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Base Annual Tuition</span>
                    <span className="font-mono text-white">
                      Rs. {activeGrade.annualFee.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {paymentFrequency === 'annual' && discountAmount > 0 && (
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>5% Annual Payment Rebate</span>
                      <span className="font-mono">-Rs. {discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-slate-300">
                    <span>One-Time Admission Fee</span>
                    <span className="font-mono text-white">
                      Rs. {activeGrade.admissionFee.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {includeTransport && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span>
                        Transport ({paymentFrequency === 'annual' ? 'Annual' : 'Quarter 1'})
                      </span>
                      <span className="font-mono text-white">
                        +Rs.{' '}
                        {(paymentFrequency === 'annual'
                          ? transportAnnual
                          : transportPerQuarter
                        ).toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  {includeMeals && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span>
                        Cafeteria Meal ({paymentFrequency === 'annual' ? 'Annual' : 'Quarter 1'})
                      </span>
                      <span className="font-mono text-white">
                        +Rs.{' '}
                        {(paymentFrequency === 'annual'
                          ? mealsAnnual
                          : mealsPerQuarter
                        ).toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">
                    {paymentFrequency === 'annual'
                      ? 'Total Payable for Complete Session (inc. Admission Fee)'
                      : 'Initial Payment Today (Admission Fee + Quarter 1)'}
                  </span>
                  <div className="text-3xl font-extrabold text-amber-400 font-mono">
                    Rs. {netPayableToday.toLocaleString('en-IN')}
                  </div>
                  {paymentFrequency === 'quarterly' && (
                    <p className="text-[11px] text-slate-400 mt-1">
                      Subsequent 3 quarters: ~Rs.{' '}
                      {(
                        Math.round(activeGrade.annualFee / 4) +
                        (includeTransport ? transportPerQuarter : 0) +
                        (includeMeals ? mealsPerQuarter : 0)
                      ).toLocaleString('en-IN')}{' '}
                      each.
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenEnquiry(activeGrade.gradeRange)}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Official Fee Receipt & Prospectus</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  * 10% Sibling concession applicable for enrolled brothers/sisters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
