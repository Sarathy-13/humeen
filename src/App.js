import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MegaMenu from './components/MegaMenu';
import AgencyDropdown from './components/AgencyDropdown';
import HireUsModal from './components/HireUsModal';
import AcquisitionQuiz from './components/AcquisitionQuiz';
import BlogSection from './components/BlogSection';
import CustomersSection from './components/CustomersSection';
import FooterSection from './components/FooterSection';
import CaseStudiesPage from './components/CaseStudiesPage';
import Hero3DScene from './components/Hero3DScene';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAgencyOpen, setIsAgencyOpen] = useState(false);
    const [isHireUsOpen, setIsHireUsOpen] = useState(false);
    const [region, setRegion] = useState('GCC');
    const [currentPage, setCurrentPage] = useState('home');
    const cursorRef = useRef(null);
    const headerRef = useRef(null);
    const homePageRef = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.4, ease: 'power3' });

        const moveCursor = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);

        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setIsServicesOpen(false);
                setIsAgencyOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (currentPage !== 'home' || !homePageRef.current) return;

        const ctx = gsap.context(() => {
            const intro = gsap.timeline();

            intro
                .fromTo('.home-hero-media', { scale: 1.2, opacity: 0.2, filter: 'blur(10px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' })
                .fromTo('.home-hero-headline', { opacity: 0, y: 90, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out' }, '-=0.9')
                .fromTo('.home-enter-stagger', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' }, '-=0.75');

            gsap.utils.toArray('.home-section-reveal').forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 80, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.95,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 82%',
                            once: true,
                        },
                    },
                );
            });
        }, homePageRef);

        return () => ctx.revert();
    }, [currentPage]);

    return (
        <div className="relative w-full min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
            <div ref={cursorRef} className="custom-cursor"></div>
            <div className="grain-overlay"></div>

            {currentPage === 'cases' && <CaseStudiesPage onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />}

            {currentPage === 'home' && (
                <div ref={homePageRef}>
                    <header ref={headerRef} className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 glass px-8 py-6 home-enter-stagger">
                        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                            <div className="flex-1">
                                <a href="#" className="text-white text-2xl font-black tracking-widest">
                                    HUMEEN.
                                </a>
                            </div>

                            <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
                                <div className="relative group cursor-pointer" onMouseEnter={() => { setIsServicesOpen(true); setIsAgencyOpen(false); }}>
                                    <span className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                                        Our Services
                                        <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative group cursor-pointer" onMouseEnter={() => { setIsAgencyOpen(true); setIsServicesOpen(false); }}>
                                    <span className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                                        The Agency
                                        <svg className={`w-3 h-3 transition-transform ${isAgencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <a href="#blog" className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors" onMouseEnter={() => { setIsAgencyOpen(false); setIsServicesOpen(false); }}>
                                    Blog
                                </a>
                                <button
                                    onClick={() => { setCurrentPage('cases'); setIsAgencyOpen(false); setIsServicesOpen(false); }}
                                    className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                                    onMouseEnter={() => { setIsAgencyOpen(false); setIsServicesOpen(false); }}
                                >
                                    Customer Cases
                                </button>
                            </div>

                            <div className="flex-1 flex items-center justify-end gap-6 text-white text-sm font-medium tracking-widest uppercase">
                                <div className="relative bg-white/5 border border-white/10 rounded-full p-1 flex items-center">
                                    <div
                                        id="region-indicator"
                                        className="absolute h-[calc(100%-8px)] rounded-full bg-[#0070FF] transition-all duration-300 pointer-events-none"
                                        style={{
                                            width: 'calc(50% - 4px)',
                                            left: region === 'GCC' ? '4px' : 'calc(50%)',
                                        }}
                                    ></div>
                                    <button onClick={() => setRegion('GCC')} className={`relative z-10 px-6 py-2 rounded-full transition-colors ${region === 'GCC' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                                        GCC
                                    </button>
                                    <button onClick={() => setRegion('INDIA')} className={`relative z-10 px-6 py-2 rounded-full transition-colors ${region === 'INDIA' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                                        INDIA
                                    </button>
                                </div>

                                <button onClick={() => setIsHireUsOpen(true)} className="py-3 px-8 border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                                    HIRE US
                                </button>
                            </div>
                        </div>

                        <MegaMenu isOpen={isServicesOpen} />
                        <AgencyDropdown isOpen={isAgencyOpen} />
                    </header>

                    <HireUsModal isOpen={isHireUsOpen} onClose={() => setIsHireUsOpen(false)} />

                    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden home-enter-stagger">
                        <Hero3DScene />

                        <div className="relative z-10 pointer-events-none">
                            <h1 className="text-7xl md:text-[12rem] font-black leading-none text-center outline-text difference-mode uppercase select-none home-hero-headline hero-spotlight">
                                WE BUILD
                                <br />
                                LEGACIES
                            </h1>
                        </div>

                        <a href="#quiz" className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity home-enter-stagger">
                            <span className="text-[10px] uppercase tracking-[0.6em] font-medium text-white">Scroll to explore</span>
                            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent scroll-indicator-line"></div>
                        </a>
                    </section>

                    <div id="quiz" className="home-section-reveal">
                        <AcquisitionQuiz />
                    </div>

                    <div className="home-section-reveal">
                        <BlogSection />
                    </div>
                    <div className="home-section-reveal">
                        <CustomersSection />
                    </div>
                    <div className="home-section-reveal">
                        <FooterSection />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
