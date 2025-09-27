import React from 'react';

import threadly from '/public/projects/threadly.gif';
import coffeeCo from '/public/projects/coffee-co.gif';
import { Project, ProjectCard } from './ProjectCard';

const projects: Project[] = [
  {
    image: threadly,
    tags: ['Full-Stack', 'Next.js', 'Supabase', 'Real-time'],
    title: 'Threadly: A Real-time Social Platform',
    description:
      "A full-stack social discussion board featuring real-time messaging, a complete user authentication system secured by PostgreSQL's Row Level Security, and high-performance full-text search.",
    liveUrl: 'https://threadly-beta.vercel.app/',
    codeUrl: 'https://github.com/AlexC01/threadly',
  },
  {
    image: coffeeCo,
    tags: ['E-commerce', 'Next.js', 'Firebase', 'Stripe'],
    title: 'Coffee Co: A Full-Stack E-commerce Site',
    description:
      'A personal e-commerce platform demonstrating a complete, end-to-end flow, from product display and cart management to secure payment processing with Stripe.',
    liveUrl: 'https://coffee-co-blue.vercel.app/',
    codeUrl: 'https://github.com/AlexC01/coffee-co',
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-colorlight font-semibold tracking-wider uppercase">
          Projects
        </h3>
        <p className="text-md lg:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 mb-4">
          Each project showcases my ability to design and develop responsive
          user interfaces, work with databases, and implement efficient back-end
          logic.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
