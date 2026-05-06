import Link from "next/link";
import { ArrowRight, CircleDot, ClipboardList, Layers3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const chapters = [
  {
    number: "01",
    eyebrow: "Pressure",
    title: "The idea is ready. The delay is costing you.",
    text: "You know the workflow, the customer, the offer, or the internal problem. What you do not have is the technical force to turn it into a product fast enough.",
    detail:
      "ShipFast Studio starts by cutting through the noise. We identify the sharpest version of the idea and move it toward launch with speed and control.",
    icon: CircleDot,
    artifact: "Opportunity",
    lines: ["High-value problem", "Clear buyer or user", "Fast path to launch"],
  },
  {
    number: "02",
    eyebrow: "Command",
    title: "We lock the scope and remove drag.",
    text: "The first move is precision. We define what needs to ship, what can wait, and what the product must prove when it goes live.",
    detail:
      "You get a direct build plan: screens, features, data, timeline, price, launch criteria, and ownership. No vague roadmap. No endless discovery.",
    icon: ClipboardList,
    artifact: "Build plan",
    lines: ["Screens defined", "Features prioritized", "Price fixed"],
  },
  {
    number: "03",
    eyebrow: "Execution",
    title: "Design, build, launch. No dead weight.",
    text: "Once the scope is locked, we move with focus. Interface, database, logic, deployment, and handover are handled as one coordinated product sprint.",
    detail:
      "You see progress, make decisions quickly, and receive a live product you can use, sell, show, or operate. Speed matters, but control matters more.",
    icon: Layers3,
    artifact: "Live product",
    lines: ["Premium interface", "Working backend", "Launch handover"],
  },
];

export function ParallaxStory() {
  return (
    <section className="story-shell border-y border-paper-edge bg-surface-secondary/70" aria-labelledby="story-title">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <aside className="story-progress">
            <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">
              Sprint
            </p>
            <h2 id="story-title" className="mt-5 text-3xl font-light tracking-tight md:text-5xl">
              A fast path from idea to live product.
            </h2>
            <p className="mt-6 text-base font-extralight leading-8 text-muted">
              A premium service for people who need product execution now: pressure, command, execution, launch.
            </p>
            <div className="mt-8 hidden space-y-3 lg:block">
              {chapters.map((chapter) => (
                <a
                  key={chapter.number}
                  href={`#chapter-${chapter.number}`}
                  className="flex min-h-11 items-center gap-3 rounded-xl border border-paper-edge bg-surface/72 px-4 text-sm font-light text-muted transition-colors hover:text-foreground"
                >
                  <span className="text-gold">{chapter.number}</span>
                  {chapter.eyebrow}
                </a>
              ))}
            </div>
          </aside>

          <div>
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;

              return (
                <article
                  id={`chapter-${chapter.number}`}
                  key={chapter.number}
                  className="story-chapter scroll-mt-28"
                >
                  <div className="grid gap-6 md:grid-cols-[1fr_0.86fr] md:items-center">
                    <div className="paper-panel depth-card story-sticky rounded-2xl p-7 md:p-9">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-light text-white">
                          {chapter.number}
                        </span>
                        <p className="text-xs font-light uppercase tracking-widest text-brand">{chapter.eyebrow}</p>
                      </div>
                      <h3 className="mt-6 text-3xl font-light tracking-tight md:text-5xl">{chapter.title}</h3>
                      <p className="mt-6 text-base font-extralight leading-8 text-muted">{chapter.text}</p>
                      <p className="mt-5 text-base font-light leading-8 text-foreground">{chapter.detail}</p>
                    </div>

                    <div className="relative min-h-80">
                      <div
                        className="parallax-layer left-2 top-2 h-24 w-24 rounded-2xl"
                        style={{ transform: `translateY(${index * 12}px) rotate(-4deg)` }}
                      />
                      <div
                        className="parallax-layer bottom-6 right-3 h-32 w-28 rounded-full"
                        style={{ transform: `translateY(-${index * 10}px)` }}
                      />
                      <div className="paper-panel depth-card relative rounded-2xl p-5 md:p-6">
                        <div className="inset-panel rounded-xl p-5">
                          <div className="flex items-center justify-between border-b border-paper-edge pb-4">
                            <div>
                              <p className="text-xs font-light uppercase tracking-widest text-gold">{chapter.artifact}</p>
                              <p className="mt-1 text-sm font-light text-muted">Sprint asset</p>
                            </div>
                            <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                          </div>
                          <div className="mt-5 space-y-3">
                            {chapter.lines.map((line) => (
                              <div key={line} className="rounded-xl border border-paper-edge bg-surface px-4 py-3 text-sm font-light text-foreground">
                                {line}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="paper-panel depth-card rounded-2xl p-8 md:p-10">
              <Sparkles className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-3xl font-light tracking-tight md:text-5xl">
                The final output is simple: a product with force.
              </h3>
              <p className="mt-6 max-w-3xl text-base font-extralight leading-8 text-muted">
                A live product you can show to a client, test with a user, use inside your business, or build a new offer around. Built quickly, presented cleanly, and owned by you.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start the sprint
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
