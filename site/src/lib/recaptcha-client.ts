/**
 * Google reCAPTCHA v3 (invisible, por puntaje) para formularios públicos.
 * Sin NEXT_PUBLIC_RECAPTCHA_SITE_KEY no se carga nada y el token va vacío.
 * El token dura 2 minutos y sirve una sola vez: pídelo justo al enviar.
 */

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

let scriptPromise: Promise<void> | null = null;

/** Carga el script de Google. Llámalo al montar el formulario. */
export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.execute) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("No se pudo cargar reCAPTCHA"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

/** Devuelve un token nuevo para `action`, o "" si reCAPTCHA no está disponible. */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY) return "";
  try {
    await loadRecaptcha();
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return "";
    return await new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve, reject);
      });
    });
  } catch {
    return "";
  }
}
