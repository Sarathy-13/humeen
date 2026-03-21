import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonPageHeader from './CommonPageHeader';

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesPage = ({ onBack, showHeader = true }) => {
    const pageRef = useRef(null);

    const cases = [
        {
            id: '01',
            client: 'NovaTech',
            category: 'Growth Ads',
            headline: 'How we scaled NovaTech from EUR 0 to EUR 2.4M ARR in 9 months.',
            description:
                'By rebuilding their entire paid acquisition funnel from ad creative to landing page and deploying hyper-targeted Meta and LinkedIn campaigns, we turned a stagnating SaaS into a category leader.',
            results: [
                { label: 'ARR Growth', value: '+EUR 2.4M' },
                { label: 'CAC Reduction', value: '-42%' },
                { label: 'ROAS', value: '8.3x' },
            ],
            image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=2070',
            tag: 'B2B SaaS',
        },
        {
            id: '02',
            client: 'Lumena',
            category: 'SEO & IA',
            headline: 'Organic traffic up 340% for a D2C beauty brand in 6 months.',
            description:
                'Through deep keyword clustering, content architecture overhaul, and a technical SEO sprint, we placed Lumena at the top of every high-intent search in the GCC market.',
            results: [
                { label: 'Organic Traffic', value: '+340%' },
                { label: 'Conversion Rate', value: '+2.1x' },
                { label: 'Page 1 Keywords', value: '180+' },
            ],
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2087',
            tag: 'D2C Beauty',
        },
        {
            id: '03',
            client: 'Meridian Capital',
            category: 'ABM',
            headline: 'Account-Based Marketing that closed EUR 1.8M in pipeline in Q1.',
            description:
                'We built a bespoke ABM engine targeting 40 enterprise accounts combining personalised outbound sequences, LinkedIn DM funnels, and executive-level gifting strategy to land C-suite meetings.',
            results: [
                { label: 'Pipeline Generated', value: 'EUR 1.8M' },
                { label: 'Meeting Rate', value: '31%' },
                { label: 'Accounts Closed', value: '11' },
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
            tag: 'Finance',
        },
        {
            id: '04',
            client: 'Orbis Health',
            category: 'HubSpot',
            headline: 'CRM overhaul that reduced sales cycle from 90 days to 34.',
            description:
                'We migrated Orbis from a fragmented stack to a fully integrated HubSpot CRM complete with automated lead scoring, lifecycle workflows, and real-time revenue dashboards for the leadership team.',
            results: [
                { label: 'Sales Cycle', value: '-62%' },
                { label: 'Lead Response Time', value: '<5 min' },
                { label: 'MQL-to-SQL Rate', value: '+55%' },
            ],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
            tag: 'HealthTech',
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            const introTimeline = gsap.timeline();

            introTimeline
                .fromTo('.cases-enter-stagger', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
                .fromTo('.cases-headline', { opacity: 0, y: 90, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }, '-=0.55')
                .fromTo('.cases-subline', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.65');

            gsap.fromTo(
                '.case-stats-item',
                { opacity: 0, y: 45 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.case-stats-grid',
                        start: 'top 84%',
                        once: true,
                    },
                },
            );

            gsap.utils.toArray('.case-card').forEach((card) => {
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

            gsap.fromTo(
                '.cases-cta',
                { opacity: 0, y: 55 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.cases-cta',
                        start: 'top 85%',
                        once: true,
                    },
                },
            );
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} data-page-root="cases" className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
            {showHeader && <CommonPageHeader onBack={onBack} rightLabel="Customer Cases" className="cases-enter-stagger" />}

            <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 cases-enter-stagger">Customer Cases</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] font-black text-white leading-none uppercase tracking-tighter mb-8 sm:mb-10 cases-headline">
                        Case
                        <br />
                        Studies.
                    </h1>
                    <p className="text-white/40 text-base sm:text-lg max-w-xl font-medium leading-relaxed cases-subline">
                        Real results for ambitious brands. Every engagement is a partnership built on data, creativity, and relentless execution.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 case-stats-grid">
                    {[
                        { value: '50+', label: 'Clients Served' },
                        { value: 'EUR 12M+', label: 'Revenue Generated' },
                        { value: '8.3x', label: 'Average ROAS' },
                        { value: '94%', label: 'Client Retention' },
                    ].map((stat) => (
                        <div key={stat.label} className="border-l border-white/10 pl-4 sm:pl-6 lg:pl-8 case-stats-item">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</p>
                            <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-2">
                    {cases.map((c, i) => (
                        <div key={c.id} className="group relative overflow-hidden rounded-[2.5rem] flex flex-col md:h-[600px] case-card border border-white/10 shadow-2xl">
                            {/* Full background image */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img 
                                    src={c.image} 
                                    alt={c.client} 
                                    loading="lazy" 
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" 
                                />
                                {/* Gradient overlays for legibility */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? 'from-[#07090f] via-[#07090f]/90 to-transparent' : 'from-transparent via-[#07090f]/90 to-[#07090f]'} transition-all duration-700`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Glass Content Panel */}
                            <div className={`relative z-10 w-full md:w-[65%] h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                                <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-8 sm:p-10 rounded-3xl group-hover:border-[#0070FF]/30 group-hover:bg-black/60 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#0070FF] text-4xl sm:text-5xl font-black leading-none">{c.id}</span>
                                            <div>
                                                <p className="text-white font-black text-xl lg:text-2xl">{c.client}</p>
                                                <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-bold">{c.category}</p>
                                            </div>
                                        </div>
                                        <span className="hidden sm:inline-block px-4 py-1.5 bg-white/10 text-white text-[10px] uppercase tracking-widest font-black rounded-full border border-white/10">{c.tag}</span>
                                    </div>
                                    
                                    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-6 group-hover:text-white transition-colors">{c.headline}</h2>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10 group-hover:text-white/80 transition-colors">{c.description}</p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                        {c.results.map((r, idx) => (
                                            <div key={r.label} className={`relative ${idx !== c.results.length - 1 ? 'sm:after:content-[\'\'] sm:after:absolute sm:after:right-0 sm:after:top-1/4 sm:after:h-1/2 sm:after:w-px sm:after:bg-white/10' : ''}`}>
                                                <p className="text-white text-2xl sm:text-3xl font-black mb-1 group-hover:text-[#0070FF] transition-colors duration-500">{r.value}</p>
                                                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{r.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center border-t border-white/5 cases-cta">
                <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6">Ready to be next?</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 sm:mb-10">
                    Let's build your
                    <br />
                    legacy together.
                </h2>
                <button onClick={onBack} className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300 rounded-full">
                    Work with us
                </button>
            </section>
        </div>
    );
};

export default CaseStudiesPage;
