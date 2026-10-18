import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AcademicPrograms } from './components/AcademicPrograms';
import { SchoolHighlights } from './components/SchoolHighlights';
import { Facilities } from './components/Facilities';
import { AdmissionProcess } from './components/AdmissionProcess';
import { ImportantDates } from './components/ImportantDates';
import { RequiredDocuments } from './components/RequiredDocuments';
import { FeeStructure } from './components/FeeStructure';
import { ParentTestimonials } from './components/ParentTestimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { TalkTeamModal } from './components/TalkTeamModal';
import { FacilityDetailModal } from './components/FacilityDetailModal';
import { Toast } from './components/Toast';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';
export function App() {
    // Modal states
    const [enquiryOpen, setEnquiryOpen] = useState(false);
    const [isApplicationMode, setIsApplicationMode] = useState(false);
    const [targetGradeHint, setTargetGradeHint] = useState('Grade 1');
    const [visitModalOpen, setVisitModalOpen] = useState(false);
    const [talkModalOpen, setTalkModalOpen] = useState(false);
    const [selectedFacility, setSelectedFacility] = useState(null);
    // Toast feedback state
    const [toastMessage, setToastMessage] = useState(null);
    const showToast = (msg) => {
        setToastMessage(msg);
    };
    const handleOpenEnquiry = (grade) => {
        setIsApplicationMode(false);
        if (grade)
            setTargetGradeHint(grade);
        setEnquiryOpen(true);
    };
    const handleOpenApply = () => {
        setIsApplicationMode(true);
        setEnquiryOpen(true);
    };
    const handleOpenVisit = () => {
        setVisitModalOpen(true);
    };
    const handleOpenTalk = () => {
        setTalkModalOpen(true);
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans", children: [_jsx(Navbar, { onOpenEnquiry: () => handleOpenEnquiry(), onOpenVisit: handleOpenVisit }), _jsxs("main", { className: "grow", children: [_jsx(Hero, { onOpenApply: handleOpenApply, onOpenVisit: handleOpenVisit, onOpenEnquiry: () => handleOpenEnquiry(), onQuickSubmitSuccess: showToast }), _jsx(WhyChooseUs, { onOpenEnquiry: () => handleOpenEnquiry() }), _jsx(AcademicPrograms, { onOpenEnquiry: (grade) => handleOpenEnquiry(grade) }), _jsx(SchoolHighlights, {}), _jsx(Facilities, { onSelectFacility: (f) => setSelectedFacility(f), onOpenVisit: handleOpenVisit }), _jsx(AdmissionProcess, { onOpenApply: handleOpenApply, onOpenEnquiry: () => handleOpenEnquiry() }), _jsx(ImportantDates, { onReminderSet: showToast }), _jsx(RequiredDocuments, { onNotify: showToast }), _jsx(FeeStructure, { onOpenEnquiry: (grade) => handleOpenEnquiry(grade) }), _jsx(ParentTestimonials, {}), _jsx(FAQSection, { onOpenEnquiry: () => handleOpenEnquiry() }), _jsx(FinalCTA, { onOpenApply: handleOpenApply, onOpenVisit: handleOpenVisit, onOpenTalk: handleOpenTalk })] }), _jsx(Footer, {}), _jsxs("div", { className: "fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2", children: [_jsxs("button", { onClick: () => handleOpenEnquiry(), className: "flex items-center gap-2 px-4 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-xl shadow-blue-900/30 border border-blue-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer", children: [_jsx(MessageSquare, { className: "w-4 h-4 text-amber-300" }), _jsx("span", { children: "Quick Enquiry 2027\u201328" })] }), _jsx("a", { href: `tel:${SCHOOL_INFO.admissionsHotline}`, className: "w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center justify-center shadow-lg border border-slate-700 hover:scale-105 transition-all", title: "Direct Phone Line", children: _jsx(PhoneCall, { className: "w-4 h-4" }) })] }), _jsx(EnquiryModal, { isOpen: enquiryOpen, onClose: () => setEnquiryOpen(false), defaultGrade: targetGradeHint, isApplication: isApplicationMode, onSuccess: showToast }), _jsx(ScheduleVisitModal, { isOpen: visitModalOpen, onClose: () => setVisitModalOpen(false), onSuccess: showToast }), _jsx(TalkTeamModal, { isOpen: talkModalOpen, onClose: () => setTalkModalOpen(false), onSuccess: showToast }), _jsx(FacilityDetailModal, { facility: selectedFacility, onClose: () => setSelectedFacility(null), onOpenVisit: handleOpenVisit }), _jsx(Toast, { message: toastMessage, onClose: () => setToastMessage(null) })] }));
}
export default App;
