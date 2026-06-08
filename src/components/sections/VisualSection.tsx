"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    alt: "Modern workspace with laptop",
    className: "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-96",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    alt: "Cyber technology server",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
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
        className="w-full max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-3xl liquid-glass ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
