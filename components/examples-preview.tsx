import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const examples = [
  {
    title: "Revenue command center",
    text: "A fast private dashboard for leads, follow-ups, deal value, and client status. Built for a consultant who needed sales visibility without spreadsheet chaos.",
    badge: "Revenue ops",
  },
  {
    title: "Premium invoice engine",
    text: "A branded invoice and PDF tool that turns client details, hours, rates, tax, and notes into a clean document ready to send.",
    badge: "Service ops",
  },
  {
    title: "High-conversion booking flow",
    text: "A direct booking product for a service business that needed fewer messages, faster scheduling, and cleaner confirmations.",
    badge: "Booking",
  },
  {
    title: "Executive client portal",
    text: "A premium portal for files, project updates, approvals, and next steps. Built to make a service feel sharper and more trustworthy.",
    badge: "Premium delivery",
  },
];

export function ExamplesPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Examples"
          title="Service ideas turned into product assets."
          text="The strongest products often start as operational pain: repeated work, slow handoffs, unclear client experiences, or missed revenue. We turn that pressure into software."
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
