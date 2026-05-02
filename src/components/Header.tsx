"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0",
                scrolled ? "bg-void-black/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-[0.2em] text-white uppercase group hover:text-white/80 transition-colors">
                    Sabastian
                </Link>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex gap-8">
                    {["Mission", "Expertise", "Research"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-mono uppercase tracking-widest text-mist-gray hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-xs font-mono uppercase tracking-widest text-signal-blue hover:text-blue-400 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Trigger (Placeholder) */}
                <div className="md:hidden">
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-6 h-0.5 bg-white" />
                </div>

            </div>
        </header>
    );
}
