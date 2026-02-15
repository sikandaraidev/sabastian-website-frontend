"use client";

import { motion } from "framer-motion";

const impactMetrics = [
    { value: "100%", label: "Compliance Rate", sub: "FISMA / NIST / HIPAA" },
    { value: "Zero", label: "Critical Findings", sub: "Across Multiple Agencies" },
    { value: "TS/SCI", label: "Clearance Level", sub: "Active Status" },
    { value: "FedRAMP", label: "Ready Architecture", sub: "Cloud Security" },
];

export function Impact() {
    return (
        <section id="impact" className="py-32 px-6 bg-obsidian text-white relative border-t border-white/5">

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    {impactMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group cursor-default"
                        >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white mb-2 group-hover:text-signal-blue transition-colors duration-500">
                                {metric.value}
                            </div>
                            <h3 className="text-lg md:text-xl font-light text-white mb-1 leading-tight">
                                {metric.label}
                            </h3>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest border-t border-white/10 pt-4 mt-4 inline-block w-full">
                                {metric.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
