import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// reCAPTCHA v3 carga scripts e iframes de google.com / gstatic.com.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "frame-src 'self' https://www.google.com https://www.gstatic.com",
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
  ...(isProd
    ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
    : []),
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  turbopack: { root: __dirname },
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.elsaurbina.com" }], destination: "https://elsaurbina.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
