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
import { ReserveModal } from "@/components/ReserveModal";

export default function Home() {
  return (
    <ModalProvider>
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
      <ReserveModal />
    </ModalProvider>
  );
}
