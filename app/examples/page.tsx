import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { examples, ExamplesPreview } from "@/components/examples-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Examples",
  description: "Practical ideas ShipFast Studio can turn into working products.",
};

export default function ExamplesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">Examples</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Ideas turned into products.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          These are the kinds of useful, human products we can help bring to life. They are practical, focused, and built around a real person trying to get something done.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Share your idea</Link>
        </Button>
      </section>
      <ExamplesPreview showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Your idea does not need to sound polished.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example.title} className="paper-panel rounded-2xl p-6">
                <h3 className="text-xl font-normal">{example.title}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{example.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-paper-edge bg-surface-secondary p-8">
            <h3 className="text-2xl font-light tracking-tight">The idea can start smaller than you think.</h3>
            <p className="mt-4 max-w-3xl text-base font-extralight leading-8 text-muted">
              A useful first product might be one dashboard, one portal, one generator, one intake flow, or one automation that removes a painful manual step. Small does not mean weak. Small means understandable.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
