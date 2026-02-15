"use client";

import { motion } from "framer-motion";

const expertiseItems = [
    {
        title: "Federal Security",
        id: "EXP-01",
        details: ["RMF Compliance", "FISMA/NIST", "GovCloud Architecture"],
    },
    {
        title: "Adaptive Defense",
        id: "EXP-02",
        details: ["AI Threat Detection", "Predictive Modeling", "Zero Trust"],
    },
    {
        title: "Critical Infrastructure",
        id: "EXP-03",
        details: ["Healthcare Systems", "Industrial IoT", "Resilience Engineering"],
    },
    {
        title: "Strategic Risk",
        id: "EXP-04",
        details: ["Enterprise Governance", "Board Reporting", "Business Continuity"],
    },
];

export function Expertise() {
    return (
        <section id="expertise" className="py-32 px-6 bg-void-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header - HUD Style */}
                <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
                    <div>
                        <h2 className="text-sm font-mono text-signal-blue mb-2 tracking-widest">CAPABILITY MATRIX</h2>
                        <h3 className="text-4xl md:text-5xl font-light tracking-tighter">OPERATIONAL DOMAINS</h3>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-300"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-signal-blue transition-colors" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-signal-blue transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-signal-blue transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-signal-blue transition-colors" />

                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono text-gray-500 group-hover:text-signal-blue transition-colors">{item.id}</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>

                            <h4 className="text-xl font-normal mb-4 group-hover:text-white transition-colors">{item.title}</h4>

                            <ul className="space-y-2">
                                {item.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-gray-400 font-mono border-l border-white/10 pl-3 group-hover:text-gray-300 transition-colors">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
