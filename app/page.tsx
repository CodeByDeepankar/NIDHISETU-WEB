import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TargetAudience } from "@/components/sections/target-audience";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Workflows } from "@/components/sections/workflows";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <About />
      <TargetAudience />
      <Features />
      <HowItWorks />
      <Workflows />
      <FAQ />
      <Footer />
    </main>
  );
}