import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  {
    title: "You're a founder",
    text: "You want to turn your idea into a real product without hiring a full team or waiting months.",
  },
  {
    title: "You're a freelancer or consultant",
    text: "You want to package your expertise into software that works for you even when you're not working.",
  },
  {
    title: "You run a business",
    text: "You need a tool that saves your team hours every week — built exactly for how you work.",
  },
  {
    title: "You see a problem no one has solved",
    text: "You've spotted something that software could fix. You just need someone who can build it properly.",
  },
];

export function BuiltFor() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="This is for you — if you have an idea worth building."
          text="You don't need to be technical. You don't need a big team. You just need an idea you believe in and the decision to start."
          kicker="If you've been waiting because you didn't know how to start — this is exactly how you start."
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
