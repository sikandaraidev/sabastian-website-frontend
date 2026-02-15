"use client";

import { motion } from "framer-motion";

export function GridOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                }}
            />

            {/* Scanning Line */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent animate-grid-scan" />
            </div>

            {/* Corner Accents (Crosshairs) - Optional, handled in sections usually, but global overlay is nice */}
        </div>
    );
}
