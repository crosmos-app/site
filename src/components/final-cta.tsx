"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll";
import Link from "next/link";
import { config } from "../../config";

export function FinalCTA() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-32 md:py-48 bg-crosmos-dark text-crosmos-dark-foreground">
            <div className="container-narrow text-center" ref={ref}>
                <div
                    className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="font-serif text-headline text-balance">
                        Remember everything.
                    </h2>
                    <p className="mt-6 text-body-lg text-crosmos-dark-foreground/70 max-w-md mx-auto">
                        Join the waitlist for early access to Crosmos.
                    </p>
                </div>

                <div
                    className={`mt-12 max-w-md mx-auto transition-all duration-700 delay-200 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="h-12 px-8 bg-crosmos-dark-foreground text-crosmos-dark hover:bg-crosmos-dark-foreground/90 rounded-full transition-all duration-200 hover:scale-105"
                        >
                            <Link href={config.waitlist} target="_blank">
                                Join the waitlist
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
