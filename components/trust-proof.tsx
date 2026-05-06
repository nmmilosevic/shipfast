import { ClipboardCheck, Code2, Handshake, LockKeyhole, Rocket, Timer } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const promises = [
  {
    icon: ClipboardCheck,
    title: "Clear scope before build",
    text: "You see the product shape, main screens, required features, and fixed price before work starts.",
  },
  {
    icon: Timer,
    title: "Fast without being careless",
    text: "We move quickly because the product is focused, not because important decisions are rushed.",
  },
  {
    icon: LockKeyhole,
    title: "Your idea stays yours",
    text: "The product, code, and assets are handed over to you. There is no platform lock-in.",
  },
  {
    icon: Handshake,
    title: "Human communication",
    text: "You get plain updates, clear decisions, and direct explanations instead of technical fog.",
  },
  {
    icon: Code2,
    title: "Built on proven tools",
    text: "We use reliable modern tools so the product can be maintained, improved, and deployed properly.",
  },
  {
    icon: Rocket,
    title: "Launch included",
    text: "The work does not stop at design. We help get the product live and ready to share.",
  },
];

export function TrustProof() {
  return (
    <section className="section border-t border-paper-edge">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Trust"
          title="A product partner for the unclear middle."
          text="The hardest part is often not the idea. It is the space between idea and reality: what to build first, what to ignore, what it should cost, and how to know if the product is ready."
          kicker="ShipFast Studio exists to make that middle part calm, practical, and visible."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div key={promise.title} className="paper-panel rounded-2xl p-6">
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
