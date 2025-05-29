import About from "@/components/Home/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'About'
};

export default async function AboutSection(){
    return (
        <About />
    )
}