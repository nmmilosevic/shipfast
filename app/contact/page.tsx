import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell ShipFast Studio what you want to build.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs font-light uppercase tracking-widest text-brand">Contact</p>
        <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Tell us what you want to build.
        </h1>
        <p className="mt-8 text-base font-extralight leading-8 text-muted">
          Even a simple message is enough to get started.
        </p>
      </div>
      <div className="rounded-2xl border border-border p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
