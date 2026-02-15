"use client";

import { motion } from "framer-motion";

export function Research() {
    return (
        <section id="research" className="py-32 px-6 bg-void-black text-white relative border-t border-white/5 overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-mono text-gray-500 mb-8 tracking-[0.5em] uppercase">
                        The Next Horizon
                    </h2>

                    <p className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-white mb-12">
                        "We must move beyond <span className="text-gray-600 line-through decoration-gray-700">detect and respond</span>."
                    </p>

                    <p className="text-xl md:text-3xl font-light text-mist-gray max-w-3xl mx-auto leading-relaxed">
                        The future of critical infrastructure protection lies in <strong className="text-white font-medium">Predictive Architecture</strong> and <strong className="text-white font-medium">Self-Healing Systems</strong> driven by adaptive AI.
                    </p>

                    <div className="mt-16">
                        <span className="inline-block px-8 py-4 border border-white/10 rounded-full text-sm font-mono hover:bg-white/5 transition-colors cursor-default text-gray-400">
                            Doctoral Research in Progress · 2025-2027
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
