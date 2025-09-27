import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const updateDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>A. Cuadra Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-white px-10 font-poppins md:px-20 dark:bg-darkcolor">
        <div className=" 2xl:container 2xl:mx-auto">
          <Navbar darkMode={darkMode} updateDarkMode={updateDarkMode} />
          <HeroSection />
          <SkillsSection darkMode={darkMode} />
          <ProjectsSection />
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
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
