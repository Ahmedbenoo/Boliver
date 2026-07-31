import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path } = await request.json();

  if (typeof path === "string") {
    revalidatePath(path);
  } else {
    revalidatePath("/");
  }

  return NextResponse.json({ revalidated: true });
}
