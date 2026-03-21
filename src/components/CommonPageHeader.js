import React from 'react';

const CommonPageHeader = ({ onBack, rightLabel, className = '' }) => {
    return (
        <header className={`fixed top-0 left-0 w-full z-[100] glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between ${className}`.trim()}>
            <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="hidden sm:inline">Back</span>
            </button>

            <a href="#" className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-widest">
                HUMEEN.
            </a>

            <span className="hidden md:block text-white/20 text-xs uppercase tracking-widest font-bold">{rightLabel}</span>
        </header>
    );
};

export default CommonPageHeader;
