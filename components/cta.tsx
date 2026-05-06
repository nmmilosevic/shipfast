import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Stop carrying the idea alone.
          </h2>
          <p className="mt-6 text-base font-extralight leading-8 text-muted">
            Send the rough version. We will read it carefully, ask the right questions, and reply with a practical next step within 48 hours.
          </p>
          <p className="mt-4 text-base font-light leading-8 text-foreground">
            You do not need to know the features, tech stack, or database. Start with the problem and the product you wish existed.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Start a product brief
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
