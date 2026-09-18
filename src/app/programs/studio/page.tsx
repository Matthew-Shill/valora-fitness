import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Valora Studio",
};

const includes = [
  { name: "Five tailored workouts per week", value: "Progressive strength plus metabolic work" },
  { name: "Live Zoom classes", value: `${site.live.days} · ${site.live.time}` },
  { name: "Weekly mobility", value: "Recovery, joints, and range that lasts" },
  { name: "App access", value: "The day's workout, community, and coaching" },
  { name: "Conditioning library", value: "On-demand whenever you need it" },
  { name: "Studio milestones", value: "Progress, celebrated" },
];

export default function StudioPage() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/studio.jpg"
          alt="Strength training in the Valora studio"
          fill
          priority
          className="object-cover object-[center_12%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-end px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>Membership</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl">Valora Studio</h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80">
              Your all-in strength practice. Daily workouts, live coaching, and a
              plan for people who are done starting over.
            </p>
            <p className="mt-6 text-[11px] tracking-[0.22em] uppercase">
              $89 / month · $239 / quarter · $849 / year
            </p>
            <div className="mt-8">
              <Button href="#join" variant="light">
                Join Studio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="max-w-2xl">
          <Eyebrow>Muscle is your long game</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            After 35, you are either building it — or losing it.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Muscle is metabolism, strength, and longevity. Studio is the daily
            deposit: the {site.method} Method, live coaching, and a plan that
            will not let you ghost yourself.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2">
          {includes.map((item) => (
            <div key={item.name} className="bg-cream px-6 py-8">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm text-muted">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Optional add-on: Fat Loss Pod · $99
        </p>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image
              src="/images/live.jpg"
              alt="A Valora live class"
              fill
              className="object-cover object-[center_12%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              One app. One workout. One habit.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Open the app. Get to work. From start to done in 40 minutes or
              less. No Googling, no piecing together random videos, no wondering
              what to do on Thursday.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <blockquote key={t.quote} className="border border-ink/10 bg-paper p-7">
              <p className="font-serif text-xl leading-snug">“{t.quote}”</p>
              <footer className="mt-5 text-[11px] tracking-[0.18em] uppercase text-muted">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="join" className="pb-24">
        <div className="grid gap-12 border border-ink bg-paper p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Enroll</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">Workouts start immediately.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Share your email and we will send checkout. Choose monthly,
              quarterly, or annual once you are in.
            </p>
          </div>
          <LeadForm
            kind="studio"
            interest="Valora Studio"
            cta="Start enrollment"
            success="We will send checkout. Choose monthly, quarterly, or annual once you are in — workouts start immediately."
          />
        </div>
        <div className="mt-16">
          <Faq items={[...faqs.general, ...faqs.studio]} />
        </div>
      </Section>
    </>
  );
}
