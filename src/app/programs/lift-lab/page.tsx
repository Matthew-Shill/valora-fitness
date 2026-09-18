import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lift Lab",
};

export default function LiftLabPage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/dumbbells.jpg"
          alt="Home gym dumbbells used in Lift Lab"
          fill
          priority
          className="object-cover object-right opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <Eyebrow>Next session · 8 weeks</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl">Lift Lab</h1>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              Eight weeks to build strength, lose fat, and finally see your body
              change — without dieting or hours of cardio.
            </p>
            <p className="mt-4 font-serif text-3xl">$129</p>
            <div className="mt-8">
              <Button href="#join" variant="light">
                Start Lift Lab
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              phase: "Weeks 1–4 · Lift",
              copy: "Progressive strength training to shape your body and change how your clothes fit. We are not just burning calories. We are giving your body a reason to change.",
            },
            {
              phase: "Weeks 5–8 · Lean",
              copy: "Turn up the intensity. Keep the foundation, add pace and conditioning, reveal definition.",
            },
            {
              phase: "Nutrition + coaching",
              copy: "Simple fuel — enough protein, meals you can live with, no tracking extremes. Plus a coach in the app so you are never guessing.",
            },
          ].map((item) => (
            <div key={item.phase} className="border-t border-ink/15 pt-6">
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {item.phase}
              </p>
              <p className="mt-4 text-sm leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-10">
            <Eyebrow>Inside the eight weeks</Eyebrow>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "4 follow-along workouts each week, 40 minutes or less",
                "A simple protein-first eating framework",
                "Coaching and accountability in the app",
                "Progress tracking for workouts and weights",
                "Bonus: start-now workouts the moment you join",
              ].map((item) => (
                <li key={item} className="border-b border-white/10 pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[420px]">
            <Image
              src="/images/bands.jpg"
              alt="Resistance band training from Lift Lab"
              fill
              className="object-cover object-[center_5%]"
            />
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(1, 4).map((t) => (
            <blockquote key={t.name} className="border border-ink/10 bg-paper p-7">
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
            <Eyebrow>Limited-time pricing</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">Start Lift Lab · $129</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Join now and get immediate access to start-now workouts while you
              wait for the next session.
            </p>
          </div>
          <LeadForm
            kind="lift-lab"
            interest="Lift Lab"
            cta="Reserve my spot — $129"
            success="We will send checkout. Join now and you will get start-now workouts while you wait for the next session."
          />
        </div>
        <div className="mt-16">
          <Faq items={faqs.general} />
        </div>
      </Section>
    </>
  );
}
