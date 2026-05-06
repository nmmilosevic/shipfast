import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Have an idea you want to build?
          </h2>
          <p className="mt-6 text-base font-extralight leading-8 text-muted">
            Send it in one message. We will reply with a clear next step.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Share your idea
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
