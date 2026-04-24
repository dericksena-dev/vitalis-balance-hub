import { motion } from "framer-motion";
import { Heart, Stethoscope, Leaf } from "lucide-react";
import { SmartImage } from "./SmartImage";
 import palestraImg from "@/assets/dra-monna-evento-v2.webp";

const valores = [
  {
    icon: Heart,
    title: "Escuta ativa",
    text: "Acolhimento real para que você se sinta compreendida em cada etapa.",
  },
  {
    icon: Stethoscope,
    title: "Base científica",
    text: "Medicina personalizada e baseada em evidências para resultados reais.",
  },
  {
    icon: Leaf,
    title: "Visão integrativa",
    text: "Equilíbrio, autoestima e vitalidade em todas as fases da vida.",
  },
];

export const Sobre = () => (
  <section id="sobre" className="overflow-hidden bg-background py-16 sm:py-20 md:py-32">
    <div className="container mx-auto grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" />
          <SmartImage
            src={palestraImg}
            alt="Dra. Monna Bela em evento médico"
             width={1680}
             height={1920}
            wrapperClassName="rounded-[2rem] shadow-elegant"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Sobre mim
        </p>
        <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
          Cuidar é compreender cada pessoa em sua{" "}
          <span className="italic text-primary">totalidade.</span>
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Sou a <strong className="text-foreground">Dra. Monna Bela</strong> e
            trabalho com endocrinologia e terapia hormonal, com foco em
            equilíbrio hormonal, emagrecimento saudável e bem-estar duradouro.
          </p>
          <p>
            Dedico minha atuação a ajudar homens e mulheres a viverem com mais
            energia, leveza e qualidade de vida, por meio de uma medicina
            personalizada, preventiva e baseada em evidências científicas.
          </p>
          <p>
            Acredito que cuidar vai muito além de tratar sintomas — é promover
            equilíbrio, autoestima e vitalidade em todas as fases da vida.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {valores.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-smooth hover:shadow-elegant"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);