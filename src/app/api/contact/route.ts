import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Payload = {
  kind?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!body.email || !body.firstName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const entry = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "inquiries.json");
  await mkdir(dir, { recursive: true });

  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
  } catch {
    existing = [];
  }
  existing.push(entry);
  await writeFile(file, JSON.stringify(existing, null, 2));

  const key = process.env.RESEND_API_KEY;
  if (key) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Valora Fitness <noreply@valora.fit>",
        to: [site.email],
        subject: `New ${body.kind ?? "inquiry"}: ${body.firstName} — ${body.interest ?? ""}`,
        text: JSON.stringify(entry, null, 2),
      }),
    });
  }

  return NextResponse.json({ ok: true });
}
