import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const headFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-head",
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
  title:
    "Noordstar — Find out what AI can actually do for your business | Independent, plain-language advice for SMEs",
  description:
    "Tell us how your business works. We'll show you, in plain language, where AI could save you time or money, where it isn't worth the trouble, and what to do first — delivered in 5 working days.",
  openGraph: {
    title: "Noordstar — Find out what AI can actually do for your business",
    description:
      "Independent, plain-language AI advice for SMEs: where it helps, where it doesn't, and what to do first.",
    url: siteUrl,
    siteName: "Noordstar",
    locale: "en_US",
    alternateLocale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noordstar — Find out what AI can actually do for your business",
    description:
      "Independent, plain-language AI advice for SMEs: where it helps, where it doesn't, and what to do first.",
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
    <html lang="en" className={`${headFont.variable} ${sans.variable}`}>
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
