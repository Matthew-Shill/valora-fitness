import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Logo variant="lockup" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Strength, nutrition, and coaching for people who want a body they
            actually want to live in.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-moss">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/programs" className="hover:text-moss">
                All programs
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream/50">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-moss">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-moss">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-moss"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-[11px] tracking-[0.14em] uppercase text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Portfolio concept.
          </p>
          <Link href="/privacy" className="hover:text-cream">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
