import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-5xl">
        <p className="text-xs font-light uppercase tracking-widest text-brand">Bring your idea to life</p>
        <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Your idea deserves to exist.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted md:text-lg">
          You bring the idea. We design it, build it, launch it, and make it real.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Bring my idea to life
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/how-it-works">See how it works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
