import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your idea with us. Tell us what you want to exist — we'll get back to you within 48 hours with a clear next step. No tech knowledge required.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h1 className="font-heading text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Share your idea with us.
        </h1>
        <p className="mt-8 text-base font-extralight leading-8 text-muted">
          Tell us what you want to exist, who it&apos;s for, and why it matters. We&apos;ll get back to you within 48 hours with a clear next step.
        </p>
        <div className="mt-8 space-y-4">
          {[
            "No technical document needed.",
            "Reply in 48 hours.",
            "We'll explain the next step clearly.",
          ].map((item) => (
            <div key={item} className="inset-panel p-4 text-sm font-light leading-6 text-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="paper-panel p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
