"use client";

import { CanvasCard } from "@/components/ui/canvas-card";
import { useScrollAnimation } from "@/hooks/use-scroll";

const useCases = [
    { name: "Research", colors: [[0, 255, 255]] }, // Cyan
    { name: "Learning", colors: [[34, 197, 94]] }, // Emerald
    { name: "Work", colors: [[147, 51, 234]] }, // Purple
    { name: "Personal", colors: [[245, 158, 11]] }, // Amber
];

export function UseCases() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="about" className="relative overflow-hidden border-border border-t py-32 md:py-40">
            {/* Halftone pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "8px 8px",
                }}
            />

            {/* Scanline effect */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)`,
                }}
            />

            <div className="mx-auto max-w-7xl px-6" ref={ref}>
                <h2
                    className={`mb-20 text-center font-serif text-foreground text-headline transition-all duration-700 md:text-display ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                    Built for how you think.
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {useCases.map((useCase, index) => (
                        <CanvasCard
                            key={useCase.name}
                            colors={useCase.colors}
                            animationSpeed={1.2}
                            className={`border-border border-l py-20 transition-all duration-500 first:border-l-0 md:py-28 lg:first:border-l lg:[&:nth-child(1)]:border-l-0 ${
                                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Index number */}
                            <span className="mb-6 block text-center font-mono text-muted-foreground/50 text-xs transition-colors duration-300 group-hover:text-muted-foreground">
                                0{index + 1}
                            </span>

                            {/* Title */}
                            <span className="block text-center font-mono text-base text-foreground transition-colors duration-300 group-hover:text-primary md:text-lg">
                                {useCase.name}
                            </span>

                            {/* Underline */}
                            <div className="-translate-x-1/2 absolute bottom-8 left-1/2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-12" />
                        </CanvasCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
