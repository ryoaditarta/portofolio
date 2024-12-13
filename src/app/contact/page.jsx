'use client';

import { Lato } from "next/font/google";
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from 'react-icons/fa'; 
import Link from 'next/link'; 

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative z-0 flex flex-col px-10 py-20 w-5/6 bg-opacity-70 h-full bg-black items-center">
        {/* Contacts */}
        <h1 className={`${lato.className} sm:text-4xl text-xl font-bold text-white text-center sm:my-10 mt-5`}>Contacts:</h1>
        <div className="flex gap-6 p-10">
          <Link href="https://www.linkedin.com/in/ryoaditarta" target="_blank">
            <FaLinkedin className="text-white size-10 sm:size-20 hover:text-blue-500" />
          </Link>
          <Link href="https://github.com/ryoaditarta" target="_blank">
            <FaGithub className="text-white size-10 sm:size-20 hover:text-gray-500" />
          </Link>
          <Link href="https://www.instagram.com/ryoaditarta" target="_blank">
            <FaInstagram className="text-white size-10 sm:size-20 hover:text-pink-500" />
          </Link>
          <Link href="https://codeforces.com/profile/BCC_R" target="_blank">
            <FaCode className="text-white size-10 sm:size-20 hover:text-blue-700" />
          </Link>
        </div>

        <h1 className={`${lato.className} sm:text-4xl text-xl font-bold text-white text-center sm:my-10 mt-5 mb-3`}>Curriculum Vitae:</h1>
        <div className="flex justify-center">
          <a
            href="/cvryo.pdf" 
            target="_blank"
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded hover:bg-blue-500"
          >
            Download CV
          </a>
        </div>
        <h1 className={`${lato.className} sm:text-4xl text-xl font-bold text-white text-center sm:my-10 mt-5 mb-3`}>Tech Stacks: </h1>
        <div className="sm:w-3/4 sm:h-auto h-2/5 flex flex-wrap justify-center overflow-x-auto gap-6 py-4 px-2 scrollbar-hide">
          <img src="https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
          <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
          <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
          <img src="https://img.shields.io/badge/JavaScript-007ACC?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript" />
          <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
          <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="bash"/>
          <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="React Badge"/>
          <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react_native"/>
          <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="laravel"/>
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind"/>
          <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="vue"/>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap"/>
        </div>
      </div>
    </div>
  );
};

export default Page;
