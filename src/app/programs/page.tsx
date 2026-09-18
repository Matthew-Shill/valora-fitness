import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/ui";
import { programs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <>
      <Section className="pt-16 pb-10">
        <Eyebrow>Programs</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl sm:text-6xl">
          Pick the level of support you need right now.
        </h1>
        <p className="mt-5 max-w-xl text-muted leading-relaxed">
          Same method. Different containers. Start with three weeks, commit to
          eight, join the membership, or go 1:1.
        </p>
      </Section>

      <Section className="pb-24">
        <div className="grid gap-8">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={program.href}
              className="group grid overflow-hidden border border-ink/10 bg-paper lg:grid-cols-2"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: program.imagePosition }}
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  {program.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-4xl">{program.name}</h2>
                <p className="mt-2 text-sm tracking-[0.08em] uppercase">
                  {program.price} · {program.duration}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {program.blurb}
                </p>
                <p className="mt-6 text-[11px] tracking-[0.22em] uppercase">
                  {program.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
