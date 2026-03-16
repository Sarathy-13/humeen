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
import LoadingScreen from './components/LoadingScreen';
import ShaderBackground from './components/ShaderBackground';
import ServicesPage from './components/ServicesPage';
import WorksPage from './components/WorksPage';
import CareersPage from './components/CareersPage';
import FounderNotesPage from './components/FounderNotesPage';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAgencyOpen, setIsAgencyOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHireUsOpen, setIsHireUsOpen] = useState(false);
    const [region, setRegion] = useState('GCC');
    const [currentPage, setCurrentPage] = useState('home');
    const [servicesFocusId, setServicesFocusId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const cursorRef = useRef(null);
    const headerRef = useRef(null);
    const homePageRef = useRef(null);

    useEffect(() => {
        const loadingTimer = window.setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => {
            window.clearTimeout(loadingTimer);
        };
    }, []);

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
                setIsMobileMenuOpen(false);
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

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [currentPage]);

    const openServicesPage = (serviceId = null) => {
        setServicesFocusId(serviceId);
        setCurrentPage('services');
        setIsServicesOpen(false);
        setIsAgencyOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const openAgencyItemPage = (pageId = 'works') => {
        setCurrentPage(pageId);
        setIsAgencyOpen(false);
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const openHomePage = () => {
        setCurrentPage('home');
        setServicesFocusId(null);
        setIsServicesOpen(false);
        setIsAgencyOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const openCasesPage = () => {
        setCurrentPage('cases');
        setIsAgencyOpen(false);
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const scrollToBlog = () => {
        setIsAgencyOpen(false);
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);

        window.requestAnimationFrame(() => {
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    };

    return (
        <div className="relative w-full min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
            <ShaderBackground />
            {isLoading && <LoadingScreen />}
            <div ref={cursorRef} className="custom-cursor"></div>
            <div className="grain-overlay"></div>
            <HireUsModal isOpen={isHireUsOpen} onClose={() => setIsHireUsOpen(false)} />

            <div className="relative z-10">
                {currentPage === 'cases' && <CaseStudiesPage onBack={openHomePage} />}

                {currentPage === 'services' && <ServicesPage onBack={openHomePage} onOpenHire={() => setIsHireUsOpen(true)} focusServiceId={servicesFocusId} />}

                {currentPage === 'works' && <WorksPage onBack={openHomePage} />}

                {currentPage === 'careers' && <CareersPage onBack={openHomePage} />}

                {currentPage === 'founder-notes' && <FounderNotesPage onBack={openHomePage} />}

                {currentPage === 'home' && (
                    <div ref={homePageRef}>
                        <header ref={headerRef} className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 home-enter-stagger relative">
                            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <a href="#" className="text-white text-lg sm:text-xl lg:text-2xl font-black tracking-widest">
                                        HUMEEN.
                                    </a>
                                </div>

                                <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
                                    <div className="relative group" onMouseEnter={() => { setIsServicesOpen(true); setIsAgencyOpen(false); }}>
                                        <button
                                            type="button"
                                            onClick={() => openServicesPage()}
                                            className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            Our Services
                                            <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="relative group" onMouseEnter={() => { setIsAgencyOpen(true); setIsServicesOpen(false); }}>
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('works')}
                                            className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            The Agency
                                            <svg className={`w-3 h-3 transition-transform ${isAgencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={scrollToBlog}
                                        className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        onMouseEnter={() => { setIsAgencyOpen(false); setIsServicesOpen(false); }}
                                    >
                                        Blog
                                    </button>
                                    <button
                                        onClick={openCasesPage}
                                        className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                                        onMouseEnter={() => { setIsAgencyOpen(false); setIsServicesOpen(false); }}
                                    >
                                        Customer Cases
                                    </button>
                                </div>

                                <div className="hidden lg:flex flex-1 items-center justify-end gap-6 text-white text-sm font-medium tracking-widest uppercase">
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

                                <div className="flex lg:hidden items-center justify-end gap-2 sm:gap-3">
                                    <button
                                        type="button"
                                        onClick={() => { setIsMobileMenuOpen(false); setIsHireUsOpen(true); }}
                                        className="px-4 sm:px-5 py-2.5 border border-white/20 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        Hire Us
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                        aria-label="Toggle mobile navigation"
                                        className="h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors grid place-items-center"
                                    >
                                        {isMobileMenuOpen ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <MegaMenu isOpen={isServicesOpen} onSelectService={openServicesPage} />
                            <AgencyDropdown isOpen={isAgencyOpen} onSelectSection={openAgencyItemPage} />

                            {isMobileMenuOpen && (
                                <div className="lg:hidden mt-3 sm:mt-4 ml-auto w-full sm:w-[360px] rounded-2xl border border-white/10 bg-[#0b101d]/95 backdrop-blur-xl p-5 sm:p-6 space-y-5 shadow-2xl">
                                    <button
                                        type="button"
                                        onClick={() => openServicesPage()}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Our Services
                                    </button>
                                    <div className="space-y-3 border-t border-white/10 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('works')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Works
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('careers')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Careers
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('founder-notes')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Founder Notes
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={scrollToBlog}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Blog
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openCasesPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Customer Cases
                                    </button>

                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Region</p>
                                        <div className="relative bg-white/5 border border-white/10 rounded-full p-1 flex items-center">
                                            <div
                                                className="absolute h-[calc(100%-8px)] rounded-full bg-[#0070FF] transition-all duration-300 pointer-events-none"
                                                style={{
                                                    width: 'calc(50% - 4px)',
                                                    left: region === 'GCC' ? '4px' : 'calc(50%)',
                                                }}
                                            ></div>
                                            <button onClick={() => setRegion('GCC')} className={`relative z-10 flex-1 px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-colors ${region === 'GCC' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                                                GCC
                                            </button>
                                            <button onClick={() => setRegion('INDIA')} className={`relative z-10 flex-1 px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-colors ${region === 'INDIA' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                                                INDIA
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </header>

                        <section id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden home-enter-stagger">
                            <div className="absolute inset-0 home-hero-media hero-shader-vignette"></div>

                            <div className="relative z-10 pointer-events-none">
                                <h1 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-[12rem] font-black leading-none text-center outline-text difference-mode uppercase select-none home-hero-headline hero-spotlight">
                                    WE BUILD
                                    <br />
                                    LEGACIES
                                </h1>
                            </div>

                            <a href="#quiz" className="absolute bottom-14 sm:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity home-enter-stagger text-center">
                                <span className="text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-medium text-white">Scroll to explore</span>
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
        </div>
    );
};

export default App;
