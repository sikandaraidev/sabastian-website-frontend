"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Sabastian transformed our defensive posture from reactive to predictive. A true architect of resilience.",
        author: "Sarah Jenkins",
        role: "CISO",
        company: "Fintech Global",
        featured: true,
    },
    {
        quote: "His strategic vision for critical infrastructure protection is years ahead of the industry standard.",
        author: "Marcus Thorne",
        role: "Director of Operations",
        company: "Energy Systems Inc.",
        featured: false,
    },
    {
        quote: "Navigating federal compliance was a minefield until Sabastian stepped in. Flawless execution.",
        author: "Dr. Elena Rostova",
        role: "Chief Technology Officer",
        company: "MedSecure Health",
        featured: false,
    }
];

export function Testimonials() {
    const [featured, ...rest] = testimonials;

    return (
        <section className="py-24 md:py-32 px-6 bg-obsidian text-white relative overflow-hidden border-t border-white/5">

            {/* Subtle background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-signal-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-mono text-signal-blue mb-3 tracking-widest uppercase">Endorsements</h2>
                        <h3 className="text-3xl md:text-5xl font-light tracking-tighter text-white">TRUSTED BY<br className="hidden md:block" /> LEADERSHIP</h3>
                    </div>
                    <p className="text-sm text-gray-500 font-mono max-w-xs text-right hidden md:block">
                        Voices from the executives<br />who have seen the work firsthand.
                    </p>
                </div>

                {/* Asymmetric grid: featured large left + two stacked right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Featured — spans 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 relative p-10 md:p-12 rounded-2xl bg-gradient-to-br from-white/8 to-white/3 border border-signal-blue/20 flex flex-col justify-between overflow-hidden group"
                    >
                        {/* Decorative quote mark */}
                        <span className="absolute top-6 right-8 text-[7rem] leading-none text-signal-blue/10 font-serif select-none pointer-events-none">"</span>

                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-6 h-[2px] bg-signal-blue" />
                                <span className="text-xs font-mono text-signal-blue tracking-widest uppercase">Featured</span>
                            </div>
                            <p className="text-2xl md:text-3xl text-white font-light leading-snug tracking-tight">
                                "{featured.quote}"
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-signal-blue/20 border border-signal-blue/40 flex items-center justify-center text-signal-blue font-mono text-sm font-bold flex-shrink-0">
                                {featured.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-medium">{featured.author}</h4>
                                <p className="text-xs text-gray-400 font-mono mt-0.5">{featured.role} · {featured.company}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Two smaller cards stacked right */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {rest.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="flex-1 p-7 md:p-8 rounded-2xl border border-white/8 bg-white/4 hover:border-signal-blue/25 hover:bg-white/6 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                                    "{item.quote}"
                                </p>

                                <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-gray-300 font-mono text-xs font-bold flex-shrink-0">
                                        {item.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">{item.author}</h4>
                                        <p className="text-xs text-gray-500 font-mono mt-0.5">{item.role} · {item.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
