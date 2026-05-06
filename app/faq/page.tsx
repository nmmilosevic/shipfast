import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What if my idea is not fully clear yet?",
    answer:
      "That is completely normal. Most people come with a rough idea, a recurring frustration, or a note they wrote months ago. We help shape it into something realistic, useful, and buildable.",
  },
  {
    question: "Do I need to understand the technical side?",
    answer:
      "No. You only need to explain the problem, the person it helps, and what you want the product to do. We translate that into product flows, screens, data, and technical decisions.",
  },
  {
    question: "Will I own the product?",
    answer:
      "Yes. You receive the finished product, the codebase, and handover notes. There is no lock-in and no requirement to keep paying us after launch.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "That depends on the idea, but most products move fastest when the first version is focused. We will tell you what can be built quickly and what should wait.",
  },
  {
    question: "Can you improve an idea I already started?",
    answer:
      "Yes. If you already have notes, designs, spreadsheets, a partial build, or a workflow you use manually, we can use that as the starting point.",
  },
  {
    question: "What happens after I send my idea?",
    answer:
      "We read it, reply within 48 hours, and suggest the clearest next step. That might be a few questions, a product brief, or a recommendation to simplify the idea first.",
  },
  {
    question: "What kind of ideas are best for ShipFast Studio?",
    answer:
      "Focused ideas with a clear user and a clear problem. Client portals, dashboards, internal tools, booking flows, simple AI tools, generators, and niche workflow products are usually a strong fit.",
  },
  {
    question: "Can you help decide what to build first?",
    answer:
      "Yes. That is a major part of the work. We help separate what is essential from what can wait, so the first product has a better chance of being launched and used.",
  },
  {
    question: "Will the product look polished?",
    answer:
      "Yes. The product is designed before it is built. We focus on clear screens, readable copy, trustworthy UI, and workflows that make sense to real users.",
  },
  {
    question: "What if I only have a budget range?",
    answer:
      "That is fine. Share the range and we will shape a scope around what is realistic. If the idea needs more budget than expected, we will explain why before anything starts.",
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
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">FAQ</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Questions before you build.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          Clear answers for the moment before an idea becomes real. If you are not technical, this should still feel understandable.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Ask about your idea</Link>
        </Button>
      </section>
      <section className="section border-t border-paper-edge bg-surface-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="paper-panel rounded-2xl p-6">
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
