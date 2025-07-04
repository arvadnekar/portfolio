'use client';

import React from 'react';
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaJava,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiPython, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiPostgresql, SiMongodb,
  SiFastapi, SiExpress, SiKubernetes, SiVercel,
  SiJenkins, SiTravisci, SiGithubactions, SiGooglecloud,
  SiTerraform, SiTensorflow, SiPytorch, SiNumpy, SiPandas,
  SiMaterialdesign, SiApachekafka, SiGit,
} from 'react-icons/si';

type IconTextProps = {
  icon: React.ElementType;
  text: string;
  colorClass?: string;
};

const IconText = ({ icon: Icon, text, colorClass = 'text-gray-800' }: IconTextProps) => (
  <div className="flex items-center space-x-2 px-4 py-2 border rounded-full bg-card text-card-foreground hover:shadow-sm transition dark:hover:shadow-md">
    <Icon className={`text-xl ${colorClass}`} />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: IconTextProps[];
}) => (
  <div className="mb-6">
    <h3 className="text-base font-semibold text-foreground mb-3">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <IconText key={index} {...skill} />
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section className="mt-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Technical Skills</h2>

      <SkillGroup
        title="Programming Languages"
        skills={[
          { icon: SiJavascript, text: 'JavaScript', colorClass: 'text-yellow-400' },
          { icon: SiTypescript, text: 'TypeScript', colorClass: 'text-blue-600' },
          { icon: SiPython, text: 'Python', colorClass: 'text-blue-500' },
          { icon: FaJava, text: 'Java', colorClass: 'text-red-600' },
        ]}
      />
      <SkillGroup
        title="Frontend"
        skills={[
          { icon: FaReact, text: 'React', colorClass: 'text-cyan-500' },
          { icon: SiNextdotjs, text: 'Next.js', colorClass: 'text-black' },
          { icon: SiTailwindcss, text: 'Tailwind CSS', colorClass: 'text-teal-400' },
          { icon: SiBootstrap, text: 'Bootstrap', colorClass: 'text-purple-600' },
          { icon: SiMaterialdesign, text: 'Material-UI', colorClass: 'text-blue-700' },
        ]}
      />
      <SkillGroup
        title="Backend"
        skills={[
          { icon: FaNodeJs, text: 'Node.js', colorClass: 'text-green-600' },
          { icon: SiFastapi, text: 'FastAPI', colorClass: 'text-green-500' },
          { icon: SiPostgresql, text: 'PostgreSQL', colorClass: 'text-blue-700' },
          { icon: SiMongodb, text: 'MongoDB', colorClass: 'text-green-700' },
          { icon: SiExpress, text: 'Express', colorClass: 'text-gray-600' },
          { icon: SiApachekafka, text: 'Kafka', colorClass: 'text-orange-500' },
        ]}
      />
      <SkillGroup
        title="DevOps & Tools"
        skills={[
          { icon: FaDocker, text: 'Docker', colorClass: 'text-blue-500' },
          { icon: SiKubernetes, text: 'Kubernetes', colorClass: 'text-blue-600' },
          { icon: SiGit, text: 'Git', colorClass: 'text-orange-600' },
          { icon: SiVercel, text: 'Vercel', colorClass: 'text-black' },
          { icon: SiJenkins, text: 'Jenkins', colorClass: 'text-red-500' },
          { icon: SiTravisci, text: 'Travis CI', colorClass: 'text-red-600' },
          { icon: SiGithubactions, text: 'GitHub Actions', colorClass: 'text-purple-600' },
        ]}
      />
      <SkillGroup
        title="Cloud & Infrastructure"
        skills={[
          { icon: FaAws, text: 'AWS', colorClass: 'text-orange-400' },
          { icon: SiGooglecloud, text: 'Google Cloud', colorClass: 'text-blue-400' },
          { icon: SiTerraform, text: 'Terraform', colorClass: 'text-indigo-600' },
        ]}
      />
      <SkillGroup
        title="Data Science & AI"
        skills={[
          { icon: SiPython, text: 'Python', colorClass: 'text-blue-500' },
          { icon: SiTensorflow, text: 'TensorFlow', colorClass: 'text-orange-500' },
          { icon: SiPytorch, text: 'PyTorch', colorClass: 'text-red-500' },
          { icon: SiNumpy, text: 'NumPy', colorClass: 'text-blue-600' },
          { icon: SiPandas, text: 'Pandas', colorClass: 'text-purple-500' },
        ]}
      />
    </section>
  );
}
