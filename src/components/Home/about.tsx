'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import profilePic from './../../../public/profile1.jpeg'
export function AboutSection() {
  return (
    <section id="#about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src={profilePic}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer with a passion for creating beautiful user
              experiences
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate developer with over 1 years of experience
              building web applications. I specialize in JavaScript, React,
              Node.js, and modern web technologies. My approach combines
              technical expertise with an eye for design to create solutions
              that are both functional and visually appealing.
            </p>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      5+ years of professional development experience working
                      with startups and established companies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Bachelor&apos;s degree in Computer Science from University
                      of Technology.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Interests</h4>
                    <p className="text-sm text-muted-foreground">
                      When I&apos;m not coding, I enjoy photography, hiking, and
                      exploring new technologies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
