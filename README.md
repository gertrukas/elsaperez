# Elsa Urbina

Sitio oficial de Elsa Urbina, cantante y conductora: https://elsaurbina.com

| App | Dominio | Tecnología | Puerto |
|---|---|---|---|
| `site/` | `elsaurbina.com` | Next.js 16 (App Router), Tailwind CSS 4, lucide-react, nodemailer, zod | 3000 |

El sitio no tiene admin ni api propios: el formulario de contacto lo atiende el
route handler `site/src/app/api/contacto/route.ts`.

## Desarrollo

```bash
nvm use                 # Node de .nvmrc
cd site
cp .env.example .env    # sólo local
npm install
npm run dev             # http://localhost:3000
```

Verificación: `npm run lint && npm run build`.

## Contenido

- Textos de sencillos, reconocimientos, comunicados y galería: `site/src/content/data.ts`.
- Datos de contacto, redes y menú: `site/src/lib/site.ts`.
- Imágenes: `site/public/images/`. El hero es `hero-elsa-urbina.jpg` (foto original sin texto y ampliada a la derecha).

## Formulario de contacto

`POST /api/contacto` aplica, en este orden: mismo origen, límite de 5 envíos por IP cada 10 minutos,
validación zod, honeypot `website` y Google reCAPTCHA v3 (acción `contacto`, puntaje mínimo
`RECAPTCHA_MIN_SCORE`). El correo va siempre al buzón fijo `CONTACTO_TO`; el correo del visitante
sólo va en `replyTo`. Teléfono a 10 dígitos con formato `442 123 4567`.

Llaves de reCAPTCHA: https://www.google.com/recaptcha/admin, tipo "Basado en puntuación (v3)",
dominios `elsaurbina.com` y `localhost`.

## Variables de entorno (Plesk)

En producción van en Plesk → Node.js → Environment variables de `elsaurbina.com`. No se sube `.env`.

| Variable | Cuándo se lee | Valor |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | build | `https://elsaurbina.com` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | build | llave pública reCAPTCHA v3 |
| `RECAPTCHA_SECRET_KEY` | arranque | llave secreta reCAPTCHA v3 |
| `RECAPTCHA_MIN_SCORE` | arranque | `0.5` |
| `SMTP_HOST` | arranque | servidor SMTP del dominio |
| `SMTP_PORT` | arranque | `587` (o `465` con SSL) |
| `SMTP_USER` | arranque | `site@elsaurbina.com` |
| `SMTP_PASS` | arranque | contraseña de esa cuenta |
| `MAIL_FROM` | arranque | `Elsa Urbina <site@elsaurbina.com>` |
| `CONTACTO_TO` | arranque | buzón que recibe los mensajes |
| `NEXT_TELEMETRY_DISABLED` | build | `1` |

Las `NEXT_PUBLIC_*` se incrustan al compilar: defínelas antes de `npm run build` y reconstruye si
cambian. Tras cambiar cualquier variable, reinicia la app. Sin `RECAPTCHA_SECRET_KEY` el captcha no
se exige (sólo desarrollo); con la secreta pero sin la llave pública se bloquean todos los envíos.

## Despliegue (Plesk)

| Campo | Valor |
|---|---|
| Application Root | `/httpdocs/site` |
| Document Root | `/httpdocs/site/public` |
| Startup File | `app.js` |
| Application Mode | `production` |
| Node | versión de `.nvmrc` (mínimo 20.9) |

Pasos: subir código, `npm install`, `npm run build`, Restart App.
Redirección `www.elsaurbina.com` → `elsaurbina.com` incluida en `next.config.ts`.
