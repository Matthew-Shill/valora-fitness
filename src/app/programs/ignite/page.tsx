import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "21-Day Ignite",
};

const included = [
  {
    title: "4 follow-along workouts each week",
    detail: "Upper body, lower body, full body, conditioning. All 30 minutes or less.",
  },
  {
    title: "A coach in every session",
    detail: "No exercise lists. Press play and train from start to finish.",
  },
  {
    title: "The Ignite Eats Guide",
    detail: "Simple breakfasts, lunches, and dinners — so eating well is easier for 21 days.",
  },
  {
    title: "Your plan, in one place",
    detail: "Open the app. See the day. Press play. Get it done.",
  },
];

export default function IgnitePage() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero.jpg"
          alt="Coaching a squat during the 21-Day Ignite program"
          fill
          priority
          className="object-cover object-[75%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <Eyebrow>Starts any Monday</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
              21-Day Ignite
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-cream/75 sm:text-base">
              You don&apos;t need another extreme reset. You need to get back to
              the things that actually change your body — consistently.
            </p>
            <p className="mt-4 font-serif text-3xl">$29</p>
            <div className="mt-8">
              <Button href="#join" variant="light">
                I&apos;m in — 21 days for $29
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {included.map((item) => (
            <div key={item.title} className="border-t border-ink/15 pt-6">
              <h2 className="font-serif text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/squat.jpg"
              alt="Follow-along strength workout"
              fill
              className="object-cover object-[center_22%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10">
            <Eyebrow>This is for you if</Eyebrow>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed">
              {[
                "Your routine slipped and you want it back",
                "You want to lose the weight that crept on",
                "You've saved a million workouts and still aren't doing them",
                "You want to feel leaner, stronger, and better in your clothes",
                "You know what to do — you just aren't doing it",
              ].map((line) => (
                <li key={line} className="border-b border-ink/10 pb-3">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-2xl">
              Give me 21 days. I&apos;ll give you the plan.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <Eyebrow>What people are saying</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.slice(4, 6).concat(testimonials.slice(1, 2)).map((t) => (
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
            <Eyebrow>Reserve your spot</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">Join Ignite for $29.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Drop your name and email. We will send checkout and app access so
              you are ready for the next Monday. Dumbbells only.
            </p>
          </div>
          <LeadForm
            kind="ignite"
            interest="21-Day Ignite"
            cta="Join the project — $29"
            success="We will send checkout and app access so you are ready for the next Monday."
          />
        </div>
        <div className="mt-16">
          <Faq items={faqs.general} />
        </div>
      </Section>
    </>
  );
}
