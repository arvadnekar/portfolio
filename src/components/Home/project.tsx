'use client';
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {  ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
const projects = [
    {
        id: 2,
        title: "Portfolio",
        description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark,light,system mode, and seamless animations.",
        image: "",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "TypeScript", "ShadCN"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    {
      id: 1,
      title: "Facial Recognition Obfuscation Tool",
      description: "A FastAPI-based server for secure video processing, including automated face blurring, hand landmark detection, and private video uploads. Uses OpenCV, YOLO, and AI-based detection to ensure privacy and security.",
      image: "",
      tags: ["FastAPI", "ML", "OpenCV", "YOLO", "Python", "Docker", "Hand Tracking"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/arvadnekar/face-logo-blur",
    },
    {
        id: 2,
        title: "Expense-Tracker-Mun",
        description: "A smart financial management application to track income, expenses, and spending habits with real-time insights and categorized analysis.",
        image: "",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "TypeScript","PostgreSQL", "Prisma", "ShadCN", "NextAuth"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ];
export function ProjectSection() {
  return (
    <section id="#project" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each project reflects my skills and passion for creating exceptional digital experiences.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}