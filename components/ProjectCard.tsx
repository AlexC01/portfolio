// in components/ProjectCard.tsx
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { TbWorld } from 'react-icons/tb';

export interface Project {
  image: StaticImageData | string;
  tags: string[];
  title: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-colorlight border border-babyblue rounded-lg shadow-sm flex flex-col overflow-hidden dark:bg-darkerblue dark:border-darkerblue/50">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={338}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <div
              key={tag}
              className="px-3 py-1 text-xs font-semibold bg-babyblue/50 text-darkerblue rounded-full dark:bg-babyblue/10 dark:text-babyblue"
            >
              {tag}
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-darkerblue dark:text-colorlight">
          {project.title}
        </h3>
        <p className="text-darkcolor dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-auto pt-6 flex items-center gap-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-colorlight bg-darkerblue rounded-md hover:bg-darkcolor dark:bg-babyblue dark:text-darkcolor dark:hover:bg-opacity-80 transition-colors"
          >
            View Live <TbWorld className="h-4 w-4 ml-2" />
          </Link>
          <Link
            href={project.codeUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-darkerblue bg-transparent border border-darkerblue/20 rounded-md hover:bg-darkerblue/5 dark:text-babyblue dark:border-babyblue/30 dark:hover:bg-babyblue/10 transition-colors"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}
