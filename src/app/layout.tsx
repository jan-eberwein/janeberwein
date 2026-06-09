import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LiquidGlassNavbar } from "@/components/ui/LiquidGlassNavbar";
import { Footer } from "@/components/sections/Footer";
import { BackgroundScene } from "@/components/3d/BackgroundScene";
import { LanguageProvider } from "@/components/i18n/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Eberwein | Portfolio",
  description: "Interactive Media Master's Student · Full-Stack Web Developer · Creative Technologist",
  openGraph: {
    title: "Jan Eberwein | Portfolio",
    description: "Interactive Media Master's Student · Full-Stack Web Developer · Creative Technologist",
    url: "https://janeberwein.at",
    siteName: "Jan Eberwein Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jan Eberwein Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative bg-background text-foreground selection:bg-electric-blue selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <div className="fixed inset-0 z-[-1]">
              <BackgroundScene />
            </div>
            <LiquidGlassNavbar />
            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 pb-16">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
