import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const examples = [
  {
    title: "Revenue command center",
    text: "A private dashboard built for a consultant drowning in spreadsheets. Leads, follow-ups, deal values, and client status — all in one place.",
    badge: "Revenue ops",
  },
  {
    title: "Premium invoice engine",
    text: "A branded invoicing tool that turns client info into a polished, ready-to-send PDF in seconds. No more copy-paste formatting.",
    badge: "Service ops",
  },
  {
    title: "High-conversion booking flow",
    text: "A booking system built for a service business tired of endless message chains. Clients book, confirm, and pay — without the friction.",
    badge: "Booking",
  },
  {
    title: "Executive client portal",
    text: "A private login portal for files, project updates, and approvals — built to make the service look as good as it actually is.",
    badge: "Premium delivery",
  },
];

export function ExamplesPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Ideas we've turned into real products."
          text="These started as problems, repeated tasks, or things someone said 'we really should have a tool for that.' Here's what they became."
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
