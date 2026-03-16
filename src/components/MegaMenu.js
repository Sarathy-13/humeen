import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icons } from './Icons';

const MegaMenu = ({ isOpen, onSelectService }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(menuRef.current, 
                { opacity: 0, y: -20, scaleY: 0.95 }, 
                { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSelect = (serviceId) => {
        if (!onSelectService) return;
        onSelectService(serviceId);
    };

    return (
        <div ref={menuRef} className="absolute top-full left-0 mt-3 w-full glass p-6 sm:p-8 lg:p-12 z-50 mega-menu">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <div>
                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Expertise</h3>
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {[
                            { id: 'digital-marketing', name: 'Digital Marketing', icon: <Icons.Globe /> },
                            { id: 'web-development', name: 'Web Development', icon: <Icons.Code /> },
                            { id: 'app-development', name: 'App Development', icon: <Icons.Phone /> },
                            { id: 'influencer-production', name: 'Influencer Production', icon: <Icons.Camera /> },
                            { id: 'seo', name: 'SEO', icon: <Icons.Search /> },
                            { id: 'growth-outbound', name: 'Growth Outbound', icon: <Icons.Mail /> },
                        ].map((item) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => handleSelect(item.id)}
                                className="text-left flex items-center gap-4 text-white text-base lg:text-lg font-medium hover:text-[#007BFF] hover:translate-x-[5px] transition-all duration-300 group"
                            >
                                <span className="text-white/20 group-hover:text-[#007BFF] transition-colors">{item.icon}</span>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Advertising Networks</h3>
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {[
                            { id: 'meta-ads', name: 'Meta Ads', icon: <Icons.Social /> },
                            { id: 'google-ads', name: 'Google Ads', icon: <Icons.Search /> },
                            { id: 'linkedin-ads', name: 'LinkedIn Ads', icon: <Icons.Social /> },
                            { id: 'pinterest-ads', name: 'Pinterest Ads', icon: <Icons.Social /> },
                        ].map((item) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => handleSelect(item.id)}
                                className="text-left flex items-center gap-4 text-white text-base lg:text-lg font-medium hover:text-[#007BFF] hover:translate-x-[5px] transition-all duration-300 group"
                            >
                                <span className="text-white/20 group-hover:text-[#007BFF] transition-colors">{item.icon}</span>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
