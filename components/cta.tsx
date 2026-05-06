import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Ready to move fast?
          </h2>
          <p className="mt-6 text-base font-extralight leading-8 text-muted">
            Send the idea. We will read it, identify the strongest product angle, and reply with a practical next step within 48 hours.
          </p>
          <p className="mt-4 text-base font-light leading-8 text-foreground">
            You do not need a technical plan. Bring the pressure, the opportunity, and the product you want to see live.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Build fast
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
