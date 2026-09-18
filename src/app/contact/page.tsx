import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

const interestMap: Record<string, string> = {
  ignite: "21-Day Ignite",
  "lift-lab": "Lift Lab",
  studio: "Valora Studio",
  coaching: "Private coaching",
  live: "Live studio class",
  starter: "Free Starter Series",
  apparel: "Studio apparel",
  gear: "Studio gear",
  fuel: "Studio protein",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const params = await searchParams;
  const defaultInterest = params.interest
    ? interestMap[params.interest] ?? params.interest
    : undefined;

  return (
    <Section className="py-16 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl">Let&apos;s find your next step.</h1>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Questions about Valora, which program is right, or how to get
            started? We reply within 48 hours.
          </p>
          <ul className="mt-10 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-moss">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-moss">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-moss"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm defaultInterest={defaultInterest} />
        </div>
      </div>
    </Section>
  );
}
