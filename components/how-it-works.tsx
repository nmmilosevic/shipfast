import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Tell us your idea",
    text: "Send a message in plain English. No technical document needed — just tell us what you want to exist and why.",
  },
  {
    title: "We plan it and price it",
    text: "We map out every screen, feature, and detail. You get a clear plan and a fixed price before we start building.",
  },
  {
    title: "We build and hand it over",
    text: "We design, build, test, deploy, and hand over a live product — with the code and everything you need to keep going.",
  },
];

export function HowItWorks({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-paper-edge bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Three steps from idea to live product."
          text="We've made it as simple as possible — because getting your idea built shouldn't be complicated."
          kicker="Fast doesn't mean rushed. It means we remove everything that slows things down."
        />
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Everything is agreed before we start building.",
            "You'll understand every update — no jargon.",
            "We stay until it's live and working.",
          ].map((item) => (
            <div key={item} className="inset-panel p-5 text-sm font-light leading-6 text-foreground">
              {item}
            </div>
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
