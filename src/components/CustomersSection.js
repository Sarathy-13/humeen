import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomersSection = () => {
    const sectionRef = useRef(null);

    const logos = [
        { name: 'Airbnb', src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
        { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
        { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
        { name: 'Stripe', src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
        { name: 'Notion', src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
        { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
        { name: 'Shopify', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
        { name: 'HubSpot', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/HubSpot_wordmark.svg/2560px-HubSpot_wordmark.svg.png' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo('.customers-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000000]">
            <div className="max-w-[1400px] mx-auto">
                <div className="customers-header text-center mb-12 sm:mb-16 lg:mb-20 opacity-0">
                    <p className="text-[#666] text-[10px] uppercase tracking-[0.4em] font-black mb-5">Our Customers</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
                        They trust us with
                        <br />
                        their growth.
                    </h2>
                </div>

                <div className="marquee-wrapper py-6">
                    <div className="marquee-track">
                        {[...logos, ...logos].map((logo, i) => (
                            <div key={`${logo.name}-${i}`} className="flex items-center justify-center px-8 sm:px-12 lg:px-16 group cursor-pointer">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    loading="lazy"
                                    title={logo.name}
                                    className="h-7 sm:h-8 w-auto object-contain max-w-[130px] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    style={{ filter: 'grayscale(1) invert(1)' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-0 border-t border-white/5 pt-12 text-center">
                    <p className="text-white/20 text-xs uppercase tracking-widest font-medium">And 50+ more brands across GCC & India</p>
                </div>
            </div>
        </section>
    );
};

export default CustomersSection;
