import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

const faqs = [
  {
    q: "Como saber se estou com desequilíbrio hormonal?",
    a: "Os sinais mais comuns incluem alterações de peso, sono irregular, queda de cabelo, mudanças de humor, falta de energia e dificuldade de concentração. A confirmação é feita por meio de uma avaliação clínica detalhada e exames laboratoriais específicos.",
  },
  {
    q: "Quais são os benefícios da terapia hormonal?",
    a: "Melhora da disposição, qualidade do sono, libido, concentração, humor, composição corporal e saúde da pele. Tudo isso contribui para uma vida mais equilibrada e plena.",
  },
  {
    q: "A terapia hormonal ajuda no emagrecimento?",
    a: "Em alguns casos, sim. O equilíbrio hormonal contribui para um metabolismo mais ativo, melhora a energia e a disposição, facilitando o processo de emagrecimento saudável.",
  },
  {
    q: "As consultas online são seguras e valem como atendimento médico?",
    a: "Sim. As consultas online são regulamentadas pelo CFM, seguras e eficazes para diversos acompanhamentos e orientações.",
  },
];

export const Faq = () => (
  <section id="faq" className="bg-gradient-soft py-20 md:py-32">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          FAQ
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Dúvidas <span className="italic text-primary">comuns</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Reuni as perguntas mais frequentes para te ajudar a dar o primeiro
          passo com confiança.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-12"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-soft transition-smooth hover:shadow-elegant"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-foreground hover:no-underline md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <Button asChild variant="hero" size="xl">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Tirar dúvidas no WhatsApp
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);