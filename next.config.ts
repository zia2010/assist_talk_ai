import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* ── Core ─────────────────────────────────────────────── */
  reactStrictMode: true,
  poweredByHeader: false, // hide X-Powered-By for security
  trailingSlash: false, // clean URLs without trailing slash

  /* ── Turbopack ────────────────────────────────────────── */
  turbopack: {
    root: path.resolve(__dirname),
  },

  /* ── Images ───────────────────────────────────────────── */
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow external image domains if needed in future
    remotePatterns: [],
  },

  /* ── Security headers ─────────────────────────────────── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* ── Redirects ────────────────────────────────────────── */
  async redirects() {
    return [
      // Example: redirect old paths if needed in future
      // { source: "/old-path", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
