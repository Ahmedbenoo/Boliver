import { NextResponse } from "next/server";
import { consultationFormSchema } from "@/lib/validations/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = consultationFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Persist to database or send email notification
    return NextResponse.json({
      success: true,
      message: "Consultation request received",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
