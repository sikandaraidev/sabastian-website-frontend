"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function MissionNarrative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.20], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.05, 0.20], [20, -20]);

    const opacity2 = useTransform(scrollYProgress, [0.30, 0.40, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.30, 0.45], [20, -20]);

    const opacity3 = useTransform(scrollYProgress, [0.60, 0.70, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.60, 0.75], [20, -20]);

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-obsidian">
            {/* Dynamic Data Code Background */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-void-black z-0" />

                {/* Matrix / Data Stream Effect */}
                <div className="absolute inset-0 opacity-20 flex justify-between px-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[1px] h-full bg-gradient-to-b from-transparent via-signal-blue to-transparent animate-data-stream"
                            style={{ animationDuration: `${Math.random() * 2 + 1}s`, animationDelay: `${Math.random()}s` }}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-void-black via-transparent to-void-black z-10" />
            </div>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-20 pointer-events-none">

                <motion.div style={{ opacity: opacity1 }} className="absolute text-center px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mix-blend-difference">
                        Cybersecurity is <br />
                        <span className="text-signal-blue">Operational Survival.</span>
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: opacity2 }} className="absolute text-center px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-light leading-tight text-white">
                        Modern infrastructure operates <br />
                        <span className="text-mist-gray">under constant digital threat.</span>
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: opacity3 }} className="absolute text-center px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-light leading-tight text-white">
                        Resilience must be engineered— <br />
                        <span className="text-mist-gray">not assumed.</span>
                    </h2>
                </motion.div>

            </div>
        </section>
    );
}
