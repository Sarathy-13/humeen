import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icons } from './Icons';

const AgencyDropdown = ({ isOpen }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(dropdownRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div ref={dropdownRef} className="absolute top-[80px] left-1/2 -translate-x-1/2 w-64 bg-[#121212]/90 backdrop-blur-[10px] border border-[#333] p-6 z-50 rounded-xl">
            <div className="flex flex-col gap-4">
                {[
                    { name: 'Works', icon: <Icons.Grid /> },
                    { name: 'Careers', icon: <Icons.Briefcase /> },
                    { name: 'Founder Notes', icon: <Icons.Pen /> },
                ].map((item) => (
                    <a key={item.name} href="#" className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest hover:text-[#007BFF] transition-all duration-300 group hover:translate-x-[5px]">
                        <span className="text-white/40 group-hover:text-[#007BFF] transition-colors">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AgencyDropdown;
