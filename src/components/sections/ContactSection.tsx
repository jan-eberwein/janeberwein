"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageContext";
import Turnstile from "react-turnstile";
import { sendContactMessage } from "@/app/actions/contact";

export function ContactSection() {
  const { t } = useLanguage();
  const email = "jan@janeberwein.at";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{name?: string, email?: string, message?: string}>({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    // Clean Frontend Validation
    const newErrors: {name?: string, email?: string, message?: string} = {};
    if (!name || name.trim() === "") newErrors.name = "Please enter your name";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please enter a valid email address";
    if (!message || message.trim().length < 10) newErrors.message = "Message must be at least 10 characters long";
    
    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setStatus("idle");
      return;
    }

    
    try {
      const result = await sendContactMessage(null, formData);
      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        // @ts-expect-error - result.error is a string key into the form translations
        setErrorMsg(t.contact.form[result.error] || t.contact.form.errorMessage);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.contact.form.errorMessage);
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[95%] max-w-4xl mx-auto"
      >
        <LiquidGlassCard className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">{t.contact.title}</h2>
            
            {/* Mailto Button */}
            <div className="flex justify-center mb-8">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-3 px-8 py-4 rounded-full bg-foreground text-background hover:scale-105 hover:bg-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)] transition-all duration-300"
              >
                <Mail size={20} />
                <span className="font-bold">{email}</span>
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-border/50">
            {/* Form Side */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground/80 mb-2">
                      {t.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      disabled={status === "loading"}
                      placeholder={t.contact.form.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border outline-none transition-all disabled:opacity-50 ${fieldErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border/50 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue'}`}
                    />
                    {fieldErrors.name && (
                      <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle size={12} /> {fieldErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground/80 mb-2">
                      {t.contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      disabled={status === "loading"}
                      placeholder={t.contact.form.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border outline-none transition-all disabled:opacity-50 ${fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border/50 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue'}`}
                    />
                    {fieldErrors.email && (
                      <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle size={12} /> {fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground/80 mb-2">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    disabled={status === "loading"}
                    placeholder={t.contact.form.messagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-background/50 border outline-none transition-all resize-none disabled:opacity-50 ${fieldErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border/50 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue'}`}
                  />
                  {fieldErrors.message && (
                    <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle size={12} /> {fieldErrors.message}</p>
                  )}
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                <div className="flex justify-center overflow-hidden rounded-lg">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    theme="auto"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center space-x-3 text-green-500 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                    <CheckCircle2 size={24} className="shrink-0" />
                    <span className="text-sm font-bold">{t.contact.form.successMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center space-x-3 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                    <AlertCircle size={24} className="shrink-0" />
                    <span className="text-sm font-bold">{errorMsg}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:bg-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-foreground disabled:hover:text-background disabled:hover:shadow-none min-w-[200px] justify-center"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>{t.contact.form.sendingButton}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.form.sendButton}</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
}
