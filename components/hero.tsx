import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

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
            Bring your idea to life
          </p>
          <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
            Scroll through the moment your idea becomes real.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted md:text-lg">
            You have been carrying it around for months. This page follows the journey from rough thought to clear scope, working product, launch, and ownership.
          </p>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-foreground">
            No technical document required. No jargon. Just a cinematic, practical path from the thing in your head to something people can click.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a product brief
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#chapter-01">Start the story</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-light text-muted sm:grid-cols-3">
            {["48 hour reply", "Fixed scope", "Full ownership"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="paper-panel depth-card rounded-2xl p-5 md:p-7">
          <div className="rounded-xl border border-paper-edge bg-[#F9F3E8] p-5 shadow-[inset_0_2px_12px_rgba(41,31,18,0.08)]">
            <div className="flex items-center justify-between border-b border-paper-edge pb-4">
              <div>
                <p className="text-xs font-light uppercase tracking-widest text-brand">Product brief</p>
                <h2 className="mt-1 text-2xl font-light tracking-tight">Idea to launch</h2>
              </div>
              <ShieldCheck className="h-8 w-8 text-brand" aria-hidden="true" />
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Your rough idea", "We listen for the problem, the person, and the outcome you want."],
                ["A clear build plan", "We turn the idea into screens, features, timeline, and price."],
                ["A real product", "You receive the live product, codebase, and handover notes."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-paper-edge bg-surface p-4">
                  <div className="flex gap-3">
                    <FileText className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-normal">{title}</h3>
                      <p className="mt-2 text-sm font-extralight leading-6 text-muted">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-brand px-4 py-3 text-sm font-light leading-6 text-white">
              Built for people who know what should exist, but need the technical partner to make it real.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
