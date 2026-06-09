"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import Image from "next/image";
import profilePic from "@/../CONTENTS/janwebsiteFoto.png";
import { useLanguage } from "@/components/i18n/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="w-full py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[95%] max-w-7xl mx-auto"
      >
        <LiquidGlassCard className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.about.title}</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
                <p>
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
              </div>
            </div>
            
            {/* Profile Photo */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)] group bg-background/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <Image 
                  src={profilePic} 
                  alt="Jan Eberwein" 
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
}
