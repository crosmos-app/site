"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";
import { CanvasCard } from "@/components/ui/canvas-card";

const useCases = [
    { name: "Research", colors: [[0, 255, 255]] }, // Cyan
    { name: "Learning", colors: [[34, 197, 94]] }, // Emerald
    { name: "Work", colors: [[147, 51, 234]] }, // Purple
    { name: "Personal", colors: [[245, 158, 11]] }, // Amber
];

export function UseCases() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            id="about"
            className="py-32 md:py-40 border-t border-border relative overflow-hidden"
        >
            {/* Halftone pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "8px 8px",
                }}
            />

            {/* Scanline effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <h2
                    className={`font-serif text-headline md:text-display text-center mb-20 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    Built for how you think.
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {useCases.map((useCase, index) => (
                        <CanvasCard
                            key={useCase.name}
                            colors={useCase.colors}
                            animationSpeed={1.2}
                            className={`py-20 md:py-28 border-l border-border first:border-l-0 lg:first:border-l lg:[&:nth-child(1)]:border-l-0 transition-all duration-500 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Index number */}
                            <span className="block font-mono text-xs text-muted-foreground/50 text-center mb-6 group-hover:text-muted-foreground transition-colors duration-300">
                                0{index + 1}
                            </span>

                            {/* Title */}
                            <span className="block font-mono text-base md:text-lg text-center text-foreground group-hover:text-primary transition-colors duration-300">
                                {useCase.name}
                            </span>

                            {/* Underline */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-12 transition-all duration-300" />
                        </CanvasCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
