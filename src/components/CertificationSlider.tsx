"use client";

import { motion } from "framer-motion";

const certifications = [
    { name: "CISSP", fullName: "Certified Information Systems Security Professional" },
    { name: "CISM", fullName: "Certified Information Security Manager" },
    { name: "CISA", fullName: "Certified Information Systems Auditor" },
    { name: "CRISC", fullName: "Certified in Risk and Information Systems Control" },
    // Duplicate for seamless loop
    { name: "CISSP", fullName: "Certified Information Systems Security Professional" },
    { name: "CISM", fullName: "Certified Information Security Manager" },
    { name: "CISA", fullName: "Certified Information Systems Auditor" },
    { name: "CRISC", fullName: "Certified in Risk and Information Systems Control" },
];

export function CertificationSlider() {
    return (
        <div className="relative w-full overflow-hidden bg-obsidian py-10 border-t border-white/5 border-b border-white/5">
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Adjust speed here
                    }}
                >
                    {/* Render the list twice to ensure no gaps during the loop reset, 
                        but since I already duplicated the data array, I might just map it once if it's long enough.
                        However, usually x: "-50%" expects the content to be doubled. 
                        Let's duplicate the mapping to be safe for the animation logic. 
                    */}
                    {[...certifications, ...certifications].map((cert, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center group cursor-default"
                        >
                            <span className="text-4xl md:text-5xl font-bold text-white/10 group-hover:text-signal-blue transition-colors duration-500 font-mono tracking-tighter">
                                {cert.name}
                            </span>
                            <span className="text-xs text-mist-gray/50 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {cert.fullName}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
