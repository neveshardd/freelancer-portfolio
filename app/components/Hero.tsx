"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-custom/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-custom bg-card/50 text-emerald-custom text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-custom animate-pulse" />
            Disponível para novos projetos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 subtle-gradient-text"
        >
          Landing Pages Que Transformam <br className="hidden md:block" /> Tráfego Em Clientes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Eu desenho e desenvolvo landing pages estratégicas de alta performance focadas em conversão, velocidade e experiência do usuário.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://wa.me/5561998661866?text=Ol%C3%A1%2C%20Jos%C3%A9!%20Gostaria%20de%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-custom text-black font-semibold hover:bg-emerald-custom-hover transition-colors flex items-center justify-center gap-2">
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#servicos" className="w-full sm:w-auto px-8 py-4 rounded-full border border-border-custom bg-card hover:bg-zinc-900 transition-colors text-white font-medium flex items-center justify-center gap-2">
            Ver Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
