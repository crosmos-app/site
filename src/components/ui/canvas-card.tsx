"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

interface CanvasCardProps {
    children: React.ReactNode;
    colors: number[][];
    animationSpeed?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const CanvasCard: React.FC<CanvasCardProps> = ({
    children,
    colors,
    animationSpeed = 0.3,
    className = "",
    style,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            tabIndex={0}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`group relative overflow-hidden ${className}`}
            style={style}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={animationSpeed}
                            colors={colors}
                            containerClassName="bg-transparent"
                            dotSize={2}
                            showGradient={false}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content layer - always on top */}
            <div className="relative z-10 h-full">{children}</div>
        </button>
    );
};
