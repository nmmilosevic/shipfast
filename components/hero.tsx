import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, Package, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const outcomes = [
  {
    icon: Sparkles,
    title: "A product people can actually use",
    text: "Designed, built, tested, and live. Not a mockup, not a prototype — the real thing.",
  },
  {
    icon: Package,
    title: "The code is completely yours",
    text: "No lock-in, no monthly fee to us, no strings attached. You own everything.",
  },
  {
    icon: Layers3,
    title: "A clear path to what comes next",
    text: "Handover notes, next steps, and everything you need to keep growing or hand off.",
  },
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
              <Link href="#story-title">See how it works</Link>
            </Button>
          </div>
        </div>

        {/* Outcome card */}
        <div className="paper-panel overflow-hidden">
          <div className="border-b border-paper-edge bg-brand px-6 py-5">
            <p className="font-heading text-2xl font-light tracking-tight text-white">
              What you walk away with.
            </p>
            <p className="mt-1 text-sm font-extralight text-white/70">
              From the very first conversation.
            </p>
          </div>

          <div className="divide-y divide-paper-edge">
            {outcomes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 p-5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-paper-edge">
                    <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-base font-normal text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm font-extralight leading-6 text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-paper-edge px-6 py-4 text-sm font-light text-muted">
            From idea to launch: <span className="text-foreground">weeks, not months.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
