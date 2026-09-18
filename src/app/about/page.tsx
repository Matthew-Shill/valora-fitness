import type { Metadata } from "next";
import Image from "next/image";
import { Button, Eyebrow, FramedMark, Section } from "@/components/ui";
import { methodPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${site.founder}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/founder.jpg"
          alt={site.founder}
          fill
          priority
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
              Hey, I&apos;m {site.founder.split(" ")[0]}.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
              Trainer. Nutrition coach. Creator of the {site.method} Method.
              I built {site.name} for people who want a stronger body without
              giving their whole week to the gym.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FramedMark
              title="The short version"
              caption="Since 2014"
              className="bg-cream"
            />
          </div>
          <div className="lg:col-span-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              I have been coaching since 2014 — first in crowded group rooms,
              then 1:1 between client sessions and late dinners. I tried the
              same shiny trends everyone else did: more cardio, more classes,
              more rules.
            </p>
            <p>
              My body never looked or felt the way I wanted until I pulled back
              on the chaos, lifted heavy, and simplified how I eat. That became
              the {site.method} Method: resistance, intention, support, and
              everyday recovery.
            </p>
            <p>
              {site.name} started as a small live studio and grew into an
              online practice because the plan traveled. Same coaching. Same
              progressive strength. Wherever you actually live.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image
              src="/images/curl.jpg"
              alt={`${site.founder} training with dumbbells`}
              fill
              className="object-cover object-[center_15%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>What I believe</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Fitness should fit your life — not take it over.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              You don&apos;t need hours in the gym, perfect meals, or six
              workouts a week. You need structure, simplicity, support, and a
              coach who actually gets midlife, work, family, and overwhelm.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We still go out to dinner. We still eat the cake. And we still
              get stronger, because the plan was built for a real week.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <Eyebrow>The {site.method} Method</Eyebrow>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
          Lean. Strong. Sustainable.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {methodPillars.map((pillar, i) => (
            <div key={pillar.name} className="border-t border-ink/20 pt-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-muted">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl font-serif text-2xl">
          Let this be the last program you bounce between.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/programs">See programs</Button>
          <Button href="/start" variant="ghost">
            Try the free series
          </Button>
        </div>
      </Section>
    </>
  );
}
