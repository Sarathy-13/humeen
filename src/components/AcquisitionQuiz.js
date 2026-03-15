import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AcquisitionQuiz = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const cardRef = useRef(null);
    const questionRef = useRef(null);

    const questions = [
        {
            id: 1,
            text: 'What target do you need growth on?',
            options: ['B2B', 'B2C', 'B2C and B2B'],
        },
        {
            id: 2,
            text: 'Is it a broad or niche audience?',
            options: ['Large', 'Niche', 'Several', "Don't know"],
        },
        {
            id: 3,
            text: 'What is your average basket per customer?',
            options: ['More than 3000 EUR', 'From 3000 EUR', "I don't know"],
        },
        {
            id: 4,
            text: 'What is your email?',
            type: 'email',
        },
    ];

    const currentQuestion = questions[step - 1];

    const handleStepTransition = (direction) => {
        const nextStep = direction === 'next' ? step + 1 : step - 1;

        gsap.to(questionRef.current, {
            x: -50,
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                setStep(nextStep);
                gsap.fromTo(questionRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
            },
        });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 80%',
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    const handleOptionChange = (option) => {
        setAnswers({ ...answers, [step]: option });
    };

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute -top-12 left-0 flex items-center gap-4 opacity-60">
                    <div className="w-12 h-12 relative animate-pulse">
                        <svg className="w-full h-full text-[#0070FF]" viewBox="0 0 100 100" fill="none">
                            <path d="M10 10 C 40 10, 60 40, 80 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            <path d="M75 80 L 80 80 L 80 75" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <span className="text-xs uppercase tracking-widest font-black text-white">Answer 3 questions</span>
                </div>

                <div ref={cardRef} className="bg-[#121212] rounded-2xl p-8 md:p-16 shadow-2xl border border-white/10">
                    <div ref={questionRef}>
                        <div className="mb-12">
                            <p className="text-[#0070FF] text-xs uppercase tracking-widest font-bold mb-4">
                                Question {step} OF {questions.length}
                            </p>
                            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">{currentQuestion.text}</h3>
                        </div>

                        <div className="space-y-4 mb-12 min-h-[220px]">
                            {currentQuestion.type === 'email' ? (
                                <div className="animate-fade-in">
                                    <input
                                        type="email"
                                        value={answers[step] || ''}
                                        onChange={(e) => handleOptionChange(e.target.value)}
                                        placeholder="Your email address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-8 py-6 text-xl text-white focus:border-[#0070FF] outline-none transition-all"
                                    />
                                </div>
                            ) : (
                                currentQuestion.options.map((option, index) => (
                                    <label
                                        key={`${option}-${index}`}
                                        className={`flex items-center gap-6 p-6 rounded-xl border transition-all cursor-pointer group ${
                                            answers[step] === option ? 'bg-[#0070FF]/10 border-[#0070FF]' : 'bg-white/5 border-white/5 hover:border-white/20'
                                        }`}
                                    >
                                        <input type="radio" name="quiz-answer" className="hidden" checked={answers[step] === option} onChange={() => handleOptionChange(option)} />
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${answers[step] === option ? 'border-[#0070FF]' : 'border-white/20'}`}>
                                            <div className={`w-3 h-3 bg-[#0070FF] rounded-full transition-transform duration-300 ${answers[step] === option ? 'scale-100' : 'scale-0'}`}></div>
                                        </div>
                                        <span className={`text-xl font-bold transition-colors ${answers[step] === option ? 'text-white' : 'text-white/60'}`}>{option}</span>
                                    </label>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-white/5 pt-10">
                        <button
                            onClick={() => handleStepTransition('prev')}
                            disabled={step === 1}
                            className={`text-xs uppercase tracking-widest font-black flex items-center gap-2 transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-white/40 hover:text-white'}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            Previous
                        </button>
                        <button
                            onClick={() => (step === questions.length ? null : handleStepTransition('next'))}
                            className="bg-[#0070FF] text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,112,255,0.3)] shadow-xl"
                        >
                            {step === questions.length ? 'Get Results' : 'Following'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcquisitionQuiz;
