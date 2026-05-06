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
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">Pricing</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          A clear price before we start.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          Every project starts with a simple scope. You know what we are building, what it costs, what is included, and what happens next.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          The price depends on the shape of the product, but the working style stays the same: clear scope, fixed project price, and no hidden dependency on us after launch.
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
              <div key={item} className="paper-panel rounded-2xl p-6 text-xl font-normal">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="inset-panel rounded-2xl p-6">
              <h3 className="text-xl font-normal">Good fit</h3>
              <p className="mt-4 text-base font-extralight leading-7 text-muted">
                A focused product, portal, dashboard, tool, or workflow that can launch with a clear first version.
              </p>
            </div>
            <div className="inset-panel rounded-2xl p-6">
              <h3 className="text-xl font-normal">Not a good fit</h3>
              <p className="mt-4 text-base font-extralight leading-7 text-muted">
                Large enterprise platforms, unclear multi-year builds, or ideas where every possible feature must be included on day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
