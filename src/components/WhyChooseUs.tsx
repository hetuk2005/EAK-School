import React from 'react';
import {
  GraduationCap,
  Trophy,
  Building2,
  HeartHandshake,
  Medal,
  ShieldCheck,
  Cpu,
  Compass,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { DIFFERENTIATORS } from '../data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-600" />,
  Trophy: <Trophy className="w-6 h-6 text-amber-500" />,
  Building2: <Building2 className="w-6 h-6 text-indigo-600" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-500" />,
  Medal: <Medal className="w-6 h-6 text-emerald-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-600" />,
  Cpu: <Cpu className="w-6 h-6 text-cyan-600" />,
  Compass: <Compass className="w-6 h-6 text-purple-600" />,
};

interface WhyChooseUsProps {
  onOpenEnquiry: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase">
            <span>Section 02 • Core Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Why Choose EAK International School?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We provide an educational sanctuary where academic rigor meets character development, state-of-the-art facilities, and compassionate mentorship.
          </p>
        </div>

        {/* 8 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <CheckCircle className="w-6 h-6 text-blue-600" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
                <span>{item.highlight}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-serif text-white">
              Experience Our Differentiators in Person
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Meet our academic deans, sit in on a live smart classroom demonstration, and tour our laboratories.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Request Parent Information Kit
          </button>
        </div>
      </div>
    </section>
  );
};
