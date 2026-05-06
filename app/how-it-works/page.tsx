import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Getting your idea built is simpler than you think. Three clear steps from idea to live product — no tech knowledge required.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Getting your idea built is simpler than you think.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          You don&apos;t need a technical plan, a finished spec, or a CTO. You just need an idea and a decision to start.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          We handle everything: understanding your idea, designing the product, building it, getting it live, and handing it over.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Share your idea</Link>
        </Button>
      </section>
      <HowItWorks showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
            What happens after you reach out.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["We read your idea", "We look at what you've sent, identify the strongest product angle, and figure out the right next step. No generic reply."],
              ["We map the product", "We define who it's for, what it does, every screen, the timeline, and a fixed price — before a single line of code is written."],
              ["We build and keep you in the loop", "You see progress, get plain-English updates, and make real decisions — until the product is live and in your hands."],
            ].map(([title, text]) => (
              <div key={title} className="paper-panel p-6">
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
