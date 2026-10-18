import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Heart,
  ArrowUp,
  FileText,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: School Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-700 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-serif tracking-tight">
                  EAK International School
                </span>
                <span className="block text-[11px] text-amber-400 font-semibold">
                  Session 2027–28 Admissions Open
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-md">
              A premier co-educational institution committed to academic rigor, character building, STEAM innovation, and holistic athletic development on a 18-acre green campus.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <p className="text-white font-bold text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Affiliation & Certifications
              </p>
              <p className="text-[11px] text-slate-400">
                {SCHOOL_INFO.affiliation} • ISO 9001:2015 Educational Standard
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Explore School
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why EAK School
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors">
                  Academic Programs (Gr 1–12)
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-amber-400 transition-colors">
                  Highlights & Statistics
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  18-Acre Modern Facilities
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  5-Step Admission Flow
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Admissions Desk
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#dates" className="hover:text-amber-400 transition-colors">
                  Key Dates & Deadlines
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-amber-400 transition-colors">
                  Required Documents Checklist
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-amber-400 transition-colors">
                  Fee Schedule & Calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  Parent Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact & Visit
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${SCHOOL_INFO.admissionsHotline}`} className="hover:text-white">
                {SCHOOL_INFO.admissionsHotline}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white">
                {SCHOOL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{SCHOOL_INFO.campusHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Interview attribution & back to top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            <p>
              © {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-slate-500 mt-0.5">
              Frontend Hiring Assignment for <strong>EakPustak Pvt. Ltd.</strong> by{' '}
              <strong className="text-slate-300">Hetuk Vinod Patel</strong>.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
