import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const productTypes = [
  "A portal where your clients log in, see updates, and download files",
  "A smart tool that handles the repetitive work you do every day",
  "A dashboard that shows you exactly what's happening in your business",
  "A booking system that fills your calendar without the endless back-and-forth",
  "An internal tool your team will actually want to use every day",
  "Automations that keep work moving without anyone having to touch it",
  "A custom platform built exactly around your way of working",
  "A tool that generates proposals, contracts, or reports in seconds",
];

export function WhatWeBuildPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Some ideas of what we can build for you."
          text="Every product is different — but they all do one thing: solve a real problem that's costing time, money, or opportunity."
          kicker="If it doesn't exist yet but it should, we're the right team to build it."
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
