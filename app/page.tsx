import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ModalProvider } from "@/lib/modal-context";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Recognition } from "@/components/Recognition";
import { ProductDemo } from "@/components/ProductDemo";
import { Process } from "@/components/Process";
import { Independence } from "@/components/Independence";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <ModalProvider>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Recognition />
        <ProductDemo />
        <Process />
        <Independence />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </ModalProvider>
  );
}
