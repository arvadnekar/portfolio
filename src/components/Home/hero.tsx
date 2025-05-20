'use client';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Make sure to import this
import profilePic from '@/public/profile1.jpeg';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        {/* Left: Text content */}
        <div className="text-center md:text-left flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-primary">Hello, I&apos;m</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">
                Akanksha
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Full Stack Developer with a passion for creating beautiful user
              experiences
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Hi, I&apos;m Akanksha Vadnekar — a passionate Web Developer and
              Educator with over 7 years of diverse professional experience
              spanning full-stack web development, CMS customization, teaching,
              and AI-integrated solutions. I specialize in building dynamic
              digital experiences using modern web technologies, custom
              WordPress themes and plugins, and privacy-focused AI tools. With a
              strong foundation in both frontend design and backend
              architecture, I approach every project with a balance of
              creativity and technical precision. I hold a Master’s degree in
              Computer Engineering from Memorial University of Newfoundland,
              Canada. Outside of work, I enjoy photography, painting, traveling,
              and staying curious about emerging technologies.
            </p>
          </motion.div>
          {/*
          <div>
            <div className="flex flex-col gap-y-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>
                      Over 7 years of combined professional experience.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>
                      Master&apos;s in Computer Engineering at Memorial
                      University of Newfoundland, Canada.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Interests</CardTitle>
                    <CardDescription>
                      When I&apos;m not coding, I enjoy photography,
                      painting,Traveling and exploring new technologies.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 mt-8 justify-center md:justify-start"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href="https://github.com/arvadnekar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/akanksha-vadnekar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link href="mailto:akankshavadnerkar00@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 w-full justify-center items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grow w-full p-16"
        >
          <div className=" aspect-square relative rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover scale-150 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
