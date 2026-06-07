import { createClient } from "@supabase/supabase-js";
import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { getCollections } from "@/services/collections";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(req) {
  try {
    const { user_id, content } = await req.json();
    const collections = await getCollections();

    const { data: history, error: historyError } = await supabase
      .from("messages")
      .select("role, content")
      .eq("user_id", user_id)
      .order("created_at", { ascending: true })
      .limit(20);

    if (historyError) throw new Error("Error al cargar historial");

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system: `Eres un asistente útil y conciso.
Responde basándote en este catálogo de colecciones:

${collections.map((c) => `- ${c.nombre_vehiculo}:${c.modelo}:${c.anio}:${c.precio}:${c.motor}:${c.poder_hp}:${c.aceleracion_0_100}:${c.velocidad_maxima}:${c.torque_nm}:${c.peso_kg}: ${c.description}`).join("\n")}
para responder preguntas sobre los vehículos disponibles puedes usar toda esta información y incluir mas, los precios que te proporciono son en dolares, no alteres ningun dato del contexto en tus respuestas.
Si el usuario pregunta algo fuera del catálogo, redirígelo amablemente.`,
      messages: [...(history || []), { role: "user", content }],
    });

    const { error: insertError } = await supabase.from("messages").insert({
      user_id,
      role: "assistant",
      content: text,
    });

    if (insertError) throw new Error("Error al guardar el mensaje");

    return Response.json({ ok: true });
  } catch (err) {
    console.error("ERROR:", err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
