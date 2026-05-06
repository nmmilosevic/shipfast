import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const productTypes = [
  "Client portals for premium service delivery",
  "AI tools that compress manual work",
  "Dashboards for revenue and operations",
  "Booking flows that remove back-and-forth",
  "Internal tools for repeatable execution",
  "Automation systems for handoffs",
  "Custom platforms for niche workflows",
  "Proposal and report generators",
];

export function WhatWeBuildPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="What we build"
          title="Powerful products with one sharp job."
          text="We build focused digital products that create leverage: tools that save time, sell a service, manage clients, automate workflows, or unlock a new offer."
          kicker="The first version should feel fast, premium, and immediately useful."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productTypes.map((type) => (
            <Card key={type}>
              <CardHeader>
                <CardTitle>{type}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        {showLink ? (
          <Link
            href="/what-we-build"
            className="mt-8 inline-flex text-sm font-light text-brand transition-colors hover:text-brand-dark"
          >
            See what we can build
          </Link>
        ) : null}
      </div>
    </section>
  );
}
