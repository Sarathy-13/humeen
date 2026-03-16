import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FounderNotesPage = ({ onBack }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.founder-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.founder-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.founder-card').forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 70, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 86%',
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
            <header className="fixed top-0 left-0 w-full z-[100] glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between founder-enter-stagger">
                <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className="hidden sm:inline">Back</span>
                </button>
                <a href="#" className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-widest">
                    HUMEEN.
                </a>
                <span className="hidden md:block text-white/20 text-xs uppercase tracking-widest font-bold">Founder Notes</span>
            </header>

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
                <div className="max-w-[1400px] mx-auto">
                    <article className="founder-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-6">Objective</h2>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">To establish a personal, Humanoid connection with the brand's philosophy.</p>
                        <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                            <li>
                                <span className="text-white font-bold">Introduction:</span> In an era of automated, soulless agency models, Humeen is a deliberate return to intentionality.
                            </li>
                            <li>
                                <span className="text-white font-bold">The Manifesto:</span>
                                <ul className="mt-2 space-y-2 text-white/60">
                                    <li>
                                        <span className="text-white font-semibold">Beyond the Trend:</span> Many agencies chase every new software or design style. We ignore the noise and focus on what objectively moves the revenue
                                        needle.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">The Humeen Difference:</span> Most agencies provide service; we provide a competitive advantage. Your success is the only KPI that matters to us.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">Direct Access:</span> I built this agency to be the partner I wanted when I was in your shoes, transparent, aggressive, and obsessed with the craft.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="text-white font-bold">Personal Commitment:</span> My promise is that every project, whether it is a landing page or a multi-platform acquisition strategy, is held to the highest standard
                                of technical and creative rigor.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default FounderNotesPage;
