import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonPageHeader from './CommonPageHeader';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_GROUPS = [
    {
        label: 'Core Services',
        items: [
            {
                id: 'digital-marketing',
                name: 'Digital Marketing',
                subtitle: 'The Command Center',
                vibe: 'High-velocity, aggressive, dominance-focused.',
                hookHeadline: 'Digital Marketing: The Command Center',
                hookCopy:
                    "Most brands are throwing spaghetti at the wall. We build the wall and the spaghetti. We don't just manage your digital presence; we engineer a high-fidelity ecosystem where every touchpoint is a conversion opportunity.",
                breakdownLabel: 'Section 2: The Logic (Service Breakdown)',
                breakdownTitle: 'Stop Guessing. Start Scaling.',
                bullets: [
                    "Strategic Architecture: We map out your customer's psychological journey before we spend a single dollar.",
                    'Creative Assets: High-definition content designed to interrupt the scroll and force an action.',
                ],
                proofLabel: 'Section 3: The Proof (Customer Section)',
                proofHeading: 'Validated by Industry Leaders.',
                showLogos: true,
                cta: 'Initiate Market Dominance',
            },
            {
                id: 'web-development',
                name: 'Web Development',
                subtitle: 'The Digital Hub',
                vibe: 'Architecturally sound, cinematic, high-performance.',
                hookHeadline: 'Websites That Close Deals While You Sleep.',
                hookCopy:
                    'A slow website is a silent killer. We build digital flagships that load with lightning speed and feel like a luxury physical store. No templates. No bloat. Just pure, clean code designed for the elite.',
                breakdownLabel: 'Section 2: The Build (Service Breakdown)',
                breakdownTitle: 'The Build',
                bullets: [
                    'Cinematic UX: Interactive components that guide users toward your CTA without them realizing it.',
                    'Responsive Integrity: A flawless experience whether they are on a 30-inch monitor or an iPhone.',
                ],
                proofLabel: 'Section 3: The Proof',
                proofHeading: 'Architecting for the Best.',
                cta: 'Build My Legacy',
            },
            {
                id: 'app-development',
                name: 'App Development',
                subtitle: 'Native Habits',
                vibe: 'Intuitive, sticky, zero friction.',
                hookHeadline: 'From Home Screen to Daily Habit.',
                hookCopy:
                    "An app is not just software; it's a piece of your brand that lives in your customer's pocket. We build native experiences that feel like an extension of the user's hand.",
                breakdownLabel: 'Section 2: The Flow',
                breakdownTitle: 'The Flow',
                bullets: [
                    'Micro-Interactions: Every vibration, swipe, and tap is designed to feel satisfying.',
                    'Backend Stability: Scale to a million users without a single frame drop.',
                ],
                cta: 'Deploy Your Native App',
            },
            {
                id: 'influencer-production',
                name: 'Influencer Production',
                subtitle: 'Cultural Capital',
                vibe: 'Trend-setting, authentic, massive scale.',
                hookHeadline: 'Trust is the Only Currency That Matters.',
                hookCopy:
                    'People buy from people. We connect your brand logic with the raw, unfiltered influence of world-class creators. This is not a shoutout; it is a production.',
                breakdownLabel: 'Section 2: The Production',
                breakdownTitle: 'The Production',
                bullets: [
                    "Storytelling First: We do not script influencers; we brief them on the narrative.",
                    'Viral Velocity: Content engineered to be shared, not just seen.',
                ],
                cta: 'Secure Your Influence',
            },
            {
                id: 'seo',
                name: 'SEO',
                subtitle: 'The Long Game',
                vibe: 'Authoritative, mathematical, permanent.',
                hookHeadline: 'Own the Answer.',
                hookCopy:
                    "When your customer has a problem, they go to Google. If you are not the first answer, you do not exist. We solve the algorithm so you can own the intent.",
                cta: 'Dominate Search Results',
            },
            {
                id: 'growth-outbound',
                name: 'Growth Outbound',
                subtitle: 'The Hunter',
                vibe: 'Precise, personal, persistent.',
                hookHeadline: 'Open Doors That Were Previously Locked.',
                hookCopy:
                    'Waiting for leads is for amateurs. We identify your high-value targets and start a conversation before your competition even knows they exist.',
                cta: 'Start the Conversation',
            },
        ],
    },
    {
        label: 'Advertising Networks',
        items: [
            {
                id: 'meta-ads',
                name: 'Meta Ads',
                subtitle: 'The Attention Engine',
                vibe: 'High-velocity creative, algorithmic mastery, scroll-stopping power.',
                hookHeadline: 'Turn Passive Scrollers into Active Buyers.',
                hookCopy:
                    "Most Meta campaigns die in the first three seconds of a scroll. We do not just run ads; we engineer visual interruptions. By combining high-definition creative with the deepest level of Meta's algorithmic targeting, we ensure your brand does not just get seen, it gets remembered and acted upon.",
                breakdownLabel: 'Section 2: The Tactical Edge',
                breakdownTitle: 'The Tactical Edge',
                bullets: [
                    'Creative Testing: We treat every ad as a data point, rapidly iterating on hooks and angles to find the winners that scale.',
                    'Funnel Liquidity: We do not just drive traffic; we build full-funnel journeys that nurture prospects from "Who are you?" to "Take my money."',
                ],
                proofLabel: 'Section 3: Social Proof',
                proofHeading: 'Dominating the Feed for Global Brands.',
                showLogos: true,
                cta: 'Scale My Meta Performance',
            },
            {
                id: 'google-ads',
                name: 'Google Ads',
                subtitle: 'The Intent Harvest',
                vibe: 'Mathematical, surgical, capturing demand at the source.',
                hookHeadline: 'Own the Moment of Highest Intent.',
                hookCopy:
                    'When someone searches on Google, they are not browsing; they are hunting for a solution. We make sure you are the answer they find. Our Google Ads strategy is built on surgical keyword precision and high-intent bidding, ensuring your budget is spent on clicks that actually have the potential to convert.',
                breakdownLabel: 'Section 2: The Tactical Edge',
                breakdownTitle: 'The Tactical Edge',
                bullets: [
                    'Search and Shopping Supremacy: Whether it is text-based search or visual shopping, we dominate the top of the page.',
                    'Negative Keyword Engineering: We save your budget by aggressively filtering out low-value traffic, leaving only the ready-to-buy audience.',
                ],
                proofLabel: 'Section 3: Social Proof',
                proofHeading: 'The Choice of Search-Driven Leaders.',
                cta: 'Capture High-Intent Demand',
            },
            {
                id: 'linkedin-ads',
                name: 'LinkedIn Ads',
                subtitle: 'The Boardroom Strategist',
                vibe: 'Authoritative, professional, C-suite targeting.',
                hookHeadline: "Precision Prospecting in the World's Largest Boardroom.",
                hookCopy:
                    "B2B marketing is not about volume; it is about the right volume. We help you bypass the noise and land your offer directly on the screens of CEOs, founders, and VPs. We use LinkedIn's unmatched professional data to build relationships and establish your brand as the industry authority before the first sales call even happens.",
                breakdownLabel: 'Section 2: The Tactical Edge',
                breakdownTitle: 'The Tactical Edge',
                bullets: [
                    'Account-Based Marketing (ABM): We do not target audiences; we target specific companies and job titles that fit your Ideal Customer Profile.',
                    'Thought Leadership Content: We deploy high-value white papers and insights that make your brand the smartest voice in the room.',
                ],
                proofLabel: 'Section 3: Social Proof',
                proofHeading: 'Trusted by B2B Innovators.',
                cta: 'Initiate B2B Growth',
            },
            {
                id: 'pinterest-ads',
                name: 'Pinterest Ads',
                subtitle: 'The Visual Blueprint',
                vibe: 'Aesthetic, inspirational, future-planning.',
                hookHeadline: 'From Inspiration to Purchase.',
                hookCopy:
                    'Pinterest users are planners. They are not looking at what is happening now; they are looking at what they want to buy next. We position your products at the center of their aspirations. By leveraging high-end visual storytelling, we turn aesthetic discovery into direct commercial action, capturing customers earlier in the buying cycle than any other platform.',
                breakdownLabel: 'Section 2: The Tactical Edge',
                breakdownTitle: 'The Tactical Edge',
                bullets: [
                    'Visual Search Optimization: We ensure your pins are discovered by users searching for specific styles, trends, and solutions.',
                    'Catalog Integration: We bridge the gap between pins and purchases with seamless e-commerce integration that makes buying effortless.',
                ],
                proofLabel: 'Section 3: Social Proof',
                proofHeading: 'Aesthetic Brands Scaling with Humeen.',
                cta: 'Inspire Commercial Action',
            },
        ],
    },
];

