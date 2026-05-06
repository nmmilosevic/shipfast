import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Tell us the idea",
    text: "Send the messy version. Tell us what you imagine, who it would help, and why you keep thinking about it. Notes, voice, screenshots, or a simple paragraph are enough.",
  },
  {
    title: "We shape it together",
    text: "We remove what is unclear, define the first useful version, map the screens, and explain the tradeoffs in plain English before anything is built.",
  },
  {
    title: "We build it",
    text: "We design, build, connect the database, deploy the product, and hand over the code and next steps. You get something real, not a folder of mockups.",
  },
];

export function HowItWorks({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-paper-edge bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="How it works"
          title="A calm path from idea to product."
          text="The process is designed for people who do not build software every day. You will always know what is happening, what decision is needed, and what comes next."
          kicker="We keep the first version focused because a clear, useful product is easier to launch, easier to explain, and easier to improve."
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
            "Plain-English scope before work starts.",
            "Weekly progress notes you can actually understand.",
            "Launch support and handover after delivery.",
          ].map((item) => (
            <div key={item} className="inset-panel rounded-2xl p-5 text-sm font-light leading-6 text-foreground">
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
