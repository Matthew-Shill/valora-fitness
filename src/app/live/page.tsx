import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Valora Live",
};

export default function LivePage() {
  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/live.jpg"
          alt="A Valora live strength class"
          fill
          priority
          className="object-cover object-[center_15%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-6xl items-end px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>Virtual studio</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Train live with Valora.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-cream/80">
              {site.live.days} at {site.live.time}. Dumbbells and bands. Your
              first class is free.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>The lineup</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              40 minutes. Real coaching. Real community.
            </h2>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                `Tuesday · Full body · ${site.live.time}`,
                `Thursday · Strength + conditioning · ${site.live.time}`,
                `Saturday · Full body · ${site.live.time}`,
                "Can't make it live? The recording is yours.",
              ].map((item) => (
                <li key={item} className="border-b border-ink/10 pb-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Want the full membership — live classes, daily workouts, mobility,
              and coaching? That lives inside Valora Studio.
            </p>
            <div className="mt-6">
              <Button href="/programs/studio" variant="ghost">
                See Studio
              </Button>
            </div>
          </div>
          <div className="border border-ink bg-paper p-8">
            <Eyebrow>Claim your free class</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl">We&apos;ll save you a spot.</h3>
            <p className="mt-3 mb-8 text-sm text-muted">
              Send your name and email. We will reply with the Zoom link and
              what to have ready.
            </p>
            <LeadForm
              kind="live-class"
              interest="Live studio class"
              cta="Book my free class"
              success="We will reply with the Zoom link, what to have ready, and your class time."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
