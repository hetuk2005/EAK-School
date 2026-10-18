import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Download, Info, CheckSquare, Square, ShieldCheck, } from 'lucide-react';
import { REQUIRED_DOCUMENTS } from '../data/schoolData';
export const RequiredDocuments = ({ onNotify }) => {
    // Allow parents to interactively check off what they have ready
    const [checkedDocs, setCheckedDocs] = useState({
        'doc-1': true,
        'doc-3': true,
    });
    const toggleCheck = (id) => {
        setCheckedDocs((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const totalMandatory = REQUIRED_DOCUMENTS.filter((d) => d.mandatory).length;
    const preparedMandatory = REQUIRED_DOCUMENTS.filter((d) => d.mandatory && checkedDocs[d.id]).length;
    const progressPercent = Math.round((preparedMandatory / totalMandatory) * 100);
    const handleDownloadChecklist = () => {
        const textContent = `EAK INTERNATIONAL SCHOOL - ADMISSION DOCUMENT CHECKLIST (2027-28)\n\n` +
            REQUIRED_DOCUMENTS.map((d, idx) => `[${checkedDocs[d.id] ? 'X' : ' '}] ${idx + 1}. ${d.name} (${d.mandatory ? 'MANDATORY' : 'OPTIONAL'})\n   Applicable: ${d.applicableGrades}\n   Format: ${d.format}\n   Details: ${d.description}\n`).join('\n') +
            `\nVerification Note: Bring original documents along with self-attested photocopies on Assessment Day.`;
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'EAK_Admissions_Required_Documents_Checklist.txt');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onNotify('Document checklist downloaded successfully for print & verification!');
    };
    return (_jsx("section", { id: "documents", className: "py-20 bg-white relative", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 space-y-4", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider uppercase", children: _jsx("span", { children: "Section 08 \u2022 Verification Checklist" }) }), _jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif", children: "Required Documents for Admission" }), _jsx("p", { className: "text-base sm:text-lg text-slate-600 leading-relaxed", children: "Keep digital scans and physical copies ready for the verification desk. Click the boxes below to track your preparation." })] }), _jsxs("div", { className: "max-w-4xl mx-auto mb-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs", children: [_jsxs("div", { className: "space-y-1 text-center sm:text-left w-full sm:w-auto", children: [_jsxs("div", { className: "flex items-center justify-center sm:justify-start gap-2", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-teal-600" }), _jsx("h3", { className: "font-bold text-slate-900 text-base", children: "Your Document Readiness Tracker" })] }), _jsxs("p", { className: "text-xs text-slate-600", children: [preparedMandatory, " of ", totalMandatory, " mandatory documents marked ready."] })] }), _jsxs("div", { className: "flex items-center gap-4 w-full sm:w-auto justify-center", children: [_jsx("div", { className: "w-48 bg-slate-200 rounded-full h-3 overflow-hidden", children: _jsx("div", { className: "bg-teal-600 h-full rounded-full transition-all duration-500", style: { width: `${progressPercent}%` } }) }), _jsxs("span", { className: "text-sm font-extrabold text-teal-800 w-12 text-right", children: [progressPercent, "%"] })] })] }), _jsx("div", { className: "max-w-4xl mx-auto space-y-3 mb-10", children: REQUIRED_DOCUMENTS.map((doc) => {
                        const isChecked = !!checkedDocs[doc.id];
                        return (_jsxs("div", { onClick: () => toggleCheck(doc.id), className: `p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${isChecked
                                ? 'bg-teal-50/50 border-teal-300 shadow-xs'
                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`, children: [_jsx("button", { type: "button", className: "mt-0.5 text-teal-700 shrink-0 focus:outline-none", "aria-label": `Mark ${doc.name}`, children: isChecked ? (_jsx(CheckSquare, { className: "w-6 h-6 text-teal-600" })) : (_jsx(Square, { className: "w-6 h-6 text-slate-300 hover:text-slate-400" })) }), _jsxs("div", { className: "grow", children: [_jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-1", children: [_jsx("h4", { className: `text-base font-bold ${isChecked ? 'text-teal-950 line-through decoration-teal-600/40' : 'text-slate-900'}`, children: doc.name }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600", children: doc.applicableGrades }), doc.mandatory ? (_jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700", children: "Mandatory" })) : (_jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600", children: "Recommended" }))] })] }), _jsx("p", { className: "text-xs text-slate-600 mb-2 leading-relaxed", children: doc.description }), _jsxs("div", { className: "flex items-center gap-2 text-[11px] font-medium text-slate-500", children: [_jsx("span", { className: "font-semibold text-slate-700", children: "Format:" }), _jsx("span", { children: doc.format })] })] })] }, doc.id));
                    }) }), _jsxs("div", { className: "max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm", children: [_jsxs("div", { className: "flex items-start gap-2.5", children: [_jsx(Info, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5" }), _jsxs("p", { className: "leading-relaxed", children: [_jsx("strong", { children: "Verification Note:" }), " Original documents must be presented at the admissions counter for physical spot verification. Verified originals are returned immediately to parents on the same day."] })] }), _jsxs("button", { onClick: handleDownloadChecklist, className: "shrink-0 px-4 py-2.5 rounded-xl bg-white border border-amber-300 hover:bg-amber-100 font-bold text-amber-900 text-xs shadow-xs flex items-center gap-2 cursor-pointer", children: [_jsx(Download, { className: "w-4 h-4 text-amber-700" }), _jsx("span", { children: "Download Printable Checklist" })] })] })] }) }));
};
