import { ModalProvider } from "@/lib/modal-context";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Recognition } from "@/components/Recognition";
import { Process } from "@/components/Process";
import { Example } from "@/components/Example";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Independence } from "@/components/Independence";
import { Timeline } from "@/components/Timeline";
import { Proof } from "@/components/Proof";
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
        <Recognition />
        <Process />
        <Example />
        <WhatYouGet />
        <Independence />
        <Timeline />
        <Proof />
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
