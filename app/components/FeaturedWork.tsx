"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { BehanceProject } from "@/lib/behance";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork({ projects }: { projects: BehanceProject[] }) {
  // We'll limit to max 6 projects if there are too many
  const displayProjects = projects?.slice(0, 6) || [];
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
          {displayProjects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block relative rounded-2xl overflow-hidden glass-panel hover:border-emerald-custom/50 transition-colors duration-500"
            >
              <div
                className="aspect-4/3 w-full bg-card overflow-hidden relative"
              >
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                ) : (
                  <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #0A0C0B 0%, #111513 100%)" }}></div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium">
                    View on Behance <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border-custom bg-black/50 h-full">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100 line-clamp-1">{project.title}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.a
            href="https://www.behance.net/soujoseeugenio"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-emerald-custom rounded-full hover:bg-emerald-custom/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(46,204,113,0.3)] gap-2 group"
          >
            Ver todos no Behance
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
