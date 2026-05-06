import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send ShipFast Studio your product build request.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="inline-flex px-3 py-1 text-xs font-light uppercase tracking-widest stamp">Contact</p>
        <h1 className="mt-6 text-5xl font-light tracking-tight text-foreground md:text-7xl">
          Send the build request.
        </h1>
        <p className="mt-8 text-base font-extralight leading-8 text-muted">
          Tell us what needs to exist, who it is for, and why it matters now. We will reply with a practical next step within 48 hours.
        </p>
        <div className="mt-8 space-y-4">
          {[
            "No technical document needed.",
            "48 hour first response.",
            "Scope, price, and build path made clear.",
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
