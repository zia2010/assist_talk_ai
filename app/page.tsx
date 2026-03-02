import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
// import { VideoProof } from "@/components/VideoProof";
import { Benefits } from "@/components/Benefits";
import { Industries } from "@/components/Industries";
import { DemoConversation } from "@/components/DemoConversation";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <Benefits />
      <Solution />
      <HowItWorks />
      {/* <VideoProof /> */}
      <Industries />
      <DemoConversation />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <PromoBanner />
    </main>
  );
}
