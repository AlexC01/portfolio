import React from 'react';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

interface NavbarProps {
  darkMode: boolean;
  updateDarkMode: () => void;
}

const Navbar = ({ darkMode, updateDarkMode }: NavbarProps) => {
  return (
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
              onClick={() => updateDarkMode()}
              className="cursor-pointer text-2xl text-babyblue icon-hover"
            />
          )}
          {!darkMode && (
            <BsFillMoonStarsFill
              onClick={() => updateDarkMode()}
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
  );
};

export default Navbar;
