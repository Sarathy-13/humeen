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
        <div ref={pageRef} data-page-root="careers" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black pb-20">
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
                <div className="max-w-[1200px] mx-auto space-y-8 lg:space-y-12">
                    
                    {/* The Philosophy */}
                    <article className="careers-card relative bg-gradient-to-br from-[#121212] to-[#07090f] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden group hover:border-[#0070FF]/40 transition-colors duration-700 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0070FF]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#0070FF]/25 transition-colors duration-1000"></div>
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#0070FF] to-transparent"></div>
                        
                        <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="flex-1">
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">Why Join Humeen?</h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-8">
                                    <strong className="text-white">We Are Not Looking for Employees. We Are Looking for Architects of Growth.</strong>
                                </p>
                                <div className="space-y-6">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                                        <h3 className="text-[#0070FF] font-bold text-sm uppercase tracking-widest mb-3">The Philosophy</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Most agencies operate on a cog-in-the-machine model. We do not. At Humeen, we operate on an ownership-first model. We believe that if you are talented enough to build something, you should be given the autonomy to lead it. We do not have layers of middle management standing between you and the impact you want to create.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                <h3 className="text-white font-black text-xl mb-2">What We Value</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-bold">1</div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Technical Rigor</h4>
                                            <p className="text-white/60 text-sm">We value the elegance of your code and the precision of your strategy above all else.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-bold">2</div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Speed as a Strategy</h4>
                                            <p className="text-white/60 text-sm">In our world, the fastest team wins. We value those who ship, learn, and iterate without needing constant hand-holding.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-[#0070FF]/20 flex items-center justify-center shrink-0 text-[#0070FF] font-bold">3</div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Radical Clarity</h4>
                                            <p className="text-white/60 text-sm">We avoid corporate buzzwords. If a problem exists, we name it, solve it, and move on. No politics, just performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Hiring Objective */}
                    <article className="careers-card relative bg-[#090b11] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-emerald-500/10 overflow-hidden group hover:border-emerald-500/30 transition-colors duration-700 shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors duration-1000 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-transparent opacity-50"></div>
                        
                        <div className="relative z-10 w-full flex flex-col md:flex-row gap-10">
                            <div className="flex-1">
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">The Hiring<br/>Objective</h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-6 font-medium">
                                    Our goal for 2026 is simple: to expand our core team with individuals who are top 10 in their respective domains.
                                </p>
                                <p className="text-white/50 text-sm italic">We are not trying to build the biggest agency, we are trying to build the most effective one.</p>
                            </div>
                            <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors">
                                    <h4 className="text-white font-bold text-lg mb-2">The Builders</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">Developers who obsess over user experience and performance.</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors">
                                    <h4 className="text-white font-bold text-lg mb-2">The Strategists</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">Marketers who understand that data is just the starting point, and human psychology is the finish line.</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors sm:col-span-2">
                                    <h4 className="text-white font-bold text-lg mb-2">The Architects</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">Producers who can bridge the gap between creative vision and commercial reality.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Open Positions Grid */}
                    <article className="careers-card relative bg-[#07090f]/95 rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden group hover:border-[#0070FF]/40 transition-colors duration-700 shadow-2xl">
                        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[#0070FF]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-[#0070FF]/15 transition-colors duration-1000 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
                                Open Positions <span className="text-[#0070FF] block text-xl sm:text-2xl mt-2">(The Humeen Way)</span>
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col justify-between p-8 bg-black/40 border border-white/5 rounded-3xl hover:bg-white/10 hover:border-[#0070FF]/30 transition-all duration-300 cursor-pointer group/role backdrop-blur-xl">
                                    <div>
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover/role:bg-[#0070FF]/20 transition-colors">
                                            <svg className="w-6 h-6 text-white group-hover/role:text-[#0070FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        </div>
                                        <h3 className="text-white font-black text-xl mb-3 group-hover/role:text-[#0070FF] transition-colors">Performance Marketer</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6">You do not just manage ads. You buy revenue. You understand that every cent spent must translate into a measurable outcome.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-8 bg-black/40 border border-white/5 rounded-3xl hover:bg-white/10 hover:border-[#0070FF]/30 transition-all duration-300 cursor-pointer group/role backdrop-blur-xl -translate-y-0 md:-translate-y-4">
                                    <div>
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover/role:bg-[#0070FF]/20 transition-colors">
                                            <svg className="w-6 h-6 text-white group-hover/role:text-[#0070FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                        </div>
                                        <h3 className="text-white font-black text-xl mb-3 group-hover/role:text-[#0070FF] transition-colors">Full-Stack Developer</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6">You build interfaces that feel like they belong in the future. You view code as a medium for design, not just a task to be completed.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-8 bg-black/40 border border-white/5 rounded-3xl hover:bg-white/10 hover:border-[#0070FF]/30 transition-all duration-300 cursor-pointer group/role backdrop-blur-xl">
                                    <div>
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover/role:bg-[#0070FF]/20 transition-colors">
                                            <svg className="w-6 h-6 text-white group-hover/role:text-[#0070FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>
                                        <h3 className="text-white font-black text-xl mb-3 group-hover/role:text-[#0070FF] transition-colors">Growth Outbound Specialist</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6">You are a relentless investigator. You know how to find the right people, spark their curiosity, and get them to the table.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* The Call to Action */}
                    <article className="careers-card relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0070FF] rounded-[2.5rem] p-10 sm:p-16 border border-[#0070FF] overflow-hidden group shadow-[0_0_60px_rgba(0,112,255,0.4)] w-full text-center">
                        <div className="relative z-10">
                            <h3 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">Ready to make an impact?</h3>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-bold">
                                We do not care about your traditional resume or where you went to school. We care about the Humeen Standard, the work you have already built, the problems you have already solved, and the speed at which you think.
                            </p>
                            <a
                                href="mailto:hello@humeen.com?subject=Portfolio%20Submission%20-%20Humeen"
                                className="inline-flex items-center gap-3 justify-center px-10 py-5 bg-white text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
                            >
                                Submit Your Portfolio
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    );
};

export default CareersPage;
