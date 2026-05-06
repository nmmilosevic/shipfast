import Link from "next/link";

import { LogoMark } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-paper-edge bg-surface-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center text-foreground" aria-label="ShipFast Studio home">
              <LogoMark className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-base font-extralight leading-7 text-muted">
              We turn ideas into real, working products — without you needing a technical team, a developer, or months of waiting.
            </p>
            <p className="mt-4 text-sm font-light leading-6 text-foreground">
              One studio. Everything handled. Fully yours at the end.
            </p>
          </div>
          <div className="space-y-3 text-base font-extralight text-muted">
            <a href="mailto:hello@shipfast.studio" className="block transition-colors hover:text-foreground">
              hello@shipfast.studio
            </a>
            <p>Reply in 48 hours.</p>
            <p>Clear price. Real product.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm font-extralight text-muted">
          © 2026 ShipFast Studio
        </div>
      </div>
    </footer>
  );
}
