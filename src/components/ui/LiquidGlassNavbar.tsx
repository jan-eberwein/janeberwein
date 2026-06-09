"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import headerLogoDark from "@/../public/images/logo-dark.png";
import headerLogoLight from "@/../public/images/logo-light.png";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/components/i18n/LanguageContext";

export function LiquidGlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.contact, href: "/#contact" },
  ];

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
      <nav className="liquid-glass rounded-2xl px-6 py-4 flex items-center justify-between w-[95%] max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center group"
        >
          <Image 
            src={headerLogoDark} 
            alt="Jan Eberwein" 
            width={320} 
            height={80} 
            className="h-12 sm:h-14 w-auto object-contain hidden dark:block opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
          <Image 
            src={headerLogoLight} 
            alt="Jan Eberwein" 
            width={320} 
            height={80} 
            className="h-12 sm:h-14 w-auto object-contain block dark:hidden opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-base font-bold text-foreground/80 hover:text-electric-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-electric-blue hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          
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
                className="text-lg font-bold text-foreground/90 hover:text-electric-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 w-full border-t border-border/50 flex justify-center space-x-6 items-center">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
