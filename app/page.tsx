import { ModalProvider } from "@/lib/modal-context";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Method } from "@/components/Method";
import { Comparison } from "@/components/Comparison";
import { Independence } from "@/components/Independence";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ReserveModal } from "@/components/ReserveModal";
import { SampleModal } from "@/components/SampleModal";

export default function Home() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatYouGet />
        <Method />
        <Comparison />
        <Independence />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ReserveModal />
      <SampleModal />
    </ModalProvider>
  );
}
