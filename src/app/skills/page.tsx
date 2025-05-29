import { Skills } from "@/components/Home/skills";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:'Projects'
};
export default async function skills(){
    return (
        <Skills />
    )
}