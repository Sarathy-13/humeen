import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonPageHeader from './CommonPageHeader';

gsap.registerPlugin(ScrollTrigger);

const TRUST_LOGOS = ['Airbnb', 'Spotify', 'Slack', 'Stripe', 'Notion', 'Figma', 'Shopify', 'HubSpot'];

const WorksPage = ({ onBack, showHeader = true }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.works-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.works-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.works-card').forEach((card) => {
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
        <div ref={pageRef} data-page-root="works" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            {showHeader && <CommonPageHeader onBack={onBack} rightLabel="Works" className="works-enter-stagger" />}

            <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 works-enter-stagger">The Agency / Works</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 works-headline">
                        Architectural Growth.
                        <br />
                        Proven Results.
                    </h1>
                    <p className="text-white/45 text-base sm:text-lg max-w-4xl font-medium leading-relaxed works-enter-stagger">
                        We do not just ship work. We engineer legacy. Every case study below is a breakdown of a specific growth constraint, the Humeen solution, and the resulting market dominance.
                    </p>
                </div>
            </section>

            <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    
                    {/* Main Case Study */}
                    <article className="works-card lg:col-span-8 border border-white/10 bg-gradient-to-br from-[#121212] to-[#07090f] rounded-[2rem] p-6 sm:p-10 md:p-14 relative overflow-hidden group hover:border-[#0070FF]/50 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0070FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute -right-40 -top-40 w-96 h-96 bg-[#0070FF]/10 rounded-full blur-[100px] group-hover:bg-[#0070FF]/20 transition-all duration-700 pointer-events-none"></div>
                        <div className="relative z-10 w-full h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">Case Study Template (Bento Grid)</h2>
                                <p className="text-white/55 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                                    For each project in your grid, use this structure. It sounds professional, authoritative, and direct.
                                </p>
                            </div>
                            <div className="space-y-6 text-white/70 text-sm leading-relaxed mt-auto">
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                                    <p className="text-white text-base font-black mb-2 flex items-center gap-3">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        The Problem
                                    </p>
                                    <p className="pl-8 text-white/60">Example: [Brand] was bleeding 40% of their traffic at the checkout phase due to legacy architecture and poor UX. Their growth had plateaued, and their cost-per-acquisition was unsustainable.</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-[#0070FF]/5 border border-[#0070FF]/20 backdrop-blur-sm group-hover:bg-[#0070FF]/10 transition-colors">
                                    <p className="text-white text-base font-black mb-2 flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#0070FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        Our Intervention (The Humanoid Meat)
                                    </p>
                                    <p className="pl-8 text-white/70">
                                        Example: We stripped their funnel back to the foundation. We rebuilt the checkout flow from the ground up, reducing load times by 70%. Simultaneously, we re-aligned their Meta creative strategy to focus on high-intent psychological hooks, effectively lowering their CAC while increasing the average basket value.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white text-xs uppercase tracking-[0.2em] font-black mb-4">The Impact (The Numbers)</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                            <span className="text-[#0070FF] text-2xl font-black mb-1">+142%</span>
                                            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Revenue Growth</span>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                            <span className="text-white text-2xl font-black mb-1">+3.8%</span>
                                            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Conversion Rate</span>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                            <span className="text-green-500 text-2xl font-black mb-1">-22%</span>
                                            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Acquisition Cost</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* The Methodology Call-out */}
                    <article className="works-card lg:col-span-4 border border-white/5 bg-[#0a0d14]/80 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 md:p-12 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0070FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-4">The Methodology<br/><span className="text-white/30">Call-out</span></h3>
                            <p className="text-white/55 text-sm italic mb-6 border-l-2 border-[#0070FF]/50 pl-4 py-1">Place this between projects to break the flow and remind them how you think.</p>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                <span className="text-white font-black uppercase text-xs tracking-widest block mb-2">The Humeen Standard</span> 
                                We do not chase trends. We chase outcomes. Every piece of work on this page was built under three non-negotiable pillars:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                                    <p className="text-xs text-white/50"><span className="text-white font-bold text-sm">Technical Precision</span><br/>Speed, code, structure.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                                    <p className="text-xs text-white/50"><span className="text-white font-bold text-sm">Psychological Alignment</span><br/>Knowing why the user acts.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#0070FF]"></div>
                                    <p className="text-xs text-white/50"><span className="text-[#0070FF] font-bold text-sm">Absolute Transparency</span><br/>Data-driven results, every time.</p>
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* The Trust Anchor */}
                    <article className="works-card lg:col-span-12 border border-white/5 bg-[#050608] rounded-[2rem] p-6 sm:p-10 md:p-14 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                            <div className="max-w-xl">
                                <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">You are in good company.</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Our results speak for themselves, but our long-term partnerships with industry leaders are our greatest achievement.
                                </p>
                            </div>
                            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
                                {TRUST_LOGOS.map((logo) => (
                                    <div key={logo} className="bg-white/5 border border-white/5 rounded-2xl px-2 py-6 flex items-center justify-center text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                        <span className="text-white/60 text-xs sm:text-sm uppercase tracking-[0.2em] font-black group-hover:text-white transition-colors">{logo}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    );
};

export default WorksPage;
