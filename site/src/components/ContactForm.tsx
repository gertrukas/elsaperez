"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { EVENT_TYPES } from "@/content/data";
import { caretAfterFormat, formatPhone, phoneDigits } from "@/lib/phone";
import { getRecaptchaToken, loadRecaptcha } from "@/lib/recaptcha-client";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "eventType" | "eventDate" | "city" | "message", string[]>>;

const initial = { name: "", email: "", phone: "", eventType: "", eventDate: "", city: "", message: "", website: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadRecaptcha().catch(() => {});
  }, []);

  const set = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key as keyof FieldErrors]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  // Formatea el teléfono al escribir o pegar (442 123 4567) y conserva el cursor.
  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const caret = input.selectionStart ?? input.value.length;
    const digitsBefore = phoneDigits(input.value.slice(0, caret)).length;
    const formatted = formatPhone(input.value);
    setValues((v) => ({ ...v, phone: formatted }));
    if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }));
    requestAnimationFrame(() => {
      const pos = caretAfterFormat(formatted, digitsBefore);
      phoneRef.current?.setSelectionRange(pos, pos);
    });
  };

  const validate = (): FieldErrors => {
    const er: FieldErrors = {};
    if (values.name.trim().length < 2) er.name = ["Escribe tu nombre"];
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) er.email = ["Escribe un correo válido"];
    if (phoneDigits(values.phone).length !== 10) er.phone = ["Escribe un teléfono a 10 dígitos"];
    if (!values.eventType) er.eventType = ["Elige el tipo de evento"];
    if (values.message.trim().length < 10) er.message = ["Cuéntanos un poco más (mínimo 10 caracteres)"];
    return er;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      setStatus("error");
      setMessage("Revisa los campos marcados");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const recaptcha = await getRecaptchaToken("contacto");
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, phone: phoneDigits(values.phone), recaptcha }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; fieldErrors?: FieldErrors };
      if (!res.ok) {
        setErrors(data.fieldErrors ?? {});
        setStatus("error");
        setMessage(data.message ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo.");
        return;
      }
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
      setMessage("No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo.");
    }
  };

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-center justify-center p-10 text-center animate-fade-up" role="status">
        <CheckCircle2 className="size-14 text-accent animate-float" aria-hidden />
        <h3 className="mt-5 font-display text-3xl font-semibold">¡Gracias por escribir!</h3>
        <p className="mt-3 max-w-sm text-secondary-muted">
          Recibimos tu mensaje. Te responderemos muy pronto para platicar sobre tu evento.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-8">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) => errors[k]?.[0];
  const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-soft";

  return (
    <form onSubmit={onSubmit} noValidate className="card relative grid gap-5 p-6 sm:grid-cols-2 sm:p-8" aria-describedby="form-status">
      {/* Honeypot: invisible para personas. */}
      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Sitio web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="name" className={label}>Nombre completo</label>
        <input id="name" name="name" autoComplete="name" className="field" value={values.name} onChange={set("name")} maxLength={120} aria-invalid={!!err("name")} aria-describedby={err("name") ? "name-error" : undefined} placeholder="¿Cómo te llamas?" />
        {err("name") && <p id="name-error" className="mt-1.5 text-sm text-red-400">{err("name")}</p>}
      </div>

      <div>
        <label htmlFor="email" className={label}>Correo electrónico</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" className="field" value={values.email} onChange={set("email")} maxLength={160} aria-invalid={!!err("email")} aria-describedby={err("email") ? "email-error" : undefined} placeholder="tucorreo@ejemplo.com" />
        {err("email") && <p id="email-error" className="mt-1.5 text-sm text-red-400">{err("email")}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={label}>Teléfono</label>
        <input ref={phoneRef} id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" value={values.phone} onChange={onPhone} maxLength={20} aria-invalid={!!err("phone")} aria-describedby={err("phone") ? "phone-error" : undefined} placeholder="442 000 0000" />
        {err("phone") && <p id="phone-error" className="mt-1.5 text-sm text-red-400">{err("phone")}</p>}
      </div>

      <div>
        <label htmlFor="eventType" className={label}>Tipo de evento</label>
        <select id="eventType" name="eventType" className="field appearance-none" value={values.eventType} onChange={set("eventType")} aria-invalid={!!err("eventType")} aria-describedby={err("eventType") ? "eventType-error" : undefined}>
          <option value="" disabled>Elige una opción</option>
          {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {err("eventType") && <p id="eventType-error" className="mt-1.5 text-sm text-red-400">{err("eventType")}</p>}
      </div>

      <div>
        <label htmlFor="eventDate" className={label}>Fecha del evento <span className="normal-case tracking-normal text-secondary-muted">(opcional)</span></label>
        <input id="eventDate" name="eventDate" type="date" className="field [color-scheme:dark]" value={values.eventDate} onChange={set("eventDate")} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="city" className={label}>Ciudad del evento <span className="normal-case tracking-normal text-secondary-muted">(opcional)</span></label>
        <input id="city" name="city" autoComplete="address-level2" className="field" value={values.city} onChange={set("city")} maxLength={120} placeholder="Ciudad de México" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Mensaje</label>
        <textarea id="message" name="message" rows={5} className="field resize-y" value={values.message} onChange={set("message")} maxLength={3000} aria-invalid={!!err("message")} aria-describedby={err("message") ? "message-error" : undefined} placeholder="Cuéntanos sobre tu evento, el formato que te interesa (mariachi, orquesta, jazz…) y el número de invitados." />
        {err("message") && <p id="message-error" className="mt-1.5 text-sm text-red-400">{err("message")}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-secondary-muted">
          Al enviar aceptas el <Link href="/aviso-privacidad" className="text-accent underline underline-offset-2">aviso de privacidad</Link>.
        </p>
        <button type="submit" className="btn-primary shrink-0" disabled={status === "sending"}>
          {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>

      <p id="form-status" role="alert" className={cn("text-sm sm:col-span-2", status === "error" ? "text-red-400" : "sr-only")}>
        {message}
      </p>
    </form>
  );
}
