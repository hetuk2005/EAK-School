import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle, Bell, Download, } from 'lucide-react';
import { IMPORTANT_DATES } from '../data/schoolData';
export const ImportantDates = ({ onReminderSet }) => {
    // Countdown to November 30, 2026 (Application Deadline)
    const [timeLeft, setTimeLeft] = useState({
        days: 42,
        hours: 14,
        minutes: 36,
        seconds: 20,
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0)
                    return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0)
                    return { ...prev, minutes: 59, seconds: 59 };
                if (prev.hours > 0)
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0)
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const handleDownloadCalendar = () => {
        // Simulated calendar .ics download or reminder
        const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//EAK International School//Admissions 2027-28//EN\nSUMMARY:EAK Admissions Round 1 Deadline\nDESCRIPTION:Admissions Open for Academic Session 2027-28\nEND:VCALENDAR`;
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'EAK_Admissions_Calendar_2027-28.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onReminderSet('Calendar event downloaded! Key admission dates added to your planner.');
    };
    return (_jsx("section", { id: "dates", className: "py-20 bg-slate-50 relative", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 space-y-4", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase", children: _jsx("span", { children: "Section 07 \u2022 Admissions Calendar" }) }), _jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif", children: "Important Dates & Key Deadlines (Session 2027\u201328)" }), _jsx("p", { className: "text-base sm:text-lg text-slate-600 leading-relaxed", children: "Mark your calendar to ensure timely submission of applications, assessments, and enrollment formalities for the upcoming academic cycle." })] }), _jsx("div", { className: "max-w-4xl mx-auto mb-12 bg-linear-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-900/60 relative overflow-hidden", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 relative z-10", children: [_jsxs("div", { className: "space-y-1 text-center md:text-left", children: [_jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30", children: [_jsx(AlertCircle, { className: "w-3.5 h-3.5" }), "Round 1 Deadline Approaching"] }), _jsx("h3", { className: "text-xl sm:text-2xl font-bold font-serif text-white", children: "Application Closes: November 30, 2026" }), _jsx("p", { className: "text-xs text-slate-300", children: "Submit before the deadline to qualify for merit scholarships & choice of second language." })] }), _jsxs("div", { className: "flex items-center gap-2 sm:gap-3 text-center", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-xs px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-white/10 min-w-[64px]", children: [_jsx("span", { className: "block text-xl sm:text-2xl font-black text-amber-400 font-mono", children: timeLeft.days }), _jsx("span", { className: "text-[10px] text-slate-300 uppercase font-semibold", children: "Days" })] }), _jsx("span", { className: "text-amber-400 font-bold text-xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-xs px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-white/10 min-w-[64px]", children: [_jsx("span", { className: "block text-xl sm:text-2xl font-black text-amber-400 font-mono", children: String(timeLeft.hours).padStart(2, '0') }), _jsx("span", { className: "text-[10px] text-slate-300 uppercase font-semibold", children: "Hours" })] }), _jsx("span", { className: "text-amber-400 font-bold text-xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-xs px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-white/10 min-w-[64px]", children: [_jsx("span", { className: "block text-xl sm:text-2xl font-black text-amber-400 font-mono", children: String(timeLeft.minutes).padStart(2, '0') }), _jsx("span", { className: "text-[10px] text-slate-300 uppercase font-semibold", children: "Mins" })] }), _jsx("span", { className: "text-amber-400 font-bold text-xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-xs px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-white/10 min-w-[64px]", children: [_jsx("span", { className: "block text-xl sm:text-2xl font-black text-amber-400 font-mono", children: String(timeLeft.seconds).padStart(2, '0') }), _jsx("span", { className: "text-[10px] text-slate-300 uppercase font-semibold", children: "Secs" })] })] })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10", children: IMPORTANT_DATES.map((item, idx) => {
                        const isCrucial = item.status === 'Crucial';
                        const isOpen = item.status === 'Open';
                        return (_jsxs("div", { className: `rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${isCrucial
                                ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                                : isOpen
                                    ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                                    : 'bg-white border-slate-200/90'}`, children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("span", { className: "text-xs font-extrabold text-slate-400", children: ["Phase 0", idx + 1] }), _jsx("span", { className: `text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${isCrucial
                                                        ? 'bg-red-100 text-red-800 border border-red-200'
                                                        : isOpen
                                                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                            : 'bg-slate-100 text-slate-700'}`, children: item.status })] }), _jsxs("div", { className: "flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl font-serif mb-2", children: [_jsx(Calendar, { className: "w-5 h-5 text-blue-700 shrink-0" }), _jsx("span", { children: item.displayDate })] }), _jsx("h4", { className: "text-sm font-bold text-slate-800 mb-2", children: item.event }), _jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: item.description })] }), _jsxs("div", { className: "pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium", children: [_jsx("span", { children: "Session 2027\u201328 Intake" }), _jsx("span", { className: "text-blue-700 font-semibold", children: "Priority Cohort" })] })] }, item.id));
                    }) }), _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [_jsxs("button", { onClick: handleDownloadCalendar, className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer", children: [_jsx(Download, { className: "w-4 h-4 text-blue-700" }), _jsx("span", { children: "Download All Key Dates (.ICS Calendar)" })] }), _jsxs("button", { onClick: () => onReminderSet('SMS reminder activated for all upcoming EAK admission dates.'), className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer", children: [_jsx(Bell, { className: "w-4 h-4" }), _jsx("span", { children: "Set Admission SMS Reminder Alerts" })] })] })] }) }));
};
