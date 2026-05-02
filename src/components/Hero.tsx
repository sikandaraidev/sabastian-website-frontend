"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section id="mission" className="relative min-h-screen w-full overflow-hidden bg-void-black text-white">

            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-signal-blue/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            {/* ── MOBILE / TABLET layout (< lg) ── */}
            <div className="lg:hidden relative z-20 flex flex-col h-screen">

                {/* Text block — fixed height at top, sits below header */}
                <div className="flex-shrink-0 pt-28 pb-6 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <h2 className="text-signal-blue font-mono text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
                            Mission-Critical Defense Strategy
                        </h2>
                        <h1 className="text-5xl sm:text-6xl font-light tracking-tighter leading-[0.9] mb-5 text-white">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                                RESILIENCE.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-base sm:text-lg text-mist-gray leading-relaxed border-l-2 border-signal-blue pl-4"
                    >
                        Architecting survival for high-stakes environments.{" "}
                        From federal infrastructure to executive risk management.
                    </motion.p>
                </div>

                {/* Image — fills all remaining vertical space */}
                <div className="relative flex-1 min-h-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                        className="absolute inset-0 group"
                    >
                        <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="/shared_leadership_Sabastian-Profile.png"
                                alt="Sabastian - Cybersecurity Architect"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                        {/* Dark overlay covers the whole image area */}
                        <div className="absolute inset-0 bg-void-black/40 z-10 pointer-events-none" />
                        {/* Bottom fade blends into the next section */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>

                {/* Scroll indicator — inside the flex column, no overlap */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex-shrink-0 flex flex-col items-center gap-2 pb-6 z-20"
                >
                    <div className="w-[1px] h-8 bg-gradient-to-b from-signal-blue to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest text-mist-gray/50 font-mono">
                        Scroll to Explore
                    </span>
                </motion.div>
            </div>

            {/* ── DESKTOP layout (lg+) ── */}
            <div className="hidden lg:flex relative z-20 w-full max-w-[90rem] mx-auto px-6 h-screen items-center">

                {/* Left: Typography */}
                <div className="flex-1 flex flex-col justify-center pr-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-signal-blue font-mono text-lg tracking-[0.3em] uppercase mb-4 pl-1">
                            Mission-Critical Defense Strategy
                        </h2>
                        <h1 className="text-[7rem] xl:text-[8rem] font-light tracking-tighter leading-[0.9] mb-8 text-white">
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
                        className="text-2xl text-mist-gray max-w-2xl leading-relaxed border-l-2 border-signal-blue pl-6"
                    >
                        Architecting survival for high-stakes environments. <br />
                        From federal infrastructure to executive risk management.
                    </motion.p>
                </div>

                {/* Right: Visual */}
                <div className="w-[36rem] xl:w-[42rem] relative h-[85vh] flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full h-full group"
                    >
                        <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="/shared_leadership_Sabastian-Profile.png"
                                alt="Sabastian - Cybersecurity Architect"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* Desktop scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-signal-blue to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-mist-gray/50 font-mono">
                    Scroll to Explore
                </span>
            </motion.div>

        </section>
    );
}
