"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-32 px-6 bg-background relative z-10 border-t border-border-custom overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-custom/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 subtle-gradient-text"
        >
          Vamos Construir uma Landing Page <br className="hidden md:block" /> Que Converte
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
        >
          Me fale sobre o seu projeto, metas e prazos, e receba uma proposta estratégica e personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:soujoseeugenio@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-custom text-black font-semibold hover:bg-emerald-custom-hover transition-colors flex items-center justify-center gap-2 text-lg">
            Iniciar um Projeto via Email
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5561998661866?text=Ol%C3%A1%2C%20Jos%C3%A9!%20Gostaria%20de%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-white font-medium flex items-center justify-center gap-2 text-lg">
            <MessageCircle className="w-5 h-5 text-emerald-custom" />
            Contato via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
