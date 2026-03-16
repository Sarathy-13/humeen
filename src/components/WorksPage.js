import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRUST_LOGOS = ['Airbnb', 'Spotify', 'Slack', 'Stripe', 'Notion', 'Figma', 'Shopify', 'HubSpot'];

const WorksPage = ({ onBack }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.works-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.works-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.works-card').forEach((card) => {
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
        <div ref={pageRef} data-page-root="works" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            <header className="fixed top-0 left-0 w-full z-[100] glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between works-enter-stagger">
                <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className="hidden sm:inline">Back</span>
                </button>
                <a href="#" className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-widest">
                    HUMEEN.
                </a>
                <span className="hidden md:block text-white/20 text-xs uppercase tracking-widest font-bold">Works</span>
            </header>

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
                <div className="max-w-[1400px] mx-auto">
                    <article className="works-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12 mb-8">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-6">Case Study Template (The Bento-Box Grid)</h2>
                        <p className="text-white/55 text-sm leading-relaxed mb-6">
                            For each project in your grid, use this structure. It sounds professional, authoritative, and direct.
                        </p>
                        <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                            <p>
                                <span className="text-white font-bold">Project Title:</span> e.g., Re-engineering the Conversion Engine for [Brand Name]
                            </p>
                            <div>
                                <p className="text-white font-bold mb-2">The Problem: (2 sentences)</p>
                                <p>Example: [Brand] was bleeding 40% of their traffic at the checkout phase due to legacy architecture and poor UX. Their growth had plateaued, and their cost-per-acquisition was unsustainable.</p>
                            </div>
                            <div>
                                <p className="text-white font-bold mb-2">Our Intervention: (3 sentences - The Humanoid Meat)</p>
                                <p>
                                    Example: We stripped their funnel back to the foundation. We rebuilt the checkout flow from the ground up, reducing load times by 70%. Simultaneously, we re-aligned their Meta creative
                                    strategy to focus on high-intent psychological hooks, effectively lowering their CAC while increasing the average basket value.
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-bold mb-2">The Impact: (The Numbers)</p>
                                <ul className="space-y-1">
                                    <li>Revenue Growth: +142%</li>
                                    <li>Conversion Rate: +3.8%</li>
                                    <li>Acquisition Cost: -22%</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <article className="works-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12 mb-8">
                        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-4">The Methodology Call-out (Optional)</h3>
                        <p className="text-white/55 text-sm italic mb-4">Place this between projects to break the flow and remind them how you think.</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            <span className="text-white font-bold">Headline:</span> The Humeen Standard. <span className="text-white font-bold">Content:</span> We do not chase trends. We chase outcomes. Every piece of work on this
                            page was built under three non-negotiable pillars: <span className="text-white font-bold">Technical Precision</span> (speed, code, structure), <span className="text-white font-bold">Psychological Alignment</span>{' '}
                            (knowing why the user acts), and <span className="text-white font-bold">Absolute Transparency</span> (data-driven results, every time).
                        </p>
                    </article>

                    <article className="works-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12">
                        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-4">Final Section: The Trust Anchor</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-5">
                            <span className="text-white font-bold">Headline:</span> You are in good company. <span className="text-white font-bold">Content:</span> Our results speak for themselves, but our long-term partnerships with
                            industry leaders are our greatest achievement.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {TRUST_LOGOS.map((logo) => (
                                <div key={logo} className="border border-white/10 rounded-xl px-4 py-4 text-center text-white/70 text-xs uppercase tracking-[0.22em] font-bold opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default WorksPage;
