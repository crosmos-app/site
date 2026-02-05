"use client";

import { ArrowRight, FileText, Layers, Mic, Search, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll";

// Halftone dot pattern decoration (like the first card in the reference)
const HalftoneDecoration = () => (
    <div className="absolute right-0 bottom-0 left-0 h-[60%] origin-bottom overflow-hidden opacity-60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80">
        <svg
            className="h-full w-full transition-transform duration-1000 ease-out group-hover:rotate-3"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMax slice"
        >
            <title>Haftone Decoration</title>
            {Array.from({ length: 20 }).map((_, row) =>
                Array.from({ length: 25 }).map((_, col) => {
                    const centerX = 200;
                    const centerY = 200;
                    const x = col * 16 + (row % 2 ? 8 : 0);
                    const y = row * 10 + 20;
                    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
                    const maxDistance = 200;
                    const size = Math.max(0.5, 3 * (1 - distance / maxDistance));
                    const opacity = Math.max(0.1, 1 - distance / maxDistance);
                    return (
                        <circle
                            key={`${row}-${col}`}
                            cx={x}
                            cy={y}
                            r={size}
                            fill="currentColor"
                            className="text-foreground transition-all duration-500"
                            opacity={opacity}
                            style={{
                                transformOrigin: `${x}px ${y}px`,
                            }}
                        />
                    );
                })
            )}
        </svg>
    </div>
);

// Concentric arcs decoration (like the dark card in the reference)
const ConcentricArcsDecoration = () => (
    <div className="absolute right-0 bottom-0 left-0 h-[50%] overflow-hidden opacity-30 transition-all duration-700 ease-out group-hover:h-[60%] group-hover:opacity-50">
        <svg className="arcs-svg size-full" viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice">
            <title>Concentric Arcs</title>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                    key={i}
                    d={`M ${200 - i * 30} 150 A ${i * 30} ${i * 30} 0 0 1 ${200 + i * 30} 150`}
                    fill="none"
                    stroke="currentColor"
                    className="text-muted-foreground transition-all duration-700 ease-out"
                    strokeWidth="1"
                    style={{
                        transform: "translateY(0)",
                        transition: `transform ${0.5 + i * 0.1}s ease-out`,
                    }}
                />
            ))}
        </svg>
        <style>{`
      .group:hover .arcs-svg path:nth-child(1) { transform: translateY(-4px); }
      .group:hover .arcs-svg path:nth-child(2) { transform: translateY(-8px); }
      .group:hover .arcs-svg path:nth-child(3) { transform: translateY(-12px); }
      .group:hover .arcs-svg path:nth-child(4) { transform: translateY(-16px); }
      .group:hover .arcs-svg path:nth-child(5) { transform: translateY(-20px); }
      .group:hover .arcs-svg path:nth-child(6) { transform: translateY(-24px); }
      .group:hover .arcs-svg path:nth-child(7) { transform: translateY(-28px); }
    `}</style>
    </div>
);

// Gradient mesh decoration (like the colorful card)
const GradientMeshDecoration = () => (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-purple-400/25 via-pink-400/20 to-orange-300/25" />
        <div className="absolute top-[20%] left-[15%] h-28 w-28 rounded-full bg-emerald-400/35 blur-2xl transition-transform duration-1000 ease-out group-hover:translate-x-4 group-hover:translate-y-2" />
        <div className="group-hover:-translate-x-4 group-hover:-translate-y-3 absolute right-[20%] bottom-[25%] h-36 w-36 rounded-full bg-indigo-400/30 blur-2xl transition-transform duration-1000 ease-out" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-[50%] left-[50%] h-20 w-20 rounded-full bg-amber-300/25 opacity-0 blur-xl transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-100" />
    </div>
);

// Sky gradient decoration (like the agents platform card)
const SkyGradientDecoration = () => (
    <div className="absolute top-0 right-0 left-0 h-[55%] overflow-hidden rounded-t-2xl">
        <div className="absolute inset-0 bg-linear-to-b from-sky-200/70 via-sky-100/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="-top-16 -translate-x-1/2 absolute left-1/2 h-32 w-[180%] rounded-[50%] bg-white/20 transition-transform duration-700 ease-out group-hover:translate-y-3" />
    </div>
);

// Zigzag wave pattern decoration (unique for "From Memory to Action")
const ZigzagDecoration = () => (
    <div className="absolute right-0 bottom-0 left-0 h-[55%] overflow-hidden opacity-50 transition-opacity duration-500 group-hover:opacity-70">
        <svg className="zigzag-wave h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMax slice">
            <title>Zigzag Decoration</title>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <path
                    key={i}
                    d={`M 0 ${140 - i * 18} L 40 ${160 - i * 18} L 80 ${140 - i * 18} L 120 ${160 - i * 18} L 160 ${140 - i * 18} L 200 ${160 - i * 18} L 240 ${140 - i * 18} L 280 ${160 - i * 18} L 320 ${140 - i * 18} L 360 ${160 - i * 18} L 400 ${140 - i * 18}`}
                    fill="none"
                    stroke="currentColor"
                    className="text-foreground/60 transition-all duration-700 ease-out"
                    strokeWidth="1.5"
                    style={{
                        strokeDasharray: "800",
                        strokeDashoffset: "0",
                        transition: `all ${0.6 + i * 0.08}s ease-out, opacity 0.5s`,
                    }}
                />
            ))}
        </svg>
        <style>{`
      .group:hover .zigzag-wave path:nth-child(1) { stroke-dashoffset: 40; }
      .group:hover .zigzag-wave path:nth-child(2) { stroke-dashoffset: -40; }
      .group:hover .zigzag-wave path:nth-child(3) { stroke-dashoffset: 40; }
      .group:hover .zigzag-wave path:nth-child(4) { stroke-dashoffset: -40; }
      .group:hover .zigzag-wave path:nth-child(5) { stroke-dashoffset: 40; }
      .group:hover .zigzag-wave path:nth-child(6) { stroke-dashoffset: -40; }
      .group:hover .zigzag-wave path:nth-child(7) { stroke-dashoffset: 40; }
    `}</style>
    </div>
);

