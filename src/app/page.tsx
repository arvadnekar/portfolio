import { AboutSection } from "@/components/Home/about";
import Contact from "@/components/Home/contact";
import { HeroSection } from "@/components/Home/hero";
import { ProjectSection } from "@/components/Home/project";
import { SkillsSection } from "@/components/Home/skills";


export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <SkillsSection />
    <Contact />
    </>
  );
}