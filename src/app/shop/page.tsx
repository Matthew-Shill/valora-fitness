import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Eyebrow, Section } from "@/components/ui";
import { shop } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recommended Gear",
  description:
    "The dumbbells, bands, and protein we recommend for Valora workouts at home.",
};

function ProductLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function ShopPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/dumbbells.jpg"
          alt="Dumbbells in a home studio"
          fill
          priority
          className="object-cover object-[center_40%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>Recommended</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
              What we actually use.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
              You do not need a fancy gym. Dumbbells, bands, and enough protein
              to recover. These are the pieces that show up in Valora workouts.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Two things. That is the gym.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted leading-relaxed">
            Every Valora workout is built around dumbbells and resistance bands.
            If you are just getting set up, start here. Everything else is
            optional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {shop.essentials.map((item) => (
            <ProductLink
              key={item.name}
              href={item.href}
              className="group overflow-hidden border border-ink/10 bg-paper"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: item.imagePosition }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  {item.spec}
                </p>
                <h3 className="mt-3 font-serif text-3xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
                <p className="mt-5 text-[11px] tracking-[0.22em] uppercase">
                  {item.cta} →
                </p>
              </div>
            </ProductLink>
          ))}
        </div>
      </Section>

      <Section className="pb-20 lg:pb-28">
        <Eyebrow>Build it out</Eyebrow>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
          When you are ready to level up.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shop.gear.map((item) => (
            <ProductLink
              key={item.name}
              href={item.href}
              className="flex flex-col border border-ink/10 bg-paper p-7 transition-colors hover:border-ink"
            >
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {item.spec}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{item.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.blurb}
              </p>
              <p className="mt-5 text-[11px] tracking-[0.22em] uppercase">
                Ask about this →
              </p>
            </ProductLink>
          ))}
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/fuel.jpg"
              alt="A simple protein smoothie"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>Protein</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Hit the number without overthinking it.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Food first. Powder when life is loud. Ask us which option fits
              how you already eat.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {shop.protein.map((item) => (
            <ProductLink
              key={item.name}
              href={item.href}
              className="border border-ink/10 bg-paper p-7 transition-colors hover:border-ink"
            >
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {item.spec}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.blurb}
              </p>
              <p className="mt-5 text-[11px] tracking-[0.22em] uppercase">
                Ask about {item.name} →
              </p>
            </ProductLink>
          ))}
        </div>
      </Section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
          <Eyebrow>Apparel</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
            Studio merch is coming next.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/75">
            Hats, tanks, and milestone pieces will live in a dedicated shop.
            Need something now? Send a note.
          </p>
          <div className="mt-8">
            <Button href="/contact?interest=apparel" variant="light">
              Ask about apparel
            </Button>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <p className="max-w-2xl text-xs leading-relaxed text-muted">
          {shop.disclosure}
        </p>
      </Section>
    </>
  );
}
