import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";

// PLACEHOLDER — forwards nowhere yet. Swap this handler to call
// Resend/SendGrid/CRM once MiM specifies where leads should land; the
// validated payload shape (ContactFormValues) won't need to change.
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  console.log("New contact submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
