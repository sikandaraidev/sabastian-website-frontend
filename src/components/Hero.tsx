"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section id="mission" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void-black text-white pt-32 md:pt-0">

            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-signal-blue/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-20 w-full max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

                {/* Left: Typography (Dominant) */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-signal-blue font-mono text-base md:text-lg tracking-[0.3em] uppercase mb-4 pl-1">
                            Mission-Critical Defense Strategy
                        </h2>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-light
                         tracking-tighter leading-[0.9] mb-8 text-white">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                                RESILIENCE.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg md:text-2xl text-mist-gray max-w-2xl leading-relaxed border-l-2 border-signal-blue pl-6"
                    >
                        Architecting survival for high-stakes environments. <br className="hidden md:block" />
                        From federal infrastructure to executive risk management.
                    </motion.p>
                </div>

                {/* Right: Visual (Supportive) */}
                <div className="lg:col-span-4 relative h-[50vh] lg:h-[80vh] flex items-center justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full h-full max-w-md group"
                    >
                        <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="/shared_leadership_Sebastian-Profile.png"
                                alt="Sabastian - Cybersecurity Architect"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </div>

                        {/* Gradient Fade at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>

            </div>

            {/* Bottom Scroll Indicator - Minimal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-signal-blue to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-mist-gray/50 font-mono">
                    Scroll to Explore
                </span>
            </motion.div>

        </section>
    );
}
