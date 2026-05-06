import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="text-base font-normal tracking-tight">
              ShipFast <span className="text-brand">Studio</span>
            </Link>
            <p className="mt-4 text-base font-extralight leading-7 text-muted">
              We help people turn the idea in their head into a real product.
            </p>
          </div>
          <a
            href="mailto:hello@shipfast.studio"
            className="text-base font-extralight text-muted transition-colors hover:text-foreground"
          >
            hello@shipfast.studio
          </a>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm font-extralight text-muted">
          © 2026 ShipFast Studio
        </div>
      </div>
    </footer>
  );
}
