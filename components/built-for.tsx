import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  {
    title: "Founders",
    text: "You have an idea that keeps coming back, and you want to see if it can become a real product without hiring a team first.",
  },
  {
    title: "Freelancers",
    text: "You repeat the same advice, process, or deliverable for clients. We help turn that expertise into a tool people can use.",
  },
  {
    title: "Business owners",
    text: "You know where time is being wasted. We help build a portal, dashboard, or workflow tool around that real operational pain.",
  },
  {
    title: "Creative people",
    text: "You can picture how it should feel, but need someone technical to turn the vision into a working product.",
  },
];

export function BuiltFor() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Built for"
          title="For people with ideas."
          text="You do not need to know how to code to build something valuable. You need a clear problem, a useful direction, and a technical partner who can translate it into a product."
          kicker="If you can explain the problem in human terms, we can help turn it into screens, flows, data, and a working launch."
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
