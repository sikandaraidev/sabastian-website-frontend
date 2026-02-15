"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";

export function DynamicCredentialSlider() {
    const certs = profile.certifications;
    const [currIdx, setCurrIdx] = useState(0);

    const nextSlide = () => {
        setCurrIdx((prev) => (prev + 1) % certs.length);
    };

    const prevSlide = () => {
        setCurrIdx((prev) => (prev - 1 + certs.length) % certs.length);
    };

    // Calculate visible indices
    const prevIdx = (currIdx - 1 + certs.length) % certs.length;
    const nextIdx = (currIdx + 1) % certs.length;

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[480px] flex items-center justify-center perspective-1000">
            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-0 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Previous Certification"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Next Certification"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slides Container */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    {/* Previous Slide (Left) */}
                    <motion.div
                        key={`prev-${prevIdx}`}
                        initial={{ x: -100, opacity: 0, scale: 0.8 }}
                        animate={{ x: -300, opacity: 0.4, scale: 0.8, zIndex: 10 }}
                        exit={{ x: -500, opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-[300px] h-[350px] bg-[#1a1a1a] border border-white/10 p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-lg grayscale"
                    >
                        <h3 className="text-2xl font-light text-white mb-2">{certs[prevIdx].name}</h3>
                        <p className="text-sm text-gray-400">{certs[prevIdx].provider}</p>
                    </motion.div>

                    {/* Current Slide (Center - Focused) */}
                    <motion.div
                        key={`curr-${currIdx}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ x: 0, scale: 1.1, opacity: 1, zIndex: 20 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute w-[320px] h-[380px] bg-gradient-to-br from-[#2a2a2a] to-[#111] border border-signal-blue/50 p-8 rounded-2xl flex flex-col justify-between text-center shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-mono text-signal-blue uppercase tracking-widest mb-4">
                                {certs[currIdx].provider}
                            </span>
                            <h3 className="text-4xl font-light text-white mb-4 leading-tight">
                                {certs[currIdx].name}
                            </h3>
                            <div className="w-12 h-1 bg-signal-blue rounded-full mb-6" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {certs[currIdx].description}
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10 w-full">
                            <p className="text-xs text-gray-500 font-mono">ID: {certs[currIdx].id}</p>
                        </div>
                    </motion.div>

                    {/* Next Slide (Right) */}
                    <motion.div
                        key={`next-${nextIdx}`}
                        initial={{ x: 500, opacity: 0, scale: 0.8 }}
                        animate={{ x: 300, opacity: 0.4, scale: 0.8, zIndex: 10 }}
                        exit={{ x: 100, opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-[300px] h-[350px] bg-[#1a1a1a] border border-white/10 p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-lg grayscale"
                    >
                        <h3 className="text-2xl font-light text-white mb-2">{certs[nextIdx].name}</h3>
                        <p className="text-sm text-gray-400">{certs[nextIdx].provider}</p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Background Blur Effect for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian pointer-events-none z-30" />
        </div>
    );
}
