import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { rateLimit } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/mail";
import { EVENT_TYPES } from "@/content/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string({ error: "Escribe tu nombre" }).trim().min(2, "Escribe tu nombre").max(120),
  email: z.string({ error: "Escribe un correo válido" }).trim().toLowerCase().email("Escribe un correo válido").max(160),
  phone: z.string({ error: "Escribe un teléfono a 10 dígitos" }).regex(/^\d{10}$/, "Escribe un teléfono a 10 dígitos"),
  eventType: z.enum(EVENT_TYPES, { message: "Elige el tipo de evento" }),
  eventDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  city: z.string().trim().max(120).optional(),
  message: z.string({ error: "Escribe tu mensaje" }).trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)").max(3000),
  website: z.string().optional(),
  recaptcha: z.string().optional(),
});

function clientIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "local";
}

export async function POST(req: NextRequest) {
  // Bloquea envíos desde otros orígenes.
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) {
    return NextResponse.json({ message: "Origen no permitido" }, { status: 403 });
  }

  if (!rateLimit(`contacto:${clientIp(req)}`)) {
    return NextResponse.json(
      { message: "Demasiados envíos. Inténtalo de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Solicitud inválida" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Revisa los campos marcados", fieldErrors: z.flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  const { website, recaptcha, ...data } = parsed.data;

  // Honeypot: un bot lo llenó. Respondemos éxito sin enviar.
  if (website) return NextResponse.json({ ok: true }, { status: 201 });

  if (!(await verifyRecaptcha(recaptcha, "contacto"))) {
    return NextResponse.json(
      { message: "No pudimos verificar el envío. Recarga la página e inténtalo de nuevo" },
      { status: 400 },
    );
  }

  try {
    const { sent } = await sendContactEmail(data);
    if (!sent && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { message: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp o correo." },
        { status: 503 },
      );
    }
  } catch (err) {
    console.error("[contacto] Error al enviar correo", (err as Error).message);
    return NextResponse.json(
      { message: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp o correo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
