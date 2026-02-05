import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
    variable: "--font-garamond-sans",
});

export const metadata: Metadata = {
    title: "Crosmos — Search your memory. Not your files.",
    description:
        "Crosmos is a private, AI-powered memory and knowledge system. Save anything, search by meaning, and turn your knowledge into action.",
    authors: [{ name: "Crosmos Team" }],
    applicationName: "Crosmos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo.png" className="" type="image/*" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
