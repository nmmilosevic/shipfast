import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { productTypes, WhatWeBuildPreview } from "@/components/what-we-build-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What We Build",
  description: "Powerful focused products ShipFast Studio can build fast.",
};

export default function WhatWeBuildPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">What we build</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Powerful products with one sharp job.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          The best first version is focused, useful, and strong. We build products that make a real workflow faster, clearer, more premium, or more profitable.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          If the product creates speed, leverage, revenue, or trust, it is worth shaping seriously.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Start the sprint</Link>
        </Button>
      </section>
      <WhatWeBuildPreview showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-light tracking-tight text-foreground md:text-5xl">
            If it creates leverage, it is worth building.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {productTypes.slice(0, 6).map((type) => (
              <div key={type} className="paper-panel rounded-2xl p-6">
                <h3 className="text-xl font-normal">{type}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">
                  A focused product shaped around a real workflow, with premium screens, strong data flow, and the smallest feature set needed to launch fast.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-brand p-8 text-white">
            <h3 className="text-2xl font-light tracking-tight">What slows products down</h3>
            <p className="mt-4 max-w-3xl text-base font-extralight leading-8 text-white/85">
              Bloated first versions, vague platform ideas, slow approval loops, and technical complexity that does not help the user. The first product should create impact quickly.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
