"use client";

import { useLanguage } from "@/components/i18n/LanguageContext";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="relative flex items-center justify-between w-14 h-8 px-1 rounded-full bg-black/5 dark:bg-white/5 border border-border/50 backdrop-blur-md cursor-pointer hover:border-electric-blue/50 transition-colors"
      aria-label="Toggle Language"
    >
      <div className="flex w-full justify-between px-1 text-[10px] font-bold text-foreground/50 z-0">
        <span>EN</span>
        <span>DE</span>
      </div>
      <motion.div
        className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-zinc-800 rounded-full shadow-md flex items-center justify-center text-[10px] font-bold text-electric-blue z-10"
        animate={{
          x: language === 'en' ? 0 : 24,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {language.toUpperCase()}
      </motion.div>
    </button>
  );
}
