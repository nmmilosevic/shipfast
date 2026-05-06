import Link from "next/link";
import { ArrowRight, CircleDot, ClipboardList, Layers3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const chapters = [
  {
    number: "01",
    eyebrow: "The thought",
    title: "It starts as a tab you keep reopening in your head.",
    text: "You see the product clearly in moments: while answering a client, fixing the same spreadsheet, or explaining the same process again. Then the day gets busy and the idea goes back on the shelf.",
    detail:
      "This is where most useful products stall. Not because the idea is weak, but because turning it into screens, flows, data, and a launch plan is hard when you are not the technical person.",
    icon: CircleDot,
    artifact: "Rough note",
    lines: ["Who is this for?", "What problem keeps repeating?", "What should feel easier?"],
  },
  {
    number: "02",
    eyebrow: "The shape",
    title: "We turn the fog into a product brief.",
    text: "The first job is not coding. It is finding the simple version that should exist first. We listen, ask direct questions, remove extra weight, and turn the idea into a clear buildable scope.",
    detail:
      "You get plain-language decisions: what the product does, what it does not do yet, what screens it needs, what data it stores, and what the launch version should cost.",
    icon: ClipboardList,
    artifact: "Product brief",
    lines: ["Main user", "First useful workflow", "Fixed scope and price"],
  },
  {
    number: "03",
    eyebrow: "The build",
    title: "The product becomes something you can click through.",
    text: "Once the shape is clear, we design and build the product in visible steps. You see the idea become a real interface, then a working product, then something live.",
    detail:
      "The process stays calm: previews, decisions, updates, launch support, and handover. No black box. No technical fog. Just steady movement from idea to product.",
    icon: Layers3,
    artifact: "Working product",
    lines: ["Designed screens", "Live database", "Launch and handover"],
  },
];

export function ParallaxStory() {
  return (
    <section className="story-shell border-y border-paper-edge bg-surface-secondary/70" aria-labelledby="story-title">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <aside className="story-progress">
            <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">
              Story
            </p>
            <h2 id="story-title" className="mt-5 text-3xl font-light tracking-tight md:text-5xl">
              From the idea you carry to the product you can share.
            </h2>
            <p className="mt-6 text-base font-extralight leading-8 text-muted">
              This is the real journey: the private thought, the clearer shape, the working product, and the moment you finally have something tangible.
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
                              <p className="mt-1 text-sm font-light text-muted">Chapter artifact</p>
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
              <Sparkles className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-5 text-3xl font-light tracking-tight md:text-5xl">
                The last scene is simple: you finally have the product.
              </h3>
              <p className="mt-6 max-w-3xl text-base font-extralight leading-8 text-muted">
                A live product you can show to a client, test with a user, use inside your business, or build a new offer around. The idea stops being a conversation and becomes something real.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start the story
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
