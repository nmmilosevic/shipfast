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
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">How it works</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Building your idea should feel clear.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          You do not need a finished plan. You need a way to explain the idea, see what matters, and move toward a product people can use.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          We work like a technical product partner: listening first, simplifying next, then building only what is needed to make the idea real.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Share your idea</Link>
        </Button>
      </section>
      <HowItWorks showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
            What happens after you reach out.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["First reply", "We read your message and reply with useful questions, not a generic sales call. If the idea is not a fit, we say so clearly."],
              ["Product brief", "We turn the idea into a short brief covering the user, problem, screens, first features, timeline, and fixed price."],
              ["Build rhythm", "You get visible progress, working previews, and decisions in plain English until the product is ready to launch."],
            ].map(([title, text]) => (
              <div key={title} className="paper-panel rounded-2xl p-6">
                <h3 className="text-xl font-normal">{title}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
