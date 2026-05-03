"use client";
import { motion } from "framer-motion";
import { Target, Rocket, MonitorSmartphone, MapPin, Calendar, LineChart } from "lucide-react";

const services = [
  {
    title: "Páginas de Captura de Leads",
    description: "Estruturas de alta conversão criadas para capturar leads qualificados e construir sua base.",
    icon: Target
  },
  {
    title: "Páginas de Lançamento",
    description: "Gere hype e antecipação com copy persuasiva e experiências visuais imersivas.",
    icon: Rocket
  },
  {
    title: "Landing Pages para SaaS",
    description: "Propostas de valor claras e fluxos perfeitos para aumentar cadastros e solicitações de demonstração.",
    icon: MonitorSmartphone
  },
  {
    title: "Páginas para Negócios Locais",
    description: "Designs hiper-localizados focados em gerar visitas, ligações e agendamentos na sua região.",
    icon: MapPin
  },
  {
    title: "Páginas de Eventos",
    description: "Layouts envolventes e informativos construídos especificamente para maximizar a venda de ingressos.",
    icon: Calendar
  },
  {
    title: "Otimização de Conversão",
    description: "Auditoria e redesign de páginas existentes para melhorar drasticamente as taxas de conversão.",
    icon: LineChart
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 px-6 relative border-t border-border-custom bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            Serviços Especializados
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Eu crio experiências digitais focadas e personalizadas para o objetivo específico do seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel hover:bg-card/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-custom/10 flex items-center justify-center mb-6 border border-emerald-custom/20">
                <service.icon className="w-6 h-6 text-emerald-custom" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
