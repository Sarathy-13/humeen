import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonPageHeader from './CommonPageHeader';

gsap.registerPlugin(ScrollTrigger);

const FounderNotesPage = ({ onBack, showHeader = true }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.founder-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.founder-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.founder-notes-card').forEach((card) => {
                gsap.set(card, { transformPerspective: 1000, transformOrigin: '50% 100%' });
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 120, scale: 0.95, rotateX: -15, filter: 'blur(15px)' },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: 'blur(0px)',
                        duration: 0.7,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            once: true,
                        },
                    },
                );
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} data-page-root="founder-notes" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            {showHeader && <CommonPageHeader onBack={onBack} rightLabel="Founder Notes" className="founder-enter-stagger" />}

            <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 founder-enter-stagger">The Agency / Founder Notes</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 founder-headline">
                        Human Intent.
                        <br />
                        Technical Rigor.
                    </h1>
                    <p className="text-white/45 text-base sm:text-lg max-w-4xl font-medium leading-relaxed founder-enter-stagger">A personal note on why Humeen exists, how we think, and the standard we hold for every engagement.</p>
                </div>
            </section>

            <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[900px] mx-auto relative group">
                    {/* Artistic Background Flourish */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0070FF]/20 via-[#0070FF]/0 to-[#0070FF]/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                    
                    <article className="founder-notes-card relative bg-[#07090f]/95 rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl group-hover:border-white/20 transition-all duration-700">
                        {/* Quote mark accent */}
                        <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[#0070FF]/10 text-[12rem] leading-none font-serif rotate-12 -z-10 select-none">"</div>
                        
                        <div className="relative z-10">
                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">Objective</h2>
                            <p className="text-[#0070FF] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-10">
                                To establish a personal, Humanoid connection with the brand's philosophy.
                            </p>

                            <div className="space-y-8 text-white/70 text-base md:text-lg leading-relaxed relative">
                                {/* Left line accent */}
                                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>
                                
                                <p className="pl-6 sm:pl-8">
                                    <span className="text-white font-black uppercase text-xs tracking-widest block mb-2 opacity-50">Introduction</span>
                                    In an era of automated, soulless agency models, Humeen is a deliberate return to intentionality.
                                </p>
                                
                                <div className="pl-6 sm:pl-8 pt-6 border-t border-white/5 space-y-6">
                                    <span className="text-white font-black uppercase text-xs tracking-widest block mb-4">The Manifesto</span>
                                    
                                    <div className="group/item hover:-translate-y-1 transition-transform">
                                        <p className="text-white font-bold mb-1 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0070FF]"></span> Beyond the Trend
                                        </p>
                                        <p className="pl-4 text-sm text-white/50">Many agencies chase every new software or design style. We ignore the noise and focus on what objectively moves the revenue needle.</p>
                                    </div>
                                    
                                    <div className="group/item hover:-translate-y-1 transition-transform">
                                        <p className="text-white font-bold mb-1 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0070FF]"></span> The Humeen Difference
                                        </p>
                                        <p className="pl-4 text-sm text-white/50">Most agencies provide service; we provide a competitive advantage. Your success is the only KPI that matters to us.</p>
                                    </div>
                                    
                                    <div className="group/item hover:-translate-y-1 transition-transform">
                                        <p className="text-white font-bold mb-1 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0070FF]"></span> Direct Access
                                        </p>
                                        <p className="pl-4 text-sm text-white/50">I built this agency to be the partner I wanted when I was in your shoes: transparent, aggressive, and obsessed with the craft.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-[#0070FF]/20 flex items-start gap-6">
                                <div className="hidden sm:flex w-16 h-16 rounded-full bg-white/5 items-center justify-center border border-white/10 shrink-0">
                                    <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </div>
                                <div>
                                    <span className="text-[#0070FF] font-black uppercase text-xs tracking-widest block mb-2">Personal Commitment</span>
                                    <p className="text-white text-lg sm:text-xl font-bold italic leading-relaxed">
                                        "My promise is that every project, whether it is a landing page or a multi-platform acquisition strategy, is held to the highest standard of technical and creative rigor."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default FounderNotesPage;
