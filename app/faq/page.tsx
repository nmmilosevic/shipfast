import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Do I need to know anything about technology?",
    answer:
      "Not at all. Just explain the problem you want to solve, who it helps, and what you'd like it to do. We handle everything technical from there.",
  },
  {
    question: "What if my idea isn't fully formed yet?",
    answer:
      "That's completely normal. Most ideas arrive rough. Bring what you have — even a few sentences — and we'll help shape it into something concrete.",
  },
  {
    question: "Will I own the product when it's done?",
    answer:
      "Yes. 100%. You get the finished product, the code, and everything you need to keep going. There's no lock-in and no reason to keep paying us after it launches.",
  },
  {
    question: "How long does it take?",
    answer:
      "That depends on what you're building, but most focused products launch in weeks, not months. We'll give you a clear timeline before we start.",
  },
  {
    question: "What does it cost?",
    answer:
      "Projects start from €2,500. The exact price depends on what you need, and you'll know it before anything starts. No surprises.",
  },
  {
    question: "What happens after I send my idea?",
    answer:
      "We read it carefully, reply within 48 hours, and suggest the clearest next step. That might be a few questions, a plan, or a recommendation to simplify things first.",
  },
  {
    question: "Can you improve something I've already started?",
    answer:
      "Yes. If you already have notes, a rough design, a spreadsheet, or a partially built product, we can use that as the starting point.",
  },
  {
    question: "What kinds of things do you build?",
    answer:
      "Client portals, dashboards, booking flows, internal tools, AI-powered tools, document generators, and custom platforms built around specific workflows. If it solves a real problem, we can likely build it.",
  },
  {
    question: "What if I only have a rough budget in mind?",
    answer:
      "That's fine. Tell us what you're working with and we'll shape a scope around it. If the idea needs more investment than expected, we'll explain why before anything starts.",
  },
  {
    question: "Will it look good?",
    answer:
      "Yes. Every product is fully designed before it's built. Premium screens, clear copy, and a polished feel that makes your product look as good as it works.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Plain-language answers for people who want to turn their idea into a real product — no tech knowledge required.",
};

export default function FAQPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="font-heading max-w-4xl text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Questions we get asked a lot.
        </h1>
        <p className="mt-8 max-w-2xl text-base font-extralight leading-8 text-muted">
          If you&apos;re not technical, these answers are written for you. Plain language, no jargon.
        </p>
        <Button asChild className="mt-10" size="lg">
          <Link href="/contact">Ask us anything</Link>
        </Button>
      </section>
      <section className="section border-t border-paper-edge bg-surface-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="paper-panel p-6">
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
