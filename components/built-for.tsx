import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  {
    title: "Founders",
    text: "You need to validate or launch a product without waiting months to recruit a technical team.",
  },
  {
    title: "Freelancers",
    text: "You want to turn a service, method, or repeatable client workflow into software people can use.",
  },
  {
    title: "Business owners",
    text: "You need a powerful internal tool, portal, dashboard, or automation that removes operational drag.",
  },
  {
    title: "Operators",
    text: "You see the process breaking every week and want a tool that fixes it with speed and authority.",
  },
];

export function BuiltFor() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Built for"
          title="For people who need execution."
          text="You do not need to know how to code. You need a clear problem, commercial urgency, and a technical studio that can turn it into a strong product."
          kicker="If the idea matters enough to stop delaying, it is ready for a serious build conversation."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <Card key={audience.title}>
              <CardHeader>
                <CardTitle>{audience.title}</CardTitle>
                <CardDescription>{audience.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
