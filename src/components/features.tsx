"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";
import { Search, Layers, FileText, Mic, Zap, ArrowRight } from "lucide-react";

// Halftone dot pattern decoration (like the first card in the reference)
const HalftoneDecoration = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden opacity-60 transition-all duration-700 ease-out group-hover:opacity-80 group-hover:scale-110 origin-bottom">
        <svg
            className="w-full h-full transition-transform duration-1000 ease-out group-hover:rotate-3"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMax slice"
        >
            {Array.from({ length: 20 }).map((_, row) =>
                Array.from({ length: 25 }).map((_, col) => {
                    const centerX = 200;
                    const centerY = 200;
                    const x = col * 16 + (row % 2 ? 8 : 0);
                    const y = row * 10 + 20;
                    const distance = Math.sqrt(
                        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
                    );
                    const maxDistance = 200;
                    const size = Math.max(
                        0.5,
                        3 * (1 - distance / maxDistance),
                    );
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
                }),
            )}
        </svg>
    </div>
);

// Concentric arcs decoration (like the dark card in the reference)
const ConcentricArcsDecoration = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[50%] overflow-hidden opacity-30 transition-all duration-700 ease-out group-hover:opacity-50 group-hover:h-[60%]">
        <svg
            className="w-full h-full"
            viewBox="0 0 400 150"
            preserveAspectRatio="xMidYMax slice"
        >
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
      .group:hover svg path:nth-child(1) { transform: translateY(-4px); }
      .group:hover svg path:nth-child(2) { transform: translateY(-8px); }
      .group:hover svg path:nth-child(3) { transform: translateY(-12px); }
      .group:hover svg path:nth-child(4) { transform: translateY(-16px); }
      .group:hover svg path:nth-child(5) { transform: translateY(-20px); }
      .group:hover svg path:nth-child(6) { transform: translateY(-24px); }
      .group:hover svg path:nth-child(7) { transform: translateY(-28px); }
    `}</style>
    </div>
);

// Gradient mesh decoration (like the colorful card)
const GradientMeshDecoration = () => (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-purple-400/25 via-pink-400/20 to-orange-300/25" />
        <div className="absolute top-[20%] left-[15%] w-28 h-28 bg-emerald-400/35 rounded-full blur-2xl transition-transform duration-1000 ease-out group-hover:translate-x-4 group-hover:translate-y-2" />
        <div className="absolute bottom-[25%] right-[20%] w-36 h-36 bg-indigo-400/30 rounded-full blur-2xl transition-transform duration-1000 ease-out group-hover:-translate-x-4 group-hover:-translate-y-3" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-300/25 rounded-full blur-xl opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-125" />
    </div>
);

// Sky gradient decoration (like the agents platform card)
const SkyGradientDecoration = () => (
    <div className="absolute top-0 left-0 right-0 h-[55%] overflow-hidden rounded-t-2xl">
        <div className="absolute inset-0 bg-linear-to-b from-sky-200/70 via-sky-100/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[180%] h-32 bg-white/20 rounded-[50%] transition-transform duration-700 ease-out group-hover:translate-y-3" />
    </div>
);

// Zigzag wave pattern decoration (unique for "From Memory to Action")
const ZigzagDecoration = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[55%] overflow-hidden opacity-50 transition-opacity duration-500 group-hover:opacity-70">
        <svg
            className="w-full h-full zigzag-wave"
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMax slice"
        >
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
                        transition: `stroke-dashoffset ${0.6 + i * 0.08}s ease-out, opacity 0.5s`,
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
        description:
            "Search by meaning, not exact keywords. Find the insight you half-remember from months ago.",
        cta: "Learn more",
        theme: "light" as const,
        decoration: "halftone" as const,
    },
    {
        icon: Layers,
        title: "Universal Capture",
        description:
            "Notes, documents, links, images, audio, video. Save everything without manual organization.",
        cta: "Explore",
        theme: "dark" as const,
        decoration: "arcs" as const,
    },
    {
        icon: FileText,
        title: "Automatic Summaries",
        description:
            "Summarize documents, notes, links, and images into concise, actionable insights.",
        cta: "Try it free",
        theme: "gradient" as const,
        decoration: "mesh" as const,
    },
    {
        icon: Mic,
        title: "Transcription",
        description:
            "Audio and video become searchable text instantly. Every word, accessible.",
        cta: "Learn more",
        theme: "sky" as const,
        decoration: "sky" as const,
    },
    {
        icon: Zap,
        title: "From Memory to Action",
        description:
            "Your knowledge doesn't just sit there — it works for you. Reminders, schedules, workflows.",
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

function FeatureCard({
    feature,
    index,
}: {
    feature: (typeof features)[0];
    index: number;
}) {
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
            className={`group relative overflow-hidden rounded-2xl min-h-[480px] md:min-h-[520px] flex flex-col transition-all duration-500 ease-out cursor-pointer ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
            } ${themeStyles[feature.theme]}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Decoration */}
            {DecorationComponent && <DecorationComponent />}

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                {/* Header */}
                <div className="flex-1">
                    <h3
                        className={`font-serif text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight ${
                            feature.theme === "dark"
                                ? "text-background"
                                : "text-foreground"
                        }`}
                    >
                        {feature.title}
                    </h3>
                    <p
                        className={`text-base md:text-lg max-w-sm leading-relaxed ${
                            feature.theme === "dark"
                                ? "text-background/70"
                                : "text-muted-foreground"
                        }`}
                    >
                        {feature.description}
                    </p>
                </div>

                {/* CTA Button - isolated from group hover for arrow */}
                <div className="mt-auto pt-8">
                    <button
                        type="button"
                        className={`cta-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${buttonStyles[feature.theme]}`}
                    >
                        {feature.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300" />
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
        <section
            id="features"
            className="section-padding px-4 md:px-8 lg:px-12"
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div
                    ref={ref}
                    className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 border-b border-muted-foreground pb-1">
                        Core Features
                    </span>
                    <h2 className="font-serif text-headline md:text-display text-foreground">
                        Everything you need
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {features.slice(0, 4).map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>

                {/* Centered 5th card */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
                    <div className="md:col-start-1 md:col-end-3 md:mx-auto md:w-1/2">
                        <FeatureCard feature={features[4]} index={4} />
                    </div>
                </div>
            </div>
        </section>
    );
}
