import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const proof = ["Reply in 48 hours", "Clear price upfront", "You own everything"];

const signals = [
  ["01", "Share your idea", "Tell us in plain words what you want to exist. No technical document, no deck needed."],
  ["02", "We figure out what to build", "We define the product, the screens, and the cost — and lock it all in before we start."],
  ["03", "You get the real thing", "Design, build, launch, handover. A product you can show, sell, and grow."],
];

export function Hero() {
  return (
    <section className="hero-section relative border-b border-paper-edge">
      <div className="hero-content mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
            Your idea deserves to be real.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-extralight leading-8 text-muted">
            You&apos;ve got something worth building. We turn it into a real, working product — designed, built, and launched — without you needing to know a single line of code.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Share your idea
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#chapter-01">See how it works</Link>
            </Button>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-light text-muted sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item} className="flex min-h-11 items-center gap-2 border border-paper-edge px-3">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="paper-panel">
          <div className="border-b border-paper-edge px-5 py-4">
            <p className="text-xs font-light uppercase tracking-widest text-brand">How it works</p>
            <p className="mt-2 font-heading text-2xl font-light tracking-tight text-foreground">From &ldquo;I have this idea&rdquo; to live product</p>
          </div>
          <div className="divide-y divide-paper-edge">
            {signals.map(([number, title, text]) => (
              <div key={number} className="grid gap-4 p-5 sm:grid-cols-[4rem_1fr]">
                <span className="text-sm font-light text-brand">{number}</span>
                <div>
                  <h2 className="text-xl font-normal text-foreground">{title}</h2>
                  <p className="mt-2 text-base font-extralight leading-7 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-brand bg-brand px-5 py-4 text-sm font-light leading-6 text-white">
            Built for clarity, speed, and full ownership.
          </div>
        </div>
      </div>
    </section>
  );
}
