import { Features } from "@/components/features";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navigation } from "@/components/navbar";
import { Privacy } from "@/components/privacy";
import { Problem } from "@/components/problem";
import { UseCases } from "@/components/use-cases";

export default function Home() {
    return (
        <div className="mx-auto text-center">
            <Navigation />
            <main>
                <Hero />
                <Problem />
                <HowItWorks />
                <Features />
                <Privacy />
                <UseCases />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
