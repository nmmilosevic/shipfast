import { BuiltFor } from "@/components/built-for";
import { CTA } from "@/components/cta";
import { ExamplesPreview } from "@/components/examples-preview";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ParallaxStory } from "@/components/parallax-story";
import { PricingPreview } from "@/components/pricing-preview";
import { TrustProof } from "@/components/trust-proof";
import { WhatWeBuildPreview } from "@/components/what-we-build-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <ParallaxStory />
      <TrustProof />
      <HowItWorks />
      <BuiltFor />
      <WhatWeBuildPreview />
      <ExamplesPreview />
      <PricingPreview />
      <CTA />
    </>
  );
}
