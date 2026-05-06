import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A fast premium process for turning your product idea into a live build.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">How it works</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Fast execution needs a clear command.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          You do not need a finished plan. You need a fast way to define the strongest version, lock the scope, and move into build.
        </p>
        <p className="mt-5 max-w-3xl text-base font-light leading-8 text-foreground">
          We work like a focused product unit: strategy, UX, build, launch, and handover in one premium service.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Start the sprint</Link>
        </Button>
      </section>
      <HowItWorks showLink={false} />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
            What happens after you send the request.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["First response", "We read the request and identify the strongest product angle, risks, and next step. No generic sales script."],
              ["Sprint brief", "We define the user, problem, screens, first features, timeline, and fixed project price."],
              ["Build rhythm", "You get visible progress, working previews, and direct decisions until the product is ready to launch."],
            ].map(([title, text]) => (
              <div key={title} className="paper-panel rounded-2xl p-6">
                <h3 className="text-xl font-normal">{title}</h3>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
