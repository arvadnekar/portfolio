import { Projects } from "@/components/Home/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Projects'
};

export default async function ProjectPage(){
    return (
        <Projects />
    )
}