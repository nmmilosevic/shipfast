import Link from "next/link";
import { ArrowRight, ClipboardList, Layers3, Send, Target } from "lucide-react";

import { Button } from "@/components/ui/button";

const chapters = [
  {
    number: "01",
    eyebrow: "Understand",
    title: "You have an idea you can't ignore.",
    text: "Maybe it’s a recurring problem. A service you want to scale. Work that takes too long manually. The idea keeps coming back — you just haven’t known how to build it.",
    detail: "We ask the right questions, cut through the noise, and turn your rough idea into a clear direction: who it’s for, what it does, and what version one looks like.",
    icon: Target,
    asset: "Product direction",
    lines: ["Problem defined", "Who it's for — clear", "Version one scoped"],
  },
  {
    number: "02",
    eyebrow: "Plan",
    title: "We get completely clear before building anything.",
    text: "Speed comes from deciding early. We map every screen, every feature, and every detail — then lock in a single fixed price before a line of code is written.",
    detail: "You know exactly what you're getting, what it costs, and when it launches. No surprises, ever.",
    icon: ClipboardList,
    asset: "Build plan",
    lines: ["Every screen mapped", "Fixed price confirmed", "Timeline agreed"],
  },
  {
    number: "03",
    eyebrow: "Launch",
    title: "You get something real — and it's entirely yours.",
    text: "We design it, build it, test it, and put it live. Then we hand it over with everything you need to keep going.",
    detail: "Not a prototype. Not a concept. A live, working product — with the code, the design, and a clear path forward.",
    icon: Layers3,
    asset: "Live product",
    lines: ["Design complete", "Product deployed", "Code delivered to you"],
  },
];

export function ParallaxStory() {
  return (
    <section className="story-shell border-b border-paper-edge bg-surface-secondary" aria-labelledby="story-title">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="story-progress">
            <h2 id="story-title" className="font-heading mt-5 text-3xl font-light tracking-tight md:text-5xl">
              From idea to live product — here&apos;s how it works.
            </h2>
            <p className="mt-6 text-base font-extralight leading-8 text-muted">
              We&apos;ve made the process as simple as possible. No technical overload, no confusion, no surprises.
            </p>
            <div className="mt-8 hidden border border-paper-edge lg:block">
              {chapters.map((chapter) => (
                <a
                  key={chapter.number}
                  href={`#chapter-${chapter.number}`}
                  className="flex min-h-12 items-center gap-3 border-b border-paper-edge px-4 text-sm font-light text-muted transition-colors last:border-b-0 hover:bg-brand-light hover:text-foreground"
                >
                  <span className="text-brand">{chapter.number}</span>
                  {chapter.eyebrow}
                </a>
              ))}
            </div>
          </aside>

          <div className="divide-y divide-paper-edge border-y border-paper-edge">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;

              return (
                <article id={`chapter-${chapter.number}`} key={chapter.number} className="story-chapter scroll-mt-28">
                  <div className="grid gap-6 md:grid-cols-[1fr_0.82fr] md:items-center">
                    <div className="story-sticky p-6 md:p-8">
                      <div className="flex items-center gap-3">
                        <span className="border border-brand bg-brand px-3 py-1 text-xs font-light text-white">
                          {chapter.number}
                        </span>
                        <p className="text-xs font-light uppercase tracking-widest text-brand">{chapter.eyebrow}</p>
                      </div>
                      <h3 className="font-heading mt-6 text-3xl font-light tracking-tight md:text-5xl">{chapter.title}</h3>
                      <p className="mt-6 text-base font-extralight leading-8 text-muted">{chapter.text}</p>
                      <p className="mt-5 text-base font-light leading-8 text-foreground">{chapter.detail}</p>
                    </div>

                    <div className="paper-panel depth-card m-6 md:m-8">
                      <div className="flex items-center justify-between border-b border-paper-edge p-5">
                        <div>
                          <p className="text-xs font-light uppercase tracking-widest text-brand">{chapter.asset}</p>
                          <p className="mt-1 text-sm font-light text-muted">Sprint asset</p>
                        </div>
                        <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                      </div>
                      <div className="divide-y divide-paper-edge">
                        {chapter.lines.map((line) => (
                          <div key={line} className="px-5 py-4 text-sm font-light text-foreground">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="p-6 md:p-8">
              <Send className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="font-heading mt-5 max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
                The result: a product you can put in front of people.
              </h3>
              <p className="mt-6 max-w-3xl text-base font-extralight leading-8 text-muted">
                Something live, owned, and immediately useful. A real business asset you can show, sell, improve, or hand to any developer.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Share your idea
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
