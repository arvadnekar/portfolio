'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import profilePic from '@/public/profile1.jpeg';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function NewAbout() {
  return (
    <section id="about" className="py-20 bg-muted/30">
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

        {/* info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grow size-full"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Full Stack Developer with a passion for creating beautiful user
              experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-balance">
            Hi, I&apos;m Akanksha Vadnekar, a versatile Web Developer and Educator with over 7 years of combined professional experience across web development, CMS customization, teaching, and AI-integrated solutions. My expertise spans full-stack development, WordPress (custom themes & plugins), and privacy-focused AI tools. I bring a unique blend of frontend creativity and backend engineering to every project I work on.
            </p>
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
                        Master&apos;s in Computer Engineering at Memorial University
                        of Newfoundland, Canada.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
