"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Glassmorphic Navigation Bar
 * Slides down from top with spring animation on mount
 */
export default function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            }}
            className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <a
                            href="/"
                            className="text-white font-bold tracking-tighter text-xl hover:opacity-80 transition-opacity"
                        >
                            21Grams.
                        </a>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex items-center gap-8"
                    >
                        {/* Manifesto Link */}
                        <button
                            onClick={() => scrollToSection("story")}
                            className="text-subtext hover:text-white transition-colors text-sm font-medium"
                        >
                            Manifesto
                        </button>

                        {/* Features Link */}
                        <button
                            onClick={() => scrollToSection("grid")}
                            className="text-subtext hover:text-white transition-colors text-sm font-medium"
                        >
                            Features
                        </button>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "group relative px-4 py-2 rounded-full",
                                "border border-white/20 hover:border-white/40",
                                "bg-white/5 hover:bg-white/10",
                                "text-white text-sm font-medium",
                                "transition-all duration-300",
                                "flex items-center gap-2"
                            )}
                        >
                            Launch App
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
