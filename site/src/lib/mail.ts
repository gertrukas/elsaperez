import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { formatPhone } from "@/lib/phone";
import { formatDateOnly, formatDateTime } from "@/lib/format";

export type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  city?: string;
  message: string;
};

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  if (!host || !user) return null;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
// Evita inyección de encabezados en subject / replyTo.
const header = (s = "") => String(s).replace(/[\r\n]+/g, " ").trim();

/**
 * Envía el mensaje al buzón fijo CONTACTO_TO.
 * Nunca se envía al correo del visitante: sólo va en replyTo.
 */
export async function sendContactEmail(c: ContactMessage): Promise<{ sent: boolean }> {
  const t = getTransporter();
  const to = process.env.CONTACTO_TO;
  if (!t || !to) {
    console.log("[mail] SMTP o CONTACTO_TO no configurado: mensaje no enviado.");
    return { sent: false };
  }

  const rows: [string, string][] = [
    ["Fecha", formatDateTime(new Date())],
    ["Nombre", c.name],
    ["Correo", c.email],
    ["Teléfono", formatPhone(c.phone)],
    ["Tipo de evento", c.eventType],
    ["Fecha del evento", c.eventDate ? formatDateOnly(c.eventDate) : "—"],
    ["Ciudad", c.city || "—"],
    ["Mensaje", c.message],
  ];
  const text = ["Nuevo mensaje desde elsaurbina.com", "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");
  const html = `<h2 style="font-family:Georgia,serif;color:#a8862a">Nuevo mensaje desde elsaurbina.com</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;color:#a8862a;vertical-align:top">${k}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`).join("\n")}
</table>`;

  await t.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    replyTo: header(c.email),
    subject: header(`Contacto web: ${c.eventType} — ${c.name}`),
    text,
    html,
  });
  return { sent: true };
}
