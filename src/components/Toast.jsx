import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
export const Toast = ({ message, onClose, duration = 5000 }) => {
    useEffect(() => {
        if (!message)
            return;
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [message, duration, onClose]);
    if (!message)
        return null;
    return (_jsx("div", { className: "fixed bottom-6 right-6 z-50 max-w-md w-full animate-slideUp", children: _jsxs("div", { className: "bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5", children: _jsx(CheckCircle2, { className: "w-5 h-5" }) }), _jsxs("div", { className: "grow pr-2", children: [_jsx("p", { className: "text-xs font-bold text-slate-200 uppercase tracking-wider", children: "Admissions Notification" }), _jsx("p", { className: "text-xs sm:text-sm text-slate-100 font-medium leading-snug mt-0.5", children: message })] }), _jsx("button", { onClick: onClose, className: "text-slate-400 hover:text-white transition-colors p-1", "aria-label": "Dismiss toast", children: _jsx(X, { className: "w-4 h-4" }) })] }) }));
};
