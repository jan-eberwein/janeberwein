"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { Instagram, Twitter, Github } from "@/components/ui/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "jan@janeberwein.at";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <LiquidGlassCard className="p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Let&apos;s build together.</h2>
          <p className="text-foreground/70 mb-10 max-w-lg">
            Whether you&apos;re a recruiter, potential client, or collaborator, I&apos;m always
            open to discussing new projects and opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-3 px-6 py-4 rounded-full bg-foreground text-background hover:scale-105 hover:bg-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)] transition-all duration-300"
            >
              <Mail size={20} />
              <span className="font-medium">{email}</span>
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>

            <a
              href="tel:+43000000000" // TODO: Add real phone number
              className="flex items-center space-x-3 px-6 py-4 rounded-full border border-border liquid-glass hover:border-electric-blue/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
            >
              <Phone size={20} />
              <span className="font-medium">+43 XXX XXX XXXX</span>
            </a>
          </div>

          <div className="flex items-center space-x-8 text-foreground/60">
            <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all flex flex-col items-center space-y-2">
              <Github size={24} />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all flex flex-col items-center space-y-2">
              <Twitter size={24} />
              <span className="text-xs font-medium">Twitter</span>
            </a>
            <a href="#" className="hover:text-electric-blue hover:scale-110 transition-all flex flex-col items-center space-y-2">
              <Instagram size={24} />
              <span className="text-xs font-medium">Instagram</span>
            </a>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
}
