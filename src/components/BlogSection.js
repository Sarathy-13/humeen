import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ category, title, excerpt, image }) => (
    <div
        className="group relative overflow-hidden bg-[#121212] border border-black/5 rounded-2xl flex flex-col h-full transition-all duration-500 hover:shadow-2xl"
    >
        <div className="relative overflow-hidden aspect-[16/10]">
            <img src={image} alt={title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-6 left-6">
                <span className="px-4 py-1 bg-black border border-white/20 text-white text-[10px] uppercase tracking-widest font-black rounded-full">{category}</span>
            </div>
        </div>
        <div className="p-6 sm:p-8 bg-white border-t border-black/5 flex-1 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-black text-black mb-4 leading-tight line-clamp-2 group-hover:text-black/70 transition-colors">{title}</h3>
            <p className="text-black/50 text-sm mb-6 line-clamp-2 font-medium">{excerpt}</p>
            <a href="#" className="relative inline-block text-black text-xs font-black uppercase tracking-widest group/link mt-auto">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover/link:w-full"></span>
            </a>
        </div>
    </div>
);

const BlogSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const sectionRef = useRef(null);

    const blogPosts = [
        {
            id: 1,
            category: 'Case Studies',
            title: 'The Future of Digital Legacy built on Trust',
            excerpt: 'Exploring how top brands are redefining their presence in the digital age through ethical growth and sustainable strategy.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
        },
        {
            id: 2,
            category: 'Insights',
            title: 'Growth beyond the metrics',
            excerpt: 'Why qualitative impact matters more than ever in a saturated market and how to measure it effectively.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071',
        },
        {
            id: 3,
            category: 'Team',
            title: 'The Humeen Philosophy of Design',
            excerpt: 'A deep dive into our core values and the people driving the next generation of digital excellence.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069',
        },
        {
            id: 4,
            category: 'Case Studies',
            title: 'Scaling from zero to legacy',
            excerpt: 'The journey of transforming a startup into a market dominant figure through strategic acquisition.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070',
        },
    ];

    const filteredPosts = activeFilter === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeFilter);

    useEffect(() => {
        gsap.fromTo(
            '.blog-card-item',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
            },
        );
    }, []);

    return (
        <section ref={sectionRef} id="blog" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] min-h-screen">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-black leading-none uppercase tracking-tighter mb-8 sm:mb-10 lg:mb-12">Blog.</h2>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-black/5">
                        {['All', 'Case Studies', 'Insights', 'Team'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                                    activeFilter === filter ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black/10 hover:border-black'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="blog-card-item h-full">
                            <BlogCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
