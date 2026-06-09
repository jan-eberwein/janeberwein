"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import {
  ExternalLink,
  Landmark,
  LineChart,
  Wind,
  ShieldCheck,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { useLanguage } from "@/components/i18n/LanguageContext";
import Image, { StaticImageData } from "next/image";
import reactIcon from "@/../CONTENTS/Icons/react.svg";
import nextjsIcon from "@/../CONTENTS/Icons/nextjs.svg";
import typescriptIcon from "@/../CONTENTS/Icons/typescript.svg";
import tailwindIcon from "@/../CONTENTS/Icons/tailwindcss.svg";
import viteIcon from "@/../CONTENTS/Icons/vite.svg";

const iconMap: Record<string, string | StaticImageData> = {
  React: reactIcon,
  "Next.js": nextjsIcon,
  TypeScript: typescriptIcon,
  "Tailwind CSS": tailwindIcon,
  Vite: viteIcon,
};

const projects = [
  {
    title: "SNode.C Identity Provider",
    date: "Jun 2026",
    icon: ShieldCheck,
    description:
      "Master's thesis project focused on building a central identity provider with SSO/MFA concepts for distributed router installations.",
    tags: ["Authentication", "SSO", "MFA", "Security", "Web Architecture"],
    link: "https://auth.janeberwein.at",
    github: "https://github.com/jan-eberwein/auth",
  },
  {
    title: "Personal Learning Website",
    date: "May 2026",
    icon: GraduationCap,
    description:
      "A modern educational platform with interactive exercises, progress tracking, and personalized content delivery.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://sophie-lernwebsite.vercel.app",
    github: "https://github.com/jan-eberwein/sophie-lernwebsite",
  },
  {
    title: "Smart Air Purifier",
    date: "Jul 2025",
    icon: Wind,
    description:
      "IoT project for monitoring air quality using sensors, ESP32, LoRaWAN, MQTT, MariaDB, and Grafana dashboards.",
    tags: ["IoT", "ESP32", "LoRaWAN", "MQTT", "MariaDB", "Grafana"],
    link: "https://smart-air-purifier.vercel.app",
    github: "https://github.com/jan-eberwein/smart-air-purifier",
  },
  {
    title: "OECD Better Life Dashboard",
    date: "Jun 2025",
    icon: LineChart,
    description:
      "Interactive data visualization project using OECD Better Life Index data with maps, charts, radar views, rankings, and storytelling interactions.",
    tags: ["D3.js", "TypeScript", "Vite", "Data Visualization", "UI Design"],
    link: "https://better-life-index-2024.vercel.app",
    github: "https://github.com/jan-eberwein/better-life-dashboard",
  },
  {
    title: "Quantum Bank",
    date: "Feb 2025",
    icon: Landmark,
    description:
      "AI-powered banking web application with authentication, transactions, dashboard charts, voice interaction, and CopilotKit integration.",
    tags: [
      "Next.js",
      "React",
      "Appwrite",
      "CopilotKit",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://quantum-bank-2.vercel.app",
    github: "https://github.com/jan-eberwein/quantum-bank",
  },
  {
    title: "Quantum Chat",
    date: "Feb 2025",
    icon: MessageSquare,
    description:
      "A modern real-time messaging platform featuring secure authentication, live communication, and an intuitive, responsive user interface.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://quantum-chat-kappa.vercel.app",
    github: "https://github.com/jan-eberwein/quantum-chat",
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[95%] max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={
                idx === projects.length - 1 && projects.length % 2 !== 0
                  ? "md:col-span-2 md:w-1/2 md:mx-auto"
                  : ""
              }
            >
              <LiquidGlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 flex items-center justify-center shrink-0 shadow-sm">
                      <project.icon size={24} className="text-electric-blue" />
                    </div>
                    <div className="flex-1 flex justify-between items-start gap-4">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                          <h3 className="text-xl font-bold group-hover:text-electric-blue transition-colors">
                            {project.title}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-xl font-bold group-hover:text-electric-blue transition-colors">
                          {project.title}
                        </h3>
                      )}
                      <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/50 bg-foreground/5 px-2.5 py-1 rounded-md shrink-0 mt-1 shadow-sm border border-border/40">
                        {project.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center text-xs font-semibold px-2.5 py-1.5 bg-foreground/5 rounded-md text-foreground/70"
                      >
                        {iconMap[tag] && (
                          <Image
                            src={iconMap[tag]}
                            alt={tag}
                            width={16}
                            height={16}
                            className="mr-2 object-contain brightness-0 dark:invert"
                          />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-6 mt-auto pt-4 border-t border-border/40">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-foreground hover:text-electric-blue transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {t.projects.viewProject}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-foreground hover:text-electric-blue transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      {t.projects.viewSource}
                    </a>
                  )}
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
