"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { Instagram, XIcon, Github, Linkedin } from "@/components/ui/Icons";
import { useLanguage } from "@/components/i18n/LanguageContext";
import Image from "next/image";
import headerLogoDark from "@/../public/images/logo-dark.png";
import headerLogoLight from "@/../public/images/logo-light.png";

export function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;
  const { t } = useLanguage();

  return (
    <footer className="w-full py-8 mt-20 border-t border-border/40 relative z-10 bg-background/50 backdrop-blur-md">
      <div className="w-[95%] max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center group mb-2">
            <Image 
              src={headerLogoDark} 
              alt="Jan Eberwein" 
              width={200} 
              height={50} 
              className="h-8 sm:h-10 w-auto object-contain hidden dark:block opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <Image 
              src={headerLogoLight} 
              alt="Jan Eberwein" 
              width={200} 
              height={50} 
              className="h-8 sm:h-10 w-auto object-contain block dark:hidden opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-sm text-foreground/60 mt-1 text-center md:text-left" dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}>
          </p>
        </div>

        {/* Scroll to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col items-center justify-center p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-foreground/60 group-hover:text-electric-blue group-hover:-translate-y-1 transition-all" />
          <span className="text-xs text-foreground/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {t.footer.backToTop}
          </span>
        </button>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-5">
            <a href="https://github.com/jan-eberwein" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://x.com/jan_eberwein" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="X">
              <XIcon size={20} />
            </a>
            <a href="https://www.instagram.com/jan.eberwein/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jan-eberwein/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jan@janeberwein.at" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-foreground/50 mt-2 text-center md:text-right">
            &copy; {currentYear} Jan Eberwein. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}
