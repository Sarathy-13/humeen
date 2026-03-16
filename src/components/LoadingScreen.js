import React from 'react';

const LogoMarkShape = () => (
    <>
        <circle cx="92" cy="64" r="24" />
        <rect x="120" y="94" width="90" height="214" rx="45" transform="rotate(32 165 201)" />
        <rect x="243" y="160" width="60" height="140" rx="30" transform="rotate(32 273 230)" />
        <rect x="211" y="176" width="74" height="20" rx="10" transform="rotate(32 248 186)" />
    </>
);

const LoadingScreen = () => {
    return (
        <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading Humeen">
            <div className="loading-logo-wrap">
                <svg className="loading-logo-mark loading-logo-base" viewBox="0 0 360 360" aria-hidden="true">
                    <LogoMarkShape />
                </svg>

                <svg className="loading-logo-mark loading-logo-flash" viewBox="0 0 360 360" aria-hidden="true">
                    <LogoMarkShape />
                </svg>
            </div>
        </div>
    );
};

export default LoadingScreen;
