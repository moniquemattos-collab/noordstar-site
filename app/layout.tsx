import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://noordstar.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Noordstar — AI Opportunity Report for SMEs | Independent AI advice",
  description:
    "A professional, independent analysis for SMEs: where AI will pay off in your business, where it won't, and a step-by-step blueprint to act. Delivered in 5 working days.",
  openGraph: {
    title: "Noordstar — AI Opportunity Report for SMEs | Independent AI advice",
    description:
      "A professional, independent analysis for SMEs: where AI will pay off, where it won't, and a step-by-step blueprint to act.",
    url: siteUrl,
    siteName: "Noordstar",
    locale: "nl_NL",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noordstar — AI Opportunity Report for SMEs",
    description:
      "Independent analysis for SMEs: where AI will pay off, where it won't, and a step-by-step blueprint to act.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        {/*
          Analytics placeholder.
          Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN and uncomment the script tag below.
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />

          GA4: set NEXT_PUBLIC_GA_ID and uncomment the two script tags below.
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}} />
        */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
