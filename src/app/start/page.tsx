import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/Forms";
import { Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Free Starter Series",
};

export default function StartPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid min-h-[80vh] max-w-6xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
            <Eyebrow>Free for busy weeks</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Starter Series
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
              Two weeks of dumbbell workouts you can do anywhere. A calendar,
              follow-along videos, and form demos — 30 minutes or less.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              <li>10 workouts in a simple plan</li>
              <li>Follow-along videos with a Valora coach</li>
              <li>One set of dumbbells. No gym.</li>
            </ul>
          </div>
          <div className="relative min-h-[420px]">
            <Image
              src="/images/curl.jpg"
              alt="Demonstrating a starter series workout"
              fill
              className="object-cover object-[center_12%]"
              priority
            />
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Get it in your inbox</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Stop saving workouts. Start doing them.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              After years of coaching busy people, we kept hearing the same
              thing: I know I should work out. I just can&apos;t find the time.
              The Starter Series gives the time back — in, out, every body part
              in a week.
            </p>
          </div>
          <div className="border border-ink bg-paper p-8">
            <LeadForm
              kind="starter"
              interest="Free Starter Series"
              cta="Send me the free workouts"
              success="We will send the Starter Series to this email. Check promotions if it does not land in the inbox."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
