"use client";

import { useScrollAnimation } from "@/hooks/use-scroll";

export function Problem() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="section-padding" ref={ref}>
            <div className="container-wide">
                <div className="grid items-start gap-12 md:grid-cols-2 md:gap-24">
                    <div
                        className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    >
                        <h2 className="text-balance font-serif text-headline">
                            You remember it.
                            <br />
                            You just can't find it.
                        </h2>
                    </div>

                    <div
                        className={`space-y-6 transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    >
                        <p className="text-body-lg text-muted-foreground">
                            Your knowledge is scattered across files, folders, notes, and bookmarks. Finding something
                            means remembering where you saved it—not what it meant.
                        </p>
                        <p className="text-body-lg text-muted-foreground">
                            Crosmos understands context. Search by thought, by feeling, by meaning. Your memory,
                            instantly accessible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
