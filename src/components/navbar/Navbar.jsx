import { FaHome, FaTools, FaPhone, FaGamepad } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="w-1/7 text-center p-3 rounded-xl bg-slate-700">
          <ul className="flex flex-row gap-5 justify-center">
            <li className="bg-slate-700 p-4 inline-flex justify-center cursor-pointer hover:bg-slate-500  rounded-lg">
                <FaHome className="text-white w-10 h-10" />
            </li>
            <li className="bg-slate-700 p-4 inline-flex justify-center cursor-pointer hover:bg-slate-500 rounded-lg">
                <FaTools className="text-white w-10 h-10" />
            </li>
            <li className="bg-slate-700 p-4 inline-flex justify-center cursor-pointer hover:bg-slate-500 rounded-lg">
                <FaPhone className="text-white w-10 h-10" />
            </li>
            <li className="bg-slate-700 p-4 inline-flex justify-center cursor-pointer hover:bg-slate-500 rounded-lg">
                <FaGamepad className="text-white w-10 h-10" />
            </li>
          </ul>
        </div>
    );
};

export default Navbar;
