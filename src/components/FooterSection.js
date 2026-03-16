import React from 'react';

const FooterSection = () => {
    const navLinks = ['Works', 'Careers', 'Founder Notes', 'Blog'];
    const services = ['Growth Ads', 'SEO & IA', 'HubSpot', 'ABM', 'Outbound'];

    const LinkItem = ({ children, href = '#' }) => (
        <a href={href} className="block text-[#A0A0A0] text-sm hover:text-white hover:translate-x-[5px] transition-all duration-300 mb-3">
            {children}
        </a>
    );

    return (
        <footer className="bg-[#111111] border-t border-[#333] pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16 lg:mb-20">
                    <div className="sm:col-span-2 md:col-span-1">
                        <a href="#" className="text-white text-2xl font-black tracking-widest block mb-5">
                            HUMEEN.
                        </a>
                        <p className="text-[#555] text-sm leading-relaxed max-w-[220px]">A growth agency built to turn ambitious ideas into lasting digital legacies.</p>
                    </div>

                    <div>
                        <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black mb-6">Navigate</p>
                        {navLinks.map((l) => (
                            <LinkItem key={l}>{l}</LinkItem>
                        ))}
                    </div>

                    <div>
                        <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black mb-6">Services</p>
                        {services.map((s) => (
                            <LinkItem key={s}>{s}</LinkItem>
                        ))}
                    </div>

                    <div>
                        <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black mb-6">Connect</p>
                        <a href="#" className="block text-[#A0A0A0] text-sm hover:text-white hover:translate-x-[5px] transition-all duration-300 mb-3">
                            Contact
                        </a>
                        <a href="mailto:hello@humeen.com" className="block text-[#A0A0A0] text-sm hover:text-white hover:translate-x-[5px] transition-all duration-300 mb-3 break-all">
                            hello@humeen.com
                        </a>
                        <a href="tel:+441234567890" className="block text-[#A0A0A0] text-sm hover:text-white hover:translate-x-[5px] transition-all duration-300 mb-6">
                            +44 123 456 7890
                        </a>

                        <div className="flex items-center gap-5">
                            <a href="#" aria-label="LinkedIn" className="text-[#555] hover:text-white hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-[#555] hover:text-white hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="#" aria-label="X" className="text-[#555] hover:text-white hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1a1a1a] pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#333] text-[10px] sm:text-xs tracking-widest uppercase text-center md:text-left">(C) 2026 HUMEEN. All Rights Reserved.</p>
                    <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                        <a href="#" className="text-[#333] text-xs hover:text-[#666] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#333] text-xs hover:text-[#666] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
