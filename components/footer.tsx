import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-paper-edge bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="text-base font-normal tracking-tight">
              ShipFast <span className="text-gold">Studio</span>
            </Link>
            <p className="mt-4 text-base font-extralight leading-7 text-muted">
              We help people turn the idea they keep thinking about into a product they can show, use, sell, and own.
            </p>
            <p className="mt-4 text-sm font-light leading-6 text-foreground">
              Product strategy, UX, build, launch, and handover for non-technical founders and operators.
            </p>
          </div>
          <div className="space-y-3 text-base font-extralight text-muted">
            <a href="mailto:hello@shipfast.studio" className="block transition-colors hover:text-foreground">
              hello@shipfast.studio
            </a>
            <p>Reply within 48 hours.</p>
            <p>Fixed scope before work starts.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm font-extralight text-muted">
          © 2026 ShipFast Studio
        </div>
      </div>
    </footer>
  );
}
