import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Users,
  Award,
  Shield,
  Star,
  Send,
  Download,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
  onOpenEnquiry: () => void;
  onQuickSubmitSuccess: (info: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onOpenVisit,
  onOpenEnquiry,
  onQuickSubmitSuccess,
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [targetGrade, setTargetGrade] = useState('Grade 1');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phoneNumber.trim()) return;
    setSubmitted(true);
    onQuickSubmitSuccess(
      `Thank you ${parentName}! We received your enquiry for ${targetGrade}. Our admissions officer will call you at ${phoneNumber}.`
    );
    setTimeout(() => {
      setParentName('');
      setPhoneNumber('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines, Value Prop & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Admissions Open Session Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Admissions Open — Academic Session {SCHOOL_INFO.academicSession}</span>
            </div>

            {/* School Name & Main Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-300 font-semibold tracking-widest uppercase text-sm">
                <span>Welcome to</span>
                <span className="w-8 h-0.5 bg-blue-400" />
                <span className="text-white">{SCHOOL_INFO.name}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
                Shaping Confident, <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                  Future-Ready Global
                </span>{' '}
                Leaders.
              </h1>
            </div>

            {/* Short Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              At {SCHOOL_INFO.name}, we integrate experiential Cambridge inquiry, rigorous CBSE standards, state-of-the-art STEAM labs, and holistic sports culture on an 18-acre green campus. We nurture critical thinkers who excel in academics, lead with empathy, and thrive in top global universities.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15:1 Student Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99.4% Board Average</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Olympic Sports Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI & Coding from Gr 3</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GPS Tracked Safe Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% University Placement</span>
              </div>
            </div>

            {/* Primary Action Buttons (Required: Apply Now + Schedule a Visit / Enquire Now) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Apply Now (2027–28)</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                onClick={onOpenVisit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-base backdrop-blur-xs transition-all hover:border-slate-500 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Schedule a Campus Visit</span>
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white font-semibold text-sm underline underline-offset-4 decoration-amber-400/70 hover:decoration-amber-300 transition-colors cursor-pointer"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Rating & Testimonial Snippet */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                Rated <strong className="text-white">4.9/5</strong> by 1,200+ parent reviews
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline">CBSE & Cambridge Certified</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Enquiry Card & Campus Visual Preview */}
          <div className="lg:col-span-5 relative">
            {/* Quick Enquiry Floating Form Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative z-10 text-slate-900 bg-linear-to-b from-white/95 to-slate-50/95">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                    Priority Admissions Desk
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 font-serif">
                    Quick Admission Enquiry
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5">
                Seats filling fast for Academic Session 2027–28. Request a callback and fee breakdown instantly.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-emerald-900 text-sm">Enquiry Registered!</p>
                  <p className="text-xs text-emerald-700">
                    Our Admissions Dean will contact you shortly with the prospectus & fee guide.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickLead} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Hetuk Patel"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 XXXXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Seeking Grade *
                      </label>
                      <select
                        value={targetGrade}
                        onChange={(e) => setTargetGrade(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-slate-900 cursor-pointer"
                      >
                        <option value="Grade 1">Grade 1 (Age 6+)</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6 (Middle)</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9 (Secondary)</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11 (Senior Sec)</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Instant Callback & Prospectus</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 Zero spam guarantee. Your details are strictly confidential.
                  </p>
                </form>
              )}

              {/* Floating Quick Stats Beneath Form */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-100/70 p-2 rounded-lg">
                  <p className="text-base font-extrabold text-blue-900">28+</p>
                  <p className="text-[10px] text-slate-600 font-medium">Years Legacy</p>
                </div>
                <div className="bg-slate-100/70 p-2 rounded-lg">
                  <p className="text-base font-extrabold text-blue-900">15:1</p>
                  <p className="text-[10px] text-slate-600 font-medium">Student Ratio</p>
                </div>
                <div className="bg-slate-100/70 p-2 rounded-lg">
                  <p className="text-base font-extrabold text-amber-600">100%</p>
                  <p className="text-[10px] text-slate-600 font-medium">Board Pass</p>
                </div>
              </div>
            </div>

            {/* Decorative background aura pill */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 text-white px-4 py-3 rounded-2xl border border-slate-700 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md z-20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold">Round 1 Priority Window</p>
                <p className="text-[11px] text-slate-300">Scholarship applications open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
