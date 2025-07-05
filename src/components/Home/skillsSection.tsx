'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  BookOpen,
  Cloud,
  Code,
  Database,
  Figma,
  GitBranch,
  ImageIcon,
  Layout,
  Lightbulb,
  MessageCircle,
  Server,
  Shuffle,
  Terminal,
  UploadCloud,
  User,
  Users,
  Wrench,
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const frontendSkills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Material UI', level: 70 },
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Fastify', level: 65 },
  { name: 'REST API', level: 90 },
];

const tools = [
  { name: 'Git & GitHub', icon: <GitBranch className="h-8 w-8" /> },
  { name: 'VS Code', icon: <Code className="h-8 w-8" /> },
  { name: 'Figma', icon: <Figma className="h-8 w-8" /> },
  { name: 'Terminal', icon: <Terminal className="h-8 w-8" /> },
  { name: 'Docker', icon: <Database className="h-8 w-8" /> },
  { name: 'CI/CD', icon: <Wrench className="h-8 w-8" /> },
  { name: 'Responsive Design', icon: <Layout className="h-8 w-8" /> },
  { name: 'AWS', icon: <Cloud className="h-8 w-8" /> },
  { name: 'Vercel', icon: <UploadCloud className="h-8 w-8" /> },
  { name: 'OpenCV', icon: <ImageIcon className="h-8 w-8" /> },
];

const OtherSkills = {
  cms: [
    {
      name: 'WordPress',
      description: 'Custom Themes & Plugins',
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      name: 'WooCommerce',
      description: 'E-commerce Solutions',
      icon: <Database className="h-8 w-8" />,
    },
    {
      name: 'Elementor',
      description: 'Page Builder Expert',
      icon: <Layout className="h-8 w-8" />,
    },
  ],
  softSkills: [
    {
      name: 'Product Thinking',
      description:
        'Ability to understand user needs and design product-focused solutions.',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      name: 'Adaptability',
      description:
        'Quickly adjusts to new challenges and changing environments.',
      icon: <Shuffle className="h-6 w-6" />,
    },
    {
      name: 'Communication',
      description:
        'Clear, effective communicator across written and verbal mediums.',
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      name: 'Team Collaboration',
      description: 'Works effectively within cross-functional teams.',
      icon: <Users className="h-6 w-6" />,
    },
  ],
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s a comprehensive overview of my technical skills and the
            tools I worked with.
          </p>
        </motion.div>

        <Tabs defaultValue="techincal-skills" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="techincal-skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
            <TabsTrigger value="other-skills">Other Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="techincal-skills">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Layout className="mr-2 h-5 w-5" /> Frontend Development
                </h3>
                <div className="space-y-6">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Server className="mr-2 h-5 w-5" /> Backend Development
                </h3>
                <div className="space-y-6">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      <div className="mb-3 text-primary">{tool.icon}</div>
                      <h4 className="font-medium">{tool.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other-skills">
            <div className="space-y-8">
              {/* CMS Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> CMS Skills
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {OtherSkills.cms.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow bg-gradient-to-br">
                        <CardContent className="p-6">
                          <div className="flex flex-col h-full">
                            <div className="mb-4 text-primary">
                              {skill.icon}
                            </div>
                            <h4 className="text-lg font-semibold mb-2">
                              {skill.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {skill.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <User className="mr-2 h-5 w-5" /> Soft Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {OtherSkills.softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow bg-gradient-to-br">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-primary shrink-0 mt-1">
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-1">
                              {skill.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
