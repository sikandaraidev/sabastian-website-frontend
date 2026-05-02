"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer id="contact" className="py-32 md:py-48 px-6 text-center bg-void-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-light text-white tracking-tight"
                >
                    Securing What Matters Most.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-mist-gray"
                >
                    Mission-focused cybersecurity leadership for critical and high-impact environments.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8"
                >
                    <a
                        href="mailto:contact@sabastian.com"
                        className="inline-block px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Start a Conversation
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-white/20 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Sabastian Professional. All Rights Reserved.
            </div>
        </footer>
    );
}
