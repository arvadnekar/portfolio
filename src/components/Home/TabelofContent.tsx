'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type TableOfContentsProps = {
  structure: { title: string; display: boolean; items: string[] }[];
  about: { tableOfContent: { display: boolean; subItems: boolean } };
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionElements = structure
      .filter(section => section.display)
      .map(section => document.getElementById(section.title));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8, 1.0],
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [structure]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (id === 'Introduction') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <div className="fixed left-0 top-1/2 hidden -translate-y-1/2 space-y-4 pl-6 md:block">
      {structure.filter(section => section.display).map(section => (
        <Card
          key={section.title}
          onClick={() => scrollTo(section.title)}
          className={`cursor-pointer border-none bg-background shadow-none drop-shadow-none hover:translate-x-3 ${
            activeSection === section.title ? 'bg-muted text-foreground' : 'hover:bg-muted'
          }`}
        >
          <CardContent className="group flex items-center space-x-2 p-4">
            <div
              className={`h-[2px] w-4 ${
                activeSection === section.title ? 'bg-primary' : 'bg-foreground group-hover:bg-primary'
              }`}
            />
            <span
              className={`text-sm ${
                activeSection === section.title ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
              }`}
            >
              {section.title}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TableOfContents;
