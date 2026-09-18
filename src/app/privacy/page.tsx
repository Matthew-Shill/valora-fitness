import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Section className="py-16 lg:py-24">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 font-serif text-5xl">Privacy</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-sm leading-relaxed text-muted">
        <p>
          {site.legalName} collects the name, email, phone, and message you
          submit through this site so we can reply, send program details, and
          deliver free workouts you request.
        </p>
        <p>
          We do not sell your information. Forms are stored for follow-up and,
          when email delivery is configured, forwarded to {site.email}. This
          site is a portfolio concept and does not process live payments.
        </p>
        <p>
          Workouts and nutrition coaching are educational and not medical advice.
          Check with your physician before starting a new training program.
        </p>
        <p>
          Questions:{" "}
          <a href={site.emailHref} className="text-ink underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
