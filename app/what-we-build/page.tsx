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
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">What we build</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Small products with a clear purpose.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          The best first version is focused, useful, and easy to understand. We build products that make a real workflow easier, faster, clearer, or more valuable.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          If your idea can be explained as a person needing a better way to handle a real task, it is probably worth shaping.
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
              <div key={type} className="paper-panel rounded-2xl p-6">
                <h3 className="text-xl font-normal">{type}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">
                  A focused product shaped around a real workflow, with clear screens, simple permissions, and the smallest feature set needed to make it useful.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-brand p-8 text-white">
            <h3 className="text-2xl font-light tracking-tight">What we avoid</h3>
            <p className="mt-4 max-w-3xl text-base font-extralight leading-8 text-white/85">
              We avoid bloated first versions, vague platform ideas, and technical complexity that does not help the user. The first product should make the value obvious.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
