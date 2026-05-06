import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { examples, ExamplesPreview } from "@/components/examples-preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Real ideas turned into real products. Client portals, dashboards, booking tools, and more — see what's possible when you have an idea and the right team to build it.",
};

export default function ExamplesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Real ideas turned into real products.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          These aren&apos;t hypotheticals — they&apos;re the kinds of problems people actually had, and the products we built to solve them.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Build something like this</Link>
        </Button>
      </section>
      <ExamplesPreview showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading max-w-3xl text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Your idea could be next.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example.title} className="paper-panel p-6">
                <h3 className="text-xl font-normal">{example.title}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{example.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-paper-edge bg-surface-secondary p-8">
            <h3 className="font-heading text-2xl font-light tracking-tight">The best first version is small but powerful.</h3>
            <p className="mt-4 max-w-3xl text-base font-extralight leading-8 text-muted">
              A useful first product might be one dashboard, one portal, one generator, or one booking flow. Simple to explain, valuable to use, and fast to launch. Small doesn&apos;t mean weak — it means focused.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
