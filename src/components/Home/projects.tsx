'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { projects } from '@/data/projects';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LinkPreview } from '../ui/linkpreview';

interface ProjectsProps {
  featuredOnly?: boolean;
}

export function Projects({ featuredOnly = false }: ProjectsProps) {
  const [filteredProjects, setFilteredProjects] = useState(
    (featuredOnly
      ? projects.filter(project => project.featured)
      : projects
    ).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
  );

  useEffect(() => {
    if (featuredOnly) {
      setFilteredProjects(projects.filter(project => project.featured));
    }

    return () => {};
  }, [featuredOnly]);

  return (
    <section id="project" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div>
            <h2 className="text-3xl text-center font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          </div>
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-start gap-y-2 max-w-md">
                <CardTitle>Featured Projects</CardTitle>
                <CardDescription className="text-start hidden md:block">
                  Here are some of my recent projects. Each project reflects my
                  skills and passion for creating exceptional digital
                  experiences.
                </CardDescription>
              </div>
              <div className="flex flex-col items-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm">
                        <LinkPreview
                          url={project.liveUrl}
                          width={300}
                          height={200}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </LinkPreview>
                      </Button>
                    )}
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
