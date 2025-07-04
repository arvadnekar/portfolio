import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Cal from '../general/Cal';
import TableOfContents from './TabelofContent';
import { experiences } from '@/data/work';

// type WorkExperienceProps = {
//   experience: {
//     company: string;
//     role: string;
//     timeframe: string;
//     achievements: string[];
//     images: { src: string; alt: string; width: number; height: number }[];
//   };
// };

export default function About() {
  const structure = [
    { title: 'Introduction', display: true, items: [] },
    { title: 'Work Experience', display: true, items: [] },
    { title: 'Education', display: true, items: [] },
  ];

  const about = {
    tableOfContent: {
      display: true,
      subItems: false,
    },
  };

  return (
    <>
      <TableOfContents structure={structure} about={about} />
      <main className="max-w-4xl mx-auto p-6">
        <section className="text-center" id="Inroduction">
          <div className="w-full flex justify-center items-center">
            <Avatar className="h-48 w-48">
              <AvatarImage src="https://avatars.githubusercontent.com/u/171069529" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold">Akanksha Vadnerkar</h1>
          <div className="w-full mb-4 mx-auto flex items-center justify-center">
            <Cal className="mx-auto w-fit rounded-full border-primary text-lg md:mx-0 md:w-auto md:max-w-fit mt-4" />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <span className="text-lg">
              Full Stack Developer | Web Developer
            </span>
            <span className="text-base text-muted-foreground">
              St. John&apos;s, Newfoundland and Labrador, Canada
            </span>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://github.com/arvadnekar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akanksha-vadnekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:akankshavadnerkar00@gmail.com"
              className="hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-4 text-balance text-start">
            A passionate Web Developer and Educator with over 7 years of diverse
            professional experience spanning full-stack web development, CMS
            customization, teaching, and AI-integrated solutions. I specialize
            in building dynamic digital experiences using modern web
            technologies, custom WordPress themes and plugins, and
            privacy-focused AI tools. With a strong foundation in both frontend
            design and backend architecture, I approach every project with a
            balance of creativity and technical precision. I hold a Master’s
            degree in Computer Engineering from Memorial University of
            Newfoundland, Canada. Outside of work, I enjoy photography,
            painting, traveling, and staying curious about emerging
            technologies.
          </p>
        </section>

        <section id="Work Experience">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="mt-2">
            {experiences.map(exp => (
              <div key={exp.id}>
                <CardTitle>
                  <h3 className="text-xl font-semibold mt-2">{exp.company}</h3>
                </CardTitle>
                <Card className="p-0 bg-transparent shadow-none border-none my-2">
                  <CardHeader className="flex flex-row justify-between p-0">
                    <div className="flex flex-col">
                      <span className="text-lg italic text-primary">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-lg italic">{exp.timeframe}</span>
                  </CardHeader>
                </Card>
                <CardContent>
                  <ul className="list-disc list-inside text-lg">
                    {exp.achievements.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
                <hr className="my-4 border-muted" />
              </div>
            ))}
            {/* <CardContent>
              <ul className="mt-3 space-y-2 text-foreground">
                {exp.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="relative pl-6 text-base before:absolute before:left-0 before:text-primary before:content-['•']"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent> */}
          </div>
        </section>

        <section className="mt-6" id="Education">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="mt-2">
            <CardTitle>
              <h3 className="text-xl font-semibold mt-2">
                Memorial University of Newfoundland
              </h3>
            </CardTitle>
            <Card className="p-0 bg-transparent shadow-none border-none my-2">
              <CardHeader className="flex flex-row justify-between p-0">
                <div className="flex flex-col">
                  <span className="text-base font-semibold italic">
                    Master of Applied Science in Computer Engineering{' '}
                  </span>
                  <span className="text-base font-semibold">
                    Sep 2023 – May 2025
                  </span>
                </div>
                <span className="text-base font-semibold italic">
                  CPA: 3.27/4.00
                </span>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-4">
            <CardTitle>
              <h3 className="text-xl font-semibold mt-2">Parul University </h3>
            </CardTitle>
            <Card className="p-0 bg-transparent shadow-none border-none my-2">
              <CardHeader className="flex flex-row justify-between p-0">
                <div className="flex flex-col">
                  <span className="text-base font-semibold italic">
                    B.E in Computer Engineering{' '}
                  </span>
                  <span className="text-base font-semibold italic">
                    July 2014 – May 2017
                  </span>
                </div>

                <span className="text-base font-semibold italic">
                  CPA: 7.50/9.00
                </span>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
