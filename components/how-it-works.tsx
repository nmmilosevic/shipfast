import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Tell us the idea",
    text: "It can be rough, messy, or unfinished. You do not need a technical document.",
  },
  {
    title: "We shape it together",
    text: "We help simplify the idea, define the important features, and turn it into something real.",
  },
  {
    title: "We build it",
    text: "Design, development, launch, and delivery. You get a real working product you fully own.",
  },
];

export function HowItWorks({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="How it works" title="From thought to working product." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="bg-surface">
              <CardHeader>
                <p className="text-xs font-light uppercase tracking-widest text-brand">
                  0{index + 1}
                </p>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        {showLink ? (
          <Link
            href="/how-it-works"
            className="mt-8 inline-flex text-sm font-light text-brand transition-colors hover:text-brand-dark"
          >
            Read the full process
          </Link>
        ) : null}
      </div>
    </section>
  );
}
