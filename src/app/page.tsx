import { About } from "@/components/Home/about";
import Contact from "@/components/Home/contact";
import { HeroSection } from "@/components/Home/hero";
import { Projects } from "@/components/Home/projects";
import { SkillsSection } from "@/components/Home/skills";
import { TimelineDemo } from "@/components/Home/try";


export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <Projects featuredOnly />
    <SkillsSection />
    <Contact />
    <TimelineDemo/>
    </>
  );
}