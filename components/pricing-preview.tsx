import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const included = [
  "A clear plan for your product before we build a single thing",
  "Every screen mapped and designed",
  "Beautiful, premium design",
  "The product built and connected to real data",
  "Getting it live and ready to use",
  "The code is yours — forever",
];

export function PricingPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_420px] lg:items-start">
        <SectionHeading
          title="One price. No surprises."
          text="Before we start, you know exactly what's included, what it costs, and when it launches."
          kicker="No retainers. No hidden extras. Just a focused build, done right, and handed to you."
        />
        <Card>
          <CardHeader>
            <p className="text-xs font-light uppercase tracking-widest text-brand">Starting from</p>
            <p className="font-heading text-4xl font-light tracking-tight text-foreground">€2,500</p>
            <p className="text-base font-extralight leading-7 text-muted">
              Designed, built, launched, and handed over — with everything you need.
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
