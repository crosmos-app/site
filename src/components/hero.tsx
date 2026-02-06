"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { config } from "../../config";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-42">
            <video
                src="/background/cloud-seamless.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient Fade to Content */}
            <div className="absolute right-0 bottom-0 left-0 h-48 bg-linear-to-t from-background to-transparent" />

            {/* Content */}
            <div className="container-narrow relative z-10 text-center">
                <h1
                    className="animate-fade-in text-balance font-serif text-display opacity-0"
                    style={{ animationDelay: "0.1s" }}
                >
                    Search your memory.
                    <br />
                    Not your files.
                </h1>

                <p
                    className="mx-auto mt-8 max-w-xl animate-fade-in text-balance text-body-lg text-foreground/80 opacity-0"
                    style={{ animationDelay: "0.3s" }}
                >
                    Save what matters. Retrieve it by meaning, not filenames.
                    <br className="hidden md:block" />
                    Crosmos turns your knowledge into action.
                </p>

                <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
                    <Button
                        size="lg"
                        className="h-auto rounded-full px-8 py-6 font-normal text-base transition-all duration-200 hover:scale-105"
                    >
                        <Link href={config.waitlist} target="_blank">
                            Get early access
                        </Link>
                    </Button>
                </div>

                <div className="mt-24 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
                    <div className="aspect-16/10 w-full overflow-hidden rounded-lg border border-border bg-card/80 shadow-lg backdrop-blur-sm">
                        <div className="flex h-full w-full items-center justify-center">
                            <div className="p-8 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                    <svg
                                        className="h-8 w-8 text-muted-foreground"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>Search</title>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-muted-foreground text-sm">Product Preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
