"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <LiquidGlassCard className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Nice to meet you.</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
                <p>
                  I am Jan Eberwein, currently studying Interactive Media in the Master&apos;s
                  program. My work lies at the intersection of design and engineering.
                </p>
                <p>
                  I am deeply interested in web development, creative coding, AI, interaction
                  design, and data visualization. I enjoy building clean, useful, and visually
                  strong projects that feel good to use.
                </p>
                <p>
                  This website serves as my personal online card and portfolio, showcasing my
                  recent experiments, academic projects, and technical skills to recruiters,
                  clients, and collaborators.
                </p>
              </div>
            </div>
            
            {/* Visual element / abstract graphic in the about section */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-electric-blue/20 to-transparent border border-electric-blue/30 backdrop-blur-3xl flex items-center justify-center animate-pulse duration-3000">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-electric-blue/40 to-transparent blur-md"></div>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
}
