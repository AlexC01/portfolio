import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import Image from 'next/image';
import hero from '/public/hero.svg';

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

const HeroSection = () => {
  return (
    <motion.div initial="hidden" whileInView="show" variants={container}>
      <div className="text-center p-3 md:p-10">
        <h2 className="text-4xl py-2 text-darkerblue md:text-5xl dark:text-babyblue">
          Antonio Cuadra
        </h2>
        <h3 className="text-xl py-2 md:text-2xl dark:text-colorlight">
          Software Engineer
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
      </div>
      <div className="mx-auto relative flex justify-center mt-14 overflow-hidden">
        <Image src={hero} alt="Hero Navbar" width={750} height={550} />
      </div>
    </motion.div>
  );
};

export default HeroSection;
