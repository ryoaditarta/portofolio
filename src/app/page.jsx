import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['Latin'],
    weight: ['400', '700'],
});

const Page = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            {/* This div takes 50% of the width and is centered */}
            <div className="relative z-0 flex justify-center items-center w-5/6 bg-opacity-70 h-full bg-black">
                <div className="flex flex-col gap-5 text-center items-center opacity-0 animate-fadeIn">
                    <img src="/fotoryo.png" className="h-[220px] w-[220px] rounded-xl" alt="ini foto ryo" />
                    <h1 className={`${lato.className} text-6xl text-white font-bold`}>Hi! I'm Ryo</h1>
                    <h4 className={`${lato.className} text-xl text-gray-200 font-semibold`}>Welcome to my website, where I share my journey as a college student.</h4>
                </div>
            </div>
        </div>
    );
};

export default Page;
