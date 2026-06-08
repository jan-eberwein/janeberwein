import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisualSection } from "@/components/sections/VisualSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MotivationSection } from "@/components/sections/MotivationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisualSection />
      <SkillsSection />
      <ProjectsSection />
      <MotivationSection />
      <ContactSection />
    </>
  );
}
