import { createClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("vehiculos").select("*");

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    return NextResponse.json(
      { error: "No se pudieron obtener los vehículos" },
      { status: 500 },
    );
  }
}
