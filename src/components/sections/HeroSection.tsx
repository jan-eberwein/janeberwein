"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Instagram, Twitter, Github } from "@/components/ui/Icons";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5 text-electric-blue text-sm font-medium mb-8"
        >
          Interactive Media Master&apos;s Student
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          Jan Eberwein
        </h1>
        
        <h2 className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">
          Full-Stack Web Developer &middot; Creative Technologist
        </h2>

        <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed mb-10">
          I design and build modern web experiences, interactive interfaces, data
          visualizations, and AI-powered applications with a strong focus on clean
          design, usability, and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link
            href="#projects"
            className="group px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:bg-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)]"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full font-medium border border-border hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 liquid-glass hover:border-electric-blue/50"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-foreground/60">
          <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="Twitter">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="mailto:jan@janeberwein.at" className="hover:text-electric-blue hover:scale-110 transition-all" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
