import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import hero from '../public/hero.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>A. Cuadra Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 font-poppins">
        <section className="">
          <nav className="py-8 mb-12 flex justify-between">
            <div>
              <Image src="/banner.png" alt="Logo" width={158} height={39} />
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-darkcolor text-babyblue font-semibold px-4 py-2 border-none rounded-md ml-8 uppercase "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-darkerblue">Antonio Cuadra</h2>
            <h3 className="text-xl py-2">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Developer with a proven track record of delivering high-quality,
              scalable and reliable web applications with a wide range of
              technologies.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillGitlab />
          </div>
          <div className="relative flex justify-center mt-14">
            <Image src="/hero.svg" width={350} height={350} alt="Hero Navbar" />
          </div>
        </section>
        <section className="">
          <div>
            <h3 className="text-3xl mt-20">Skills</h3>
          </div>
          <div>
            <div className="text-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src="/frontend.svg"
                  width={120}
                  height={120}
                  alt="Frontend"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Frontend</h3>
              <p className="py-2">
                I always strive to stay up-to-date with the latest technologies
                to ensure that my work is both cutting-edge and user-friendly.
              </p>
              <h4 className="py-4 text-darkerblue">Technologies</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Gatsby</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>{' '}
            <div className="text-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src="/backend.svg"
                  width={120}
                  height={120}
                  alt="Frontend"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Backend</h3>
              <p className="py-2">
                Experience in creating robust and scalable systems to support
                the functionality of a website or application.
              </p>
              <h4 className="py-4 text-darkerblue">Technologies</h4>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Django</p>
              <p className="text-gray-800 py-1">Express</p>
            </div>
            <div className="text-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src="/database.svg"
                  width={120}
                  height={120}
                  alt="Frontend"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Database</h3>
              <p className="py-2">
                Strong background in managing and working with databases, able
                to implement efficient and effective database solutions.
              </p>
              <h4 className="py-4 text-darkerblue">Technologies</h4>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
