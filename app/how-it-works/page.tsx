import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A simple process for turning your rough product idea into something real.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-light uppercase tracking-widest text-brand">How it works</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Building your idea should feel clear.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          You do not need a finished plan. We help you move from a rough thought to a product people can use.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Share your idea</Link>
        </Button>
      </section>
      <HowItWorks showLink={false} />
      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {[
            "We keep the scope small enough to launch.",
            "We explain decisions in plain English.",
            "You own the finished product and code.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border p-6 text-xl font-normal">
              {item}
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
