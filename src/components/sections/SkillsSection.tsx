"use client";

import { motion } from "framer-motion";
import { 
  Paintbrush, Layers, Maximize, Smartphone, MonitorPlay,
  Bot, Terminal, Coffee, Workflow, MessageSquareText, Code2, Sparkles,
  GitBranch, PenTool
} from "lucide-react";

import reactIcon from "@/../CONTENTS/Icons/react.svg";
import nextjsIcon from "@/../CONTENTS/Icons/nextjs.svg";
import vueIcon from "@/../CONTENTS/Icons/vue.svg";
import tsIcon from "@/../CONTENTS/Icons/typescript.svg";
import tailwindIcon from "@/../CONTENTS/Icons/tailwindcss.svg";
import framerIcon from "@/../CONTENTS/Icons/framer.svg";
import d3jsIcon from "@/../CONTENTS/Icons/d3js.svg";
import nodejsIcon from "@/../CONTENTS/Icons/nodejs.svg";
import expressIcon from "@/../CONTENTS/Icons/express.svg";
import appwriteIcon from "@/../CONTENTS/Icons/appwrite.svg";
import sqliteIcon from "@/../CONTENTS/Icons/sqlite.svg";
import mariadbIcon from "@/../CONTENTS/Icons/mariadb.svg";
import threejsIcon from "@/../CONTENTS/Icons/threejs.svg";
import githubIcon from "@/../CONTENTS/Icons/github.svg";
import vercelIcon from "@/../CONTENTS/Icons/vercel.svg";
import dockerIcon from "@/../CONTENTS/Icons/docker.svg";
import openaiIcon from "@/../CONTENTS/Icons/openai.svg";
import jsIcon from "@/../CONTENTS/Icons/javascript.svg";
import phpIcon from "@/../CONTENTS/Icons/php.svg";
import cppIcon from "@/../CONTENTS/Icons/cplusplus.svg";
import railsIcon from "@/../CONTENTS/Icons/rubyonrails.svg";
import claudeIcon from "@/../CONTENTS/Icons/claude.svg";
import geminiIcon from "@/../CONTENTS/Icons/googlegemini.svg";
import swiftIcon from "@/../CONTENTS/Icons/swift.svg";
import dartIcon from "@/../CONTENTS/Icons/dart.svg";
import shadcnIcon from "@/../CONTENTS/Icons/shadcnui.svg";
import viteIcon from "@/../CONTENTS/Icons/vite.svg";
import rubyIcon from "@/../CONTENTS/Icons/ruby.svg";
import { useLanguage } from "@/components/i18n/LanguageContext";

