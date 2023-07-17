import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import web1 from '/public/projects/web1.webp';
import web2 from '/public/projects/web2.webp';
import web3 from '/public/projects/web3.webp';
import hero from '/public/hero.svg';
import frontend from '/public/frontend.svg';
import frontend2 from '/public/frontend2.svg';
import backend from '/public/backend.svg';
import backend2 from '/public/backend2.svg';
import database from '/public/database.svg';
import database2 from '/public/database2.svg';
import Link from 'next/link';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

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

const projects = [
  {
    id: 0,
    image: web1,
    title: 'Movies web',
  },
  {
    id: 1,
    image: web2,
    title: 'Marvel API page',
  },
  {
    id: 2,
    image: web3,
    title: 'Todo list',
  },
  {
    id: 3,
    image: web1,
    title: 'Web 1',
  },
];

const skills = [
  {
    id: 0,
    image: frontend,
    image_light: frontend2,
    title: 'Frontend',
    description: `I always strive to stay up-to-date with the latest technologies
to ensure that my work is both cutting-edge and user-friendly.`,
    technologies: ['React', 'Gatsby', 'NextJS', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 1,
    image: backend,
    image_light: backend2,
    title: 'Backend',
    description: `Experience in creating robust and scalable systems to support the functionality of a website or application.`,
    technologies: ['Node', 'Python', 'Django', 'Express'],
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
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>A. Cuadra Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 font-poppins md:px-20 dark:bg-darkcolor">
        <div className=" 2xl:container 2xl:mx-auto">
          <nav className="py-8 mb-12 flex justify-between">
            <div>
              {darkMode && (
                <Image src="/banner.png" alt="Logo" width={158} height={39} />
              )}
              {!darkMode && (
                <Image src="/banner2.png" alt="Logo" width={158} height={39} />
              )}
            </div>
            <ul className="flex items-center ml-2 md:ml-0">
              <li>
                {darkMode && (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-babyblue icon-hover"
                  />
                )}
                {!darkMode && (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-darkcolor icon-hover"
                  />
                )}
              </li>
              <li className="icon-hover">
                <a
                  className="bg-darkcolor  text-babyblue font-semibold text-sm px-2 py-1 md:text-base  md:px-4 md:py-2 border-none rounded-md ml-2 md:ml-8 uppercase dark:bg-babyblue dark:text-darkcolor"
                  href="/Resume-AntonioC.pdf"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <motion.div initial="hidden" whileInView="show" variants={container}>
            <div className="text-center p-3 md:p-10">
              <h2 className="text-4xl py-2 text-darkerblue md:text-5xl dark:text-babyblue">
                Antonio Cuadra
              </h2>
              <h3 className="text-xl py-2 md:text-2xl dark:text-colorlight">
                Full Stack Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-gray-200">
                Developer with a proven track record of delivering high-quality,
                scalable and reliable web applications with a wide range of
                technologies.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-200">
              <Link
                href="https://www.linkedin.com/in/antonio-cuadra/"
                target="_blank"
              >
                <AiFillLinkedin
                  href="https://www.linkedin.com/in/antonio-cuadra/"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://github.com/AlexC01" target="_blank">
                <AiFillGithub className="cursor-pointer" />
              </Link>
              <Link href="https://gitlab.com/acuadraq" target="_blank">
                <AiFillGitlab className="cursor-pointer" />
              </Link>
            </div>
            <div className="mx-auto relative flex justify-center mt-14 overflow-hidden">
              <Image src={hero} alt="Hero Navbar" width={750} height={550} />
            </div>
          </motion.div>
          <section className="">
            <div>
              <h3 className="text-3xl mt-20 dark:text-colorlight font-semibold tracking-wider uppercase">
                Skills
              </h3>
              <p className="text-md lg:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                As a full stack developer, I have a diverse set of skills that
                allow me to{' '}
                <span className="text-darkerblue dark:text-babyblue">
                  design
                </span>
                ,{' '}
                <span className="text-darkerblue dark:text-babyblue">
                  develop
                </span>
                , and
                <span className="text-darkerblue dark:text-babyblue">
                  {' '}
                  deploy
                </span>{' '}
                web applications from start to finish.
              </p>
              <p className="text-md lg:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                I am always eager to learn new technologies and stay up-to-date
                with the latest industry trends to improve my skillset and
                deliver the best solutions.
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
                        {darkMode && (
                          <Image src={item.image} alt={item.title} />
                        )}{' '}
                        {!darkMode && (
                          <Image src={item.image_light} alt={item.title} />
                        )}
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
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-colorlight font-semibold tracking-wider uppercase">
                Projects
              </h3>
              <p className="text-md lg:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                Each project showcases my ability to design and develop
                responsive user interfaces, work with databases and implement
                efficient back-end logic.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              {projects.map(project => (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={container}
                  key={project.id}
                  className="basis-1/3 flex-1"
                >
                  <motion.div variants={cardVariants}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      priority
                      className="rounded-lg object-cover shadow-lg projects"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
          <footer className="py-8 flex justify-between border-t-2 border-t-gray-300 dark:border-t-gray-700">
            <div>
              {darkMode && (
                <Image src="/banner.png" alt="Logo" width={158} height={39} />
              )}
              {!darkMode && (
                <Image src="/banner2.png" alt="Logo" width={158} height={39} />
              )}
            </div>

            <div className="text-2xl flex justify-center ml-1 md:ml-0 gap-2 md:gap-3 py-2 text-gray-600 dark:text-gray-200">
              <Link
                href="https://www.linkedin.com/in/antonio-cuadra/"
                className="icon-hover"
                target="_blank"
              >
                <AiFillLinkedin
                  href="https://www.linkedin.com/in/antonio-cuadra/"
                  className="cursor-pointer"
                />
              </Link>
              <Link
                href="https://github.com/AlexC01"
                target="_blank"
                className="icon-hover"
              >
                <AiFillGithub className="cursor-pointer" />
              </Link>
              <Link
                href="https://gitlab.com/acuadraq"
                target="_blank"
                className="icon-hover"
              >
                <AiFillGitlab className="cursor-pointer" />
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
