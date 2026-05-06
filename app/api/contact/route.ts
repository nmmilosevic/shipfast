import { NextResponse } from "next/server";

import { createSupabaseServiceClient } from "@/lib/supabase";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid submission.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    const supabase = createSupabaseServiceClient();
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      idea: parsed.data.idea,
      budget: parsed.data.budget ?? null,
      timeline: parsed.data.timeline ?? null,
    });

    if (error) {
      return NextResponse.json({ success: false, error: "Could not save lead." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server is not configured." }, { status: 500 });
  }
}
