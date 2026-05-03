"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual é o prazo típico de um projeto?",
    answer: "A maioria dos projetos de landing page leva entre 2 a 4 semanas desde a descoberta até o lançamento final, dependendo da complexidade e dos ciclos de revisão."
  },
  {
    question: "Quantas rodadas de revisão estão incluídas?",
    answer: "Eu incluo 2 rodadas dedicadas de revisão. Uma após a apresentação inicial do design, e outra durante a fase de desenvolvimento."
  },
  {
    question: "Você oferece suporte com o copywriting (textos)?",
    answer: "Ofereço orientação estrutural de copy e posso colaborar com seu copywriter, ou trazer um copywriter focado em conversão se necessário."
  },
  {
    question: "Você consegue integrar com meu CRM/Ferramenta de Email?",
    answer: "Sim, integro os formulários diretamente com ferramentas populares como HubSpot, Mailchimp, ActiveCampaign, Zapier e webhooks personalizados."
  },
  {
    question: "Como funciona a precificação?",
    answer: "A precificação é baseada no projeto, começando em R$ 2.500. Exijo um sinal de 50% para iniciar o trabalho, com o restante devido após o lançamento bem-sucedido."
  },
  {
    question: "Você oferece suporte pós-lançamento?",
    answer: "Sim, todo projeto inclui 30 dias de suporte para correção de bugs. Também ofereço opções de acompanhamento mensal para testes A/B e otimização contínua."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-black/40 relative z-10 border-t border-border-custom">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border-custom rounded-2xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-medium text-zinc-100">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-emerald-custom transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
