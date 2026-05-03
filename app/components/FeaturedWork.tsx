"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Fintech Dashboard",
    category: "SaaS Website",
    goal: "Increase trial signups by 40%",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  },
  {
    id: 2,
    name: "AI Copywriter Tool",
    category: "Product Launch",
    goal: "Waitlist conversions",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  },
  {
    id: 3,
    name: "E-commerce App",
    category: "Lead Generation",
    goal: "Boost app downloads",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  },
  {
    id: 4,
    name: "HealthTech Platform",
    category: "B2B SaaS",
    goal: "Demo requests +65%",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  },
  {
    id: 5,
    name: "Real Estate Summit",
    category: "Event Page",
    goal: "Maximize ticket sales",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  },
  {
    id: 6,
    name: "Local Gym Chain",
    category: "Local Business",
    goal: "Membership inquiries",
    image: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)"
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            Selected Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl"
          >
            Strategic landing pages built for performance and conversion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block relative rounded-2xl overflow-hidden glass-panel hover:border-emerald-custom/50 transition-colors duration-500"
            >
              <div
                className="aspect-4/3 w-full bg-card overflow-hidden relative"
                style={{ background: project.image }}
              >
                {/* Abstract shape representing project thumbnail */}
                <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-emerald-custom blur-[50px] group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View on Behance <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border-custom bg-black/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">{project.name}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-emerald-custom/80 font-medium tracking-wide uppercase">{project.category}</span>
                  <p className="text-sm text-zinc-500">Goal: {project.goal}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
