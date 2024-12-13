import { Lato } from "next/font/google";
import Image from 'next/image';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative z-0 flex justify-center items-center w-5/6 bg-opacity-70 h-full bg-black">
        <div className="flex flex-col gap-5 text-center items-center opacity-0 animate-fadeIn">
          <Image 
            src="/fotoryo.png" 
            alt="ini foto ryo" 
            className="h-[220px] w-[220px] rounded-xl" 
            width={220} 
            height={220} 
          />
          <h1 className={`${lato.className} text-6xl text-white font-bold`}>
            Hi! I&apos;m Ryo
          </h1>
          <h4 className={`${lato.className} text-xl text-gray-200 font-semibold`}>
            Welcome to my website, where I share my journey as a college student.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Page;
