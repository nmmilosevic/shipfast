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
        <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">Contact</p>
        <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Tell us what you want to build.
        </h1>
        <p className="mt-8 text-base font-extralight leading-8 text-muted">
          Even a simple message is enough to get started. Tell us what is in your head, what problem keeps coming back, or what product you wish already existed.
        </p>
        <div className="mt-8 space-y-4">
          {[
            "You can write casually. No technical document needed.",
            "We reply within 48 hours with a practical next step.",
            "If the idea needs simplifying, we will help you shape it.",
          ].map((item) => (
            <div key={item} className="inset-panel rounded-xl p-4 text-sm font-light leading-6 text-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="paper-panel rounded-2xl p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
