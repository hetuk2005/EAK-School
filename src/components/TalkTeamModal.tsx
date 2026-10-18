import React, { useState } from 'react';
import {
  X,
  PhoneCall,
  Clock,
  UserCheck,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TalkTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const TalkTeamModal: React.FC<TalkTeamModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [callerName, setCallerName] = useState('');
  const [phone, setPhone] = useState('');
  const [urgency, setUrgency] = useState('Within 15 minutes');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callerName.trim() || !phone.trim()) return;
    setSubmitted(true);
    onSuccess(`Callback requested! Counselor on duty will call ${callerName} at ${phone} ${urgency}.`);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-scaleUp text-slate-900"
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
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Callback Queued
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Counselor Assigned!
              </h3>
              <p className="text-xs text-slate-500">
                Expect an inbound call at <strong>{phone}</strong> {urgency}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <p>
                <strong>Counselor on Duty:</strong> Ms. Shweta Bhardwaj (Senior Admissions Officer)
              </p>
              <p>
                <strong>Direct Desk:</strong> {SCHOOL_INFO.phone}
              </p>
              <p>
                <strong>Hours:</strong> {SCHOOL_INFO.campusHours}
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md">
                Direct Admissions Desk
              </span>
              <span className="text-xs font-semibold text-slate-500">• Session 2027–28</span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-1">
              Talk to Our Admissions Team
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Connect directly with an experienced admissions counselor to discuss eligibility, fee plans, or schedule a 1-on-1 counseling session.
            </p>

            {/* Quick Hotline Card */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white mb-6 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-300 uppercase font-bold block">
                    Immediate Phone Connection
                  </span>
                  <a
                    href={`tel:${SCHOOL_INFO.admissionsHotline}`}
                    className="text-base font-extrabold hover:text-amber-400 transition-colors font-mono"
                  >
                    {SCHOOL_INFO.admissionsHotline}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${SCHOOL_INFO.admissionsHotline}`}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 shrink-0"
              >
                Call Now
              </a>
            </div>

            {/* Request Callback Form */}
            <div className="border-t border-slate-200/80 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                Or Request an Instant Counselor Callback:
              </h4>

              <form onSubmit={handleCallbackRequest} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hetuk Patel"
                    value={callerName}
                    onChange={(e) => setCallerName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white cursor-pointer"
                    >
                      <option value="Within 15 minutes">Within 15 minutes</option>
                      <option value="Today Afternoon">Today Afternoon</option>
                      <option value="Tomorrow Morning (9-11 AM)">Tomorrow Morning</option>
                      <option value="Weekend Counseling">Weekend Counseling</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Priority Callback</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
