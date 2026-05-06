import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const included = [
  "Idea shaping and scope document",
  "User flow and screen planning",
  "UX and UI design",
  "Product build and database setup",
  "Deployment and launch support",
  "Full code ownership and handover",
];

export function PricingPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_420px] lg:items-start">
        <SectionHeading
          label="Pricing"
          title="Simple pricing. No surprises."
          text="Every project starts with a clear scope and a fixed price. You will know what is included, what is not included, how long it should take, and what happens after launch."
          kicker="We do not sell vague retainers. We agree on a useful first product and build toward it."
        />
        <Card>
          <CardHeader>
            <p className="text-xs font-light uppercase tracking-widest text-brand">Starting from</p>
            <p className="text-4xl font-light tracking-tight text-foreground">€2,500</p>
            <p className="text-base font-extralight leading-7 text-muted">
              Built for speed, clarity, launch, and ownership.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-extralight text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {showLink ? (
              <Button asChild className="mt-8 w-full">
                <Link href="/pricing">See pricing</Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
