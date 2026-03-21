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
import ShaderBackground from './components/ShaderBackground';
import ServicesPage from './components/ServicesPage';
import WorksPage from './components/WorksPage';
import CareersPage from './components/CareersPage';
import FounderNotesPage from './components/FounderNotesPage';

gsap.registerPlugin(ScrollTrigger);

const REGION_OPTIONS = [
    { value: 'GCC', label: 'GCC' },
    { value: 'INDIA', label: 'INDIA' },
];

const RegionDropdown = ({ id, value, onChange, className = '', buttonClassName = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const selectedOption = REGION_OPTIONS.find((option) => option.value === value) || REGION_OPTIONS[0];

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative ${className}`.trim()}>
            <button
                id={id}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`w-full text-left bg-white/5 border border-white/10 rounded-full font-bold tracking-widest uppercase hover:border-white/30 transition-colors ${buttonClassName}`.trim()}
            >
                <span className="text-white">{selectedOption.label}</span>
            </button>

            <svg className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0b101d]/95 backdrop-blur-xl shadow-2xl z-[140]">
                    {REGION_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                                option.value === value ? 'bg-[#0070FF]/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const App = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAgencyOpen, setIsAgencyOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHireUsOpen, setIsHireUsOpen] = useState(false);
    const [region, setRegion] = useState('GCC');
    const [currentPage, setCurrentPage] = useState('home');
    const [servicesFocusId, setServicesFocusId] = useState(null);
    const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
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
                .fromTo('.home-hero-media', { scale: 1.2, opacity: 0.2, filter: 'blur(10px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' })
                .fromTo('.home-hero-headline', { opacity: 0, filter: 'blur(12px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.3 }, '-=0.4')
                .fromTo('.scattered-char', { 
                    opacity: 0,
                    x: () => (Math.random() - 0.5) * 800,
                    y: () => (Math.random() - 0.5) * 800,
                    rotationZ: () => (Math.random() - 0.5) * 180,
                    scale: () => Math.random() * 2,
                    filter: 'blur(10px)'
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotationZ: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    duration: 0.7,
                    stagger: {
                        amount: 0.3,
                        from: 'random'
                    },
                    ease: 'back.out(1.5)'
                }, '-=0.2')
                .fromTo('.home-enter-stagger', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }, '-=0.3');

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

    useEffect(() => {
        if (currentPage !== 'home' || !pendingScrollTarget) return;

        window.requestAnimationFrame(() => {
            const target = document.getElementById(pendingScrollTarget);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setPendingScrollTarget(null);
        });
    }, [currentPage, pendingScrollTarget]);

    const openServicesOverview = () => {
        setServicesFocusId(null);
        setCurrentPage('services');
        setIsServicesOpen(false);
        setIsAgencyOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const openServicesPage = (serviceId = null) => {
        if (!serviceId) {
            openServicesOverview();
            return;
        }

        setServicesFocusId(serviceId);
        setCurrentPage('service-detail');
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

    const openBlogPage = () => {
        setCurrentPage('blog');
        setIsAgencyOpen(false);
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        setServicesFocusId(null);
        window.scrollTo(0, 0);
    };

    return (
        <div className="relative w-full min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
            <ShaderBackground />
            <div ref={cursorRef} className="custom-cursor"></div>
            <div className="grain-overlay"></div>
            <HireUsModal isOpen={isHireUsOpen} onClose={() => setIsHireUsOpen(false)} />

            <div className="relative z-10">
                {currentPage === 'cases' && <CaseStudiesPage onBack={openHomePage} showHeader={false} />}

                {currentPage === 'services' && <ServicesPage onBack={openHomePage} onOpenHire={() => setIsHireUsOpen(true)} showHeader={false} />}

                {currentPage === 'service-detail' && (
                    <ServicesPage onBack={openServicesOverview} onOpenHire={() => setIsHireUsOpen(true)} focusServiceId={servicesFocusId} singleServiceId={servicesFocusId} showHeader={false} />
                )}

                {currentPage === 'works' && <WorksPage onBack={openHomePage} showHeader={false} />}

                {currentPage === 'careers' && <CareersPage onBack={openHomePage} showHeader={false} />}

                {currentPage === 'founder-notes' && <FounderNotesPage onBack={openHomePage} showHeader={false} />}

                {currentPage === 'blog' && (
                    <div className="pt-24 sm:pt-28 lg:pt-32 bg-white min-h-screen pb-16">
                        <BlogSection />
                    </div>
                )}

                <div ref={currentPage === 'home' ? homePageRef : null}>
                        <header ref={headerRef} className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 glass px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 opacity-100">
                            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openHomePage();
                                        }}
                                        className="text-white text-lg sm:text-xl lg:text-2xl font-black tracking-widest"
                                    >
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
                                        onClick={openBlogPage}
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
                                    <RegionDropdown id="region-select-desktop" value={region} onChange={setRegion} className="w-[168px]" buttonClassName="py-2.5 pl-5 pr-10 text-sm" />

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
                                <div className="lg:hidden mt-3 sm:mt-4 ml-auto w-full sm:w-[360px] rounded-2xl border border-white/10 bg-[#0b101d]/95 backdrop-blur-xl p-5 sm:p-6 space-y-4 shadow-2xl">
                                    <button
                                        type="button"
                                        onClick={() => openServicesPage()}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Our Services
                                    </button>
                                    <div className="w-full h-px bg-white/10"></div>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('works')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Works
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('careers')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Careers
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('founder-notes')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Founder Notes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openBlogPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Blog
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openCasesPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Customer Cases
                                    </button>

                                    <div className="border-t border-white/10 pt-4 pb-1">
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Region</p>
                                        <RegionDropdown id="region-select-mobile" value={region} onChange={setRegion} buttonClassName="py-2.5 pl-4 pr-10 text-xs" />
                                    </div>
                                </div>
                            )}
                        </header>

                        {currentPage === 'home' && (
                            <>
                                <section id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden home-enter-stagger">
                                    <div className="absolute inset-0 home-hero-media hero-shader-vignette"></div>

                                    <div className="relative z-10 pointer-events-none">
                                        <h1 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-[12rem] font-black leading-none text-center outline-text difference-mode uppercase select-none home-hero-headline hero-spotlight">
                                            {"WE BUILD".split('').map((char, i) => (
                                                <span key={`w1-${i}`} className="inline-block scattered-char" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                                                    {char}
                                                </span>
                                            ))}
                                            <br />
                                            {"LEGACIES".split('').map((char, i) => (
                                                <span key={`w2-${i}`} className="inline-block scattered-char" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                                                    {char}
                                                </span>
                                            ))}
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
                            </>
                        )}
                </div>
            </div>
        </div>
    );
};

export default App;
