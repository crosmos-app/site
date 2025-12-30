"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";

export function Problem() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="section-padding" ref={ref}>
            <div className="container-wide">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div
                        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <h2 className="font-serif text-headline text-balance">
                            You remember it.
                            <br />
                            You just can't find it.
                        </h2>
                    </div>

                    <div
                        className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <p className="text-body-lg text-muted-foreground">
                            Your knowledge is scattered across files, folders,
                            notes, and bookmarks. Finding something means
                            remembering where you saved it—not what it meant.
                        </p>
                        <p className="text-body-lg text-muted-foreground">
                            Crosmos understands context. Search by thought, by
                            feeling, by meaning. Your memory, instantly
                            accessible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
