import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('2026-10-24');
  const [visitSlot, setVisitSlot] = useState('Morning Slot (10:00 AM - 11:30 AM)');
  const [attendees, setAttendees] = useState('2 Adults + 1 Child');
  const [focusArea, setFocusArea] = useState('Comprehensive Campus & Labs');
  const [booked, setBooked] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim()) return;

    const code = `TOUR-EAK-${Math.floor(100 + Math.random() * 900)}`;
    setPassCode(code);
    setBooked(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    onSuccess(
      `Campus Visit confirmed for ${parentName} on ${visitDate} (${visitSlot}). Passcode: ${code}`
    );
  };

  const handleResetAndClose = () => {
    setBooked(false);
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

        {booked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <Calendar className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                Visit Confirmed
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Campus Tour Scheduled!
              </h3>
              <p className="text-xs text-slate-500 font-mono">Visitor Pass: {passCode}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-700">
              <p>
                <strong>Host:</strong> Admissions Dean Desk
              </p>
              <p>
                <strong>Date & Time:</strong> {visitDate} • {visitSlot}
              </p>
              <p>
                <strong>Primary Guest:</strong> {parentName} ({attendees})
              </p>
              <p>
                <strong>Focus Requested:</strong> {focusArea}
              </p>
              <p>
                <strong>Campus Address:</strong> {SCHOOL_INFO.address}
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              An SMS with parking guidance and gate access code has been dispatched to <strong>{phone}</strong>. We look forward to welcoming you!
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                Guided Campus Tour
              </span>
              <span className="text-xs font-semibold text-slate-500">• 18-Acre Green Campus</span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-1">
              Schedule Your Campus Visit
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Walk through our smart classrooms, Olympic sports arena, and meet our academic deans in person.
            </p>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent / Visitor Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hetuk Patel"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Tour Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time Window *
                </label>
                <select
                  value={visitSlot}
                  onChange={(e) => setVisitSlot(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="Morning Slot (10:00 AM - 11:30 AM)">
                    Morning Slot (10:00 AM – 11:30 AM)
                  </option>
                  <option value="Midday Slot (12:00 PM - 1:30 PM)">
                    Midday Slot (12:00 PM – 1:30 PM)
                  </option>
                  <option value="Afternoon Slot (2:30 PM - 4:00 PM)">
                    Afternoon Slot (2:30 PM – 4:00 PM)
                  </option>
                  <option value="Saturday Special (11:00 AM - 1:00 PM)">
                    Saturday Family Special (11:00 AM – 1:00 PM)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Number of Attendees
                  </label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="2 Adults + 2 Children">2 Adults + 2 Children</option>
                    <option value="3+ Family Members">3+ Family Members</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Focus
                  </label>
                  <select
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="Comprehensive Campus & Labs">Full Campus & Labs</option>
                    <option value="Primary Wing & Play Spaces">Primary Wing & Play Spaces</option>
                    <option value="Sports Arena & Aquatics">Sports Arena & Aquatics</option>
                    <option value="Science Labs & AI Tech Hub">Science Labs & AI Hub</option>
                    <option value="Senior Secondary Stream Counseling">Senior Sec Stream Counseling</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Confirm Campus Visit Booking</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                Complimentary parking provided on-site. Valid photo ID required at the welcome reception.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
