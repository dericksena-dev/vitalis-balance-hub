import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/5562982350952?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+as+consultas+online";

export const WhatsAppFAB = () => (
  <motion.a
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant ring-4 ring-[#25D366]/20 transition-smooth hover:ring-[#25D366]/40 sm:h-16 sm:w-16"
  >
    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
  </motion.a>
);