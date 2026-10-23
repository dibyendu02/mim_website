import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validation/contactSchema";

// Enquiries are forwarded as JSON to CONTACT_WEBHOOK_URL (e.g. a CRM,
// Zapier/Make hook or an email-sending function). Spec §5.9 requires a
// working inbox: in production, with no destination configured, the request
// fails loudly so the form shows its error state (with the direct email
// address) instead of silently dropping leads. In development it just logs.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: z.flattenError(parsed.error) }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      console.error("CONTACT_WEBHOOK_URL is not configured — enquiry not delivered.");
      return NextResponse.json({ error: "Enquiry destination not configured" }, { status: 503 });
    }
    console.log("New enquiry (dev, not forwarded):", parsed.data);
    return NextResponse.json({ ok: true });
  }

  const forwarded = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString(), source: "website-enquiry" }),
  }).catch(() => null);

  if (!forwarded?.ok) {
    console.error("Enquiry webhook failed:", forwarded?.status ?? "network error");
    return NextResponse.json({ error: "Could not deliver enquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
