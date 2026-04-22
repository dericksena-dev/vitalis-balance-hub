import { motion } from "framer-motion";
import {
  Activity,
  Scale,
  HeartPulse,
  Sparkles,
  Moon,
  Flame,
} from "lucide-react";
import { SmartImage } from "./SmartImage";
import bemEstarImg from "@/assets/bem-estar.jpg";
import consultorioImg from "@/assets/consultorio.jpg";

const especialidades = [
  {
    icon: Activity,
    title: "Equilíbrio Hormonal",
    text: "Avaliação completa e tratamento personalizado para restaurar o seu equilíbrio.",
  },
  {
    icon: Scale,
    title: "Emagrecimento Saudável",
    text: "Estratégia médica unindo metabolismo, hormônios e qualidade de vida.",
  },
  {
    icon: HeartPulse,
    title: "Terapia Hormonal",
    text: "Reposição cuidadosa para mais disposição, libido e bem-estar.",
  },
  {
    icon: Sparkles,
    title: "Vitalidade & Longevidade",
    text: "Medicina preventiva voltada para envelhecer com saúde e leveza.",
  },
  {
    icon: Moon,
    title: "Sono & Disposição",
    text: "Ajustes hormonais que melhoram o sono, humor e concentração.",
  },
  {
    icon: Flame,
    title: "Metabolismo Ativo",
    text: "Cuidados para um corpo em harmonia e energia constante.",
  },
];

export const Especialidades = () => (
  <section id="especialidades" className="bg-background py-20 md:py-32">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Especialidades
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Cuidado completo para cada{" "}
          <span className="italic text-primary">fase da sua vida.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Atendimento personalizado em endocrinologia e terapia hormonal, com
          uma visão integrativa da saúde.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {especialidades.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-smooth group-hover:opacity-20" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Galeria visual */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SmartImage
            src={consultorioImg}
            alt="Consultório elegante e acolhedor"
            width={1280}
            height={896}
            wrapperClassName="rounded-[2rem] shadow-soft"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SmartImage
            src={bemEstarImg}
            alt="Estilo de vida saudável e bem-estar"
            width={1280}
            height={896}
            wrapperClassName="rounded-[2rem] shadow-soft"
          />
        </motion.div>
      </div>
    </div>
  </section>
);