"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-32 px-6 bg-obsidian text-white relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Main Bio Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-6xl font-serif italic text-signal-blue">"</span>
                        </div>

                        <h3 className="text-sm font-mono uppercase tracking-widest text-mist-gray mb-6">Execution Profile</h3>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                            {profile.about.split('\n\n')[0]}
                        </p>
                    </motion.div>

                    {/* Stat Block 1: Clearance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 bg-signal-blue text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                        <span className="font-mono text-xs uppercase tracking-widest opacity-70">Clearance Status</span>
                        <div>
                            <h4 className="text-4xl font-light tracking-tighter">TOP SECRET</h4>
                            <p className="text-sm opacity-80 mt-1">Active / Current</p>
                        </div>
                    </motion.div>

                    {/* Stat Block 2: Education */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 bg-void-black border border-white/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center hover:border-signal-blue/50 transition-colors"
                    >
                        <span className="text-5xl mb-2">🎓</span>
                        <h4 className="text-xl font-light text-white">Doctoral Canidate</h4>
                        <p className="text-mist-gray text-sm mt-2">Computer Science & Cybersecurity</p>
                    </motion.div>

                    {/* Secondary Bio Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 bg-void-black border border-white/10 p-8 rounded-2xl flex items-center"
                    >
                        <p className="text-mist-gray text-lg leading-relaxed">
                            {profile.about.split('\n\n')[1]}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
