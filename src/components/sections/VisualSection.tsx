"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import workspaceImg from "@/../CONTENTS/images/workspace.webp";
import serverImg from "@/../CONTENTS/images/server.webp";
import liquidImg from "@/../CONTENTS/images/liquid.webp";

const images = [
  {
    src: workspaceImg,
    alt: "Modern workspace with laptop",
    className: "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-96",
  },
  {
    src: serverImg,
    alt: "Cyber technology server",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: liquidImg,
    alt: "Abstract liquid rendering",
    className: "col-span-1 row-span-1 aspect-square",
  },
];

export function VisualSection() {
  return (
    <section className="w-full py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[95%] max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-3xl liquid-glass ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
