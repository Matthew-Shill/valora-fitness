"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea" | "select";
  defaultValue?: string;
  children?: React.ReactNode;
}) {
  const cls =
    "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink";

  return (
    <label className="block text-[11px] tracking-[0.22em] uppercase">
      {label}
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : as === "select" ? (
        <select
          name={name}
          required={required}
          className={cls}
          defaultValue={defaultValue ?? ""}
        >
          {children}
        </select>
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

async function submit(form: HTMLFormElement) {
  const body = Object.fromEntries(new FormData(form).entries());
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Request failed");
}

function Success({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-ink bg-paper px-6 py-8 text-center">
      <p className="font-serif text-2xl">You are in.</p>
      <p className="mt-3 text-sm text-muted">{children}</p>
    </div>
  );
}

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "ok") {
    return (
      <Success>
        The Valora team will be in touch within 48 hours. If you need us sooner,
        call or email anytime.
      </Success>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
          await submit(e.currentTarget);
          setStatus("ok");
        } catch {
          setStatus("error");
        }
      }}
    >
      <input type="hidden" name="kind" value="contact" />
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <Field
        label="I am interested in"
        name="interest"
        as="select"
        required
        defaultValue={defaultInterest}
      >
        <option value="" disabled>
          Choose one
        </option>
        {[
          "21-Day Ignite",
          "Lift Lab",
          "Valora Studio",
          "Private coaching",
          "Live studio class",
          "Free Starter Series",
          "Studio gear",
          "Studio apparel",
          "Something else",
        ].map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Field>
      <Field label="Message" name="message" as="textarea" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-ink bg-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase text-cream hover:bg-moss hover:border-moss disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-copper">
          Something went wrong. Email us directly and we will take it from there.
        </p>
      ) : null}
    </form>
  );
}

export function LeadForm({
  kind,
  cta,
  interest,
  success,
}: {
  kind: string;
  cta: string;
  interest: string;
  success?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "ok") {
    return (
      <Success>
        {success ??
          "We will follow up shortly with next steps. If you need us sooner, email or call anytime."}
      </Success>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
          await submit(e.currentTarget);
          setStatus("ok");
        } catch {
          setStatus("error");
        }
      }}
    >
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="interest" value={interest} />
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-ink bg-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase text-cream hover:bg-moss hover:border-moss disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : cta}
      </button>
      {status === "error" ? (
        <p className="text-sm text-copper">
          Something went wrong. Try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}
