"use client";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#f5f5f0] pt-8 pb-6">
            {/* Large watermark text with fade effect */}
            <div className="relative overflow-hidden">
                <h2
                    className="text-[18vw] font-bold text-[#d8d8d0] leading-none tracking-tight text-center select-none"
                    style={{ fontFamily: "Geist, sans-serif" }}
                >
                    crosmos
                </h2>
                {/* Fade overlay at bottom */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent 0%, #f5f5f0 100%)",
                    }}
                />
            </div>

            {/* Footer content */}
            <div className="container mx-auto px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Our Products */}
                    <div>
                        <h3
                            className="font-bold text-[#333] mb-4"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Our Products
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Apps",
                                "Services",
                                "Platform",
                                "Solutions",
                                "API",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#888] hover:text-[#333] transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Company */}
                    <div>
                        <h3
                            className="font-bold text-[#333] mb-4"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Our Company
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Contact Us",
                                "Our Mission",
                                "History",
                                "Media",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#888] hover:text-[#333] transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Resources */}
                    <div>
                        <h3
                            className="font-bold text-[#333] mb-4"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Help Resources
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Support",
                                "FAQ",
                                "Documentation",
                                "Privacy Policy",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#888] hover:text-[#333] transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect with Us */}
                    <div>
                        <h3
                            className="font-bold text-[#333] mb-4"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Connect with Us
                        </h3>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="#"
                                className="text-[#888] hover:text-[#333] transition-colors"
                            >
                                <Image
                                    src="/brand/x.svg"
                                    width={20}
                                    height={20}
                                    alt="X"
                                />
                            </a>

                            <a
                                href="#"
                                className="text-[#888] hover:text-[#333] transition-colors"
                            >
                                <Image
                                    src="/brand/instagram.svg"
                                    width={20}
                                    height={20}
                                    alt="X"
                                    className="text-[#888] hover:text-[#333] transition-colors"
                                />
                            </a>
                            <a
                                href="#"
                                className="text-[#888] hover:text-[#333] transition-colors"
                            >
                                <Image
                                    src="/brand/discord.svg"
                                    width={20}
                                    height={20}
                                    alt="X"
                                    className="text-[#888] hover:text-[#333] transition-colors"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-[#ddd] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#888] text-sm">
                        Copyright © 2026 Crosmos. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-[#888] hover:text-[#333] transition-colors text-sm"
                        >
                            Terms of Use
                        </a>
                        <a
                            href="#"
                            className="text-[#888] hover:text-[#333] transition-colors text-sm"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-[#888] hover:text-[#333] transition-colors text-sm"
                        >
                            No Spam Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
