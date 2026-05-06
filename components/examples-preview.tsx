import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const examples = [
  {
    title: "Lead tracker for a consultant",
    text: "A simple place to track new leads, follow-ups, and paid work without living inside a spreadsheet.",
    badge: "Client work",
  },
  {
    title: "Invoice tool for freelancers",
    text: "A fast way to create clean invoices from client details, hours, rates, and notes.",
    badge: "Freelance product",
  },
  {
    title: "Booking page for a small business",
    text: "A clear booking flow that lets customers choose a time and receive confirmation.",
    badge: "Booking",
  },
  {
    title: "Client portal for a studio",
    text: "One private space where clients can see files, updates, messages, and next steps.",
    badge: "Portal",
  },
];

export function ExamplesPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Examples" title="Ideas turned into products." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {examples.map((example) => (
            <Card key={example.title} className="bg-surface">
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.text}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>{example.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        {showLink ? (
          <Link
            href="/examples"
            className="mt-8 inline-flex text-sm font-light text-brand transition-colors hover:text-brand-dark"
          >
            View example ideas
          </Link>
        ) : null}
      </div>
    </section>
  );
}
