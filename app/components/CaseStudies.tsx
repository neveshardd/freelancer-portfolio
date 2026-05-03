"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Users } from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Fintech Platform",
    challenge: "Low trial sign-up conversion rate on existing organic traffic.",
    solution: "A complete structural redesign emphasizing social proof and a simplified sign-up flow.",
    results: [
      { metric: "+45%", label: "Conversion Rate", icon: TrendingUp },
      { metric: "< 1s", label: "Load Time", icon: Zap },
      { metric: "-20%", label: "Bounce Rate", icon: Users }
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "E-Commerce App Launch",
    challenge: "Needed a high-hype landing page to capture pre-launch email signups.",
    solution: "An immersive dark-mode experience with scroll-triggered 3D animations.",
    results: [
      { metric: "12k+", label: "Emails Captured", icon: Users },
      { metric: "8.5%", label: "Conv. Rate", icon: TrendingUp },
      { metric: "99/100", label: "Performance", icon: Zap }
    ],
    tech: ["React", "Three.js", "GSAP"]
  },
  {
    title: "B2B Marketing Agency",
    challenge: "Outdated visual identity losing trust with enterprise clients.",
    solution: "A premium, minimalist rebrand applied to a blazing fast static site.",
    results: [
      { metric: "3x", label: "More Leads", icon: TrendingUp },
      { metric: "+120%", label: "Time on Site", icon: Users },
      { metric: "100/100", label: "SEO Score", icon: Zap }
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 px-6 bg-black/60 relative z-10 border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 subtle-gradient-text"
          >
            Case Studies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl"
          >
            In-depth looks at how strategic design solves real business problems.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-3xl glass-panel flex flex-col lg:flex-row gap-10 items-start lg:items-center relative overflow-hidden group"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-emerald-custom/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex-1 z-10">
                <h3 className="text-3xl font-bold text-zinc-100 mb-6">{study.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-emerald-custom/80 font-semibold mb-1">Challenge</h4>
                    <p className="text-zinc-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-emerald-custom/80 font-semibold mb-1">Solution</h4>
                    <p className="text-zinc-400">{study.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-emerald-custom font-medium hover:text-emerald-custom-hover transition-colors">
                  View Full Case <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:w-[400px] w-full grid grid-cols-2 gap-4 z-10">
                {study.results.map((result, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl bg-black/40 border border-border-custom ${idx === 0 ? 'col-span-2' : ''}`}>
                    <result.icon className="w-5 h-5 text-emerald-custom mb-3 opacity-80" />
                    <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wide font-medium">{result.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
