import Image from "next/image";
import Link from "next/link";
import { Button, Eyebrow, FramedMark, Section } from "@/components/ui";
import { programs, site, testimonials } from "@/lib/site";

function HeroCopy() {
  return (
    <div className="max-w-xl">
      <Eyebrow>Online strength for busy lives</Eyebrow>
      <h1 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
        Lift heavy.
        <br />
        Eat simply.
        <br />
        Live stronger.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
        {site.tagline} Follow-along workouts, simple nutrition, and a coach who
        gets what your week actually looks like.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/programs/ignite" variant="light">
          Start the 21-day reset
        </Button>
        <Button href="/start" variant="ghost">
          Get free workouts
        </Button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Link
        href="/programs/ignite"
        className="flex items-center justify-center gap-3 bg-moss px-5 py-2.5 text-center text-[11px] tracking-[0.22em] uppercase text-cream"
      >
        <span>21-Day Ignite · Starts any Monday · $29</span>
        <span className="hidden sm:inline">Join now →</span>
      </Link>

      <section className="hero-mobile bg-ink text-cream">
        <Image
          src="/images/hero-mobile.jpg"
          alt="A Valora coach cueing a goblet squat in a home studio"
          width={540}
          height={720}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 pb-14 pt-8 sm:px-8">
          <HeroCopy />
        </div>
      </section>

      <section className="hero-desktop relative min-h-[88vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero.jpg"
          alt="A Valora coach cueing a goblet squat in a home studio"
          fill
          priority
          className="object-cover object-[70%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-12 py-16">
          <HeroCopy />
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Eyebrow>The {site.method} Method</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A plan you can live in.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted leading-relaxed">
            You do not need another extreme reset. You need lifting, a simple
            way to eat, and enough support to actually do it. Open the app. Do
            the workout. Move on with your day.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-3">
          {[
            {
              title: "Fitness",
              copy: "Strength-based workouts in 40 minutes or less. Dumbbells. At home. Coached from start to finish.",
            },
            {
              title: "Nutrition",
              copy: "Real food. Simple habits. No tracking obsession. Eat in a way that supports fat loss and family life.",
            },
            {
              title: "Coaching",
              copy: "A real trainer in your corner — live classes, app coaching, or 1:1 when you want a custom plan.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-cream px-6 py-10 sm:px-8">
              <p className="text-[11px] tracking-[0.28em] uppercase">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/goblet.jpg"
              alt="A coach holding a dumbbell in the Valora studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>Current project</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              21 days. One plan. $29.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              Four follow-along workouts a week, a simple eats guide, and a
              coach walking you through every session. Start any Monday.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-cream/80">
              <li>Upper · Lower · Full body · Conditioning</li>
              <li>30 minutes or less, dumbbells only</li>
              <li>Starts the next Monday after you join</li>
            </ul>
            <div className="mt-8">
              <Button href="/programs/ignite" variant="light">
                I am in
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Ways to train</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Choose your next step.</h2>
          </div>
          <Button href="/programs" variant="ghost">
            View all programs
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={program.href}
              className="group overflow-hidden border border-ink/10 bg-paper"
            >
              <div className="relative aspect-square">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: program.imagePosition }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  {program.eyebrow} · {program.price}
                </p>
                <h3 className="mt-3 font-serif text-3xl">{program.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {program.blurb}
                </p>
                <p className="mt-5 text-[11px] tracking-[0.22em] uppercase">
                  {program.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-10 lg:px-12">
            <FramedMark
              title={site.founder}
              caption="Trainer · Nutrition coach · Founder"
              className="mb-10 max-w-md bg-paper"
            />
            <h2 className="font-serif text-4xl sm:text-5xl">
              12 years of coaching. Zero interest in fluff.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {site.founder} is a certified trainer and nutrition coach who
              built {site.name} for people who are done spinning their wheels.
              Strength first. Food that fits real life. Support that does not
              disappear after week two.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                Meet {site.founder.split(" ")[0]}
              </Button>
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <Image
              src="/images/founder.jpg"
              alt={`${site.founder}, founder of ${site.name}`}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <Eyebrow>Results from real people</Eyebrow>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
          Busy lives. Stronger bodies.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote key={t.name} className="border border-ink/10 bg-paper p-7">
              <p className="font-serif text-xl leading-snug">“{t.quote}”</p>
              <footer className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink text-cream">
        <Image
          src="/images/studio.jpg"
          alt="Strength training in the Valora studio"
          fill
          className="object-cover object-[center_28%] opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
          <Eyebrow>Valora Live</Eyebrow>
          <h2 className="mt-4 max-w-lg font-serif text-4xl sm:text-6xl">
            Train live, {site.live.days}.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
            {site.live.time} on Zoom. Miss it? The recording is yours. Your first
            class is free.
          </p>
          <div className="mt-8">
            <Button href="/live" variant="light">
              Try a class
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
