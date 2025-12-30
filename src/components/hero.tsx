"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Parallax Background */}
            {/* <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                }}
            /> */}

            <video
                src="/background/cloud-seamless.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Fade to Content */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent" />

            {/* Content */}
            <div className="container-narrow text-center relative z-10">
                <h1
                    className="font-serif text-display text-balance opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                >
                    Search your memory.
                    <br />
                    Not your files.
                </h1>

                <p
                    className="mt-8 text-body-lg text-muted-foreground max-w-xl mx-auto text-balance opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                >
                    Save what matters. Retrieve it by meaning, not filenames.
                    <br className="hidden md:block" />
                    Crosmos turns your knowledge into action.
                </p>

                <div
                    className="mt-12 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                >
                    <Button
                        size="lg"
                        className="text-base font-normal px-8 py-6 h-auto rounded-full transition-all duration-200 hover:scale-105"
                    >
                        Get early access
                    </Button>
                </div>

                <div
                    className="mt-24 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.7s" }}
                >
                    <div className="w-full aspect-16/10 bg-card/80 backdrop-blur-sm rounded-lg border border-border overflow-hidden shadow-lg">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-muted-foreground"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Product Preview
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <img src={productPreview} alt="Product Preview" className="w-full h-full object-cover" width={2000} height={1000} /> */}
                </div>
            </div>
        </section>
    );
}
