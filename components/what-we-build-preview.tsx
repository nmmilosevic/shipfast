import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const productTypes = [
  "Client portals",
  "AI tools",
  "Dashboards",
  "Booking apps",
  "Internal tools",
  "Automation tools",
  "Custom platforms",
  "PDF generators",
];

export function WhatWeBuildPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="What we build"
          title="Ideas we can bring to life."
          text="Small, focused digital products built around a real problem."
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
