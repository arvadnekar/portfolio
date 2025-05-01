import { AboutSection } from "@/components/Home/about";
import Contact from "@/components/Home/contact";
import { HeroSection } from "@/components/Home/hero";
import { Projects } from "@/components/Home/projects";
import { SkillsSection } from "@/components/Home/skills";


export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <Projects featuredOnly />
    <SkillsSection />
    <Contact />
    </>
  );
}