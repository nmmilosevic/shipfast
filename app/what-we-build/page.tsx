import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { productTypes, WhatWeBuildPreview } from "@/components/what-we-build-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What We Build",
  description: "Focused product ideas ShipFast Studio can bring to life.",
};

export default function WhatWeBuildPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-light uppercase tracking-widest text-brand">What we build</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Small products with a clear purpose.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          The best first version is focused, useful, and easy to understand. That is what we build.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Start building</Link>
        </Button>
      </section>
      <WhatWeBuildPreview showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-light tracking-tight text-foreground md:text-5xl">
            If it solves one real problem, it is worth exploring.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {productTypes.slice(0, 6).map((type) => (
              <div key={type} className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-normal">{type}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">
                  A focused product shaped around a real workflow, not a list of features.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
