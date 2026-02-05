"use client";

import { Brain, FileText, Mic, Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll";

const MockupSearch = () => (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background/80 p-4 shadow-2xl backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-3 border-border border-b pb-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <div className="h-4 w-1/3 animate-pulse rounded-sm bg-muted"></div>
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="group flex cursor-default items-center gap-3 rounded p-2 transition-colors hover:bg-muted/50"
                >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border bg-muted/50">
                        {i === 1 ? (
                            <FileText size={14} className="text-muted-foreground" />
                        ) : i === 2 ? (
                            <Mic size={14} className="text-muted-foreground" />
                        ) : (
                            <Brain size={14} className="text-muted-foreground" />
                        )}
                    </div>
                    <div className="flex-1 space-y-1">
                        <div
                            className={`h-2 rounded-full bg-muted transition-colors group-hover:bg-muted/80 ${i === 1 ? "w-3/4" : "w-1/2"}`}
                        ></div>
                        <div className="h-1.5 w-16 rounded-full bg-muted/50"></div>
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
            <div className="mx-auto max-w-7xl px-6" ref={ref}>
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* Text Content */}
                    <div
                        className={`space-y-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    >
                        <h2 className="font-serif text-headline md:text-display">
                            Always one <br /> keystroke away.
                        </h2>
                        <p className="font-light text-body-lg text-muted-foreground leading-relaxed">
                            Summon Crosmos from anywhere in your OS. It floats above your apps, ready to capture a
                            thought or find a file, then disappears just as fast.
                        </p>
                        <div className="mt-8 flex items-center gap-6 font-mono text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                                <span className="rounded-md border border-border bg-background px-3 py-2 text-foreground shadow-sm">
                                    ⌘
                                </span>
                                <span>+</span>
                                <span className="rounded-md border border-border bg-background px-3 py-2 text-foreground shadow-sm">
                                    N
                                </span>
                            </div>
                            <span className="font-sans text-muted-foreground text-xs uppercase tracking-widest">
                                Mac OS
                            </span>
                        </div>
                    </div>

                    {/* Visual Mockup */}
                    <div
                        className={`relative transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    >
                        <div className="relative rotate-1 transform rounded-xl bg-linear-to-br from-crosmos-dark to-crosmos-dark/80 p-2 shadow-2xl transition-transform duration-700 hover:rotate-0">
                            <div className="absolute top-0 left-0 z-0 h-full w-full rounded-xl bg-black/40"></div>
                            {/* Wallpaper representation */}
                            <div
                                className="relative z-10 h-[350px] overflow-hidden rounded-lg bg-center bg-cover md:h-[400px]"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/20"></div>
                                {/* The Crosmos Bar */}
                                <div className="-translate-x-1/2 absolute top-1/3 left-1/2 w-[85%] md:w-3/4">
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
