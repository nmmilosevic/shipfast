import { ClipboardCheck, Code2, Handshake, LockKeyhole, Rocket, Timer } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const promises = [
  {
    icon: ClipboardCheck,
    title: "We get crystal clear first",
    text: "Before anything gets built, we agree on exactly what we're making. You'll never wonder what you're paying for.",
  },
  {
    icon: Timer,
    title: "We move fast — without cutting corners",
    text: "We ship quickly because we make decisions early, keep things focused, and remove everything that slows builds down.",
  },
  {
    icon: LockKeyhole,
    title: "It's yours. Completely.",
    text: "The app, the code, the design — all of it. No platform dependency, no monthly fee to us, no lock-in.",
  },
  {
    icon: Handshake,
    title: "No tech speak, ever",
    text: "We explain everything in plain language. You'll always know what's happening and why — no jargon, no fog.",
  },
  {
    icon: Code2,
    title: "Built to grow with you",
    text: "We use solid, modern technology so your product can be updated, expanded, and handed to any developer in the future.",
  },
  {
    icon: Rocket,
    title: "We don't stop until it's live",
    text: "Getting it working in the real world is part of the job. We're with you all the way to launch.",
  },
];

export function TrustProof() {
  return (
    <section className="section border-t border-paper-edge">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="What makes us different."
          text="Most studios are slow, expensive, and hard to understand. We built this one to be the opposite."
          kicker="The right product, built right, launched fast — and entirely yours when it's done."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div key={promise.title} className="paper-panel p-6">
                <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-normal">{promise.title}</h3>
                <p className="mt-3 text-base font-extralight leading-7 text-muted">{promise.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
