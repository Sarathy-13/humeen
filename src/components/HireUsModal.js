import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HireUsModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const [selectedInterests, setSelectedInterests] = useState([]);

    const interests = ['A new website', 'Motion graphics', 'E-Commerce', 'Branding', 'Development', 'App from scratch'];

    const toggleInterest = (interest) => {
        setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]));
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
            gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.1 });
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div ref={overlayRef} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/80 opacity-0 backdrop-blur-sm">
            <div ref={modalRef} className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-fit md:h-[80vh]">
                <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex-1 p-8 md:p-14 border-b md:border-b-0 md:border-r border-white/5 bg-[#161616]">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-12">
                        Let's get your
                        <br />
                        project started.
                    </h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-6">I'm interested in...</p>
                    <div className="flex flex-wrap gap-3">
                        {interests.map((interest) => (
                            <button
                                key={interest}
                                onClick={() => toggleInterest(interest)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                                    selectedInterests.includes(interest)
                                        ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(0,112,255,0.4)]'
                                        : 'bg-transparent border-white/10 text-white/60 hover:border-white/30'
                                }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                    <div className="mb-10 text-white/60 text-sm">
                        <p className="mb-1">
                            Email us at:{' '}
                            <a href="mailto:hello@humeen.com" className="text-white hover:underline">
                                hello@humeen.com
                            </a>
                        </p>
                        <p>
                            Call us: <span className="text-white">+44 123 456 7890</span>
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">First Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-600 outline-none transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-600 outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Budget (GBP)</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-600 outline-none transition-colors" placeholder="e.g. 5000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">File Attachment</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/40 focus:border-blue-600 outline-none transition-colors appearance-none cursor-pointer">
                                    <option>Selection...</option>
                                    <option>Brief.pdf</option>
                                    <option>Design.zip</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Message</label>
                            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-600 outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <div className="space-y-4 pt-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="hidden" />
                                <div className="w-5 h-5 border border-white/20 rounded-md flex items-center justify-center group-hover:border-blue-600 transition-colors">
                                    <div className="w-2 h-2 bg-blue-600 rounded-sm opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-xs text-white/40 select-none">I'm happy to receive a monthly newsletter</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="hidden" />
                                <div className="w-5 h-5 border border-white/20 rounded-md flex items-center justify-center group-hover:border-blue-600 transition-colors">
                                    <div className="w-2 h-2 bg-blue-600 rounded-sm opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-xs text-white/40 select-none">I understand the privacy policy</span>
                            </label>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-xl hover:shadow-blue-600/20">
                                Submit
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HireUsModal;
