import Link from "next/link";
import { ArrowRight, ClipboardList, Layers3, Send, Target } from "lucide-react";

import { Button } from "@/components/ui/button";

const chapters = [
  {
    number: "01",
    eyebrow: "Signal",
    title: "You have the idea. You need a technical path.",
    text: "Most strong products start as a repeated problem, a service that should scale, or an internal workflow that wastes time.",
    detail: "We turn the rough idea into a direct product direction: user, purpose, screens, first release, and launch outcome.",
    icon: Target,
    asset: "Product direction",
    lines: ["Problem defined", "User clarified", "Launch outcome set"],
  },
  {
    number: "02",
    eyebrow: "Scope",
    title: "We remove noise before the build starts.",
    text: "Speed comes from deciding what matters. The first version should do one clear job and do it with confidence.",
    detail: "You get a fixed scope, fixed price, and clear delivery plan before production begins.",
    icon: ClipboardList,
    asset: "Build plan",
    lines: ["Features selected", "Screens mapped", "Price confirmed"],
  },
  {
    number: "03",
    eyebrow: "Launch",
    title: "We make it real and hand it over cleanly.",
    text: "The work covers interface, product logic, data, deployment, and handover. You get a product you can use, sell, show, or improve.",
    detail: "The result is not a concept. It is a live product with ownership and a clear next step.",
    icon: Layers3,
    asset: "Live product",
    lines: ["Design complete", "Product deployed", "Code delivered"],
  },
];

export function ParallaxStory() {
  return (
    <section className="story-shell border-b border-paper-edge bg-surface-secondary" aria-labelledby="story-title">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="story-progress">
            <p className="inline-flex px-3 py-1 text-xs font-light uppercase tracking-widest stamp">
              Operating method
            </p>
            <h2 id="story-title" className="mt-5 text-3xl font-light tracking-tight md:text-5xl">
              A clean route from idea to launch.
            </h2>
            <p className="mt-6 text-base font-extralight leading-8 text-muted">
              The process is calm, direct, and built for momentum. No technical overload. No slow agency theater.
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
                      <h3 className="mt-6 text-3xl font-light tracking-tight md:text-5xl">{chapter.title}</h3>
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
              <h3 className="mt-5 max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
                The final output is simple: a product you can put in front of people.
              </h3>
              <p className="mt-6 max-w-3xl text-base font-extralight leading-8 text-muted">
                A live, owned product with a premium interface, a clear purpose, and enough structure to become a real business asset.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start the build
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
