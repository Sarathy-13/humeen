import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonPageHeader from './CommonPageHeader';

gsap.registerPlugin(ScrollTrigger);

const TRUST_LOGOS = ['Airbnb', 'Spotify', 'Slack', 'Stripe', 'Notion', 'Figma', 'Shopify', 'HubSpot'];

const AgencyPage = ({ onBack, focusSectionId, showHeader = true }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.agency-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.agency-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.agency-card').forEach((card) => {
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

    useEffect(() => {
        if (!focusSectionId) return;

        const target = document.getElementById(focusSectionId);
        if (!target) return;

        window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }, [focusSectionId]);

    return (
        <div ref={pageRef} data-page-root="agency" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            {showHeader && <CommonPageHeader onBack={onBack} rightLabel="The Agency" className="agency-enter-stagger" />}

            <section className="pt-48 pb-24 px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 agency-enter-stagger">The Agency</p>
                    <h1 className="text-6xl md:text-[8rem] font-black text-white leading-none uppercase tracking-tighter mb-10 agency-headline">
                        Architectural Growth.
                        <br />
                        Proven Results.
                    </h1>
                    <p className="text-white/45 text-lg max-w-4xl font-medium leading-relaxed agency-enter-stagger">
                        We do not just ship work. We engineer legacy. Every case study below is a breakdown of a specific growth constraint, the Humeen solution, and the resulting market dominance.
                    </p>
                </div>
            </section>

            <section id="works" className="scroll-mt-36 py-20 px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[#8ea2c9] text-[10px] uppercase tracking-[0.35em] font-black mb-8">Works</p>

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12 mb-8">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">Case Study Template (The Bento-Box Grid)</h2>
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

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12 mb-8">
                        <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">The Methodology Call-out (Optional)</h3>
                        <p className="text-white/55 text-sm italic mb-4">Place this between projects to break the flow and remind them how you think.</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            <span className="text-white font-bold">Headline:</span> The Humeen Standard. <span className="text-white font-bold">Content:</span> We do not chase trends. We chase outcomes. Every piece of work on this
                            page was built under three non-negotiable pillars: <span className="text-white font-bold">Technical Precision</span> (speed, code, structure), <span className="text-white font-bold">Psychological Alignment</span>{' '}
                            (knowing why the user acts), and <span className="text-white font-bold">Absolute Transparency</span> (data-driven results, every time).
                        </p>
                    </article>

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12">
                        <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">Final Section: The Trust Anchor</h3>
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

            <section id="careers" className="scroll-mt-36 py-20 px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[#8ea2c9] text-[10px] uppercase tracking-[0.35em] font-black mb-8">Careers</p>

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12 mb-8">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">Why Join Humeen?</h2>
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

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12 mb-8">
                        <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">The Hiring Objective</h3>
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

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12 mb-8">
                        <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">Open Positions (The Humeen Way)</h3>
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

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12">
                        <h3 className="text-white text-2xl md:text-4xl font-black leading-tight mb-4">The Call to Action</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            <span className="text-white font-bold">Headline:</span> Ready to make an impact?
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed mb-8">
                            <span className="text-white font-bold">Content:</span> We do not care about your traditional resume or where you went to school. We care about the Humeen Standard, the work you have already built, the
                            problems you have already solved, and the speed at which you think.
                        </p>
                        <a
                            href="mailto:hello@humeen.com?subject=Portfolio%20Submission%20-%20Humeen"
                            className="inline-flex items-center px-10 py-4 bg-[#0070FF] text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(0,112,255,0.3)]"
                        >
                            Submit Your Portfolio
                        </a>
                    </article>
                </div>
            </section>

            <section id="founder-notes" className="scroll-mt-36 py-20 px-8">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[#8ea2c9] text-[10px] uppercase tracking-[0.35em] font-black mb-8">Founder Notes</p>

                    <article className="agency-card border border-white/10 bg-[#07090f]/95 rounded-3xl p-8 md:p-12">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">Objective</h2>
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

export default AgencyPage;
