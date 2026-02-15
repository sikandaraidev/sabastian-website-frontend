"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Sebastian transformed our defensive posture from reactive to predictive. A true architect of resilience.",
        author: "Sarah Jenkins",
        role: "CISO, Fintech Global",
        company: "Fintech Global"
    },
    {
        quote: "His strategic vision for critical infrastructure protection is years ahead of the industry standard.",
        author: "Marcus Thorne",
        role: "Director of Operations",
        company: "Energy Systems Inc."
    },
    {
        quote: "Navigating federal compliance was a minefield until Sebastian stepped in. Flawless execution.",
        author: "Dr. Elena Rostova",
        role: "Chief Technology Officer",
        company: "MedSecure Health"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 px-6 bg-obsidian text-white relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-sm font-mono text-signal-blue mb-4 tracking-widest uppercase">Endorsements</h2>
                    <h3 className="text-3xl md:text-4xl font-light tracking-tighter text-white">TRUSTED BY LEADERSHIP</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/5 bg-white/5 rounded-lg hover:border-signal-blue/30 transition-colors duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="text-signal-blue text-4xl mb-6 font-mono">"</div>
                                <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                                    {item.quote}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-white font-normal text-lg">{item.author}</h4>
                                <p className="text-sm text-gray-500 font-mono mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
