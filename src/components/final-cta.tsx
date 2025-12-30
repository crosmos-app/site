"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Check } from "lucide-react";

export function FinalCTA() {
    const { ref, isVisible } = useScrollAnimation();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            toast.error("Invalid email", {
                description: "Please enter a valid email address.",
            });
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);

        toast.success("You're on the list", {
            description: "We'll notify you when Crosmos is ready.",
        });
    };

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
                    {!isSubmitted ? (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 h-12 bg-transparent border-crosmos-dark-foreground/20 text-crosmos-dark-foreground placeholder:text-crosmos-dark-foreground/40 focus-visible:ring-crosmos-dark-foreground/50"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="h-12 px-8 bg-crosmos-dark-foreground text-crosmos-dark hover:bg-crosmos-dark-foreground/90 rounded-full transition-all duration-200 hover:scale-105"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    "Join the waitlist"
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="flex items-center justify-center gap-3 h-12">
                            <div className="w-8 h-8 rounded-full bg-crosmos-dark-foreground/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-crosmos-dark-foreground" />
                            </div>
                            <span className="text-crosmos-dark-foreground">
                                You're on the list
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
