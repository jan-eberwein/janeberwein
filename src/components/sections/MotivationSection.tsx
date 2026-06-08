"use client";

import { motion } from "framer-motion";

export function MotivationSection() {
  return (
    <section className="w-full py-32 flex justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-2xl md:text-3xl font-medium leading-tight md:leading-normal text-foreground/80 tracking-tight">
          &ldquo;I like building digital products that feel simple on the surface, but are thoughtfully designed underneath. My focus is on combining clean interfaces, technical reliability, and small details that make a product feel good to use.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
