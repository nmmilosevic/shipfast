import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What if my idea is not fully clear yet?",
    answer:
      "That is completely normal. Most people come with a rough idea. We help shape it into something realistic and useful.",
  },
  {
    question: "Do I need to understand the technical side?",
    answer:
      "No. You only need to explain the problem, the person it helps, and what you want the product to do.",
  },
  {
    question: "Will I own the product?",
    answer:
      "Yes. You receive the finished product and the codebase. There is no lock-in.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "That depends on the idea, but we keep the first version focused so it can move quickly.",
  },
  {
    question: "Can you improve an idea I already started?",
    answer:
      "Yes. If you already have notes, designs, or a partial build, we can use that as the starting point.",
  },
  {
    question: "What happens after I send my idea?",
    answer:
      "We read it, reply within 48 hours, and suggest the clearest next step.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers for people who want to turn a rough product idea into something real.",
};

export default function FAQPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-light uppercase tracking-widest text-brand">FAQ</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Questions before you build.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          Clear answers for the moment before an idea becomes real.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Ask about your idea</Link>
        </Button>
      </section>
      <section className="section border-t border-border bg-surface-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-xl font-normal">{faq.question}</h2>
                <p className="mt-4 text-base font-extralight leading-7 text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
