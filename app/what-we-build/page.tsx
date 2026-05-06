import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { productTypes, WhatWeBuildPreview } from "@/components/what-we-build-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "From client portals to custom dashboards, booking tools, and AI-powered automations — we build focused digital products that solve real problems.",
};

export default function WhatWeBuildPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          The kinds of things we build.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          If it solves a real problem for real people, we&apos;re the right studio to build it. Here are some examples of what that looks like.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          Every idea is different — but good products share one thing: they make something faster, easier, or more valuable for the person using them.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Share your idea</Link>
        </Button>
      </section>
      <WhatWeBuildPreview showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading max-w-3xl text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Every one of these starts with a conversation.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {productTypes.slice(0, 6).map((type) => (
              <div key={type} className="paper-panel p-6">
                <h3 className="text-xl font-normal">{type}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">
                  Built around a real workflow, designed to feel polished from day one, and scoped to launch fast with everything that actually matters.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-brand p-8 text-white">
            <h3 className="font-heading text-2xl font-light tracking-tight">What kills good ideas</h3>
            <p className="mt-4 max-w-3xl text-base font-extralight leading-8 text-white/85">
              Trying to build everything at once, not being clear on who the product is for, or waiting until the idea is &ldquo;perfect.&rdquo; The best first version does one thing well — and gets in front of people.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
