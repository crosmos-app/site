"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { config } from "../../config";

export function FinalCTA() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="bg-crosmos-dark py-32 text-crosmos-dark-foreground md:py-48">
            <div className="container-narrow text-center" ref={ref}>
                <div
                    className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                    <h2 className="text-balance font-serif text-headline">Remember everything.</h2>
                    <p className="mx-auto mt-6 max-w-md text-body-lg text-crosmos-dark-foreground/70">
                        Join the waitlist for early access to Crosmos.
                    </p>
                </div>

                <div
                    className={`mx-auto mt-12 max-w-md transition-all delay-200 duration-700 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="h-12 rounded-full bg-crosmos-dark-foreground px-8 text-crosmos-dark transition-all duration-200 hover:scale-105 hover:bg-crosmos-dark-foreground/90"
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
