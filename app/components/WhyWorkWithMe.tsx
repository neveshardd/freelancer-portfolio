"use client";
import { motion } from "framer-motion";
import { Zap, Target, Code2, Smartphone } from "lucide-react";

const reasons = [
  {
    title: "Alta Performance",
    description: "Tempos de carregamento ultra-rápidos que passam no Core Web Vitals, reduzindo a taxa de rejeição instantaneamente.",
    icon: Zap
  },
  {
    title: "Foco em Conversão",
    description: "Cada elemento é posicionado estrategicamente para guiar o usuário em direção ao seu objetivo principal.",
    icon: Target
  },
  {
    title: "Código Limpo e Escalável",
    description: "Construído com frameworks modernos garantindo que seu site seja fácil de manter e pronto para crescer.",
    icon: Code2
  },
  {
    title: "Experiência Responsiva",
    description: "Renderização impecável em todos os dispositivos, de monitores ultrawide a pequenas telas de smartphones.",
    icon: Smartphone
  }
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-32 px-6 bg-background relative z-10 border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            Por que me escolher?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Engenharia premium em perfeita harmonia com design estratégico.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-card border border-border-custom flex gap-6 hover:border-emerald-custom/30 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-black flex items-center justify-center border border-zinc-800 shadow-inner">
                <reason.icon className="w-6 h-6 text-emerald-custom" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{reason.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
