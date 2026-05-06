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
        <p className="text-xs font-light uppercase tracking-widest text-brand">Examples</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Ideas turned into products.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          These are the kinds of useful, human products we can help bring to life.
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
              <div key={example.title} className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-normal">{example.title}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{example.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
