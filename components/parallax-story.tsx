"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ClipboardList, Layers3, Send, Target, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Chapter = {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  detail: string;
  icon: LucideIcon;
  asset: string;
  lines: string[];
};

const chapters: Chapter[] = [
  {
    number: "01",
    eyebrow: "Understand",
    title: "You have an idea you can't ignore.",
    text: "Maybe it's a recurring problem. A service you want to scale. Work that takes too long manually. The idea keeps coming back — you just haven't known how to build it.",
    detail: "We ask the right questions, cut through the noise, and turn your rough idea into a clear direction: who it's for, what it does, and what version one looks like.",
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

const SCROLL_HEIGHT_VH = (chapters.length + 1) * 100;

export function ParallaxStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(0.9999, -top / scrollable));
      const newIndex = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
      setActiveIndex((prev) => {
        if (prev !== newIndex) setAnimKey((k) => k + 1);
        return newIndex;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToChapter = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const elTop = window.scrollY + el.getBoundingClientRect().top;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: elTop + (index / chapters.length) * scrollable, behavior: "smooth" });
  };

  const chapter = chapters[activeIndex];
  const Icon = chapter.icon;

  return (
    <>
      <div
        ref={containerRef}
        style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
        className="bg-surface-secondary"
        aria-labelledby="story-title"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-surface-secondary">
          <div className="flex h-full flex-col justify-center px-6 pt-20 pb-10">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">

                {/* Left sidebar */}
                <aside>
                  <h2 id="story-title" className="font-heading text-3xl font-light tracking-tight md:text-5xl">
                    From idea to live product — here&apos;s how it works.
                  </h2>
                  <p className="mt-5 text-base font-extralight leading-8 text-muted">
                    We&apos;ve made the process as simple as possible. No technical overload, no confusion, no surprises.
                  </p>

                  {/* Desktop step nav */}
                  <div className="mt-8 hidden border border-paper-edge lg:block">
                    {chapters.map((c, i) => (
                      <button
                        key={c.number}
                        onClick={() => goToChapter(i)}
                        className={`flex min-h-12 w-full items-center gap-4 border-b border-paper-edge px-4 text-left text-sm font-light transition-all duration-200 last:border-b-0 ${
                          i === activeIndex
                            ? "bg-brand-light text-foreground"
                            : "text-muted hover:bg-brand-light hover:text-foreground"
                        }`}
                      >
                        <span className={`text-brand transition-all ${i === activeIndex ? "font-normal" : ""}`}>
                          {c.number}
                        </span>
                        <span>{c.eyebrow}</span>
                        {i === activeIndex && (
                          <span className="ml-auto h-1.5 w-1.5 bg-brand" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Mobile progress bar */}
                  <div className="mt-6 flex gap-2 lg:hidden">
                    {chapters.map((c, i) => (
                      <button
                        key={c.number}
                        onClick={() => goToChapter(i)}
                        aria-label={`Step ${c.number}: ${c.eyebrow}`}
                        className={`h-0.5 flex-1 transition-colors duration-300 ${
                          i === activeIndex ? "bg-brand" : "bg-paper-edge"
                        }`}
                      />
                    ))}
                  </div>
                </aside>

                {/* Right: animated chapter card */}
                <div
                  key={animKey}
                  role="region"
                  aria-live="polite"
                  aria-label={`Step ${chapter.number}: ${chapter.eyebrow}`}
                  className="chapter-enter paper-panel"
                >
                  <div className="flex items-center justify-between border-b border-paper-edge p-5">
                    <div className="flex items-center gap-3">
                      <span className="border border-brand bg-brand px-3 py-1 text-xs font-light text-white">
                        {chapter.number}
                      </span>
                      <p className="text-xs font-light uppercase tracking-widest text-brand">{chapter.eyebrow}</p>
                    </div>
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-light tracking-tight md:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 text-base font-extralight leading-8 text-muted">{chapter.text}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-foreground">{chapter.detail}</p>
                  </div>

                  <div className="border-t border-paper-edge">
                    {chapter.lines.map((line) => (
                      <div
                        key={line}
                        className="border-b border-paper-edge px-6 py-3.5 text-sm font-light text-foreground last:border-b-0"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result section — appears after scroll through all 3 steps */}
      <section className="section bg-surface-secondary">
        <div className="mx-auto max-w-6xl px-6">
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
      </section>
    </>
  );
}
