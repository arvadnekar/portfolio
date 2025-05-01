'use client';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="#home"
      className="min-h-sceen felx flex-col justify-center pt-16 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl max-auto text-center md:text-left">
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
              Full Stack Developer & UI/UX Developer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Let&apos;s bring your ideas to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
    </section>
  );
}
