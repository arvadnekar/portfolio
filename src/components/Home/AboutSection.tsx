'use client';
import React from 'react';
import Image from 'next/image';
import { Timeline } from '../ui/timeline';

export function TimelineDemo() {
  const data = [
    {
      title: '2023-2025',
      institution: 'Memorial University Newfoundland',
      location: `St. John's, Canada`,
      grade: 3.27,
      gradeScale: 4,
      skills: ['Next.js', 'TypeScript', 'Tailwind CSS',  'ShadCN/UI'],

      content: (
        <div>
          <p className="mb-8 text-xl font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong className="text-3xl">Memorial University</strong>
            <br />
            <div className="text-xl">Master of Applied Science in Computer Engineering</div>
            <br />
            <strong className="text-xl">GPA: 3.27</strong>
            <br />
            Developed a <strong>personal portfolio</strong> using{' '}
            <strong>
              Next.js, TypeScript, Tailwind CSS, and ShadCN/UI, featuring
              dark/light/system themes and animated UI
            </strong>
            <br />
            Created a <strong>3D Solar System</strong> visualization using{' '}
            <strong>
              Three.js and React Three Fiber, showcasing real-time planetary
              motion and interactions
            </strong>
            <br />
            Conducted research and made project on{' '}
            <strong>facial recognition obfuscation</strong> using{' '}
            <strong>YOLOv11, OpenCV, and the Wider FACE dataset</strong>
            <br />
            Built a secure <strong>
              Expense Tracker web application
            </strong> with <strong>React.js, Node.js, MongoDB, and JWT</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Obfuscation.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/expensetracker.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/Planetorbits.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/portfolio.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2022-2023',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>WordPress Developer</strong>
            <br />
            <strong>Jeenweb Technologists, Vadodara, India</strong>
            <br />
            Designed, developed, and maintained over{' '}
            <strong>
              30 WordPress-based websites, including e-commerce sites
            </strong>{' '}
            for international clients
            <br />
            Created{' '}
            <strong>
              custom themes and plugins, and integrated WooCommerce and external
              APIs
            </strong>
            <br />
            Improved website performance, security, and user experience
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/4.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2019-2021',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Internet Analyst</strong>
            <br />
            <strong>
              RevoKarmaHub Software and Services Pvt. Ltd., Vadodara, India
            </strong>
            <br />
            Analyzed and processed large datasets to improve decision-making by
            50%
            <br />
            Designed and implemented <strong>SQL/NoSQL</strong> databases for
            enhanced data accessibility
            <br />
            Developed interactive dashboards and automated reports, reducing
            reporting time by 40%
          </p>
        </div>
      ),
    },
    {
      title: '2017-2022',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Teaching Instructor</strong>
            <br />
            <strong>Engicomm Engineering, Vadodara, India</strong>
            <br />
            Taught programming and engineering subjects:{' '}
            <strong>
              C, C++, DBMS, Operating Systems, and Software Development,PHP
            </strong>
            <br />
            Mentored students on<strong> technical projects </strong>aligned
            with industry standards
            <br />
            Achieved over<strong> 90% student satisfaction </strong>and strong
            academic performance outcomes
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/5.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/6.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/7.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/8.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2014-2017',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Bachelor of Computer Science and Engineering</strong>
            <br />
            <strong>Parul University, Vadodara, India</strong>
            <br />
            <strong>GGPA: 7.75</strong>
            <br />
            Developed a <strong>Healthcare Management System</strong> using{' '}
            <strong>Android Studio, SQLite,</strong>and{' '}
            <strong>Eclipse IDE</strong>
            <br />
            Earned <strong>Android Programming certification</strong> in{' '}
            <strong>June 2016</strong>
            <br />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Obfuscation.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Obfuscation.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2011-2014',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Diploma in Computer Science and Engineering</strong>
            <br />
            <strong>Parul University, Vadodara, India</strong>
            <br />
            <strong>GGPA: 7.50</strong>
            <br />
            Built a{' '}
            <strong>
              web-based e-commerce application (Online Fashion Street)
            </strong>{' '}
            using <strong>PHP, HTML, CSS, Notepad++ </strong>and{' '}
            <strong> JavaScript </strong>
            <br />
            Used <strong>Macromedia Dreamweaver</strong> in for{' '}
            <strong>UI design</strong> and <strong>Apache + MySQL</strong> for
            backend integration
            <br />
            Gained foundational skills in{' '}
            <strong>PHP, SQL, Oracle, and front-end development</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Obfuscation.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
