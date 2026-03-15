import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesPage = ({ onBack }) => {
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
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 90, scale: 0.97, rotateX: 8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        duration: 0.95,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 82%',
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
            <header className="fixed top-0 left-0 w-full z-[100] glass px-8 py-6 flex items-center justify-between cases-enter-stagger">
                <button onClick={onBack} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back
                </button>
                <a href="#" className="text-white text-2xl font-black tracking-widest">
                    HUMEEN.
                </a>
                <span className="text-white/20 text-xs uppercase tracking-widest font-bold">Customer Cases</span>
            </header>

            <section className="pt-48 pb-24 px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6 cases-enter-stagger">Customer Cases</p>
                    <h1 className="text-7xl md:text-[9rem] font-black text-white leading-none uppercase tracking-tighter mb-10 cases-headline">
                        Case
                        <br />
                        Studies.
                    </h1>
                    <p className="text-white/40 text-lg max-w-xl font-medium leading-relaxed cases-subline">
                        Real results for ambitious brands. Every engagement is a partnership built on data, creativity, and relentless execution.
                    </p>
                </div>
            </section>

            <section className="py-16 px-8 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 case-stats-grid">
                    {[
                        { value: '50+', label: 'Clients Served' },
                        { value: 'EUR 12M+', label: 'Revenue Generated' },
                        { value: '8.3x', label: 'Average ROAS' },
                        { value: '94%', label: 'Client Retention' },
                    ].map((stat) => (
                        <div key={stat.label} className="border-l border-white/10 pl-8 case-stats-item">
                            <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
                            <p className="text-white/30 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-8">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-2">
                    {cases.map((c, i) => (
                        <div key={c.id} className="group relative overflow-hidden rounded-2xl border border-white/5 flex flex-col md:flex-row md:h-[520px] hover:border-white/20 transition-all duration-500 case-card">
                            <div className={`relative w-full md:w-1/2 overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                <img src={c.image} alt={c.client} loading="lazy" className="w-full h-64 md:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />
                                <span className="absolute top-6 left-6 px-4 py-1 bg-white text-black text-[10px] uppercase tracking-widest font-black rounded-full">{c.tag}</span>
                            </div>

                            <div className={`w-full md:w-1/2 bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-white/20 text-6xl font-black leading-none">{c.id}</span>
                                        <div>
                                            <p className="text-white font-black text-xl">{c.client}</p>
                                            <p className="text-white/30 text-xs uppercase tracking-widest">{c.category}</p>
                                        </div>
                                    </div>
                                    <h2 className="text-white text-2xl md:text-3xl font-black leading-tight mb-6">{c.headline}</h2>
                                    <p className="text-white/40 text-sm leading-relaxed mb-10">{c.description}</p>
                                </div>

                                <div className="border-t border-white/5 pt-8 grid grid-cols-3 gap-4">
                                    {c.results.map((r) => (
                                        <div key={r.label}>
                                            <p className="text-white text-2xl font-black mb-1">{r.value}</p>
                                            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{r.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-32 px-8 text-center border-t border-white/5 cases-cta">
                <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-black mb-6">Ready to be next?</p>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-10">
                    Let's build your
                    <br />
                    legacy together.
                </h2>
                <button onClick={onBack} className="px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300 rounded-full">
                    Work with us
                </button>
            </section>
        </div>
    );
};

export default CaseStudiesPage;
