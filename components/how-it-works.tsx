import Link from "next/link";

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
    <section className="section bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Three steps from idea to live product."
          text="We've made it as simple as possible — because getting your idea built shouldn't be complicated."
          kicker="Fast doesn't mean rushed. It means we remove everything that slows things down."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="paper-panel rounded-xl p-7">
              <p className="text-xs font-light uppercase tracking-widest text-brand">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-lg font-normal text-foreground">{step.title}</h3>
              <p className="mt-2 text-base font-extralight leading-7 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Everything is agreed before we start building.",
            "You'll understand every update — no jargon.",
            "We stay until it's live and working.",
          ].map((item) => (
            <div key={item} className="inset-panel rounded-lg px-5 py-4 text-sm font-light leading-6 text-foreground">
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
