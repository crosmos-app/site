"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";

const steps = [
    {
        number: "01",
        title: "Capture",
        description:
            "Save notes, documents, links, images, audio, and video. No folders. No organization required.",
    },
    {
        number: "02",
        title: "Understand",
        description:
            "Crosmos learns the context and meaning of everything you save. Connections form automatically.",
    },
    {
        number: "03",
        title: "Recall",
        description:
            "Search by thought, not filenames. Find exactly what you need, when you need it.",
    },
    {
        number: "04",
        title: "Act",
        description:
            "Turn saved knowledge into reminders, schedules, and workflows. Your memory works for you.",
    },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <div
            ref={ref}
            className={`py-16 md:py-24 border-t border-border transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-2">
                    <span className="text-sm text-muted-foreground font-mono">
                        {step.number}
                    </span>
                </div>
                <div className="md:col-span-4">
                    <h3 className="font-serif text-title">{step.title}</h3>
                </div>
                <div className="md:col-span-6">
                    <p className="text-body-lg text-muted-foreground">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function HowItWorks() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="section-padding bg-secondary/50">
            <div className="container-wide">
                <div
                    ref={ref}
                    className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        How it works
                    </span>
                </div>

                {steps.map((step, index) => (
                    <Step key={step.number} step={step} index={index} />
                ))}
            </div>
        </section>
    );
}
