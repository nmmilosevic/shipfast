import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/what-we-build", label: "What we build" },
  { href: "/pricing", label: "Pricing" },
  { href: "/examples", label: "Examples" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="text-base font-normal tracking-tight" aria-label="ShipFast Studio home">
          ShipFast <span className="text-brand">Studio</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-extralight text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm">
          <Link href="/contact">
            <span className="hidden sm:inline">Bring my idea to life</span>
            <span className="sm:hidden">Share idea</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
