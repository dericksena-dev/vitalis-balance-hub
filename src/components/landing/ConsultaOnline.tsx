import { motion } from "framer-motion";
import { Video, Clock, ShieldCheck, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartImage } from "./SmartImage";
 import onlineImg from "@/assets/consulta-online-v2.webp";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

const beneficios = [
  { icon: Home, text: "Atendida onde estiver, com conforto" },
  { icon: Clock, text: "Sem deslocamento, sem filas" },
  { icon: ShieldCheck, text: "Regulamentada e segura pelo CFM" },
  { icon: Video, text: "Mesmo acolhimento das consultas presenciais" },
];

export const ConsultaOnline = () => (
  <section id="atendimento" className="relative bg-gradient-soft py-16 sm:py-20 md:py-32">
    <div className="container mx-auto grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Consultas Online
        </p>
        <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
          Cuidar da sua saúde ficou{" "}
          <span className="italic text-primary">ainda mais fácil.</span>
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
          Nas consultas online, você recebe o mesmo acolhimento, escuta e
          atenção das consultas presenciais — com a praticidade de ser atendida
          onde estiver.
        </p>

        <ul className="mt-8 space-y-4">
          {beneficios.map((b, i) => (
            <motion.li
              key={b.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <b.icon className="h-4 w-4" />
              </span>
              <span className="pt-1.5 text-base text-foreground">{b.text}</span>
            </motion.li>
          ))}
        </ul>

        <Button asChild variant="hero" size="xl" className="mt-10">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Agendar Consulta
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
        <SmartImage
          src={onlineImg}
          alt="Mulher em consulta online de telemedicina"
           width={1500}
           height={1418}
          wrapperClassName="rounded-[2rem] shadow-elegant"
        />
      </motion.div>
    </div>
  </section>
);