import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icons } from './Icons';

const MegaMenu = ({ isOpen }) => {
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

    return (
        <div ref={menuRef} className="absolute top-[80px] left-0 w-full glass p-12 z-50 mega-menu">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Expertise</h3>
                    <div className="flex flex-col gap-5">
                        {[
                            { name: 'Digital Marketing', icon: <Icons.Globe /> },
                            { name: 'Web Development', icon: <Icons.Code /> },
                            { name: 'App Development', icon: <Icons.Phone /> },
                            { name: 'Influencer Production', icon: <Icons.Camera /> },
                            { name: 'SEO', icon: <Icons.Search /> },
                            { name: 'Growth Outbound', icon: <Icons.Mail /> },
                        ].map((item) => (
                            <a key={item.name} href="#" className="flex items-center gap-4 text-white text-lg font-medium hover:text-[#007BFF] hover:translate-x-[5px] transition-all duration-300 group">
                                <span className="text-white/20 group-hover:text-[#007BFF] transition-colors">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Advertising Networks</h3>
                    <div className="flex flex-col gap-5">
                        {[
                            { name: 'Meta Ads', icon: <Icons.Social /> },
                            { name: 'Google Ads', icon: <Icons.Search /> },
                            { name: 'LinkedIn Ads', icon: <Icons.Social /> },
                            { name: 'Pinterest Ads', icon: <Icons.Social /> },
                        ].map((item) => (
                            <a key={item.name} href="#" className="flex items-center gap-4 text-white text-lg font-medium hover:text-[#007BFF] hover:translate-x-[5px] transition-all duration-300 group">
                                <span className="text-white/20 group-hover:text-[#007BFF] transition-colors">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
