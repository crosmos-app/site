"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { config } from "../../config";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/60 shadow-xs backdrop-blur-3xl" : "bg-transparent"
            }`}
        >
            <nav className="container-wide flex h-16 items-center justify-between md:h-20">
                <a href="/" className="min-w-[120px] font-semibold text-xl uppercase tracking-tight md:text-xl">
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="aspect-square rounded-xl object-cover"
                    />
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#features"
                        className="link-underline text-muted-foreground text-sm transition-colors hover:text-foreground"
                    >
                        Features
                    </a>
                    <a
                        href="#privacy"
                        className="link-underline text-muted-foreground text-sm transition-colors hover:text-foreground"
                    >
                        Privacy
                    </a>
                    <a
                        href="#about"
                        className="link-underline text-muted-foreground text-sm transition-colors hover:text-foreground"
                    >
                        About
                    </a>
                </div>

                <Button
                    size="sm"
                    className="h-auto rounded-full px-4 py-2 font-normal text-sm transition-all duration-200 hover:scale-105"
                >
                    <Link href={config.waitlist} target="_blank">
                        Join the waitlist
                    </Link>
                </Button>
            </nav>
        </header>
    );
}
