import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto min-h-[calc(100dvh-5rem)] max-w-6xl overflow-hidden px-6 py-20 md:py-28">
      <div className="parallax-layer left-6 top-16 hidden h-28 w-28 rounded-full md:block" />
      <div className="parallax-layer right-12 top-28 hidden h-40 w-32 rounded-2xl md:block" />
      <div className="parallax-layer bottom-20 left-1/2 hidden h-20 w-48 -translate-x-1/2 rounded-full md:block" />
      <div className="relative grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">
            Premium product execution
          </p>
          <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
            Your idea, built fast and built strong.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted md:text-lg">
            ShipFast Studio turns serious product ideas into sharp, live software for founders, operators, consultants, and business owners who need execution without a full technical team.
          </p>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-foreground">
            Clear scope. Premium interface. Fast build. Full ownership.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Build my product
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#chapter-01">See the sprint</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-light text-muted sm:grid-cols-3">
            {["48 hour reply", "Fixed scope", "Premium delivery"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="paper-panel depth-card rounded-2xl p-5 md:p-7">
          <div className="rounded-xl border border-paper-edge bg-black/30 p-5 shadow-[inset_0_2px_12px_rgba(0,0,0,0.34)]">
            <div className="flex items-center justify-between border-b border-paper-edge pb-4">
              <div>
                <p className="text-xs font-light uppercase tracking-widest text-brand">Execution system</p>
                <h2 className="mt-1 text-2xl font-light tracking-tight">Idea to launch sprint</h2>
              </div>
              <ShieldCheck className="h-8 w-8 text-brand" aria-hidden="true" />
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Scope locked", "The product is shaped into clear screens, features, and launch criteria."],
                ["Build velocity", "Design, development, database, and deployment move in one focused sprint."],
                ["Ownership delivered", "You receive the live product, codebase, and handover notes."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-paper-edge bg-white/5 p-4">
                  <div className="flex gap-3">
                    {title === "Build velocity" ? (
                      <Gauge className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    ) : (
                      <Zap className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    )}
                    <div>
                      <h3 className="text-base font-normal">{title}</h3>
                      <p className="mt-2 text-sm font-extralight leading-6 text-muted">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-brand px-4 py-3 text-sm font-light leading-6 text-white">
              Built for people who want the power of a product team without hiring one.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
