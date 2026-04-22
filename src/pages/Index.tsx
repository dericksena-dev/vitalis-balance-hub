import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Sobre } from "@/components/landing/Sobre";
import { ConsultaOnline } from "@/components/landing/ConsultaOnline";
import { Especialidades } from "@/components/landing/Especialidades";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <ConsultaOnline />
        <Especialidades />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
