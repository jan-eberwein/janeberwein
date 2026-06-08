"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

const projects = [
  {
    title: "Quantum Bank",
    description: "AI-powered banking web application with authentication, transactions, dashboard charts, voice interaction, and CopilotKit integration.",
    tags: ["Next.js", "React", "Appwrite", "CopilotKit", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "OECD Better Life Dashboard",
    description: "Interactive data visualization project using OECD Better Life Index data with maps, charts, radar views, rankings, and storytelling interactions.",
    tags: ["D3.js", "TypeScript", "Vite", "Data Visualization", "UI Design"],
    link: "#",
    github: "#",
  },
  {
    title: "Smart Air Purifier",
    description: "IoT project for monitoring air quality using sensors, ESP32, LoRaWAN, MQTT, MariaDB, and Grafana dashboards.",
    tags: ["IoT", "ESP32", "LoRaWAN", "MQTT", "MariaDB", "Grafana"],
    link: "#",
    github: "#",
  },
  {
    title: "SNode.C Identity Provider",
    description: "Master's thesis project focused on building a central identity provider with SSO/MFA concepts for distributed router installations.",
    tags: ["Authentication", "SSO", "MFA", "Security", "Web Architecture"],
    link: "#",
    github: "#",
  },
  {
    title: "Personal Web Experiments",
    description: "Collection of smaller creative web, animation, interaction, and UI experiments focused on clean design and modern frontend development.",
    tags: ["React", "Three.js", "Animation", "UI/UX"],
    link: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Selected Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
            >
              <LiquidGlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2 py-1 bg-foreground/5 rounded-md text-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-border/40">
                  <a
                    href={project.link}
                    className="flex items-center text-sm font-medium text-foreground hover:text-electric-blue transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center text-sm font-medium text-foreground hover:text-electric-blue transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Source
                  </a>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
