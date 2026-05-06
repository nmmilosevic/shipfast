import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { included, PricingPreview } from "@/components/pricing-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple fixed project pricing for bringing your product idea to life.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-light uppercase tracking-widest text-brand">Pricing</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          A clear price before we start.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          Every project starts with a simple scope. You know what we are building, what it costs, and what happens next.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Bring my idea to life</Link>
        </Button>
      </section>
      <PricingPreview showLink={false} />
      <section className="section bg-surface-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">What is included</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-surface p-6 text-xl font-normal">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
