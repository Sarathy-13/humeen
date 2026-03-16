import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CareersPage = ({ onBack }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.careers-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.careers-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.careers-card').forEach((card) => {
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
        <div ref={pageRef} data-page-root="careers" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            <header className="fixed top-0 left-0 w-full z-[100] glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between careers-enter-stagger">
                <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className="hidden sm:inline">Back</span>
                </button>
                <a href="#" className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-widest">
                    HUMEEN.
                </a>
                <span className="hidden md:block text-white/20 text-xs uppercase tracking-widest font-bold">Careers</span>
            </header>

            <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 careers-enter-stagger">The Agency / Careers</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 careers-headline">
                        Architects
                        <br />
                        Of Growth.
                    </h1>
                    <p className="text-white/45 text-base sm:text-lg max-w-4xl font-medium leading-relaxed careers-enter-stagger">
                        We are not looking for employees. We are looking for builders, strategists, and operators obsessed with shipping measurable outcomes.
                    </p>
                </div>
            </section>

            <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto">
                    <article className="careers-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12 mb-8">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-6">Why Join Humeen?</h2>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            <span className="text-white font-bold">Headline:</span> We Are Not Looking for Employees. We Are Looking for Architects of Growth.
                        </p>
                        <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                            <li>
                                <span className="text-white font-bold">The Philosophy:</span> Most agencies operate on a cog-in-the-machine model. We do not. At Humeen, we operate on an ownership-first model. We believe that if
                                you are talented enough to build something, you should be given the autonomy to lead it. We do not have layers of middle management standing between you and the impact you want to create.
                            </li>
                            <li>
                                <span className="text-white font-bold">What We Value:</span>
                                <ul className="mt-2 space-y-2 text-white/60">
                                    <li>
                                        <span className="text-white font-semibold">Technical Rigor:</span> We value the elegance of your code and the precision of your strategy above all else.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">Speed as a Strategy:</span> In our world, the fastest team wins. We value those who ship, learn, and iterate without needing constant hand-holding.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">Radical Clarity:</span> We avoid corporate buzzwords. If a problem exists, we name it, solve it, and move on. No politics, just performance.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </article>

                    <article className="careers-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12 mb-8">
                        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-4">The Hiring Objective</h3>
                        <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                            <li>
                                <span className="text-white font-bold">Our Objective:</span> Our goal for 2026 is simple: to expand our core team with individuals who are top 10 in their respective domains. We are not trying to build
                                the biggest agency, we are trying to build the most effective one.
                            </li>
                            <li>
                                <span className="text-white font-bold">Who We Are Hiring For:</span>
                                <ul className="mt-2 space-y-2 text-white/60">
                                    <li>
                                        <span className="text-white font-semibold">The Builders:</span> Developers who obsess over user experience and performance.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">The Strategists:</span> Marketers who understand that data is just the starting point, and human psychology is the finish line.
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">The Architects:</span> Producers who can bridge the gap between creative vision and commercial reality.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </article>

                    <article className="careers-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12 mb-8">
                        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-4">Open Positions (The Humeen Way)</h3>
                        <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                            <li>
                                <span className="text-white font-bold">Performance Marketer:</span> You do not just manage ads. You buy revenue. You understand that every cent spent must translate into a measurable outcome.
                            </li>
                            <li>
                                <span className="text-white font-bold">Full-Stack Developer:</span> You build interfaces that feel like they belong in the future. You view code as a medium for design, not just a task to be completed.
                            </li>
                            <li>
                                <span className="text-white font-bold">Growth Outbound Specialist:</span> You are a relentless investigator. You know how to find the right people, spark their curiosity, and get them to the table.
                            </li>
                        </ul>
                    </article>

                    <article className="careers-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-5 sm:p-8 md:p-12">
                        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-4">The Call to Action</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            <span className="text-white font-bold">Headline:</span> Ready to make an impact?
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed mb-8">
                            <span className="text-white font-bold">Content:</span> We do not care about your traditional resume or where you went to school. We care about the Humeen Standard, the work you have already built, the
                            problems you have already solved, and the speed at which you think.
                        </p>
                        <a
                            href="mailto:hello@humeen.com?subject=Portfolio%20Submission%20-%20Humeen"
                            className="inline-flex items-center w-full sm:w-auto justify-center px-8 sm:px-10 py-4 bg-[#0070FF] text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(0,112,255,0.3)]"
                        >
                            Submit Your Portfolio
                        </a>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
