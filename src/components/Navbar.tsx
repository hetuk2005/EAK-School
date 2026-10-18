import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Calendar,
  Menu,
  X,
  FileText,
  ChevronRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why EAK', href: '#why-us' },
    { name: 'Academics', href: '#academics' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admission Flow', href: '#process' },
    { name: 'Key Dates', href: '#dates' },
    { name: 'Documents', href: '#documents' },
    { name: 'Fee Structure', href: '#fees' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-[11px] border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Session 2027–28
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Admissions Open for Grades 1 through 12 | Early Bird Assistance Open
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${SCHOOL_INFO.admissionsHotline}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium hidden md:inline">Hotline:</span> {SCHOOL_INFO.admissionsHotline}
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <button
              onClick={() => {
                window.print();
              }}
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors font-medium"
              title="Print or Save Page as PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Print Prospectus</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-serif">
                  EAK
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold tracking-wider uppercase border border-blue-200">
                  International School
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Excellence • Integrity • Innovation
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVisit}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300/80 transition-all shadow-xs"
            >
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>Campus Visit</span>
            </button>
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 rounded-lg shadow-md shadow-blue-700/25 hover:shadow-lg transition-all"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-700 rounded-lg"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-4 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisit();
                }}
                className="w-full py-2.5 px-4 rounded-lg border border-slate-300 font-semibold text-slate-800 flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Schedule a Campus Tour</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-700 text-white font-bold flex items-center justify-center gap-2 shadow-md hover:bg-blue-800"
              >
                <span>Apply / Enquire for 2027–28</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
