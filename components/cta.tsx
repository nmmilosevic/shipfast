import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Your idea has been waiting long enough.
          </h2>
          <p className="mt-6 text-base font-extralight leading-8 text-muted">
            Send it to us in plain English — no deck, no technical document, no preparation needed. We&apos;ll read it, figure out the strongest product angle, and get back to you within 48 hours.
          </p>
          <p className="mt-4 text-base font-light leading-8 text-foreground">
            You don&apos;t need to know how to build it. You just need to decide to start.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Send your idea
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
