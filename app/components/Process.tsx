"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendimento dos objetivos de negócio, público-alvo e métricas atuais."
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Estruturação do fluxo de conversão, wireframes e direção de copywriting."
  },
  {
    number: "03",
    title: "Design & Dev",
    description: "Construção da experiência de alta fidelidade com código limpo e escalável."
  },
  {
    number: "04",
    title: "Lançamento",
    description: "Entrega, testes de performance e otimização da taxa de conversão."
  }
];

export default function Process() {
  return (
    <section id="processo" className="py-32 px-6 bg-background relative z-10 border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            O Processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl"
          >
            Uma abordagem sistemática para construir landing pages de alta performance.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-px bg-border-custom hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-card border border-emerald-custom/30 flex items-center justify-center text-xl font-mono font-bold text-emerald-custom mb-6 relative z-10 shadow-[0_0_15px_rgba(0,210,142,0.1)]">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
