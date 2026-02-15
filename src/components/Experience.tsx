"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <section id="experience" className="py-32 px-6 bg-void-black text-white relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex items-center justify-between">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white">
                        OPERATIONAL <span className="text-gray-500">HISTORY</span>
                    </h2>
                    <div className="h-[1px] flex-1 bg-white/10 ml-8" />
                </div>

                <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-20">
                    {profile.experience.map((exp, index) => {
                        // Extract Clearance Level
                        const clearance = exp.role.includes("Top Secret") ? "TS/SCI" :
                            exp.role.includes("Secret") ? "SECRET" : null;
                        const cleanRole = exp.role.replace(/,.*Secret.*/, "");

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-16 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-void-black border-2 border-gray-600 rounded-full group-hover:border-signal-blue group-hover:bg-signal-blue transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    {/* Date & Company */}
                                    <div className="lg:col-span-3">
                                        <span className="font-mono text-sm text-gray-500 tracking-widest uppercase block mb-2">
                                            {exp.period}
                                        </span>
                                        <h4 className="text-lg font-normal text-white mb-1">{exp.company}</h4>

                                        {clearance && (
                                            <span className="inline-block mt-2 px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 text-[10px] font-normal tracking-widest uppercase rounded-sm">
                                                {clearance}
                                            </span>
                                        )}
                                    </div>

                                    {/* Role & Details */}
                                    <div className="lg:col-span-9">
                                        <h3 className="text-2xl md:text-3xl font-light text-gray-200 mb-4 group-hover:text-signal-blue transition-colors duration-300">
                                            {cleanRole}
                                        </h3>
                                        <p className="text-mist-gray text-lg leading-relaxed mb-6 border-l w-full border-white/10 pl-4">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs text-gray-500 font-mono pr-4 border-r border-white/10 last:border-0 last:pr-0">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
