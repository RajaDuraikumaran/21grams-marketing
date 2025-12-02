"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Hero Component
 * Features a mouse-following spotlight, staggered text animations,
 * and a 3D tilted card visual anchor.
 */
export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Create the radial gradient background that follows the mouse
    const background = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, rgba(39, 39, 42, 0.2) 0%, transparent 60%)`;

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Staggered text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const headline = "The Weight of a Single Photo.";

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background selection:bg-white/20"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Background */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-50"
                style={{ background }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 backdrop-blur-sm">
                        Now Open Source
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6"
                >
                    {headline.split(" ").map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.2em]">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-zinc-400 max-w-lg mx-auto text-lg mb-20"
                >
                    Generative portraits that capture your soul. No cameras. No studios.
                </motion.p>

                {/* Visual Anchor - 3D Tilted Card */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 20, scale: 0.8 }}
                    animate={{ opacity: 1, rotateX: 20, scale: 0.9 }}
                    transition={{
                        delay: 1.2,
                        duration: 1.5,
                        type: "spring",
                        stiffness: 50,
                    }}
                    style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full max-w-4xl aspect-[16/9]"
                >
                    <div
                        className={cn(
                            "w-full h-full rounded-xl",
                            "bg-gradient-to-br from-zinc-800 to-zinc-950",
                            "border border-white/10",
                            "shadow-[0_0_100px_rgba(255,255,255,0.1)]",
                            "flex items-center justify-center"
                        )}
                    >
                        {/* Placeholder Content */}
                        <div className="text-zinc-700 font-mono text-sm">
                            [Dashboard Screenshot Placeholder]
                        </div>

                        {/* Glass Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
