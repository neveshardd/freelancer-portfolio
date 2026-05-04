"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
        borderColor: scrolled ? "rgba(31, 36, 33, 1)" : "rgba(31, 36, 33, 0)",
      }}
      transition={{
        y: { type: "spring", stiffness: 100, damping: 20 },
        backgroundColor: { duration: 0.3, ease: "easeInOut" },
        borderColor: { duration: 0.3, ease: "easeInOut" }
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? "1rem" : "1.5rem",
          paddingBottom: scrolled ? "1rem" : "1.5rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-6xl mx-auto px-6 flex items-center justify-between relative"
      >
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center justify-center transition-transform hover:scale-105" aria-label="Home">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="rounded-md object-cover w-8 h-8" priority />
          </a>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-zinc-400 absolute left-1/2 -translate-x-1/2">
          <a href="#servicos" className="hover:text-emerald-custom transition-colors">Serviços</a>
          <a href="#processo" className="hover:text-emerald-custom transition-colors">Processo</a>
          <a href="#faq" className="hover:text-emerald-custom transition-colors">FAQ</a>
        </nav>

        <div className="flex-1 flex justify-end">
          <a
            href="https://wa.me/5561998661866?text=Ol%C3%A1%2C%20Jos%C3%A9!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-card border border-border-custom text-zinc-100 text-sm font-medium hover:border-emerald-custom/50 hover:bg-zinc-900 transition-colors"
          >
            Falar com José
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
