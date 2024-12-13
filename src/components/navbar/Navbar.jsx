'use client';

import { FaHome, FaTools, FaPhone, FaGamepad } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the current path matches the href
  const isActive = (path) => pathname === path;

  return (
    <div className="w-1/7 text-center p-3 rounded-xl bg-slate-700">
      <ul className="flex flex-row gap-5 justify-center">
        <Link href="/">
          <li
            className={`bg-slate-700 p-4 inline-flex justify-center cursor-pointer rounded-lg ${isActive('/') ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
          >
            <FaHome className="text-white w-10 h-10" />
          </li>
        </Link>
        <Link href="/activity">
          <li
            className={`bg-slate-700 p-4 inline-flex justify-center cursor-pointer rounded-lg ${isActive('/activity') ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
          >
            <FaTools className="text-white w-10 h-10" />
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`bg-slate-700 p-4 inline-flex justify-center cursor-pointer rounded-lg ${isActive('/contact') ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
          >
            <FaPhone className="text-white w-10 h-10" />
          </li>
        </Link>
        <Link href="/games">
          <li
            className={`bg-slate-700 p-4 inline-flex justify-center cursor-pointer rounded-lg ${isActive('/games') ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
          >
            <FaGamepad className="text-white w-10 h-10" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
