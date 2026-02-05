"use client";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#f5f5f0] pt-8 pb-6">
            {/* Large watermark text with fade effect */}
            <div className="relative overflow-hidden">
                <h2
                    className="select-none text-center font-bold text-[#d8d8d0] text-[18vw] leading-none tracking-tight"
                    style={{ fontFamily: "Geist, sans-serif" }}
                >
                    crosmos
                </h2>
                {/* Fade overlay at bottom */}
                <div
                    className="pointer-events-none absolute right-0 bottom-0 left-0 h-1/2"
                    style={{
                        background: "linear-gradient(to bottom, transparent 0%, #f5f5f0 100%)",
                    }}
                />
            </div>

            {/* Footer content */}
            <div className="-mt-16 container relative z-10 mx-auto px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Our Products */}
                    <div>
                        <h3 className="mb-4 font-bold text-[#333]" style={{ fontFamily: "Geist, sans-serif" }}>
                            Our Products
                        </h3>
                        <ul className="space-y-2">
                            {["Apps", "Services", "Platform", "Solutions", "API"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Company */}
                    <div>
                        <h3 className="mb-4 font-bold text-[#333]" style={{ fontFamily: "Geist, sans-serif" }}>
                            Our Company
                        </h3>
                        <ul className="space-y-2">
                            {["Contact Us", "Our Mission", "History", "Media"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Resources */}
                    <div>
                        <h3 className="mb-4 font-bold text-[#333]" style={{ fontFamily: "Geist, sans-serif" }}>
                            Help Resources
                        </h3>
                        <ul className="space-y-2">
                            {["Support", "FAQ", "Documentation", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect with Us */}
                    <div>
                        <h3 className="mb-4 font-bold text-[#333]" style={{ fontFamily: "Geist, sans-serif" }}>
                            Connect with Us
                        </h3>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="text-[#888] transition-colors hover:text-[#333]">
                                <Image src="/brand/x.svg" width={20} height={20} alt="X" />
                            </a>

                            <a href="#" className="text-[#888] transition-colors hover:text-[#333]">
                                <Image
                                    src="/brand/instagram.svg"
                                    width={20}
                                    height={20}
                                    alt="X"
                                    className="text-[#888] transition-colors hover:text-[#333]"
                                />
                            </a>
                            <a href="#" className="text-[#888] transition-colors hover:text-[#333]">
                                <Image
                                    src="/brand/discord.svg"
                                    width={20}
                                    height={20}
                                    alt="X"
                                    className="text-[#888] transition-colors hover:text-[#333]"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-[#ddd] border-t pt-6 md:flex-row">
                    <p className="text-[#888] text-sm">Copyright © 2026 Crosmos. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                            Terms of Use
                        </a>
                        <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#888] text-sm transition-colors hover:text-[#333]">
                            No Spam Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
