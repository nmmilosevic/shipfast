import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Brief the mission",
    text: "Send the idea, the customer, the pressure, and the outcome you need. We extract the product opportunity fast.",
  },
  {
    title: "Lock the sprint",
    text: "We define the launch version, screens, data, features, timeline, and fixed project price before build starts.",
  },
  {
    title: "Ship the product",
    text: "We design, build, connect, deploy, and hand over a live product with the codebase and next-step notes.",
  },
];

export function HowItWorks({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-paper-edge bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="How it works"
          title="A high-speed path from idea to product."
          text="The process is built for decisive execution. You get clarity quickly, decisions stay visible, and the first version is engineered to launch."
          kicker="Fast does not mean vague. Fast means focused scope, fewer delays, and a product built around the strongest use case."
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
            "Scope locked before work starts.",
            "Direct progress updates without technical fog.",
            "Launch support and ownership handover.",
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
