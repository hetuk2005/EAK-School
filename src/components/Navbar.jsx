import { useState } from 'react';
import { Calendar, ChevronRight, GraduationCap, Menu, Phone, Sparkles, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

const navLinks = [
  { name: 'Why EAK', href: '#why-us' },
  { name: 'Academics', href: '#academics' },
  { name: 'Campus', href: '#facilities' },
  { name: 'Admissions', href: '#process' },
  { name: 'Key Dates', href: '#dates' },
  { name: 'Fees', href: '#fees' },
  { name: 'Stories', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
];

export const Navbar = ({ onOpenEnquiry, onOpenVisit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="bg-slate-900 text-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
              <Sparkles className="h-3 w-3" /> Admissions 2027–28
            </span>
            <span className="hidden truncate text-xs text-slate-300 md:inline">Now welcoming applications for Grades 1–12</span>
          </div>
          <a href={`tel:${SCHOOL_INFO.admissionsHotline}`} className="inline-flex shrink-0 items-center gap-2 text-xs font-medium transition-colors hover:text-amber-300 sm:text-sm">
            <Phone className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden sm:inline">Admissions</span> {SCHOOL_INFO.admissionsHotline}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex min-w-0 items-center gap-3" aria-label="EAK International School home">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-700 text-white shadow-md shadow-blue-900/20 transition-transform group-hover:scale-105">
              <GraduationCap className="h-7 w-7 text-amber-400" />
            </span>
            <span className="min-w-0">
              <span className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-serif text-2xl font-extrabold tracking-tight text-slate-900">EAK</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 sm:text-sm">International School</span>
              </span>
              <span className="hidden text-[11px] font-medium tracking-wide text-slate-500 sm:block">Excellence · Integrity · Innovation</span>
            </span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <button onClick={onOpenVisit} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50">
              <Calendar className="h-4 w-4 text-blue-700" /> Visit Campus
            </button>
            <button onClick={onOpenEnquiry} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-700/20 transition hover:from-blue-800 hover:to-indigo-900">
              Enquire Now <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={onOpenEnquiry} className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-bold text-white sm:text-sm">Enquire</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <nav aria-label="Main navigation" className="hidden border-t border-slate-100 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-1 px-4 py-2 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-800">{link.name}</a>
            ))}
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-xl md:hidden">
            <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-800">{link.name}</a>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <button onClick={() => { closeMenu(); onOpenVisit(); }} className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 font-semibold text-slate-800 hover:bg-slate-50">
                <Calendar className="h-4 w-4 text-blue-700" /> Schedule a Campus Visit
              </button>
              <button onClick={() => { closeMenu(); onOpenEnquiry(); }} className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-2.5 font-bold text-white shadow-md hover:bg-blue-800">
                Apply / Enquire for 2027–28 <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
