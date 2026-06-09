"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Instagram, XIcon, Github, Linkedin } from "@/components/ui/Icons";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[95%] max-w-7xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5 text-electric-blue text-sm font-medium mb-8"
        >
          {t.hero.badge}
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 flex items-baseline justify-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            {t.hero.title}
          </span>
          <span className="text-2xl md:text-4xl text-foreground/40 font-medium ml-2">
            {t.hero.titleSuffix}
          </span>
        </h1>
        
        {t.hero.subtitle && (
          <h2 className="text-xl md:text-2xl text-foreground/80 font-medium mb-6" dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}>
          </h2>
        )}

        <p className="hidden sm:block text-lg text-foreground/60 max-w-2xl leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: t.hero.description }}>
        </p>
        <p className="block sm:hidden text-lg text-foreground/60 max-w-2xl leading-relaxed mb-10">
          High Quality Software and AI driven interfaces<br/>Helping turn complex ideas into digital reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link
            href="#projects"
            className="group px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:bg-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)]"
          >
            {t.hero.viewProjects}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full font-medium border border-border hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 liquid-glass hover:border-electric-blue/50"
          >
            {t.hero.getInTouch}
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-foreground/60">
          <a href="https://github.com/jan-eberwein" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://x.com/jan_eberwein" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="X">
            <XIcon size={24} />
          </a>
          <a href="https://www.instagram.com/jan.eberwein/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jan-eberwein/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:jan@janeberwein.at" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
