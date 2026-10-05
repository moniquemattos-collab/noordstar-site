// Keep this apex domain in sync with SITE_URL in lib/constants.ts — this
// file is plain CommonJS and can't import that TS module directly.
const APEX_HOST = "noordstar.nl";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Canonicalize the www variant to the apex domain so search engines
      // never see the same content under two hosts. Only fires once the
      // www subdomain is actually pointed at this deployment in DNS/Vercel
      // domain settings — see the SEO report for that step.
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${APEX_HOST}` }],
        destination: `https://${APEX_HOST}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    // Vercel sets VERCEL_ENV to "production" only for the production
    // deployment; every preview/branch build gets "preview" (or it's
    // undefined in local dev). Tag anything that isn't production as
    // noindex so preview/test URLs can't end up in search results, without
    // needing a manual setting in the Vercel dashboard.
    if (process.env.VERCEL_ENV === "production") return [];

    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

module.exports = nextConfig;
