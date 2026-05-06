import { ClipboardCheck, Code2, Handshake, LockKeyhole, Rocket, Timer } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const promises = [
  {
    icon: ClipboardCheck,
    title: "Scope before speed",
    text: "Fast execution only works when the target is clear. We lock the product shape before build starts.",
  },
  {
    icon: Timer,
    title: "Velocity with control",
    text: "We move quickly because decisions are tight, communication is direct, and the product is focused.",
  },
  {
    icon: LockKeyhole,
    title: "You own the asset",
    text: "The live product, code, and handover notes belong to you. No platform lock-in.",
  },
  {
    icon: Handshake,
    title: "Direct communication",
    text: "You get clear updates, decisive recommendations, and explanations without technical fog.",
  },
  {
    icon: Code2,
    title: "Premium technical base",
    text: "We use reliable modern tools so the product can be maintained, improved, and deployed properly.",
  },
  {
    icon: Rocket,
    title: "Launch is part of the job",
    text: "The work does not stop at screens. We help get the product live and ready to use.",
  },
];

export function TrustProof() {
  return (
    <section className="section border-t border-paper-edge">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Trust"
          title="A product partner built for momentum."
          text="The hardest part is not usually the idea. It is the execution layer: scope, speed, technical decisions, product polish, launch, and ownership."
          kicker="ShipFast Studio gives you the power of a focused product team without the overhead of hiring one."
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
