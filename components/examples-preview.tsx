import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const examples = [
  {
    title: "Lead tracker for a consultant",
    text: "A private dashboard for a consultant who was losing track of warm leads across email, notes, and spreadsheets. The product shows who needs a reply, what each opportunity is worth, and what happened last.",
    badge: "Sales workflow",
  },
  {
    title: "Invoice tool for freelancers",
    text: "A clean invoice generator for freelancers who want branded PDFs without rebuilding the same document every month. Client details, hours, rates, tax, and notes become a ready-to-send invoice.",
    badge: "Freelance ops",
  },
  {
    title: "Booking page for a small business",
    text: "A booking product for a small business that needed fewer back-and-forth messages. Customers choose a slot, receive the details, and the owner gets a clear schedule.",
    badge: "Booking",
  },
  {
    title: "Client portal for a studio",
    text: "A private portal that gives clients one calm place for files, project updates, approvals, and next steps. Less chasing. Fewer lost messages. More trust.",
    badge: "Client trust",
  },
];

export function ExamplesPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Examples"
          title="Ideas turned into products."
          text="Most useful products start as a small annoyance someone understands deeply. We help turn that insight into a tool that feels clear from the first click."
        />
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
