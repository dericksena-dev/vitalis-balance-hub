import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartImage } from "./SmartImage";
import heroImg from "@/assets/dra-monna-hero.png";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Endocrinologia & Terapia Hormonal
          </div>

          <h1 className="font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Equilíbrio hormonal para você viver{" "}
            <span className="italic text-primary">leve e com energia.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Mais do que tratar, meu propósito é transformar sua saúde e
            qualidade de vida. Atendimento médico personalizado em
            endocrinologia e terapia hormonal, com foco em vitalidade e
            bem-estar duradouro.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#sobre">Conhecer a Dra. Monna</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-2xl text-foreground">CRM 29031</p>
              <p className="text-xs uppercase tracking-widest">Goiás</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-foreground">100%</p>
              <p className="text-xs uppercase tracking-widest">
                Personalizado
              </p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-foreground">Online</p>
              <p className="text-xs uppercase tracking-widest">& Presencial</p>
            </div>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
            <SmartImage
              src={heroImg}
              alt="Dra. Monna Bela, médica endocrinologista"
              width={812}
              height={896}
              priority
              wrapperClassName="relative rounded-[2rem] shadow-elegant ring-1 ring-border"
            />
            {/* badge flutuante */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur sm:-left-10"
            >
              <p className="font-display text-lg leading-tight text-primary">
                Saúde verdadeira
              </p>
              <p className="text-xs text-muted-foreground">
                começa de dentro para fora
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};