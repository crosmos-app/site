"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";
import { Search, FileText, Mic, Brain } from "lucide-react";

const MockupSearch = () => (
    <div className="w-full max-w-lg mx-auto bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl border border-border p-4 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-border pb-3 mb-3">
            <Search className="w-4 h-4 text-muted-foreground" />
            <div className="h-4 w-1/3 bg-muted rounded-sm animate-pulse"></div>
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 transition-colors cursor-default group"
                >
                    <div className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center shrink-0">
                        {i === 1 ? (
                            <FileText
                                size={14}
                                className="text-muted-foreground"
                            />
                        ) : i === 2 ? (
                            <Mic size={14} className="text-muted-foreground" />
                        ) : (
                            <Brain
                                size={14}
                                className="text-muted-foreground"
                            />
                        )}
                    </div>
                    <div className="space-y-1 flex-1">
                        <div
                            className={`h-2 bg-muted rounded-full group-hover:bg-muted/80 transition-colors ${i === 1 ? "w-3/4" : "w-1/2"}`}
                        ></div>
                        <div className="h-1.5 w-16 bg-muted/50 rounded-full"></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export function Privacy() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="privacy" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div
                        className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <h2 className="font-serif text-headline md:text-display">
                            Always one <br /> keystroke away.
                        </h2>
                        <p className="text-muted-foreground text-body-lg font-light leading-relaxed">
                            Summon Crosmos from anywhere in your OS. It floats
                            above your apps, ready to capture a thought or find
                            a file, then disappears just as fast.
                        </p>
                        <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground mt-8">
                            <div className="flex items-center gap-2">
                                <span className="border border-border rounded-md px-3 py-2 bg-background shadow-sm text-foreground">
                                    ⌘
                                </span>
                                <span>+</span>
                                <span className="border border-border rounded-md px-3 py-2 bg-background shadow-sm text-foreground">
                                    N
                                </span>
                            </div>
                            <span className="text-muted-foreground font-sans uppercase tracking-widest text-xs">
                                Mac OS
                            </span>
                        </div>
                    </div>

                    {/* Visual Mockup */}
                    <div
                        className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    >
                        <div className="relative rounded-xl bg-linear-to-br from-crosmos-dark to-crosmos-dark/80 p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0 rounded-xl"></div>
                            {/* Wallpaper representation */}
                            <div
                                className="relative z-10 bg-cover bg-center rounded-lg h-[350px] md:h-[400px] overflow-hidden"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/20"></div>
                                {/* The Crosmos Bar */}
                                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85%] md:w-3/4">
                                    <MockupSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
