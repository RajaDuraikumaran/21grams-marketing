"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProviderProps {
    children: ReactNode;
}

/**
 * Lenis Smooth Scroll Provider
 * Wraps the application with luxurious inertial scrolling
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.05,
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false,
            }}
        >
            {/* @ts-expect-error - ReactLenis types are not compatible with React 19 types yet */}
            {children}
        </ReactLenis>
    );
}