const PROOF_LOGOS = ['Airbnb', 'Spotify', 'Slack', 'Stripe', 'Notion', 'Figma', 'Shopify', 'HubSpot'];

const ServicesPage = ({ onBack, onOpenHire, focusServiceId, singleServiceId = null, showHeader = true }) => {
    const pageRef = useRef(null);
    const allServices = SERVICES_GROUPS.flatMap((group) => group.items);
    const selectedService = singleServiceId ? allServices.find((service) => service.id === singleServiceId) : null;
    const selectedGroup = singleServiceId ? SERVICES_GROUPS.find((group) => group.items.some((service) => service.id === singleServiceId)) : null;
    const visibleGroups = singleServiceId
        ? SERVICES_GROUPS.map((group) => ({
              ...group,
              items: group.items.filter((service) => service.id === singleServiceId),
          })).filter((group) => group.items.length > 0)
        : SERVICES_GROUPS;

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.services-enter-stagger', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
            gsap.fromTo('.services-headline', { opacity: 0, y: 80, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' });

            gsap.utils.toArray('.service-card').forEach((card) => {
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

    useEffect(() => {
        if (!focusServiceId) return;

        const target = document.getElementById(focusServiceId);
        if (!target) return;

        window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }, [focusServiceId]);

    return (
        <div ref={pageRef} data-page-root="services" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            {showHeader && <CommonPageHeader onBack={onBack} rightLabel={selectedService ? selectedService.name : 'Our Services'} className="services-enter-stagger" />}

            <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 services-enter-stagger">{selectedGroup ? selectedGroup.label : 'Our Services'}</p>
                    {selectedService ? (
                        <>
                            <h1 className="text-[2.2rem] max-[360px]:text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8.4rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 services-headline">
                                {selectedService.name}
                            </h1>
                            <p className="text-white/45 text-base sm:text-lg max-w-3xl font-medium leading-relaxed services-enter-stagger">{selectedService.hookCopy}</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-[2.2rem] max-[360px]:text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8.4rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 services-headline">
                                Growth
                                <br />
                                Architecture.
                            </h1>
                            <p className="text-white/45 text-base sm:text-lg max-w-3xl font-medium leading-relaxed services-enter-stagger">
                                Built to convert intent into revenue. Every service below is engineered as a system, not a one-off deliverable.
                            </p>
                        </>
                    )}
                </div>
            </section>

            {!selectedService && (
                <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 services-enter-stagger">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
                        {[
                            { value: '10', label: 'Service Verticals' },
                            { value: 'GPU', label: 'Design Precision' },
                            { value: 'Full Stack', label: 'Execution Scope' },
                            { value: '24/7', label: 'Optimization Cycle' },
                        ].map((item) => (
                            <div key={item.label} className="border-l border-white/10 pl-4 sm:pl-6 lg:pl-7">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">{item.value}</p>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold leading-tight">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-20">
                    {visibleGroups.map((group) => (
                        <div key={group.label}>
                            <p className="text-[#8ea2c9] text-[10px] uppercase tracking-[0.35em] font-black mb-8">{group.label}</p>
                            <div className="space-y-8">
                                {group.items.map((service, index) => (
                                    <article id={service.id} key={service.id} className="service-card scroll-mt-36 relative border border-white/10 bg-[#07090f]/95 rounded-[2.5rem] overflow-hidden group hover:border-[#0070FF]/30 transition-all duration-700 shadow-2xl">
                                        {/* Background Glow */}
                                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0070FF]/15 rounded-full blur-[100px] group-hover:bg-[#0070FF]/25 transition-colors duration-1000 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#0070FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-16">
                                            {/* Header Row */}
                                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                                                <div>
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-black text-sm">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                        <span className="text-[#0070FF] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black max-w-[200px] sm:max-w-none">
                                                            Vibe / {service.vibe}
                                                        </span>
                                                    </div>
                                                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-black leading-none uppercase tracking-tight">
                                                        {service.name}
                                                    </h2>
                                                </div>
                                                <p className="text-white/40 text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase">
                                                    {service.subtitle}
                                                </p>
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                                {/* Hook */}
                                                <div className="flex flex-col justify-center bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] p-8 sm:p-10 border border-white/5 group-hover:border-white/10 transition-colors">
                                                    <p className="text-[#0070FF] text-[10px] uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-2">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                        Section 1 / {service.id.includes('ads') ? 'The Hook' : 'The Approach'}
                                                    </p>
                                                    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-6">{service.hookHeadline}</h3>
                                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">{service.hookCopy}</p>
                                                </div>

                                                {/* Breakdown */}
                                                {(service.breakdownTitle || service.bullets?.length) && (
                                                    <div className="flex flex-col justify-center bg-black/40 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-white/5 group-hover:bg-[#0070FF]/5 transition-colors">
                                                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-2">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                                                            {service.breakdownLabel || 'Section 2 / Methodology'}
                                                        </p>
                                                        {service.breakdownTitle && <h4 className="text-white text-xl sm:text-2xl font-black leading-tight mb-6">{service.breakdownTitle}</h4>}
                                                        {service.bullets?.length > 0 && (
                                                            <ul className="space-y-4">
                                                                {service.bullets.map((bullet, i) => {
                                                                    const parts = bullet.split(': ');
                                                                    return (
                                                                        <li key={i} className="flex gap-4">
                                                                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#0070FF] shrink-0"></div>
                                                                            <p className="text-white/60 text-sm leading-relaxed">
                                                                                {parts.length > 1 ? (
                                                                                    <><strong className="text-white">{parts[0]}:</strong> {parts[1]}</>
                                                                                ) : (
                                                                                    bullet
                                                                                )}
                                                                            </p>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Proof & CTA */}
                                            <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/10 flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between">
                                                <div className="flex-1">
                                                    {service.proofHeading && (
                                                        <div className="mb-6 lg:mb-0">
                                                            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-2">{service.proofLabel || 'Section 3 / The Proof'}</p>
                                                            <h4 className="text-white text-xl font-bold leading-tight">{service.proofHeading}</h4>
                                                        </div>
                                                    )}

                                                    {service.showLogos && (
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 lg:mt-8 max-w-2xl">
                                                            {PROOF_LOGOS.slice(0, 4).map((logo) => (
                                                                <div key={logo} className="bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-center text-white/50 text-xs sm:text-[10px] uppercase tracking-widest font-black group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                                                                    {logo}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={onOpenHire}
                                                    className="w-full lg:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#0070FF] text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(0,112,255,0.2)] hover:shadow-[0_0_40px_rgba(0,112,255,0.4)] flex items-center justify-center gap-3"
                                                >
                                                    {service.cta}
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 text-center">
                <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6">Ready to execute?</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 sm:mb-10">
                    We build the system.
                    <br />
                    You own the category.
                </h2>
                <button
                    type="button"
                    onClick={onOpenHire}
                    className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300 rounded-full"
                >
                    Start Your Growth Engine
                </button>
            </section>
        </div>
    );
};

export default ServicesPage;
