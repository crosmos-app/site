"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/60 backdrop-blur-3xl shadow-xs"
                    : "bg-transparent"
            }`}
        >
            <nav className="container-wide flex items-center justify-between h-16 md:h-20">
                <a
                    href="/"
                    className="text-xl md:text-xl font-semibold tracking-tight uppercase min-w-[120px]"
                >
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-xl aspect-square object-cover"
                    />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                        Features
                    </a>
                    <a
                        href="#privacy"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                        Privacy
                    </a>
                    <a
                        href="#about"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                        About
                    </a>
                </div>

                <Button
                    size="sm"
                    className="text-sm font-normal px-4 py-2 h-auto rounded-full transition-all duration-200 hover:scale-105"
                >
                    <Link href={config.waitlist} target="_blank">
                        Join the waitlist
                    </Link>
                </Button>
            </nav>
        </header>
    );
}
