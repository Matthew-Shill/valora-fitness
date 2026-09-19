"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 text-cream"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — ${site.tagline}`}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.22em] uppercase transition-opacity ${
                  active ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/programs/ignite"
            className="border border-cream px-4 py-2 text-[11px] tracking-[0.22em] uppercase hover:bg-cream hover:text-ink"
          >
            Start Ignite
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-[11px] tracking-[0.22em] uppercase"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/15 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/programs/ignite"
              onClick={() => setOpen(false)}
              className="mt-2 border border-cream px-4 py-3 text-center text-[11px] tracking-[0.22em] uppercase"
            >
              Start Ignite · $29
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
