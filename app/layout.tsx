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
  title: "Noordstar — One business problem. One practical AI fix. €49",
  description:
    "Describe one thing that's wasting time in your business. Get a short, practical plan within 2 business days — reviewed by a named specialist. €49, full refund if it's not useful.",
  openGraph: {
    title: "Noordstar — One business problem. One practical AI fix. €49",
    description:
      "A short, practical plan for one specific problem — reviewed by a named specialist, delivered within 2 business days.",
    url: siteUrl,
    siteName: "Noordstar",
    locale: "en_US",
    alternateLocale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noordstar — One business problem. One practical AI fix. €49",
    description:
      "A short, practical plan for one specific problem — reviewed by a named specialist, delivered within 2 business days.",
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
