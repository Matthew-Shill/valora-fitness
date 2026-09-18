import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Coaching",
};

export default function CoachingPage() {
  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/fuel.jpg"
          alt="Preparing a simple protein smoothie"
          fill
          priority
          className="object-cover object-[center_8%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <Eyebrow>12 weeks · 1:1</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Change how you eat, train, and recover.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-cream/80">
              Custom coaching for people who are done with the same 10 pounds
              and the same Monday restart.
            </p>
            <p className="mt-4 font-serif text-3xl">$1,800</p>
            <div className="mt-8">
              <Button href="#call" variant="light">
                Book a free discovery call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Cut the food noise. Keep the dinner out.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {site.founder} helps you eat in a way that fuels your body and
              your actual life — takeout, travel, and cake included. You will
              know what to eat without a separate plan for everyone else.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              "Boost metabolism so it works for you",
              "Lose body fat, not just scale weight",
              "Break the gain-and-lose loop",
              "Personalized meal ideas that fit your life",
              "Weekly guidance plus unlimited messaging",
              "Sleep, stress, hydration, and training alignment",
            ].map((item) => (
              <li key={item} className="border-b border-ink/10 pb-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-3xl leading-snug sm:text-4xl">
              “{testimonials[5].quote}”
            </p>
            <footer className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted">
              {testimonials[5].name} · {testimonials[5].role}
            </footer>
          </blockquote>
        </div>
      </section>

      <Section id="call" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Discovery call</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Let&apos;s see if private coaching is the right fit.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              This is 12 weeks of close work, so we start with a conversation.
              Tell us what you need. If you already know you are ready, say so
              in the message.
            </p>
          </div>
          <ContactForm defaultInterest="Private coaching" />
        </div>
        <div className="mt-16">
          <Faq items={faqs.coaching} />
        </div>
      </Section>
    </>
  );
}
