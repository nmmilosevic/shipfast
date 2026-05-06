import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  {
    title: "Founders",
    text: "You have a startup idea and want to finally launch it.",
  },
  {
    title: "Freelancers",
    text: "Turn your expertise into a product people can use.",
  },
  {
    title: "Business owners",
    text: "Build a tool that saves time, automates work, or helps your clients.",
  },
  {
    title: "Creative people",
    text: "You have the vision. We help you build it.",
  },
];

export function BuiltFor() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Built for"
          title="For people with ideas."
          text="You do not need to know how to code to build something valuable."
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
