import Link from "next/link";
import { Mail } from "lucide-react";
import { Instagram, Twitter, Github } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="w-full py-8 mt-20 border-t border-border/40 relative z-10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl tracking-tight">Jan Eberwein</h3>
          <p className="text-sm text-foreground/60 mt-1 text-center md:text-left">
            Interactive Media &middot; Web Development &middot; Creative Technology
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a href="#" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="mailto:jan@janeberwein.at" className="text-foreground/60 hover:text-electric-blue transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col items-center md:items-end text-sm text-foreground/50 space-y-2">
          <div className="flex space-x-4">
            <Link href="/imprint" className="hover:text-foreground transition-colors">
              Imprint
            </Link>
            {/* <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link> */}
          </div>
          <p>&copy; {currentYear} Jan Eberwein. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
