import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

export const CtaFinal = () => (
  <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="container relative mx-auto max-w-3xl text-center"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        Comece sua transformação
      </div>
      <h2 className="font-display text-4xl font-medium leading-tight text-primary-foreground md:text-6xl">
        Viver bem é resultado de um corpo em{" "}
        <span className="italic">harmonia.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
        Dê o primeiro passo ao lado de quem entende que saúde verdadeira começa
        de dentro para fora.
      </p>
      <Button
        asChild
        size="xl"
        className="mt-10 bg-background text-foreground shadow-elegant hover:bg-background/90"
      >
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Agendar Consulta
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </motion.div>
  </section>
);