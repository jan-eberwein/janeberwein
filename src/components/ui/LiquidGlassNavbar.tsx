"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export function LiquidGlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <nav className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-foreground/5 dark:bg-white/10 flex items-center justify-center border border-black/5 dark:border-white/5 group-hover:border-electric-blue/50 transition-colors">
            <span className="font-bold text-lg tracking-tighter">JE</span>
          </div>
          <span className="font-medium hidden sm:block tracking-tight text-foreground/90 group-hover:text-electric-blue transition-colors">
            Jan Eberwein
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-electric-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-electric-blue hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-electric-blue transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 liquid-glass rounded-3xl p-6 md:hidden flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-electric-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