const getSkills = (t: any) => [
  {
    category: t.skills.categories.languages,
    items: [
      { name: "JavaScript", icon: jsIcon, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: tsIcon, href: "https://www.typescriptlang.org/" },
      { name: "C++", icon: cppIcon, href: "https://isocpp.org/" },
      { name: "Java", lucide: Coffee, href: "https://www.java.com/" },
      { name: "Swift", icon: swiftIcon, href: "https://developer.apple.com/swift/" },
      { name: "Dart", icon: dartIcon, href: "https://dart.dev/" },
      { name: "Ruby", icon: rubyIcon, href: "https://www.ruby-lang.org/" },
      { name: "PHP", icon: phpIcon, href: "https://www.php.net/" },
    ]
  },
  {
    category: t.skills.categories.frontend,
    items: [
      { name: "React", icon: reactIcon, href: "https://react.dev/" },
      { name: "Next.js", icon: nextjsIcon, invertDark: true, href: "https://nextjs.org/" },
      { name: "Vue", icon: vueIcon, href: "https://vuejs.org/" },
      { name: "Tailwind CSS", icon: tailwindIcon, href: "https://tailwindcss.com/" },
      { name: "Framer Motion", icon: framerIcon, invertDark: true, href: "https://www.framer.com/motion/" },
      { name: "D3.js", icon: d3jsIcon, href: "https://d3js.org/" },
      { name: "shadcn/ui", icon: shadcnIcon, href: "https://ui.shadcn.com/" },
      { name: "Vite", icon: viteIcon, href: "https://vitejs.dev/" },
    ],
  },
  {
    category: t.skills.categories.backend,
    items: [
      { name: "Node.js", icon: nodejsIcon, href: "https://nodejs.org/" },
      { name: "Express", icon: expressIcon, invertDark: true, href: "https://expressjs.com/" },
      { name: "Ruby on Rails", icon: railsIcon, href: "https://rubyonrails.org/" },
      { name: "Appwrite", icon: appwriteIcon, href: "https://appwrite.io/" },
      { name: "SQLite", icon: sqliteIcon, href: "https://sqlite.org/" },
      { name: "MariaDB", icon: mariadbIcon, invertDark: true, href: "https://mariadb.org/" },
    ],
  },
  {
    category: t.skills.categories.tools,
    items: [
      { name: "Git", lucide: GitBranch, href: "https://git-scm.com/" },
      { name: "GitHub", icon: githubIcon, invertDark: true, href: "https://github.com/" },
      { name: "Docker", icon: dockerIcon, href: "https://www.docker.com/" },
      { name: "Vercel", icon: vercelIcon, invertDark: true, href: "https://vercel.com/" },
      { name: "REST APIs", lucide: Terminal, href: "https://restfulapi.net/" },
      { name: "Figma", lucide: PenTool, href: "https://www.figma.com/" },
    ],
  },
  {
    category: t.skills.categories.ai,
    items: [
      { name: "Agentic Coding", lucide: Code2 },
      { name: "Prompt Refinement", lucide: Sparkles },
      { name: "Claude", icon: claudeIcon, href: "https://anthropic.com/claude" },
      { name: "Gemini", icon: geminiIcon, href: "https://deepmind.google/technologies/gemini/" },
      { name: "OpenAI API", icon: openaiIcon, invertDark: true, href: "https://openai.com/" },
      { name: "NLP Concepts", lucide: MessageSquareText },
      { name: "AI Automations", lucide: Workflow },
      { name: "CopilotKit", lucide: Bot, href: "https://www.copilotkit.ai/" },
    ],
  },
  {
    category: t.skills.categories.creative,
    items: [
      { name: "Three.js", icon: threejsIcon, invertDark: true, href: "https://threejs.org/" },
      { name: "Data Visualization", lucide: Maximize },
      { name: "UI/UX Design", lucide: Paintbrush },
      { name: "Prototyping", lucide: Layers },
      { name: "Responsive Design", lucide: Smartphone },
      { name: "Motion Design", lucide: MonitorPlay },
    ],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const skills = getSkills(t);

  return (
    <section id="skills" className="w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[95%] max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">{t.skills.title}</h2>
        
        <div className="columns-1 md:columns-2 gap-x-12">
          {skills.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid mb-16 flex flex-col space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground/80 border-b border-border/50 pb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-5">
                {group.items.map((skill) => {
                  const content = (
                    <>
                      <div className="w-8 h-8 flex items-center justify-center transition-all duration-300">
                        {skill.icon ? (
                          <div 
                            className="w-full h-full bg-foreground group-hover:bg-electric-blue transition-colors duration-300"
                            style={{
                              WebkitMaskImage: `url(${skill.icon.src})`,
                              maskImage: `url(${skill.icon.src})`,
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                            }}
                          />
                        ) : skill.lucide ? (
                          <skill.lucide size={24} className="text-foreground group-hover:text-electric-blue transition-colors duration-300" />
                        ) : null}
                      </div>
                      <span>{skill.name}</span>
                    </>
                  );
                  
                  const baseClasses = "flex items-center space-x-3 px-6 py-4 rounded-full text-base font-medium border border-border/50 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md hover:border-electric-blue/50 hover:shadow-[0_4px_20px_rgba(0,85,255,0.15)] hover:-translate-y-1 transition-all duration-300 group";

                  return skill.href ? (
                    <a
                      key={skill.name}
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClasses}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={skill.name}
                      className={`${baseClasses} cursor-default`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