const features = [
    {
        icon: Search,
        title: "Semantic Memory Search",
        description: "Search by meaning, not exact keywords. Find the insight you half-remember from months ago.",
        cta: "Learn more",
        theme: "light" as const,
        decoration: "halftone" as const,
    },
    {
        icon: Layers,
        title: "Universal Capture",
        description: "Notes, documents, links, images, audio, video. Save everything without manual organization.",
        cta: "Explore",
        theme: "dark" as const,
        decoration: "arcs" as const,
    },
    {
        icon: FileText,
        title: "Automatic Summaries",
        description: "Summarize documents, notes, links, and images into concise, actionable insights.",
        cta: "Try it free",
        theme: "gradient" as const,
        decoration: "mesh" as const,
    },
    {
        icon: Mic,
        title: "Transcription",
        description: "Audio and video become searchable text instantly. Every word, accessible.",
        cta: "Learn more",
        theme: "sky" as const,
        decoration: "sky" as const,
    },
    {
        icon: Zap,
        title: "From Memory to Action",
        description: "Your knowledge doesn't just sit there — it works for you. Reminders, schedules, workflows.",
        cta: "Get started",
        theme: "light" as const,
        decoration: "zigzag" as const,
    },
];

const decorations: Record<string, React.FC> = {
    halftone: HalftoneDecoration,
    arcs: ConcentricArcsDecoration,
    mesh: GradientMeshDecoration,
    sky: SkyGradientDecoration,
    zigzag: ZigzagDecoration,
};

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
    const { ref, isVisible } = useScrollAnimation(0.15);
    const DecorationComponent = decorations[feature.decoration];

    const themeStyles = {
        light: "bg-muted/50 text-foreground",
        dark: "bg-foreground text-background",
        gradient: "bg-muted/30 text-foreground",
        sky: "bg-muted/40 text-foreground",
    };

    const buttonStyles = {
        light: "bg-foreground text-background hover:bg-foreground/90",
        dark: "bg-background text-foreground hover:bg-background/90",
        gradient: "bg-foreground text-background hover:bg-foreground/90",
        sky: "bg-foreground text-background hover:bg-foreground/90",
    };

    return (
        <div
            ref={ref}
            className={`group relative flex min-h-[480px] cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-out md:min-h-[520px] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } ${themeStyles[feature.theme]}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Decoration */}
            {DecorationComponent && <DecorationComponent />}

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-1 flex-col items-center">
                    <h3
                        className={`mb-4 font-serif text-2xl leading-tight md:text-3xl lg:text-4xl ${
                            feature.theme === "dark" ? "text-background" : "text-foreground"
                        }`}
                    >
                        {feature.title}
                    </h3>
                    <p
                        className={`max-w-sm text-center text-base leading-relaxed md:text-lg ${
                            feature.theme === "dark" ? "text-background/70" : "text-muted-foreground"
                        }`}
                    >
                        {feature.description}
                    </p>
                </div>

                {/* CTA Button - isolated from group hover for arrow */}
                <div className="mt-auto pt-8">
                    <button
                        type="button"
                        className={`cta-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm uppercase tracking-wide transition-all duration-300 ${buttonStyles[feature.theme]}`}
                    >
                        {feature.cta}
                        <ArrowRight className="size-4" />
                    </button>
                </div>
            </div>

            {/* Button hover effect - scoped to button only */}
            <style>{`
        .cta-button:hover { gap: 0.75rem; }
        .cta-button:hover svg { transform: translateX(2px); }
      `}</style>
        </div>
    );
}

export function Features() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section id="features" className="section-padding px-4 md:px-8 lg:px-12">
            <div className="mx-auto max-w-[1600px]">
                {/* Section Header */}
                <div
                    ref={ref}
                    className={`mb-16 text-center transition-all duration-700 md:mb-20 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <span className="mb-4 inline-block border-muted-foreground border-b pb-1 font-medium text-muted-foreground text-xs uppercase tracking-[0.2em]">
                        Core Features
                    </span>
                    <h2 className="font-serif text-foreground text-headline md:text-display">Everything you need</h2>
                </div>

                {/* Features Grid */}
                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                    {features.slice(0, 4).map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>

                {/* Centered 5th card */}
                <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-2 md:gap-6">
                    <div className="md:col-start-1 md:col-end-3 md:mx-auto md:w-1/2">
                        <FeatureCard feature={features[4]} index={4} />
                    </div>
                </div>
            </div>
        </section>
    );
}
