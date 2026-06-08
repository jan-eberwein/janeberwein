"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "D3.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Appwrite", "SQLite", "MariaDB"],
  },
  {
    category: "Creative & Interactive",
    items: ["Three.js", "Data Visualization", "UI/UX Design", "Prototyping", "Responsive Design", "Motion Design"],
  },
  {
    category: "AI & Tools",
    items: ["AI-assisted workflows", "CopilotKit", "OpenAI API", "GitHub", "Vercel", "Docker basics"],
  },
];

export function SkillsSection() {
  return (
    <section className="w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Skills I bring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground/80 border-b border-border/50 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-white/10 dark:bg-black/20 backdrop-blur-md hover:border-electric-blue/50 hover:bg-electric-blue/5 hover:text-electric-blue transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
