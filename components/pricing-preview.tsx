import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const included = [
  "Strategic scope and product brief",
  "User flow and screen system",
  "Premium UX and UI design",
  "Product build and database setup",
  "Deployment and launch support",
  "Code ownership and handover",
];

export function PricingPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_420px] lg:items-start">
        <SectionHeading
          label="Pricing"
          title="Premium build. Fixed scope."
          text="Every project starts with a clear scope and a fixed price. You know what is included, how fast we can move, and what the product must do at launch."
          kicker="No vague retainers. No slow agency process. A focused product sprint with ownership at the end."
        />
        <Card>
          <CardHeader>
            <p className="text-xs font-light uppercase tracking-widest text-brand">Starting from</p>
            <p className="text-4xl font-light tracking-tight text-foreground">€2,500</p>
            <p className="text-base font-extralight leading-7 text-muted">
              Built for speed, premium execution, launch, and ownership.
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
