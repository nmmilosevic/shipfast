import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const productTypes = [
  "Client portals that replace scattered emails",
  "AI tools with one clear job",
  "Dashboards for decisions and follow-up",
  "Booking apps with simple confirmations",
  "Internal tools for repeated work",
  "Automation tools for manual handoffs",
  "Custom platforms for niche workflows",
  "PDF generators for proposals and reports",
];

export function WhatWeBuildPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="What we build"
          title="Ideas we can bring to life."
          text="Small, focused digital products built around a real problem. The goal is not to build everything you can imagine. The goal is to build the version people can understand, use, and trust."
          kicker="A good first product should feel obvious once it exists."
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
