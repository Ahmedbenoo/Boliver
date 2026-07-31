import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Persist to Supabase or send email notification
    return NextResponse.json({ success: true, message: "Message received" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
