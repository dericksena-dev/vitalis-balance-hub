import { Instagram, MessageCircle, MapPin, Stethoscope } from "lucide-react";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

export const Footer = () => (
  <footer
    id="contato"
    className="border-t border-border bg-foreground text-background"
  >
    <div className="container mx-auto py-16">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-display text-3xl font-medium text-background">
            Dra. Monna Bela
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-background/60">
            Endocrinologia & Terapia Hormonal
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
            Cuido do seu equilíbrio hormonal para que você viva leve e com
            energia.
          </p>
        </div>

        {/* Credenciais */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/60">
            Credenciais médicas
          </p>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-3">
              <Stethoscope className="mt-0.5 h-4 w-4 text-primary-glow" />
              <span>
                Médica · Endocrinologia
                <br />
                Terapia Hormonal para Emagrecimento
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center text-primary-glow">
                ◆
              </span>
              <span>CRM 29031 — GO</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary-glow" />
              <span>Goiânia — GO · Atendimento Online</span>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/60">
            Agende sua consulta
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-smooth hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-smooth hover:border-primary-glow hover:text-primary-glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/60 md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} Dra. Monna Bela · Todos os direitos
          reservados.
        </p>
        <p>
          Conteúdo informativo. Não substitui avaliação médica individual ·
          Em conformidade com o CFM.
        </p>
      </div>
    </div>
  </footer>
);