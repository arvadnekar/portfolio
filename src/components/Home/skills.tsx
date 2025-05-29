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
  SiMaterialdesign, SiApachekafka,
} from 'react-icons/si';

type IconTextProps = {
  icon: React.ElementType;
  text: string;
};

const IconText = ({ icon: Icon, text }: IconTextProps) => (
  <div className="flex items-center px-3 py-2 border rounded-md bg-muted hover:shadow-sm">
    <Icon className="text-xl mr-2" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const SkillGroup = ({ title, skills }: { title: string; skills: IconTextProps[] }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <IconText key={index} icon={skill.icon} text={skill.text} />
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <SkillGroup
        title="Programming Languages"
        skills={[
          { icon: SiJavascript, text: 'JavaScript' },
          { icon: SiTypescript, text: 'TypeScript' },
          { icon: SiPython, text: 'Python' },
          { icon: FaJava, text: 'Java' },
        ]}
      />
      <SkillGroup
        title="Frontend"
        skills={[
          { icon: FaReact, text: 'React' },
          { icon: SiNextdotjs, text: 'Next.js' },
          { icon: SiTailwindcss, text: 'Tailwind CSS' },
          { icon: SiBootstrap, text: 'Bootstrap' },
          { icon: SiMaterialdesign, text: 'Material UI' },
        ]}
      />
      <SkillGroup
        title="Backend"
        skills={[
          { icon: FaNodeJs, text: 'Node.js' },
          { icon: SiFastapi, text: 'FastAPI' },
          { icon: SiExpress, text: 'Express' },
          { icon: SiPostgresql, text: 'PostgreSQL' },
          { icon: SiMongodb, text: 'MongoDB' },
          { icon: SiApachekafka, text: 'Kafka' },
        ]}
      />
      <SkillGroup
        title="DevOps & Tools"
        skills={[
          { icon: FaDocker, text: 'Docker' },
          { icon: SiKubernetes, text: 'Kubernetes' },
          { icon: SiVercel, text: 'Vercel' },
          { icon: SiJenkins, text: 'Jenkins' },
          { icon: SiTravisci, text: 'Travis CI' },
          { icon: SiGithubactions, text: 'GitHub Actions' },
        ]}
      />
      <SkillGroup
        title="Cloud & Infrastructure"
        skills={[
          { icon: FaAws, text: 'AWS' },
          { icon: SiGooglecloud, text: 'Google Cloud' },
          { icon: SiTerraform, text: 'Terraform' },
        ]}
      />
      <SkillGroup
        title="Data Science & AI"
        skills={[
          { icon: SiTensorflow, text: 'TensorFlow' },
          { icon: SiPytorch, text: 'PyTorch' },
          { icon: SiNumpy, text: 'NumPy' },
          { icon: SiPandas, text: 'Pandas' },
        ]}
      />
    </section>
  );
}
