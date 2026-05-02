"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = ["Mission", "Expertise", "Research"];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0",
                    scrolled ? "bg-void-black/90 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-[0.2em] text-white uppercase hover:text-white/80 transition-colors">
                        Sabastian
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((item) => (
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

                    {/* Mobile hamburger / close button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="block w-6 h-0.5 bg-white origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.15 }}
                            className="block w-6 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="block w-6 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile fullscreen overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-40 bg-void-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden"
                    >
                        {navLinks.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 + 0.1 }}
                            >
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-3xl font-light tracking-[0.2em] text-white uppercase hover:text-signal-blue transition-colors"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                        >
                            <Link
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl font-light tracking-[0.2em] text-signal-blue uppercase hover:text-blue-400 transition-colors"
                            >
                                Contact
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
