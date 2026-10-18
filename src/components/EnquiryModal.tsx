import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  School,
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
  isApplication?: boolean;
  onSuccess: (message: string) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultGrade,
  isApplication = false,
  onSuccess,
}) => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState(defaultGrade || 'Grade 1');
  const [currentSchool, setCurrentSchool] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (defaultGrade) {
      setGrade(defaultGrade);
    }
  }, [defaultGrade]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !email.trim()) return;

    const generatedId = `EAK-2027-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    onSuccess(
      isApplication
        ? `Application #${generatedId} initiated for ${studentName || 'Student'}! Check email for submission confirmation.`
        : `Enquiry #${generatedId} registered! Our admissions desk will call you at ${phone}.`
    );
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-scaleUp text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Submission Successful
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                {isApplication ? 'Application Initiated!' : 'Admission Enquiry Registered!'}
              </h3>
              <p className="text-xs text-slate-500 font-mono">Reference ID: {ticketId}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-700">
              <p>
                <strong>Parent Name:</strong> {parentName}
              </p>
              {studentName && (
                <p>
                  <strong>Student Name:</strong> {studentName}
                </p>
              )}
              <p>
                <strong>Target Grade:</strong> {grade} (Session {SCHOOL_INFO.academicSession})
              </p>
              <p>
                <strong>Contact Registered:</strong> {phone} • {email}
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              Our Senior Admissions Counselor has been assigned to your profile. An official PDF brochure and prospectus has been dispatched to <strong>{email}</strong>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Done & Return to Page
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                Session {SCHOOL_INFO.academicSession}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                • {isApplication ? 'Digital Registration' : 'Admissions Enquiry Desk'}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-1">
              {isApplication ? 'Online Application Starter' : 'Enquire About Admissions'}
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Complete this brief form to receive fee details, syllabus guides, and callback from our admissions dean.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Hetuk Patel"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seeking Admission For *
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="Grade 1">Grade 1 (Age 6+)</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6 (Middle School)</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9 (Secondary)</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 - Science">Grade 11 (Science - PCM/PCB)</option>
                    <option value="Grade 11 - Commerce">Grade 11 (Commerce)</option>
                    <option value="Grade 11 - Humanities">Grade 11 (Humanities)</option>
                    <option value="Grade 12">Grade 12 (Board Prep)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current School / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. St. Xavier / New Delhi"
                    value={currentSchool}
                    onChange={(e) => setCurrentSchool(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Questions or Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about school bus routes, sports academies, fee installments, etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isApplication ? 'Submit Application Starter' : 'Submit Admission Enquiry'}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                By submitting, you agree to receive official admission updates via SMS/WhatsApp & Email.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
