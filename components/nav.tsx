import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/how-it-works", label: "The process" },
  { href: "/what-we-build", label: "What's possible" },
  { href: "/pricing", label: "What it costs" },
  { href: "/examples", label: "Our work" },
  { href: "/faq", label: "Questions" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="inline-flex items-center text-foreground" aria-label="Buildwise home">
          <LogoMark className="text-xl sm:text-2xl" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-light text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm">
          <Link href="/contact">
            <span className="hidden sm:inline">Let&apos;s build it</span>
            <span className="sm:hidden">Start</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
