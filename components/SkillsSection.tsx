import React from 'react';
import frontend from '/public/frontend.svg';
import frontend2 from '/public/frontend2.svg';
import backend from '/public/backend.svg';
import backend2 from '/public/backend2.svg';
import database from '/public/database.svg';
import database2 from '/public/database2.svg';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  {
    id: 0,
    image: frontend,
    image_light: frontend2,
    title: 'Frontend (Web & Mobile)',
    description: `I build fast, accessible, and responsive user interfaces for both the web and mobile, with a strong focus on the modern React ecosystem.`,
    technologies: [
      'Next.js',
      'React Native',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },
  {
    id: 1,
    image: backend,
    image_light: backend2,
    title: 'Backend',
    description: `I design and implement secure server-side logic, from traditional RESTful APIs to integrated platforms like Supabase.`,
    technologies: ['Node.js', 'Express', 'Supabase', 'Python', 'Django'],
  },
  {
    id: 2,
    image: database,
    image_light: database2,
    title: 'Database',
    description: `Strong background in managing and working with databases, able to implement efficient and effective database solutions.`,
    technologies: ['MongoDB', 'Firebase', 'PostgreSQL'],
  },
];

const SkillsSection = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section>
      <div>
        <h3 className="text-3xl mt-20 dark:text-colorlight font-semibold tracking-wider uppercase">
          Skills
        </h3>
        <p className="text-md lg:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
          I specialize in building full-stack, server-rendered web applications
          with a focus on performance, real-time features, and great user
          experiences.
        </p>
      </div>
      <div className="lg:flex xl:container gap-10 lg:mx-auto">
        {skills.map(item => (
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            key={item.id}
            className="bg-darkcolor text-center shadow-lg p-8 rounded-xl my-10 flex-1 dark:bg-colorlight"
          >
            <motion.div variants={cardVariants}>
              <div>
                <div className="flex justify-center w-48 h-48 md:w-64 md:h-64 lg:w-52 lg:h-52 mx-auto">
                  <Image
                    src={darkMode ? item.image : item.image_light}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-babyblue text-lg font-medium pt-8 pb-2 dark:text-darkcolor dark:font-semibold">
                  {item.title}
                </h3>
                <p className="py-2 text-gray-100 dark:text-gray-800">
                  {item.description}
                </p>
                <h4 className="py-4 text-babyblue dark:text-darkerblue">
                  Technologies
                </h4>
                {item.technologies.map(tech => (
                  <p
                    key={tech}
                    className="text-gray-100 py-1 dark:text-gray-800"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
