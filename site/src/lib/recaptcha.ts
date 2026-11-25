import "server-only";

/**
 * Valida el token de reCAPTCHA v3 en el servidor.
 * Exige success, la misma action y score >= RECAPTCHA_MIN_SCORE (0.5).
 * Sin RECAPTCHA_SECRET_KEY no se exige captcha (sólo para desarrollo).
 */
let warned = false;

export async function verifyRecaptcha(token: unknown, action: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
    if (!warned) {
      console.warn("[recaptcha] RECAPTCHA_SECRET_KEY no configurado: captcha desactivado");
      warned = true;
    }
    return true;
  }
  if (typeof token !== "string" || !token || token.length > 4096) return false;

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    const data = (await res.json()) as { success?: boolean; action?: string; score?: number };
    return (
      data.success === true &&
      data.action === action &&
      typeof data.score === "number" &&
      data.score >= (Number.isFinite(minScore) ? minScore : 0.5)
    );
  } catch (err) {
    console.error("[recaptcha] Error al validar captcha", (err as Error).message);
    return false;
  }
}
