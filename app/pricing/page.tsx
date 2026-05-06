import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { included, PricingPreview } from "@/components/pricing-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One price, no surprises. Know exactly what you're getting, what it costs, and when it launches — before we start.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          A clear price for a real product.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          Every project starts with a fixed scope. You know exactly what you&apos;re getting, what it costs, and when it&apos;s done — before we start.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          The price depends on what you need, but the model stays simple: one build, one price, and full ownership at the end.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Get started</Link>
        </Button>
      </section>
      <PricingPreview showLink={false} />
      <section className="section bg-surface-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl font-light tracking-tight text-foreground md:text-5xl">What&apos;s included</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="paper-panel p-6 text-xl font-normal">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="inset-panel p-6">
              <h3 className="text-xl font-normal">A good fit</h3>
              <p className="mt-4 text-base font-extralight leading-7 text-muted">
                A focused product, portal, dashboard, tool, or workflow that can launch with a strong first version and grow from there. No endless requirements, no waiting for perfection.
              </p>
            </div>
            <div className="inset-panel p-6">
              <h3 className="text-xl font-normal">Not a good fit</h3>
              <p className="mt-4 text-base font-extralight leading-7 text-muted">
                Large enterprise platforms, open-ended multi-year builds, or ideas where every possible feature must be included before launching.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
