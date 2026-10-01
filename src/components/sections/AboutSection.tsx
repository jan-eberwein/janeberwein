"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
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
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
}
