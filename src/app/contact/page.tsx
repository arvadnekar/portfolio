import Contact from "@/components/Home/contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:'Projects'
};

export default async function ContactPage(){
    return (
        <Contact />
    )
}