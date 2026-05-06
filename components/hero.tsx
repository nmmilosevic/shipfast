import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const proof = ["48 hour reply", "Fixed project scope", "Live product handover"];

const signals = [
  ["01", "Idea intake", "Send the idea in plain English. No deck or technical document needed."],
  ["02", "Build direction", "We define the smallest strong product and the fastest way to ship it."],
  ["03", "Execution", "Design, build, launch, and handover move through one focused studio process."],
];

export function Hero() {
  return (
    <section className="relative border-b border-paper-edge">
      <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex px-3 py-1 text-xs font-light uppercase tracking-widest stamp">
            Premium product studio
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
            Fast software for ideas that need to exist.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-extralight leading-8 text-muted">
            ShipFast Studio helps founders, operators, consultants, and business owners turn serious ideas into clean, working products without hiring a technical team.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start building
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#chapter-01">See the process</Link>
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
            <p className="text-xs font-light uppercase tracking-widest text-brand">Delivery board</p>
            <p className="mt-2 text-2xl font-light tracking-tight text-foreground">From thought to shipped product</p>
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
            Built for speed, clarity, ownership, and a premium product feel.
          </div>
        </div>
      </div>
    </section>
  );
}
