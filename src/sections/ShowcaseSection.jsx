import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const signalistRef = useRef(null);
    const imaginifyRef = useRef(null);
    const conversoRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [signalistRef.current, imaginifyRef.current, conversoRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={signalistRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/signalist.png" alt="Signalist App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Signalist - Track real-time stock prices, get personalized alerts
                                and explore detailed company insights
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Next.js, TypeScript, & Tailwind CSS for a fast,
                                user-friendly experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={imaginifyRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/imaginify.png"
                                    alt="Imaginify AI Image Enhancer"
                                />
                            </div>
                            <h2>Imaginify - AI Image Enhancer SaaS Platform</h2>
                        </div>

                        <div className="project" ref={conversoRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/converso.png" alt="Converso LMS SaaS App" />
                            </div>
                            <h2>Converso - LMS App with Interactive Voice AI</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

