import React, { useEffect, useState } from 'react';

const SPLINE_SCRIPT_ID = 'spline-viewer-runtime';
const SPLINE_SCRIPT_SRC = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
const FALLBACK_VIDEO_SRC = 'https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-large-city-at-night-11915-large.mp4';

const Hero3DScene = () => {
    const splineSceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL;
    const [isViewerReady, setIsViewerReady] = useState(() => {
        if (typeof window === 'undefined') return false;
        return Boolean(window.customElements?.get('spline-viewer'));
    });

    useEffect(() => {
        if (!splineSceneUrl || typeof window === 'undefined') return undefined;

        if (window.customElements?.get('spline-viewer')) {
            setIsViewerReady(true);
            return undefined;
        }

        const handleLoad = () => setIsViewerReady(true);
        const existingScript = document.getElementById(SPLINE_SCRIPT_ID);

        if (existingScript) {
            existingScript.addEventListener('load', handleLoad, { once: true });
            return () => existingScript.removeEventListener('load', handleLoad);
        }

        const script = document.createElement('script');
        script.id = SPLINE_SCRIPT_ID;
        script.type = 'module';
        script.src = SPLINE_SCRIPT_SRC;
        script.async = true;
        script.addEventListener('load', handleLoad);
        script.addEventListener('error', () => setIsViewerReady(false));
        document.head.appendChild(script);

        return () => script.removeEventListener('load', handleLoad);
    }, [splineSceneUrl]);

    if (splineSceneUrl && isViewerReady) {
        return (
            <div className="hero-3d-layer home-hero-media">
                <spline-viewer className="hero-spline-viewer" url={splineSceneUrl}></spline-viewer>
                <div className="hero-3d-vignette"></div>
            </div>
        );
    }

    return <video className="absolute inset-0 grayscale object-cover w-full h-full home-hero-media hero-fallback-video" muted autoPlay playsInline loop preload="auto" src={FALLBACK_VIDEO_SRC}></video>;
};

export default Hero3DScene;
